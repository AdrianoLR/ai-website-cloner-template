// Downloads the assets of the project-palimpsest-series-260a5105 namespace of the www-patriciaamorim-com-6f0fd8c4 clone.
// Usage: node scripts/download-assets-www-patriciaamorim-com-6f0fd8c4-project-palimpsest-series-260a5105.mjs
import { downloadAssets } from "./lib/download-assets.mjs";

await downloadAssets("public/sites/www-patriciaamorim-com-6f0fd8c4/project-palimpsest-series-260a5105", [
  ["https://cdn.prod.website-files.com/648ea474052fafd80a074df9/65786889ca91b345ebbe599b_Palimpsest-Series-II.jpg", "images/01-palimpsest-series-ii.jpg"],
  ["https://cdn.prod.website-files.com/648ea474052fafd80a074df9/657868899e7619cfb34c2046_Palimpsest-Series-III.jpg", "images/02-palimpsest-series-iii.jpg"],
  ["https://cdn.prod.website-files.com/648ea474052fafd80a074df9/6578688248486c7ff46dfb4c_Palimpsest-Series-I.jpg", "images/03-palimpsest-series-i.jpg"],
  ["https://cdn.prod.website-files.com/648ea474052fafd80a074df9/65786889ac61fbd5d27b2f62_Palimpsest-Series-V.jpg", "images/04-palimpsest-series-v.jpg"],
  ["https://cdn.prod.website-files.com/648ea474052fafd80a074df9/657868891b5aeef0ef04e9ec_Palimpsest-Series-VI.jpg", "images/05-palimpsest-series-vi.jpg"],
]);
