// The 3 AM Commit Message — make.fun program/v1 entry.
// Writes one commit message (1-200 chars, single line) to
// $MAKEFUN_OUTPUT_DIR/entry.txt. Entry files are resolved relative to
// this script file, never process.cwd(). Nothing is deleted; output is
// written only inside $MAKEFUN_OUTPUT_DIR.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const MAX_CHARS = 200;

function loadMessage(): string {
  const scriptDir = dirname(fileURLToPath(import.meta.url));
  const messagePath = join(scriptDir, "message.txt");
  return readFileSync(messagePath, "utf8").trim();
}

function validateLine(line: string): void {
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${line.length}`);
  }
  if (/\r|\n/.test(line)) {
    throw new Error("entry must be a single line");
  }
}

function resolveOutputDir(): string {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outDir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  return outDir;
}

function main(): void {
  const line = loadMessage();
  validateLine(line);
  const outDir = resolveOutputDir();
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
  console.log(`wrote entry.txt (${line.length} chars)`);
}

main();
