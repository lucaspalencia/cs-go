import HLTV from 'hltv'

import ora from 'ora'
import chalk from 'chalk'
import teamsList from './list'

const catchError = (err, apiName) => {
  console.log(`${chalk`{red.bold Oops, ${apiName} goes wrong.}`}`)
  console.log('')
  console.log('Please run cs-go again.\nIf it still does not work, feel free to open an issue on https://github.com/lucaspalencia/cs-go/issues')
  process.exit(1)
}

const team = async () => {
  const spinner = ora('Loading teams').start()

  let teams

  try {
    const _teams = await HLTV.getTeamRanking()
    teams = _teams
    spinner.stop()
  } catch (err) {
    catchError(err, 'HLTV.getTeamRanking()')
  }

  let teamList = await teamsList(teams)

  console.log(teamList.team)
}

export default team
