import matchesList from './list'

const matches = async () => {
  let matcheList

  try {
    const _matcheList = await matchesList()
    matcheList = _matcheList
    console.log(matcheList)
  } catch (err) {
    console.log(err)
  }
}

export default matches
