// merge-js.js
import fs from "fs";
import path from "path";
import { globSync } from "glob";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputFile = path.join(__dirname, "out", "bundle.js");

// Padrões em ordem de carregamento
const patterns = [
  "out/_next/static/chunks/polyfills-*.js",
  "out/_next/static/chunks/framework-*.js",
  "out/_next/static/chunks/main-*.js",
  "out/_next/static/chunks/pages/_app-*.js",
  "out/_next/static/chunks/pages/*.js",
  "out/_next/static/chunks/app/**/*.js",
];

// Encontrar e juntar os arquivos
const jsFiles = patterns.flatMap((pattern) => globSync(pattern));

let bundle = "";
for (const file of jsFiles) {
  const content = fs.readFileSync(file, "utf-8");
  bundle += `\n/* --- ${path.basename(file)} --- */\n` + content;
}

fs.writeFileSync(outputFile, bundle, "utf-8");

console.log(`✅ bundle.js gerado com ${jsFiles.length} arquivos.`);
