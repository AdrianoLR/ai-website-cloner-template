// Shared helper for the per-namespace asset downloaders.
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

/**
 * Downloads `[url, relativePath]` pairs into `targetDir` (relative to the repo
 * root), four at a time. Sets a failing exit code if any download fails.
 */
export async function downloadAssets(targetDir, assets) {
  async function download([url, file]) {
    const target = path.join(root, targetDir, file);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const body = Buffer.from(await res.arrayBuffer());
      await mkdir(path.dirname(target), { recursive: true });
      await writeFile(target, body);
      console.log(`ok   ${path.relative(root, target)} (${body.length} bytes)`);
      return true;
    } catch (error) {
      console.error(`FAIL ${url}: ${error.message}`);
      return false;
    }
  }

  let failed = 0;
  for (let i = 0; i < assets.length; i += 4) {
    const results = await Promise.all(assets.slice(i, i + 4).map(download));
    failed += results.filter((ok) => !ok).length;
  }
  console.log(`${assets.length - failed}/${assets.length} assets downloaded`);
  if (failed) process.exitCode = 1;
}
