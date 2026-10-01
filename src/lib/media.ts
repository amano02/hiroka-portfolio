import fs from "node:fs";
import path from "node:path";

export function publicAssetExists(assetPath: string): boolean {
  if (!assetPath.startsWith("/")) {
    return false;
  }
  try {
    const relative = assetPath.replace(/^\//, "");
    return fs.existsSync(path.join(process.cwd(), "public", relative));
  } catch {
    return false;
  }
}
