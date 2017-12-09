import chalk from 'chalk'
import table from '../../utils/table'

const alignCenter = columns =>
  columns.map(content => ({ content, hAlign: 'center', vAlign: 'center' }))

const formatName = (team, enemyTeam, result) => {
  let resultsInt = convertResult(result)
  let teamsName = `${chalk.green.bold(team)} vs ${chalk.red.bold(enemyTeam.name)}`

  if (resultsInt[0] < resultsInt[1]) {
    teamsName = `${chalk.red.bold(team)} vs ${chalk.green.bold(enemyTeam.name)}`
  }

  return teamsName
}

const convertResult = (result) => {
  let resultArray = result.replace(/\s/g, '').split('-')

  let resultsInt = resultArray.map((result) => {
    return parseInt(result)
  })

  return resultsInt
}

const formatResult = (result) => {
  let resultsInt = convertResult(result)
  let finalResult = `${chalk.green.bold(resultsInt[0])} : ${chalk.red.bold(resultsInt[1])}`

  if (resultsInt[0] < resultsInt[1]) {
    finalResult = `${chalk.red.bold(resultsInt[0])} : ${chalk.green.bold(resultsInt[1])}`
  }

  return finalResult
}

const recentResults = (name, results) => {
  const resultsTable = table.basicTable({'padding-left': 5, 'padding-right': 5})
  let headerContent = 'Recent results'

  resultsTable.push(
    [{ colSpan: 3, content: `${chalk.white.bold(headerContent)}`, hAlign: 'center', vAlign: 'center' }],
    alignCenter([
      'Teams',
      'Score',
      'Event'
    ])
  )

  results.forEach((result) => {
    resultsTable.push(
      alignCenter([
        formatName(name, result.enemyTeam, result.result),
        formatResult(result.result),
        chalk.hex('#F59E5B').bold(result.event.name)
      ])
    )
  })

  console.log(resultsTable.toString())
  console.log('');
  console.log('');
}

export default recentResults
