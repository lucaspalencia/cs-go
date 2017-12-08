import HLTV from 'hltv'

import ora from 'ora'
import cFonts from '../../utils/cfonts'

import results from './recentResults'
import maps from './mapStatistics'

const teamsInfo = async (teamId) => {
  const spinner = ora('Loading team information').start()

  let team = await HLTV.getTeam({id: teamId})

  const {
    name,
    recentResults,
    mapStatistics
  } = team

  spinner.stop()

  cFonts(name)

  results(name, recentResults)
  maps(mapStatistics)
}

export default teamsInfo
