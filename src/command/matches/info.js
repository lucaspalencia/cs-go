import HLTV from 'hltv'
import ora from 'ora'
import errorLog from '../../utils/error'
import general from './general'
import mapsResults from './mapsResults'
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

  try {
    const matchInfo = await HLTV.getMatch({id: matcheId})

    spinner.stop()

    general(matchInfo)

    if (matchInfo.vetoes.length) {
      vetoes(matchInfo.vetoes, matchInfo.team1.name)
    }

    let maps = filterMaps(matchInfo.maps)

    if (maps.length) {
      mapsResults(matchInfo.maps)
    }

    if (matchInfo.streams.length) {
      streams(matchInfo.streams)
    }

    if (matchInfo.headToHead.length) {
      headtohead(matchInfo.headToHead)
    }
  } catch (err) {
    errorLog(err, 'HLTV.getMatch()')
  }
}

export default matchInfo
