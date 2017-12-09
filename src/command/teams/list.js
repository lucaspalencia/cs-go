import HLTV from 'hltv'
import inquirer from 'inquirer'
import chalk from 'chalk'
import ora from 'ora'
import { limit } from 'stringz'
import { center } from 'wide-align'
import cFonts from '../../utils/cfonts'

const MAX_WIDTH = 60
const TEAMNAME_WIDTH = 20
const RANK_WIDTH = 11
const POINTS_WIDTH = 20

const formatQuestionName = (name, place, points) => {
  let question = `|⌘${center(name, TEAMNAME_WIDTH)} |${center(place.toString(), RANK_WIDTH)} | ${center(points.toString(), POINTS_WIDTH)} |`

  switch (place) {
    case 1: {
      question = `|⌘${center(chalk.yellow.bold(name), TEAMNAME_WIDTH)} |${center(chalk.yellow.bold(place.toString()), RANK_WIDTH)} | ${center(chalk.yellow.bold(points.toString()), POINTS_WIDTH)} |`
      break
    }

    case 2: {
      question = `|⌘${center(chalk.cyan.bold(name), TEAMNAME_WIDTH)} |${center(chalk.cyan.bold(place.toString()), RANK_WIDTH)} | ${center(chalk.cyan.bold(points.toString()), POINTS_WIDTH)} |`
      break
    }

    case 3: {
      question = `|⌘${center(chalk.magenta.bold(name), TEAMNAME_WIDTH)} |${center(chalk.magenta.bold(place.toString()), RANK_WIDTH)} | ${center(chalk.magenta.bold(points.toString()), POINTS_WIDTH)} |`
      break
    }
  }

  return question
}

const teamsList = async () => {
  console.log('')
  const spinner = ora('Loading teams').start()

  let teams = await HLTV.getTeamRanking()

  spinner.stop()

  const header = `│ ${center(chalk`{bold.blue Team}`, TEAMNAME_WIDTH)} │ ${center(chalk`{bold.blue Rank}`, RANK_WIDTH)}│ ${center(chalk`{bold.blue Points}`, POINTS_WIDTH)} │`

  const questions = [
    {
      name: 'team',
      message: 'Which team do you want to get info?',
      type: 'list',
      pageSize: 45,
      choices: [
        new inquirer.Separator(`${limit('', MAX_WIDTH, '─')}`),
        new inquirer.Separator(header),
        new inquirer.Separator(`${limit('', MAX_WIDTH, '─')}`)
      ]
    }
  ]

  const last = teams.length - 1

  cFonts('by HLTV')

  teams.forEach((teamInfo, index) => {
    const {
      team,
      place,
      points
    } = teamInfo

    questions[0].choices.push({
      name: formatQuestionName(team.name, place, points),
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
