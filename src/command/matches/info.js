import HLTV from 'hltv'
import ora from 'ora'
import general from './general'
import maps from './maps'
import vetoes from './vetoes'
import streams from './streams'

const matchInfo = async (matcheId) => {
  console.log('')
  const spinner = ora('Loading match information').start()

  let matchInfo

  try {
    const _matchInfo = await HLTV.getMatch({id: matcheId})
    matchInfo = _matchInfo
    console.log('')
    console.log(matchInfo)
  } catch (err) {
    console.log(err)
  }

  spinner.stop()

  general(matchInfo)

  if (matchInfo.maps.length) {
    maps(matchInfo.maps)
  }

  if (matchInfo.vetoes.length) {
    vetoes(matchInfo.vetoes, matchInfo.team1.name)
  }

  if (matchInfo.streams.length) {
    streams(matchInfo.streams)
  }
}

export default matchInfo
