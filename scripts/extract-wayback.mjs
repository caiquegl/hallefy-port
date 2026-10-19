#!/usr/bin/env node
/**
 * One-off helper: download Hallefy HTML from Wayback Machine and print
 * extractable copy (headings + long paragraphs).
 *
 * Usage: node scripts/extract-wayback.mjs [path]
 * Example: node scripts/extract-wayback.mjs /
 *          node scripts/extract-wayback.mjs /rockinrio/
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { gunzipSync } from "node:zlib";

const path = process.argv[2] || "/";
const ts = process.argv[3] || "20240913100456";
const url = `https://hallefy.com.br${path.startsWith("/") ? path : `/${path}`}`;
const archive = `https://web.archive.org/web/${ts}id_/${url}`;

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const res = await fetch(archive, { headers: { "User-Agent": UA } });
if (!res.ok) {
  console.error(`Failed ${res.status} ${archive}`);
  process.exit(1);
}

const buf = Buffer.from(await res.arrayBuffer());
let html;
try {
  html = gunzipSync(buf).toString("utf8");
} catch {
  html = buf.toString("utf8");
}

mkdirSync("scripts/.cache", { recursive: true });
const slug = path === "/" ? "home" : path.replace(/\//g, "").replace(/-/g, "_");
writeFileSync(`scripts/.cache/${slug}.html`, html);

const stripped = html
  .replace(/<script[\s\S]*?<\/script>/gi, " ")
  .replace(/<style[\s\S]*?<\/style>/gi, " ");

const headings = [...stripped.matchAll(/elementor-heading-title[^>]*>(.*?)<\//gi)].map(
  (m) => m[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(),
);

const paras = [...stripped.matchAll(/<(?:p|div)[^>]*>([^<]{40,})<\//gi)]
  .map((m) => m[1].replace(/\s+/g, " ").trim())
  .filter((t) => !t.includes("{") && !/elementor/i.test(t));

console.log("=== HEADINGS ===");
for (const h of headings) if (h) console.log("-", h);
console.log("\n=== PARAGRAPHS ===");
for (const p of [...new Set(paras)]) console.log("-", p, "\n");
console.log(`Saved scripts/.cache/${slug}.html (${html.length} bytes)`);
