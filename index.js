import { execSync as $ } from 'node:child_process'
import { readdir } from 'node:fs/promises'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { summary, benchmark, size, header, br } from 'mitata/reporter/table.mjs'

const dir = './approaches'

const files = await readdir(dir)

const results = []
for (const file of files) {
  const path = pathToFileURL(join(dir, file)).href
  const result = $(`node mitata-helper.js ${path}`)
  const json = JSON.parse(result)
  results.push(...json.benchmarks)
}

const opts = {}
opts.size = size(results.map(b => b.name))

console.log(header(opts), br(opts))
for (const { name, stats } of results) {
  console.log(benchmark(name, stats, opts))
}
console.log(summary(results))
