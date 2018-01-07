import chalk from 'chalk'
import table from '../../utils/table'

const alignCenter = columns =>
  columns.map(content => ({ content, hAlign: 'center', vAlign: 'center' }))

const maps = (maps) => {
  const mapsTable = table.basicTable({'padding-left': 6, 'padding-right': 6})

  mapsTable.push(
    [{ colSpan: 2, content: `${chalk.white.bold('Maps Result')}`, hAlign: 'center', vAlign: 'center' }],
    alignCenter([
      'Name',
      'Result'
    ])
  )

  maps.forEach((map) => {
    mapsTable.push(
      alignCenter([
        chalk.hex('#F59E5B').bold(map.name),
        chalk.white.bold(map.result)
      ])
    )
  })

  console.log(mapsTable.toString())
  console.log('')
  console.log('')
}

export default maps
