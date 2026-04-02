#!/usr/bin/env node
// Pre-install check: ensures Node.js >= 18 is installed.
const [major] = process.versions.node.split('.').map(Number)
if (major < 18) {
  console.error(
    `\nError: Claude Code requires Node.js 18 or higher.\n` +
      `You are running Node.js ${process.versions.node}.\n` +
      `Please upgrade Node.js: https://nodejs.org/\n`
  )
  process.exit(1)
}
