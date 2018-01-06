import HLTV from 'hltv'
import ora from 'ora'
import streams from './streams'
import chalk from 'chalk'
import table from '../../utils/table'

const alignCenter = columns =>
  columns.map(content => ({ content, hAlign: 'center', vAlign: 'center' }))

const formatTeamsName = (team1, team2) => {
     return `${chalk.blue.bold(team1)} vs ${chalk.cyan.bold(team2)}`
}

const formatStatus = (date, live) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  let matchStatus = chalk.green.bold('LIVE')

  if (live) {
    return matchStatus
  }

  let dateClass = new Date(date)
  let dateDay = (dateClass.getDate() < 10 ? '0' : '') + dateClass.getDate()
  let dateFormat = `${months[dateClass.getMonth()]} ${dateDay}`
  let dateHours = dateClass.getHours()
  let dateMinutes = (dateClass.getMinutes() < 10 ? '0' : '') + dateClass.getMinutes()

  matchStatus = `${chalk.white.bold(`${dateFormat} ${dateHours}:${dateMinutes}`)}`

  return matchStatus
}

const matchInfo = async (matcheId) => {
  console.log('')
  const spinner = ora('Loading match information').start()

  let matchInfo

  try {
    const _matchInfo = await HLTV.getMatch({id: matcheId})
    matchInfo = _matchInfo
    console.log('')
    console.log(matchInfo)
  } catch (err) {
    console.log(err)
  }

  spinner.stop()

  const gamePreviewTable = table.basicTable({'padding-left': 2, 'padding-right': 2});

  gamePreviewTable.push(
    [{ colSpan: 6, content: formatTeamsName(matchInfo.team1.name, matchInfo.team2.name), hAlign: 'center', vAlign: 'center' }],
    [{ colSpan: 6, content: chalk.white.bold(matchInfo.event.name), hAlign: 'center', vAlign: 'center' }],
    [{ colSpan: 6, content: chalk.white.bold(matchInfo.format), hAlign: 'center', vAlign: 'center' }],
    [{ colSpan: 6, content: formatStatus(matchInfo.date, matchInfo.live), hAlign: 'center', vAlign: 'center' }]
  )

  if (matchInfo.additionalInfo) {
    gamePreviewTable.push(
      [{ colSpan: 6, content: chalk.hex('#F59E5B').bold(matchInfo.additionalInfo), hAlign: 'center', vAlign: 'center' }]
    )
  }
  let team1 =  `${chalk.blue.bold(matchInfo.team1.name)}:`
  let team1Players = matchInfo.players.team1
  let team2 =  `${chalk.cyan.bold(matchInfo.team2.name)}:`
  let team2Players = matchInfo.players.team2

  let arrayPlayersName = [team1]
  for (let player of team1Players) {
    arrayPlayersName.push(player.name)
  }

  let arrayPlayersName2 = [team2]
  for (let player of team2Players) {
    arrayPlayersName2.push(player.name)
  }

  gamePreviewTable.push(
    alignCenter(arrayPlayersName),
    alignCenter(arrayPlayersName2)
  )

  console.log(gamePreviewTable.toString());

  const vetoesTable = table.basicTable({'padding-left': 4, 'padding-right': 4})

  vetoesTable.push(
    [{ colSpan: 3, content: `${chalk.white.bold('Vetoes')}`, hAlign: 'center', vAlign: 'center' }],
    alignCenter([
      'Team',
      'Map',
      'Type'
    ])
  )

  matchInfo.vetoes.forEach((vetoe) => {
    vetoesTable.push(
      alignCenter([
        chalk.white.bold(vetoe.team.name),
        chalk.hex('#F59E5B').bold(vetoe.map),
        chalk.white.bold(vetoe.type)
      ])
    )
  })

  console.log(vetoesTable.toString())

  if (matchInfo.streams.length) {
    streams(matchInfo.streams)
  }
}

export default matchInfo
