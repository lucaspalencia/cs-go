import program from 'commander'
import csgo from './command'

import pkg from '../package.json'

program.version(pkg.version)

program.command('teams')
  .on('--help', () => {
    console.log('')
    console.log(
      `  Get teams ordered by HLTV rank`
    )
    console.log('')
    console.log('  Example:')
    console.log(
      `           'cs-go teams'`
    )
  })
  .action(() => {
    csgo.team()
  })

program.on('--help', () => {
  console.log('')
  console.log('')
  console.log(
    `  Welcome to CS GO !`
  )
  console.log('')
  console.log(
    `  Wanna check CS GO team information please enter: 'cs-go teams'`
  )
  console.log('')
})

program.option('-v --version', pkg.version)

if (process.argv.length === 2) program.help()

program.parse(process.argv)
