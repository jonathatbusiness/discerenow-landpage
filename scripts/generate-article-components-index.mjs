import { readdirSync, writeFileSync } from "node:fs";
import { join, basename, extname } from "node:path";

const articleComponentsDir = join(
  process.cwd(),
  "src",
  "components",
  "blog",
  "article",
);

const ignoredFiles = new Set(["index.ts", "index.tsx"]);

const files = readdirSync(articleComponentsDir)
  .filter((file) => /\.(tsx|ts)$/.test(file))
  .filter((file) => !ignoredFiles.has(file))
  .filter((file) => /^[A-Z]/.test(file));

const exports = files
  .map((file) => {
    const componentName = basename(file, extname(file));
    return `export { default as ${componentName} } from "./${componentName}";`;
  })
  .join("\n");

const content = `${exports}\n`;

writeFileSync(join(articleComponentsDir, "index.ts"), content);

console.log(`Generated article components index with ${files.length} exports.`);
