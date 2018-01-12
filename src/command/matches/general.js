import chalk from 'chalk'
import { basicTable, alignCenter } from '../../utils/table'
import dateFormat from '../../utils/date'

const formatTeamsName = (team1, team2) => {
  return `${chalk.blue.bold(team1)} vs ${chalk.cyan.bold(team2)}`
}

const formatStatus = (date, live) => {
  let matchStatus = chalk.green.bold('LIVE')

  if (!live) {
    matchStatus = dateFormat(date)
  }

  return chalk.white.bold(matchStatus)
}

const general = (matchInfo) => {
  const generalTable = basicTable({'padding-left': 2, 'padding-right': 2})

  generalTable.push(
    [{ colSpan: 6, content: formatTeamsName(matchInfo.team1.name, matchInfo.team2.name), hAlign: 'center', vAlign: 'center' }],
    [{ colSpan: 6, content: chalk.white.bold(matchInfo.event.name), hAlign: 'center', vAlign: 'center' }],
    [{ colSpan: 6, content: chalk.white.bold(matchInfo.format), hAlign: 'center', vAlign: 'center' }],
    [{ colSpan: 6, content: formatStatus(matchInfo.date, matchInfo.live), hAlign: 'center', vAlign: 'center' }]
  )

  if (matchInfo.additionalInfo) {
    generalTable.push(
      [{ colSpan: 6, content: chalk.hex('#F59E5B').bold(matchInfo.additionalInfo), hAlign: 'center', vAlign: 'center' }]
    )
  }

  let team1Players = matchInfo.players.team1.map((player) => {
    return player.name
  })

  let team2Players = matchInfo.players.team2.map((player) => {
    return player.name
  })

  let team1 =  `${chalk.blue.bold(matchInfo.team1.name)}:`
    , team2 =  `${chalk.cyan.bold(matchInfo.team2.name)}:`

  team1Players.unshift(team1)
  team2Players.unshift(team2)

  generalTable.push(
    alignCenter(team1Players),
    alignCenter(team2Players)
  )

  console.log(generalTable.toString());
  console.log('')
  console.log('')
}

export default general
