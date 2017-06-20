import { getApi } from './request.js'
import { parseActress, parseItem } from './parse.js'
import delay from '../utils/delay.js'

export const getAllApi = () => {
  const limit = 100
  const min = 1
  const max = 100
  const loop = Math.ceil((max - min) / limit)

  for (let i = 0; i < loop; i++) {
    const offset = (limit * i) + min
    const key = 'items'
    // console.log(offset, timeout)

    Promise.resolve({index: i, key: key, ext: {offset: offset}}, 'aaa')
      .then(delay)
      .then(getApi)
      .then(key === 'actress' ? parseActress : parseItem)
      .catch((err) => { console.error('promiseのエラー', err) })
  }
}

export const getActress = () => {
  getApi({key: 'items'})
    .then(res => {
      console.log(res)
    })
}
