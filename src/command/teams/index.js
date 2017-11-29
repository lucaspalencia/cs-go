import HLTV from 'hltv'

import teamsList from './list'
import chalk from 'chalk'

const catchError = (err, apiName) => {
  console.log(`${chalk`{red.bold Oops, ${apiName} goes wrong.}`}`)
  console.log('')
  console.log('Please run cs-go again.\nIf it still does not work, feel free to open an issue on https://github.com/lucaspalencia/cs-go/issues')
  process.exit(1)
}

const team = async () => {
  let teams

  try {
    const _teams = await HLTV.getTeamRanking()
    teams = _teams
  } catch (err) {
    catchError(err, 'HLTV.getTeamRanking()')
  }

  let teamList = await teamsList(teams)

  console.log(teamList.team)
}

export default team
