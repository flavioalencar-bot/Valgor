import { staticArticles, estimateWordCount } from "../src/lib/blog/articles";
import { assertMinWords } from "../src/lib/services-content";
import { servicePages } from "../src/lib/services-data";

console.log("=== SERVIÇOS (meta: 1500+) ===");
for (const key of Object.keys(servicePages)) {
  const n = assertMinWords(key);
  const ok = n >= 1500 ? "OK" : "BAIXO";
  console.log(`${ok} ${key}: ${n}`);
}

console.log("\n=== BLOG (meta: 2000+) ===");
for (const a of staticArticles) {
  const n = estimateWordCount(a);
  const ok = n >= 2000 ? "OK" : "BAIXO";
  console.log(`${ok} ${a.slug}: ${n}`);
}
