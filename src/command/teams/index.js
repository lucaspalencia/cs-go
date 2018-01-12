import errorLog from '../../utils/error'
import teamsList from './list'
import teamsInfo from './info'

const teams = async () => {
  let teamList

  try {
    const _teamList = await teamsList()
    teamList = _teamList
  } catch (err) {
    errorLog(err, 'teamList()')
  }

  try {
    teamsInfo(teamList.team)
  } catch (err) {
    errorLog(err, 'teamsInfo()')
  }
}

export default teams
