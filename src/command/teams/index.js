import HLTV from 'hltv'

import selectedTeam from './list'

const catchError = (err, apiName) => {
  console.log(`Oops, ${apiName} goes wrong.`)
  console.log(
    'Please run cs-go again.\nIf it still does not work, feel free to open an issue on https://github.com/xxhomey19/nba-go/issues'
  )
  process.exit(1)
}

const team = async () => {
  try {
    const teams = await HLTV.getTeamRanking()

    let team = await selectedTeam(teams)

    console.log(team)
  } catch (err) {
    catchError(err, 'HLTV.getTeamRanking()')
  }
}

export default team
