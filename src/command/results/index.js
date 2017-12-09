import chalk from 'chalk'
import resultsList from './list'

const catchError = (err, apiName) => {
  if (err) {
    console.log('')
    console.log('')
    console.log(`${chalk`{red.bold Oops, ${apiName} goes wrong.}`}`)
    console.log('')
    console.log('Please run cs-go again.\nIf it still does not work, feel free to open an issue on https://github.com/lucaspalencia/cs-go/issues')
    process.exit(1)
  }
}

const results = async (limit) => {
  try {
    await resultsList(limit)
  } catch (err) {
    console.log(err)
    catchError(err, 'resultsList()')
  }
}

export default results
