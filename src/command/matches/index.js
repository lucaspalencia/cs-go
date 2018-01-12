import errorLog from '../../utils/error'
import matchesList from './list'
import matchInfo from './info'

const matches = async () => {
  let matcheList

  try {
    const _matcheList = await matchesList()
    matcheList = _matcheList
  } catch (err) {
    errorLog(err, 'HLTV.getMatches()')
  }

  try {
    matchInfo(matcheList.matche)
  } catch (err) {
    errorLog(err, 'matchInfo()')
  }
}

export default matches
