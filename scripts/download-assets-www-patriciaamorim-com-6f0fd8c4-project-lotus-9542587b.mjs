// Downloads the assets of the project-lotus-9542587b namespace of the www-patriciaamorim-com-6f0fd8c4 clone.
// Usage: node scripts/download-assets-www-patriciaamorim-com-6f0fd8c4-project-lotus-9542587b.mjs
import { downloadAssets } from "./lib/download-assets.mjs";

await downloadAssets("public/sites/www-patriciaamorim-com-6f0fd8c4/project-lotus-9542587b", [
  ["https://cdn.prod.website-files.com/648ea474052fafd80a074df9/657b1d9f3a771a4bd0291732_lotus1.jpg", "images/01-lotus1.jpg"],
  ["https://cdn.prod.website-files.com/648ea474052fafd80a074df9/657b1d9a4f639f8d84d27f2c_NIKON%20D300_20130322_133743.Id_110303%20.jpg", "images/02-nikon-d300-20130322-133743-id-110303.jpg"],
  ["https://cdn.prod.website-files.com/648ea474052fafd80a074df9/657b1dab8ff1733cc4b8172f_Screen%20Shot%202022-06-30%20at%201.45.37%20am.png", "images/03-screen-shot-2022-06-30-at-1-45-37-am.png"],
]);
