import HLTV from 'hltv'

import ora from 'ora'
import cFonts from '../../utils/cfonts'

import results from './recentResults'

const teamsInfo = async (teamId) => {
  const spinner = ora('Loading team information').start()

  let team = await HLTV.getTeam({id: teamId})

  const {
    name,
    recentResults
  } = team

  spinner.stop()

  cFonts(name)

  results(name, recentResults)
}

export default teamsInfo
