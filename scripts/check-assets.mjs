// Fails the build if any img/ or d/ path in the source doesn't match a file in public/ exactly.
// GitHub Pages is case-sensitive, Windows is not, so a wrong-case path only breaks on the live site.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { dirname, basename, join } from 'node:path'

const sources = ['index.html']
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) walk(p)
    else if (/\.(ts|vue|css)$/.test(name)) sources.push(p)
  }
}
walk('src')

const pattern = /\b((?:img|d)\/[\w\-/.]+\.(?:png|jpe?g|gif|webp|svg|pdf))/g
const missing = []
let count = 0
for (const file of sources) {
  for (const [, ref] of readFileSync(file, 'utf8').matchAll(pattern)) {
    count++
    const dir = join('public', dirname(ref))
    if (!existsSync(dir) || !readdirSync(dir).includes(basename(ref))) missing.push(`${file}: ${ref}`)
  }
}

if (missing.length) {
  console.error(`check-assets: ${missing.length} path(s) don't match a file in public/ exactly (check the letter case):`)
  for (const m of missing) console.error('  ' + m)
  process.exit(1)
}
console.log(`check-assets: ${count} asset references, all match public/ exactly`)
