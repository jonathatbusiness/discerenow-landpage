import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();

const blogDataDir = path.join(rootDir, "src", "data", "blog");
const outputFile = path.join(blogDataDir, "generated-posts.ts");

const locales = [
  {
    locale: "en",
    dir: path.join(blogDataDir, "en"),
    importPrefix: "./en",
    varPrefix: "en",
  },
  {
    locale: "pt-br",
    dir: path.join(blogDataDir, "pt-br"),
    importPrefix: "./pt-br",
    varPrefix: "ptbr",
  },
];

function toSafeVarName(prefix, fileName) {
  return `${prefix}${fileName
    .replace("blog-article-", "")
    .replace(".ts", "")
    .replace(/[^a-zA-Z0-9]/g, "")}`;
}

function getArticleFiles(dir) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((file) => /^blog-article-\d+\.(ts|tsx)$/.test(file))
    .sort()
    .reverse();
}

const imports = [];
const postVars = [];

for (const localeConfig of locales) {
  const files = getArticleFiles(localeConfig.dir);

  for (const file of files) {
    const fileBaseName = file.replace(/\.(ts|tsx)$/, "");
    const varName = toSafeVarName(localeConfig.varPrefix, file);

    imports.push(
      `import { post as ${varName} } from "${localeConfig.importPrefix}/${fileBaseName}";`,
    );

    postVars.push(varName);
  }
}

const fileContent = `import type { BlogPost } from "./types";

${imports.join("\n")}

export const allPosts: BlogPost[] = [
${postVars.map((varName) => `  ${varName},`).join("\n")}
];
`;

fs.writeFileSync(outputFile, fileContent, "utf8");

console.log(
  `Generated ${path.relative(rootDir, outputFile)} with ${postVars.length} blog posts.`,
);
