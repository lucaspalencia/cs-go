import CFonts from 'cfonts'

const customFont = text => {
  CFonts.say(text, {
    font: 'chrome',
    align: 'left',
    colors: ['yellow', 'yellow', 'cyan'],
    background: 'black',
    letterSpacing: 1,
    lineHeight: 1,
    space: true
  })
}

export default customFont
