// Downloads the assets of the project-presence-series-0e594cbb namespace of the www-patriciaamorim-com-6f0fd8c4 clone.
// Usage: node scripts/download-assets-www-patriciaamorim-com-6f0fd8c4-project-presence-series-0e594cbb.mjs
import { downloadAssets } from "./lib/download-assets.mjs";

await downloadAssets("public/sites/www-patriciaamorim-com-6f0fd8c4/project-presence-series-0e594cbb", [
  ["https://cdn.prod.website-files.com/648ea474052fafd80a074df9/657b1916de282d7edddfaeb7_DSC4365-(1).jpg", "images/01-dsc4365-1.jpg"],
  ["https://cdn.prod.website-files.com/648ea474052fafd80a074df9/657b15d23588d1c6b736c071_DSC1587.jpg", "images/02-dsc1587.jpg"],
  ["https://cdn.prod.website-files.com/648ea474052fafd80a074df9/657b1919090a589d7d4869d4_DSC_8172.jpg", "images/03-dsc-8172.jpg"],
]);
