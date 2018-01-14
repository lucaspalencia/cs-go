import errorLog from '../../utils/error'
import resultsList from './list'

const results = async (limit) => {
  try {
    await resultsList(limit)
  } catch (err) {
    errorLog(err, 'resultsList()')
  }
}

export default results
