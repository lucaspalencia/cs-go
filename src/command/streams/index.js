import errorLog from '../../utils/error'
import streamsList from './list'

const streams = async (limit) => {
  try {
    await streamsList(limit)
  } catch (err) {
    errorLog(err, 'streamsList()')
  }
}

export default streams
