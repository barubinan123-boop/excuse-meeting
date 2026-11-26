import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

// The winning excuse: a concrete office object (the printer) + one sharp
// twist (it respects my time more than the meeting does). No wifi, no cat,
// no dentist — a fresh angle that feels true to office life.
const excuse =
  'The meeting invite conflicted with my 1:1 with the printer, and frankly the printer respects my time more.'

if (excuse.length < 1 || excuse.length > 200) {
  throw new Error(`excuse must be 1-200 characters, got ${excuse.length}`)
}
if (excuse.trim().length === 0) {
  throw new Error('excuse must not be only whitespace')
}
if (excuse.includes('\n')) {
  throw new Error('excuse must be a single line')
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output'
mkdirSync(outDir, { recursive: true })
writeFileSync(join(outDir, 'entry.txt'), excuse, 'utf8')
console.log(`wrote ${excuse.length} characters to ${join(outDir, 'entry.txt')}`)
