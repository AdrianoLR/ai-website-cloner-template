// Downloads the site-wide assets (fonts, favicons, loader) first found on
// https://www.patriciaamorim.com/ into the shared namespace of this clone. The
// project thumbnails the home page shows are fetched by the -shared downloader.
// Usage: node scripts/download-assets-www-patriciaamorim-com-6f0fd8c4-root-8a5edab2.mjs
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const siteRoot = path.join(root, "public/sites/www-patriciaamorim-com-6f0fd8c4");
const sharedRoot = path.join(siteRoot, "shared");

const site = "https://cdn.prod.website-files.com/648ea474052fafd80a074dbe/";

const assets = [
  // Site-wide assets (shared)
  [site + "648ea474052fafd80a074e55_loader_three-dots-white.svg", sharedRoot, "images/loader-three-dots-white.svg"],
  [site + "6582aaedc7e39e62dee637a5_vandal-logo-art-32.png", sharedRoot, "seo/favicon-32.png"],
  [site + "6582aaf55777e22718ef70a9_vandal-logo-art-256.png", sharedRoot, "seo/apple-touch-icon.png"],
  [site + "648ea474052fafd80a074e24_inter-var.woff2", sharedRoot, "fonts/inter-var.woff2"],
  [site + "648ea474052fafd80a074e19_ShockaSerif-Light.otf", sharedRoot, "fonts/ShockaSerif-Light.otf"],
  [site + "648ea474052fafd80a074e50_Humane-Medium.otf", sharedRoot, "fonts/Humane-Medium.otf"],
  [site + "648ea474052fafd80a074e43_Humane-SemiBold.otf", sharedRoot, "fonts/Humane-SemiBold.otf"],
  [site + "648ea474052fafd80a074e4f_Humane-Bold.otf", sharedRoot, "fonts/Humane-Bold.otf"],
];

async function download([url, dir, file]) {
  const target = path.join(dir, file);
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
process.exitCode = failed ? 1 : 0;
