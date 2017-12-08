import chalk from 'chalk'
import table from '../../utils/table'

const alignCenter = columns =>
  columns.map(content => ({ content, hAlign: 'center', vAlign: 'center' }))

const formatPercentageNumber = (value) => {
  let percentage = `${chalk.red.bold(value)}`

  if (parseInt(value) >= 55) {
    percentage = `${chalk.green.bold(value)}`
  }

  return percentage
}

const mapStatistics = (maps) => {
  const mapsTable = table.basicTable({'padding-left': 5, 'padding-right': 5})
  let headerContent = 'Map win statistics'

  mapsTable.push(
    [{ colSpan: 5, content: `${chalk.white.bold(headerContent)}`, hAlign: 'center', vAlign: 'center' }],
    alignCenter([
      'Map',
      'Win (%)',
      'CT win (%)',
      'TR win (%)',
      'Times played'
    ])
  )

  Object.keys(maps).forEach((map) => {
    let mapInfo = maps[map]

    mapsTable.push(
      alignCenter([
        chalk.hex('#F59E5B').bold(map),
        formatPercentageNumber(mapInfo.winningPercentage),
        formatPercentageNumber(mapInfo.ctWinningPercentage),
        formatPercentageNumber(mapInfo.tWinningPercentage),
        chalk.white.bold(mapInfo.timesPlayed)
      ])
    )
  });

  console.log(mapsTable.toString())
}

export default mapStatistics
