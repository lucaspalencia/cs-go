import HLTV from 'hltv'
import ora from 'ora'
import chalk from 'chalk'
import cFonts from '../../utils/cfonts'
import { basicTable, alignCenter } from '../../utils/table'

const streamsList = async (limit) => {
  console.log('')
  const spinner = ora('Loading live streams').start()
  const streamsTable = basicTable({'padding-left': 2, 'padding-right': 2})

  let streams = await HLTV.getStreams()

  spinner.stop()

  cFonts('Streams')

  streamsTable.push(
    [{ colSpan: 4, content: `${chalk.white.bold('Live streams')}`, hAlign: 'center', vAlign: 'center' }],
    alignCenter([
      'Name',
      'Country',
      'Link',
      'Viewers'
    ])
  )

  streams.forEach((stream) => {
    streamsTable.push(
      alignCenter([
        chalk.white.bold(stream.name),
        chalk.cyan.bold(stream.country.name),
        chalk.blue.bold(`http://hltv.org${stream.hltvLink}`),
        chalk.hex('#F59E5B').bold(stream.viewers)
      ])
    )
  })

  console.log(streamsTable.toString())
  console.log('')
  console.log('')
}

export default streamsList
