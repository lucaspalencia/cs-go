import matchesList from './list'
import matchInfo from './info'

const matches = async () => {
  let matcheList

  try {
    const _matcheList = await matchesList()
    matcheList = _matcheList
  } catch (err) {
    console.log(err)
  }

  try {
    matchInfo(matcheList.matche)
  } catch (err) {
    console.log(err)
  }
}

export default matches
