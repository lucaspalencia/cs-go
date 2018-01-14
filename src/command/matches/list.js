import HLTV from 'hltv'
import ora from 'ora'
import inquirer from 'inquirer'
import chalk from 'chalk'
import { limit } from 'stringz'
import { center } from 'wide-align'
import cFonts from '../../utils/cfonts'
import dateFormat from '../../utils/date'

const MAX_WIDTH = 122
const TEAMNAME_WIDTH = 45
const EVENT_WIDTH = 53
const STATUS_WIDTH = 15

const formatStatus = (date, live) => {
  let questionStatus = chalk.green.bold('LIVE')

  if (!live) {
    questionStatus = dateFormat(date)
  }

  return chalk.yellow.bold(questionStatus)
}

const formatQuestionName = (team1, team2, event, date, status) => {
  let teamsName = `${team1.name} vs ${team2.name}`
  let questionStatus = formatStatus(date, status)
  let question = `|⌘${center(teamsName, TEAMNAME_WIDTH)} |${center(chalk.bold(event.name), EVENT_WIDTH)} | ${center(questionStatus, STATUS_WIDTH)} |`

  return question
}

const matchesList = async () => {
  console.log('')
  const spinner = ora('Loading live/next matches').start()

  let matches = await HLTV.getMatches()

  spinner.stop()

  const header = `│ ${center(chalk`{bold.blue Teams}`, TEAMNAME_WIDTH)} │${center(chalk`{bold.blue Event}`, EVENT_WIDTH)} │ ${center(chalk`{bold.blue Status}`, STATUS_WIDTH)} |`

  const questions = [
    {
      name: 'matche',
      message: 'Which match do you want to see?',
      type: 'list',
      pageSize: 45,
      choices: [
        new inquirer.Separator(`${limit('', MAX_WIDTH, '─')}`),
        new inquirer.Separator(header),
        new inquirer.Separator(`${limit('', MAX_WIDTH, '─')}`)
      ]
    }
  ]

  const last = matches.length - 1

  cFonts('Matches')

  matches.forEach((match, index) => {
    const {
      id,
      team1,
      team2,
      event,
      date,
      live
    } = match

    if ((date || live) && team1 && team2) {
      questions[0].choices.push({
        name: formatQuestionName(team1, team2, event, date, live),
        value: id
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
    }
  })

  const answer = await inquirer.prompt(questions)

  return answer
}

export default matchesList
