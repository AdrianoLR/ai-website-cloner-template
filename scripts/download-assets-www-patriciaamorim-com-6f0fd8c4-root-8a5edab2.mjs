// Downloads the assets used by https://www.patriciaamorim.com/ into the
// namespaced public directories for this clone.
// Usage: node scripts/download-assets-www-patriciaamorim-com-6f0fd8c4-root-8a5edab2.mjs
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const siteRoot = path.join(root, "public/sites/www-patriciaamorim-com-6f0fd8c4");
const pageRoot = path.join(siteRoot, "root-8a5edab2");
const sharedRoot = path.join(siteRoot, "shared");

const cms = "https://cdn.prod.website-files.com/648ea474052fafd80a074df9/";
const site = "https://cdn.prod.website-files.com/648ea474052fafd80a074dbe/";

const assets = [
  // Project thumbnails (page-specific)
  [cms + "6a563f920b201552f665a687_threads-2.jpg", pageRoot, "images/01-between-light-traces.jpg"],
  [cms + "691072e18664fc7bd289b85c_OTT-thumbnail.jpg", pageRoot, "images/02-of-thread-and-time.jpg"],
  [cms + "691073468d5c4e2494a902b9_HS-thumbnail.jpg", pageRoot, "images/03-hopscotch-series.jpg"],
  [cms + "6910738d800f2910f8f8d99a_HN-thumbnail.jpg", pageRoot, "images/04-a-hundred-names.jpg"],
  [cms + "657b15d23588d1c6b736c071_DSC1587.jpg", pageRoot, "images/05-presence-series.jpg"],
  [cms + "64a6c9b6da56ba547b759e6e_Palimpsest-Series--5.jpg", pageRoot, "images/06-palimpsest-series.jpg"],
  [cms + "657d7bdceac136d96d1c92a7_344x420.jpg", pageRoot, "images/07-unveiling-layers.jpg"],
  [cms + "657d6b9ce7ea1b094647598a_IMG-2643_750.jpg", pageRoot, "images/08-a-casa.jpg"],
  [cms + "6587d4407efa8f5563a908c2_Mas-tem-uma-coisa-que-se-chama-amor.jpg", pageRoot, "images/09-paradox.jpg"],
  [cms + "6490256a5b58bb55d4c5caba_img103.jpg", pageRoot, "images/10-alchemy-of-form.jpg"],
  [cms + "649148ec8b5eab49d8988057_DUPLO-SERIES-II-1920.jpg", pageRoot, "images/11-duplo-series.jpg"],
  [cms + "657b1d9a4f639f8d84d27f2c_NIKON%20D300_20130322_133743.Id_110303%20.jpg", pageRoot, "images/12-lotus.jpg"],
  [cms + "658045b0d737570df7a2bdb0_2.jpg", pageRoot, "images/13-maou-series.jpg"],
  [cms + "6587cd58a6298c932c011991_NIKON-D300_20130322_123648.jpg", pageRoot, "images/14-identity-series.jpg"],
  [cms + "691073cbad71d493266259f3_UTS-7-thumbnail.jpg", pageRoot, "images/15-unravelling-threads.jpg"],
  // Site-wide assets (shared)
  [site + "648ea474052fafd80a074e55_loader_three-dots-white.svg", sharedRoot, "images/loader-three-dots-white.svg"],
  [site + "6582aaedc7e39e62dee637a5_vandal-logo-art-32.png", sharedRoot, "seo/favicon-32.png"],
  [site + "6582aaf55777e22718ef70a9_vandal-logo-art-256.png", sharedRoot, "seo/apple-touch-icon.png"],
  [site + "648ea474052fafd80a074e24_inter-var.woff2", sharedRoot, "fonts/inter-var.woff2"],
  [site + "648ea474052fafd80a074e19_ShockaSerif-Light.otf", sharedRoot, "fonts/ShockaSerif-Light.otf"],
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
