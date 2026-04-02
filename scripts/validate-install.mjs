#!/usr/bin/env node
// Post-install validation: verifies required files are present.
import { existsSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const requiredFiles = ['cli.mjs', 'yoga.wasm', 'vendor/ripgrep', 'vendor/sdk']

let ok = true
for (const f of requiredFiles) {
  if (!existsSync(join(root, f))) {
    console.error(`Missing required file/directory: ${f}`)
    ok = false
  }
}

if (!ok) {
  console.error('\nInstallation is incomplete. Please re-clone the repository.')
  process.exit(1)
}

console.log('Installation validated successfully.')
