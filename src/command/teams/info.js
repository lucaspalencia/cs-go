import HLTV from 'hltv'
import chalk from 'chalk'
import ora from 'ora'
import errorLog from '../../utils/error'
import cFonts from '../../utils/cfonts'
import results from './recentResults'
import maps from './mapStatistics'
import playersInfo from './players'

const getPlayersInfo = async (players) => {
  let teamPlayers = []

  for (let player of players) {
    const _playerInfo = await HLTV.getPlayer({id: player.id})

    teamPlayers.push({
      'name': _playerInfo.ign,
      'statistics': _playerInfo.statistics
    })
  }

  return teamPlayers
}

const teamsInfo = async (teamId) => {
  console.log('')
  const spinner = ora('Loading team information').start()

  try {
    const teamInfo = await HLTV.getTeam({id: teamId})

    let players = await getPlayersInfo(teamInfo.players);

    spinner.stop()

    cFonts(`${teamInfo.name}  #${teamInfo.rank}`)

    playersInfo(players)
    maps(teamInfo.mapStatistics)
    results(teamInfo.name, teamInfo.recentResults)
  } catch (err) {
    errorLog(err, 'HLTV.getTeam()')
  }
}

export default teamsInfo
