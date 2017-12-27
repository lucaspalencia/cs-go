import HLTV from 'hltv'
import ora from 'ora'
import inquirer from 'inquirer'
import chalk from 'chalk'
import { limit } from 'stringz'
import { center } from 'wide-align'
import cFonts from '../../utils/cfonts'

const MAX_WIDTH = 114
const TEAMNAME_WIDTH = 45
const EVENT_WIDTH = 45
const STATUS_WIDTH = 15

const formatStatus = (date, status) => {
  let questionStatus = 'LIVE'

  if (status) {
    return questionStatus
  }

  let dateClass = new Date(date)
  let dateDay = `${dateClass.getDate()}/${dateClass.getMonth()}`
  let dateHours = dateClass.getHours()
  let dateMinutes = (dateClass.getMinutes() < 10 ? '0' : '') + dateClass.getMinutes()

  questionStatus = `${dateDay} ${dateHours}:${dateMinutes}`

  return questionStatus
}

const formatQuestionName = (team1, team2, event, date, status) => {
  let teamsName = `${team1.name} vs ${team2.name}`
  let questionStatus = formatStatus(date, status)

  let question = `|⌘${center(teamsName, TEAMNAME_WIDTH)} |${center(chalk.bold(event.name), EVENT_WIDTH)} | ${center(chalk.yellow.bold(questionStatus), STATUS_WIDTH)} |`
  return question
}

const matchesList = async () => {
  console.log('')
  const spinner = ora('Loading matches').start()

  let matches = await HLTV.getMatches()

  spinner.stop()

  const header = `│ ${center(chalk`{bold.blue Teams}`, TEAMNAME_WIDTH)} │${center(chalk`{bold.blue Event}`, EVENT_WIDTH)} │ ${center(chalk`{bold.blue Status}`, STATUS_WIDTH)} |`

  const questions = [
    {
      name: 'matche',
      message: 'Which match do you want to watch?',
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
      live,
    } = match

    if ( (date || live) && team1 && team2 ) {
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
