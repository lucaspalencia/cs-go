import program from 'commander'
import csgo from './command'

import chalk from 'chalk'
import pkg from '../package.json'

program.version(pkg.version)

program.command('teams')
  .alias('t')
  .on('--help', () => {
    console.log('')
    console.log(`  List teams ordered by HLTV.org rank.`)
    console.log(`  You can choose a team to get the following information:`)
    console.log('')
    console.log(`  - Players info`)
    console.log(`  - Map win statistics`)
    console.log(`  - Recent results`)
    console.log('')
    console.log('  Example:')
    console.log(`           ${chalk`{hex('#66ff66') cs-go teams} => List teams by HLTV.org rank`}`)
    console.log('')
    console.log(`  For more detailed information, check the GitHub page: ${chalk`{hex('#66ff66') https://github.com/lucaspalencia/cs-go}`}`)
  })
  .action(() => {
    csgo.teams()
  })

program.command('results')
  .alias('r')
  .option('-l, --limit <limit>', 'Show last results')
  .on('--help', () => {
    console.log('')
    console.log(`  Show the last matches results from HLTV.org`)
    console.log(`  You can choose a limit of matches by set -l option`)
    console.log('')
    console.log('  Example:')
    console.log(`           ${chalk`{hex('#66ff66') cs-go results}       => List the last 20 matches results by HLTV`}`)
    console.log(`           ${chalk`{hex('#66ff66') cs-go results -l 30} => List last 30 matches results by HLTV`}`)
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
  console.log(`  Wanna check information about CS:GO teams please enter: ${chalk`{hex('#66ff66') cs-go teams}`}`)
  console.log(`  Wanna check CS:GO last matches results please enter: ${chalk`{hex('#66ff66') cs-go results}`}`)
  console.log('')
  console.log(`  For more detailed information, check the GitHub page: ${chalk`{hex('#66ff66') https://github.com/lucaspalencia/cs-go}`}`)
  console.log(`  Or enter ${chalk`{hex('#66ff66') cs-go teams -h, cs-go results -h}`} to get more information`)
})

program.option('-v --version', pkg.version)

program.command('*')
  .action(command => {
    console.log(`${chalk.red.bold('Unknown command:')} ${chalk.white.bold(command)}`)
    process.exit(1)
  })

if (process.argv.length === 2) program.help()

program.parse(process.argv)
