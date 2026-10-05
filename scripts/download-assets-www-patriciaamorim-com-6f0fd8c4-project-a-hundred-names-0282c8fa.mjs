// Downloads the assets of the project-a-hundred-names-0282c8fa namespace of the www-patriciaamorim-com-6f0fd8c4 clone.
// Usage: node scripts/download-assets-www-patriciaamorim-com-6f0fd8c4-project-a-hundred-names-0282c8fa.mjs
import { downloadAssets } from "./lib/download-assets.mjs";

await downloadAssets("public/sites/www-patriciaamorim-com-6f0fd8c4/project-a-hundred-names-0282c8fa", [
  ["https://cdn.prod.website-files.com/648ea474052fafd80a074df9/691062c42d5d087b4c168cb8_HN-main.jpg", "images/01-hn-main.jpg"],
  ["https://cdn.prod.website-files.com/648ea474052fafd80a074df9/691062c80cc6cca6fedb98f2_HN-1.jpg", "images/02-hn-1.jpg"],
  ["https://cdn.prod.website-files.com/648ea474052fafd80a074df9/691062c8988f8da745d5e344_HN-2.jpg", "images/03-hn-2.jpg"],
  ["https://cdn.prod.website-files.com/648ea474052fafd80a074df9/691062c814259a393c25890f_HN-3.jpg", "images/04-hn-3.jpg"],
  ["https://cdn.prod.website-files.com/648ea474052fafd80a074df9/691062c8beff95032bc25fac_HN-4.jpg", "images/05-hn-4.jpg"],
]);
