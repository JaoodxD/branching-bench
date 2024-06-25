import { run, bench } from 'mitata'

const approachPath = process.argv[2]

const ROUNDS = 1_000_000

const approach = (await import(approachPath)).default

bench(approach.name, () => {
  for (let i = 0; i < ROUNDS; i++) {
    approach(i % 6)
  }
})

await run({ json: true })
