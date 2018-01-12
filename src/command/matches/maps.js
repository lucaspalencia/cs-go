import chalk from 'chalk'
import { basicTable, alignCenter } from '../../utils/table'

const maps = (maps) => {
  const mapsTable = basicTable({'padding-left': 7, 'padding-right': 7})

  mapsTable.push(
    [{ colSpan: 2, content: `${chalk.white.bold('Maps Results')}`, hAlign: 'center', vAlign: 'center' }],
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
