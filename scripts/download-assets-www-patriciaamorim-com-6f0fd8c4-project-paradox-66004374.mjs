// Downloads the assets of the project-paradox-66004374 namespace of the www-patriciaamorim-com-6f0fd8c4 clone.
// Usage: node scripts/download-assets-www-patriciaamorim-com-6f0fd8c4-project-paradox-66004374.mjs
import { downloadAssets } from "./lib/download-assets.mjs";

await downloadAssets("public/sites/www-patriciaamorim-com-6f0fd8c4/project-paradox-66004374", [
  ["https://cdn.prod.website-files.com/648ea474052fafd80a074df9/6587d4407efa8f5563a908c2_Mas-tem-uma-coisa-que-se-chama-amor.jpg", "images/01-mas-tem-uma-coisa-que-se-chama-amor.jpg"],
  ["https://cdn.prod.website-files.com/648ea474052fafd80a074dbe/6586bbb500518a27e29c1a0f_Bodies In Between-poster-00001.jpg", "videos/01-bodies-in-between-poster-00001.jpg"],
  ["https://cdn.prod.website-files.com/648ea474052fafd80a074dbe/6586bbb500518a27e29c1a0f_Bodies In Between-transcode.mp4", "videos/02-bodies-in-between-transcode.mp4"],
  ["https://cdn.prod.website-files.com/648ea474052fafd80a074dbe/6586bbb500518a27e29c1a0f_Bodies In Between-transcode.webm", "videos/03-bodies-in-between-transcode.webm"],
  ["https://cdn.prod.website-files.com/648ea474052fafd80a074df9/6587d446d73e09aac4988dfc_NIKON-D300_20130322_135101.jpg", "images/02-nikon-d300-20130322-135101.jpg"],
]);
