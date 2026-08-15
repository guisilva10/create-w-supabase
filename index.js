#!/usr/bin/env node

import { cpSync, readFileSync, writeFileSync, renameSync, existsSync, readdirSync } from "fs";
import { resolve, join, basename } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectName = process.argv[2] || "my-app";
const targetDir = resolve(process.cwd(), projectName);

if (existsSync(targetDir)) {
  const files = readdirSync(targetDir);
  const isEmpty = files.length === 0 || (files.length === 1 && files[0] === ".git");
  if (!isEmpty) {
    console.error(`\n  Error: Directory "${projectName}" is not empty.\n`);
    process.exit(1);
  }
}

const displayName = projectName === "." ? basename(process.cwd()) : projectName;

console.log(`\n  Creating project in ${targetDir}...\n`);

// Copy template
cpSync(join(__dirname, "template"), targetDir, { recursive: true });

// Rename gitignore to .gitignore
const gitignoreSrc = join(targetDir, "gitignore");
const gitignoreDest = join(targetDir, ".gitignore");
if (existsSync(gitignoreSrc)) {
  renameSync(gitignoreSrc, gitignoreDest);
}

// Update package.json name
const pkgPath = join(targetDir, "package.json");
const pkg = JSON.parse(readFileSync(pkgPath, "utf-8"));
pkg.name = displayName;
writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

console.log(`  Done! Now run:\n`);
if (projectName !== ".") {
  console.log(`  cd ${projectName}`);
}
console.log(`  pnpm install`);
console.log(`  cp .env.example .env`);
console.log(`  # Fill in your Supabase credentials in .env`);
console.log(`  pnpm db:generate`);
console.log(`  pnpm db:push`);
console.log(`  pnpm dev\n`);
