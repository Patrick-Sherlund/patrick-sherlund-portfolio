import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const outDir = path.join(process.cwd(), "out");
const noJekyllPath = path.join(outDir, ".nojekyll");

await mkdir(outDir, { recursive: true });
await writeFile(noJekyllPath, "");
