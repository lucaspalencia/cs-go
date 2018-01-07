import chalk from 'chalk'
import table from '../../utils/table'

const alignCenter = columns =>
  columns.map(content => ({ content, hAlign: 'center', vAlign: 'center' }))

const streams = (streams) => {
  const streamsTable = table.basicTable({'padding-left': 2, 'padding-right': 2})

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
