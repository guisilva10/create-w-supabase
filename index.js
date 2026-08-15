#!/usr/bin/env node

import { cpSync, readFileSync, writeFileSync, renameSync, existsSync } from "fs";
import { resolve, join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectName = process.argv[2] || "my-app";
const targetDir = resolve(process.cwd(), projectName);

if (existsSync(targetDir)) {
  console.error(`\n  Error: Directory "${projectName}" already exists.\n`);
  process.exit(1);
}

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
pkg.name = projectName;
writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

console.log(`  Done! Now run:\n`);
console.log(`  cd ${projectName}`);
console.log(`  pnpm install`);
console.log(`  cp .env.example .env`);
console.log(`  # Fill in your Supabase credentials in .env`);
console.log(`  pnpm db:generate`);
console.log(`  pnpm db:push`);
console.log(`  pnpm dev\n`);
