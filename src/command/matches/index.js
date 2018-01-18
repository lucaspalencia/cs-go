import errorLog from '../../utils/error'
import matchesList from './list'
import matchInfo from './info'

const matches = async () => {
  let matchList

  try {
    const _matchList = await matchesList()
    matchList = _matchList
  } catch (err) {
    errorLog(err, 'HLTV.getMatches()')
  }

  try {
    matchInfo(matchList.match)
  } catch (err) {
    errorLog(err, 'matchInfo()')
  }
}

export default matches
