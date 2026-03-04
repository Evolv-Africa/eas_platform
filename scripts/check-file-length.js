#!/usr/bin/env node

import { execSync } from "node:child_process";
import { exit } from "node:process";

const MAX_LINES = 250;
const EXCEPTIONAL_MAX_LINES = 300;

try {
  // Find all TypeScript files excluding test files and get their line counts
  const output = execSync(
    String.raw`find src -name "*.ts" -o -name "*.tsx" | grep -v -E "\.(test|spec)\.(ts|tsx)$" | xargs wc -l`,
    {
      encoding: "utf8",
    },
  );

  const lines = output.trim().split("\n");
  let hasViolations = false;
  let hasExceptionalViolations = false;

  for (const line of lines) {
    const parts = line.trim().split(/\s+/);
    if (parts.length >= 2) {
      const lineCount = Number.parseInt(parts[0]);
      const fileName = parts[1];

      // Skip the total line
      if (fileName === "total") continue;

      if (lineCount > EXCEPTIONAL_MAX_LINES) {
        console.error(
          `❌ ${fileName} has ${lineCount} lines (exceeds exceptional limit of ${EXCEPTIONAL_MAX_LINES})`,
        );
        hasExceptionalViolations = true;
      } else if (lineCount > MAX_LINES) {
        console.warn(
          `⚠️  ${fileName} has ${lineCount} lines (exceeds standard limit of ${MAX_LINES}, but within exceptional limit of ${EXCEPTIONAL_MAX_LINES})`,
        );
        hasViolations = true;
      }
    }
  }

  if (hasExceptionalViolations) {
    console.error(
      "\n💥 Build failed: Files exceed the exceptional limit of 300 lines!",
    );
    console.error("Please refactor these files to be under 300 lines.");
    exit(1);
  }

  if (hasViolations) {
    console.warn(
      "\n⚠️  Warning: Some files exceed the standard 250-line limit but are within the exceptional 300-line limit.",
    );
    console.warn("Consider refactoring these files when possible.");
  }

  if (!hasViolations && !hasExceptionalViolations) {
    console.log("✅ All files are within the 250-line limit.");
  }
} catch (error) {
  console.error("Error checking file lengths:", error.message);
  exit(1);
}
