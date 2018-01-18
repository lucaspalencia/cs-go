import HLTV from 'hltv'
import ora from 'ora'
import chalk from 'chalk'
import cFonts from '../../utils/cfonts'
import { basicTable, alignCenter } from '../../utils/table'

const convertResult = (result) => {
  let resultArray = result.replace(/\s/g, '').split('-')

  let resultsInt = resultArray.map((result) => {
    return parseInt(result)
  })

  return resultsInt
}

const formatName = (team1, team2, result) => {
  let resultsInt = convertResult(result)
  let teamsName = `${chalk.green.bold(team1.name)} vs ${chalk.red.bold(team2.name)}`

  if (resultsInt[0] < resultsInt[1]) {
    teamsName = `${chalk.red.bold(team1.name)} vs ${chalk.green.bold(team2.name)}`
  }

  return teamsName
}

const formatResult = (result) => {
  let resultsInt = convertResult(result)
  let finalResult = `${chalk.green.bold(resultsInt[0])} : ${chalk.red.bold(resultsInt[1])}`

  if (resultsInt[0] < resultsInt[1]) {
    finalResult = `${chalk.red.bold(resultsInt[0])} : ${chalk.green.bold(resultsInt[1])}`
  }

  return finalResult
}

const resultsList = async (limit) => {
  console.log('')
  const spinner = ora('Loading last results').start()
  const resultsTable = basicTable({'padding-left': 2, 'padding-right': 2})

  let headerContent = `Last ${limit} results`

  resultsTable.push(
    [{ colSpan: 4, content: `${chalk.white.bold(headerContent)}`, hAlign: 'center', vAlign: 'center' }],
    alignCenter([
      'Teams',
      'Result',
      'Format',
      'Event'
    ])
  )

  let results = await HLTV.getResults()

  spinner.stop()

  cFonts('Results')

  results.slice(0, limit).forEach((result) => {
    resultsTable.push(
      alignCenter([
        formatName(result.team1, result.team2, result.result),
        formatResult(result.result),
        chalk.white.bold(result.format),
        chalk.hex('#F59E5B').bold(result.event.name)
      ])
    )
  })

  console.log(resultsTable.toString())
  console.log('')
  console.log('')
}

export default resultsList
