import HLTV from 'hltv'
import ora from 'ora'
import errorLog from '../../utils/error'
import general from './general'
import maps from './maps'
import vetoes from './vetoes'
import streams from './streams'
import headtohead from './headtohead'

const filterMaps = (maps) => {
  let matchMaps = maps.filter((map) => {
    return (map.name != 'tba' && map.result != '')
  })

  return matchMaps
}

const matchInfo = async (matcheId) => {
  console.log('')

  const spinner = ora('Loading match information').start()
  let matchInfo

  try {
    const _matchInfo = await HLTV.getMatch({id: matcheId})
    matchInfo = _matchInfo
  } catch (err) {
    errorLog(err, 'HLTV.getMatch()')
  }

  spinner.stop()

  general(matchInfo)

  if (matchInfo.streams.length) {
    streams(matchInfo.streams)
  }

  if (matchInfo.vetoes.length) {
    vetoes(matchInfo.vetoes, matchInfo.team1.name)
  }

  let maps = filterMaps(matchInfo.maps)

  if (maps.length) {
    maps(matchInfo.maps)
  }

  if (matchInfo.headToHead.length) {
    headtohead(matchInfo.headToHead)
  }
}

export default matchInfo
