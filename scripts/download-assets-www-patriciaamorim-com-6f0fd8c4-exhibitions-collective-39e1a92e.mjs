// Downloads the assets of the exhibitions-collective-39e1a92e namespace of the www-patriciaamorim-com-6f0fd8c4 clone.
// Usage: node scripts/download-assets-www-patriciaamorim-com-6f0fd8c4-exhibitions-collective-39e1a92e.mjs
import { downloadAssets } from "./lib/download-assets.mjs";

await downloadAssets("public/sites/www-patriciaamorim-com-6f0fd8c4/exhibitions-collective-39e1a92e", [
  ["https://cdn.prod.website-files.com/648ea474052fafd80a074df9/654762215abe30b2414ee207_collective-2022.jpg", "images/01-collective-2022.jpg"],
  ["https://cdn.prod.website-files.com/648ea474052fafd80a074df9/6547621dbed254bcf516c308_DUPLO-I.jpg", "images/02-duplo-i.jpg"],
  ["https://cdn.prod.website-files.com/648ea474052fafd80a074df9/6547622c24c25dfd59772691_IMG_2440.jpg", "images/03-img-2440.jpg"],
  ["https://cdn.prod.website-files.com/648ea474052fafd80a074df9/6547622c1b2b1b6d86460d1f_IMG_2441.jpg", "images/04-img-2441.jpg"],
  ["https://cdn.prod.website-files.com/648ea474052fafd80a074df9/6547622c56a4e0bdbf29372f_IMG_2443.jpg", "images/05-img-2443.jpg"],
  ["https://cdn.prod.website-files.com/648ea474052fafd80a074df9/6547622e97cc58d2a47897a9_collective.jpg", "images/06-collective.jpg"],
]);
