import { getApi, getImage, fileExist } from './services/request.js'
import { setting, batch } from '~/config/db.js'
import delay from '~/utils/delay.js'
import Actress from './controllers/Actress'
import Item from './controllers/Item'
import path from 'path'

export const parseApi = (data) => {
  const Model = batch.param === 'items' ? new Item() : new Actress()
  for (const data of data[batch.param]) {
    Model.save(data)
  }
}

export const parseImage = (data) => {
  for (const data of data[batch.param]) {
    if (data.imageURL) {
      const imageUrl = data.imageURL.large
      Promise.resolve({
        imageUrl: imageUrl,
        savePath: `${setting.basedir}/static/images/${batch.param}/${path.basename(imageUrl)}`
      })
        .then(fileExist)
        .then(getImage)
        .catch(errorHandle)
    }
  }
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}

export const errorHandle = (err) => {
  console.error(err.message)
}

export const getRecord = () => {
  const loop = Math.ceil((batch.max - batch.min) / batch.limit)
  console.log(batch.max - batch.min)
  for (let i = 0; i < loop; i++) {
    const offset = (batch.limit * i) + batch.min
    // console.log(offset, setting.timeout)

    Promise.resolve({
      index: i,
      key: batch.param,
      ext: {
        offset: offset
      }
    })
      .then(delay)
      .then(getApi)
      .then(parseImage)
      .then(parseApi)
      .catch(errorHandle)
  }
}

getRecord()
