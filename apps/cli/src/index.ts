import { argv } from 'node:process'
import { program } from 'commander'
import { greeting } from 'vts-core'

const file = await Bun.file('../../package.json').json()

program
  .name('vts')
  .description('CLI for the Validator Trust Service')
  .version(file.version)

program
  .command('greet')
  .description('Greet the user')
  // eslint-disable-next-line no-console
  .action(() => console.log(greeting))

program.parse(argv)
