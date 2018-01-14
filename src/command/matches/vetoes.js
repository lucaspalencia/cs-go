import chalk from 'chalk'
import { basicTable, alignCenter } from '../../utils/table'

const vetoeTeamName = (team, team1) => {
  let teamName = chalk.cyan.bold(team)

  if (team === team1) {
    teamName = chalk.blue.bold(team)
  }

  return teamName
}

const vetoeType = (type) => {
  let typeFormat = chalk.red.bold(type)

  if (type === 'picked') {
    typeFormat = chalk.green.bold(type)
  }

  return typeFormat
}

const vetoes = (vetoes, team1) => {
  const vetoesTable = basicTable({'padding-left': 6, 'padding-right': 6})

  vetoesTable.push(
    [{ colSpan: 3, content: `${chalk.white.bold('Vetoes')}`, hAlign: 'center', vAlign: 'center' }],
    alignCenter([
      'Team',
      'Map',
      'Type'
    ])
  )

  vetoes.forEach((vetoe) => {
    vetoesTable.push(
      alignCenter([
        vetoeTeamName(vetoe.team.name, team1),
        chalk.hex('#F59E5B').bold(vetoe.map),
        vetoeType(vetoe.type)
      ])
    )
  })

  console.log(vetoesTable.toString())
  console.log('')
  console.log('')
}

export default vetoes
