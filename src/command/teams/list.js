import inquirer from 'inquirer'
import { limit } from 'stringz'
import { center } from 'wide-align'

const MAX_WIDTH = 60
const TEAMNAME_WIDTH = 20
const RANK_WIDTH = 11
const POINTS_WIDTH = 20

const teamsList = async (teams) => {
  const header = `│ ${center('Team', TEAMNAME_WIDTH)} │ ${center('Rank', RANK_WIDTH)}│ ${center('Points', POINTS_WIDTH)} │`

  const questions = [
    {
      name: 'team',
      message: 'Which team do you want to get info?',
      type: 'list',
      pageSize: 100,
      choices: [
        new inquirer.Separator(`${limit('', MAX_WIDTH, '─')}`),
        new inquirer.Separator(header),
        new inquirer.Separator(`${limit('', MAX_WIDTH, '─')}`)
      ]
    }
  ]

  const last = teams.length - 1

  teams.map((teamInfo, index) => {
    const {
      team,
      place,
      points
    } = teamInfo

    questions[0].choices.push({
      name: `|⌘ ${center(team.name, TEAMNAME_WIDTH)}|${center(place.toString(), RANK_WIDTH)} | ${center(points.toString(), POINTS_WIDTH)} |`,
      value: team.id
    })

    if (index !== last) {
      questions[0].choices.push(
        new inquirer.Separator(`${limit('', MAX_WIDTH, '-')}`)
      )
    } else {
      questions[0].choices.push(
        new inquirer.Separator(`${limit('', MAX_WIDTH, '─')}`)
      )
    }
  })

  const answer = await inquirer.prompt(questions)

  return answer
}

export default teamsList
