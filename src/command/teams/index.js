import chalk from 'chalk'
import teamsList from './list'

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

const team = async () => {
  let teamList

  try {
    const _teamList = await teamsList()
    teamList = _teamList
  } catch (err) {
    catchError(err, 'teamList()')
  }

  console.log(teamList.team)
}

export default team
