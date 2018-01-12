import chalk from 'chalk'
import { basicTable, alignCenter } from '../../utils/table'

const streams = (streams) => {
  const streamsTable = basicTable({'padding-left': 1, 'padding-right': 1})

  streamsTable.push(
    [{ colSpan: 3, content: `${chalk.white.bold('Streams')}`, hAlign: 'center', vAlign: 'center' }],
    alignCenter([
      'Name',
      'Link',
      'Viewers'
    ])
  )

  streams.forEach((stream) => {
    streamsTable.push(
      alignCenter([
        chalk.white.bold(stream.name),
        chalk.blue.bold(stream.link),
        chalk.hex('#F59E5B').bold(stream.viewers)
      ])
    )
  })

  console.log(streamsTable.toString())
  console.log('')
  console.log('')
}

export default streams
