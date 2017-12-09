import program from 'commander'
import csgo from './command'

import chalk from 'chalk'
import pkg from '../package.json'

program.version(pkg.version)

program.command('teams')
  .alias('t')
  .on('--help', () => {
    console.log('')
    console.log(`  Get teams ordered by HLTV rank`)
    console.log('')
    console.log('  Example:')
    console.log(`           'cs-go teams'`)
  })
  .action(() => {
    csgo.teams()
  })

program.command('results')
  .alias('r')
  .option('-l, --limit <limit>', 'Show last results')
  .on('--help', () => {
    console.log('')
    console.log(`  Get last results from HLTV`)
    console.log('')
    console.log('  Example:')
    console.log(`           'cs-go results -l 20'`)
  })
  .action((option) => {
    let limit = option.limit

    if (!limit) {
      limit = 20
    }

    if (limit > 100) {
      limit = 100
    }

    csgo.results(limit)
  })

program.on('--help', () => {
  console.log('')
  console.log('')
  console.log(`  Welcome to ${chalk`{bold.hex('#F59E5B') CS:GO}`}!`)
  console.log('')
  console.log(`  Wanna check information about teams and players on CS:GO please enter: ${chalk`{bold.hex('#66ff66') cs-go teams}`}`)
  console.log('')
  console.log(`  For more detailed information, check the GitHub page: ${chalk`{hex('#66ff66') https://github.com/lucaspalencia/cs-go}`}`)
})

program.option('-v --version', pkg.version)

program.command('*')
  .action(command => {
    console.log(`${chalk.red.bold('Unknown command:')} ${chalk.white.bold(command)}`)
    process.exit(1)
  })

if (process.argv.length === 2) program.help()

program.parse(process.argv)
