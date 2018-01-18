import chalk from 'chalk'
import dateFormat from '../../utils/date'
import { basicTable, alignCenter } from '../../utils/table'

const headtohead = (maps) => {
  const headtoheadTable = basicTable({'padding-left': 2, 'padding-right': 2})

  headtoheadTable.push(
    [{ colSpan: 5, content: `${chalk.white.bold('Last head to head matches')}`, hAlign: 'center', vAlign: 'center' }],
    alignCenter([
      'Date',
      'Winner',
      'Event',
      'Map',
      'Result'
    ])
  )

  maps.slice(0,10).forEach((map) => {
    headtoheadTable.push(
      alignCenter([
        chalk.white.bold(dateFormat(map.date)),
        chalk.magenta.bold(map.winner.name),
        chalk.blue.bold(map.event.name),
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
