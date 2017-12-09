import HLTV from 'hltv'
import ora from 'ora'
import cFonts from '../../utils/cfonts'
import results from './recentResults'
import maps from './mapStatistics'
import playersInfo from './players'

const catchError = (err, apiName) => {
  if (err) {
    console.log('')
    console.log('')
    console.log(`${chalk`{red.bold Oops, ${apiName} goes wrong.}`}`)
    console.log('')
    console.log('Please run cs-go again.\nIf it still does not work, feel free to open an issue on https://github.com/lucaspalencia/cs-go/issues')
    process.exit(1)
  }
}

const teamsInfo = async (teamId) => {
  console.log('')
  const spinner = ora('Loading team information').start()

  let teamRank
  let teamName
  let teamPlayers
  let teamResults
  let teamMaps

  let players = []

  try {
    const _teamInfo = await HLTV.getTeam({id: teamId})

    teamRank = _teamInfo.rank
    teamName = _teamInfo.name
    teamPlayers = _teamInfo.players
    teamMaps = _teamInfo.mapStatistics
    teamResults = _teamInfo.recentResults
  } catch (err) {
    catchError(err, 'HLTV.getTeam()')
  }

  for (let player of teamPlayers) {
    try {
      const _playerInfo = await HLTV.getPlayer({id: player.id})

      players.push({
        'name': _playerInfo.ign,
        'statistics': _playerInfo.statistics
      })
    } catch (err) {
      catchError(err, 'HLTV.getPlayer()')
    }
  }

  spinner.stop()

  cFonts(`${teamName}  #${teamRank}`)

  playersInfo(players)
  maps(teamMaps)
  results(teamName, teamResults)
}

export default teamsInfo
