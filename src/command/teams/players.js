import chalk from 'chalk'
import { basicTable, alignCenter } from '../../utils/table'

const formatColorStats = (statistic, comparator, reverse = false) => {
  let percentage = `${chalk.red.bold(statistic)}`

  if (reverse) {
    if (parseFloat(statistic) <= comparator) {
      percentage = `${chalk.green.bold(statistic)}`
    }
    return percentage
  }

  if (parseFloat(statistic) >= comparator) {
    percentage = `${chalk.green.bold(statistic)}`
  }

  return percentage
}

const players = (players) => {
  const playersTable = basicTable({'padding-left': 1, 'padding-right': 1})
  let headerContent = 'Players info'

  playersTable.push(
    [{ colSpan: 7, content: `${chalk.white.bold(headerContent)}`, hAlign: 'center', vAlign: 'center' }],
    alignCenter([
      'Nick',
      'Rating',
      'Kills/Round',
      'HS',
      'Maps played',
      'Deaths/Round',
      'Rounds contributed'
    ])
  )

  players.forEach((player) => {
    playersTable.push(
      alignCenter([
        chalk.hex('#F59E5B').bold(player.name),
        formatColorStats(player.statistics.rating, 1),
        formatColorStats(player.statistics.killsPerRound, 0.7),
        formatColorStats(player.statistics.headshots, 40),
        chalk.white.bold(player.statistics.mapsPlayed),
        formatColorStats(player.statistics.deathsPerRound, 0.7, true),
        formatColorStats(player.statistics.roundsContributed, 70)
      ])
    )
  })

  console.log(playersTable.toString())
  console.log('')
  console.log('')
}

export default players
