import fs from "fs"
import path from "path"
import { execSync } from "child_process"
import { fileURLToPath } from "url"

const POCKETBASE_VERSION = "0.28.0"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BACKEND_DIR = path.resolve(__dirname, "..")
const BINARY_PATH = path.join(BACKEND_DIR, "pocketbase")
const TYPES_PATH = path.join(BACKEND_DIR, "pocketbase.d.ts")

const force = process.argv.includes("--force")

if (!force && fs.existsSync(BINARY_PATH) && fs.existsSync(TYPES_PATH)) {
  console.log("PocketBase already downloaded. Use --force to re-download.")
  process.exit(0)
}

function getPlatformZipName() {
  const { platform, arch } = process
  const osMap = { darwin: "darwin", linux: "linux", win32: "windows" }
  const archMap = { x64: "amd64", arm64: "arm64" }
  const os = osMap[platform]
  const cpu = archMap[arch]
  if (!os || !cpu) throw new Error(`Unsupported platform: ${platform}/${arch}`)
  return `pocketbase_${POCKETBASE_VERSION}_${os}_${cpu}.zip`
}

if (!fs.existsSync(BINARY_PATH) || force) {
  const zipName = getPlatformZipName()
  const url = `https://github.com/pocketbase/pocketbase/releases/download/v${POCKETBASE_VERSION}/${zipName}`
  const zipPath = path.join(BACKEND_DIR, zipName)

  console.log(`Downloading PocketBase v${POCKETBASE_VERSION} (${zipName})...`)
  execSync(`curl -fsSL -o "${zipPath}" "${url}"`, { stdio: "inherit" })

  console.log("Extracting binary...")
  execSync(`unzip -o "${zipPath}" pocketbase -d "${BACKEND_DIR}"`, { stdio: "inherit" })
  fs.unlinkSync(zipPath)
  fs.chmodSync(BINARY_PATH, 0o755)
}

if (!fs.existsSync(TYPES_PATH) || force) {
  const typesUrl = `https://raw.githubusercontent.com/pocketbase/pocketbase/v${POCKETBASE_VERSION}/plugins/jsvm/internal/types/generated/types.d.ts`
  console.log("Downloading pocketbase.d.ts...")
  execSync(`curl -fsSL -o "${TYPES_PATH}" "${typesUrl}"`, { stdio: "inherit" })
}

console.log("Done. PocketBase binary and pocketbase.d.ts are ready.")
