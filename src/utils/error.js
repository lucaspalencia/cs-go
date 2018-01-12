import chalk from 'chalk'

const errorLog = (err, method) => {
  if (err) {
    console.log('')
    console.log('')
    console.log(`${chalk`{red.bold Oops, ${method} goes wrong.}`}`)
    console.log('')
    console.log('Please run cs-go again.\nIf it still does not work, feel free to open an issue on https://github.com/lucaspalencia/cs-go/issues')
    process.exit(1)
  }
}

export default errorLog
