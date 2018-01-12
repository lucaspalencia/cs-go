import chalk from 'chalk'
import { basicTable, alignCenter } from '../../utils/table'

const headtohead = (maps) => {
  const headtoheadTable = basicTable({'padding-left': 2, 'padding-right': 2})

  headtoheadTable.push(
    [{ colSpan: 5, content: `${chalk.white.bold('Head To Head')}`, hAlign: 'center', vAlign: 'center' }],
    alignCenter([
      'Date',
      'Winner',
      'Event',
      'Map',
      'Result'
    ])
  )

  maps.forEach((map) => {
    headtoheadTable.push(
      alignCenter([
        chalk.white.bold(map.date),
        chalk.white.bold(map.winner.name),
        chalk.white.bold(map.event.name),
        chalk.hex('#F59E5B').bold(map.map),
        chalk.white.bold(map.result)
      ])
    )
  })

  console.log(headtoheadTable.toString())
  console.log('')
  console.log('')
}

export default headtohead
