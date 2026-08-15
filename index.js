#!/usr/bin/env node

import { Command } from "commander";
import degit from "degit";
import prompts from "prompts";
import { execSync } from "child_process";
import path from "path";

const program = new Command();

program
  .argument("[project-name]", "Project name")
  .action(async (projectName) => {
    let targetDir = projectName;

    if (!targetDir) {
      const response = await prompts({
        type: "text",
        name: "name",
        message: 'Project name? (use "." for current directory)',
        initial: "my-app",
      });
      targetDir = response.name;
    }

    const projectPath = path.resolve(targetDir);

    const emitter = degit("guisilva10/create-w-supabase/template", {
      cache: false,
      force: true,
    });

    console.log(`\n  Creating project in ${projectPath}...\n`);

    try {
      await emitter.clone(projectPath);

      console.log("  Installing dependencies...\n");

      execSync("pnpm install", {
        cwd: projectPath,
        stdio: "inherit",
      });

      console.log("\n  Done! Now run:\n");
      if (targetDir !== ".") {
        console.log(`  cd ${targetDir}`);
      }
      console.log("  cp .env.example .env");
      console.log("  # Fill in your Supabase credentials in .env");
      console.log("  pnpm db:generate");
      console.log("  pnpm db:push");
      console.log("  pnpm dev\n");
    } catch (err) {
      console.error("  Error:", err.message);
    }
  });

program.parse(process.argv);
