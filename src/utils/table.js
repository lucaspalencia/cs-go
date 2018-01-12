import Table from 'cli-table2'

const basicTable = (tableStyle) =>
  new Table({
    head: [],
    chars: {
      top: '═',
      'top-mid': '╤',
      'top-left': '╔',
      'top-right': '╗',
      bottom: '═',
      'bottom-mid': '╧',
      'bottom-left': '╚',
      'bottom-right': '╝',
      left: '║',
      'left-mid': '╟',
      mid: '─',
      'mid-mid': '┼',
      right: '║',
      'right-mid': '╢',
      middle: '│'
    },
    style: tableStyle
  })

const alignCenter = columns =>
  columns.map(content => ({ content, hAlign: 'center', vAlign: 'center' }))

export { basicTable, alignCenter }
