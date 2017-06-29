import axios from 'axios'
import base64 from 'urlsafe-base64'
import { apis, options } from '~/config/db.js'
import fs from 'fs'
import qs from 'querystring'

export const getApi = ({key, ext}) => {
  const api = apis[key]
  let option = options[key]
  if (ext) {
    option = Object.assign(option, ext)
  }
  return axios
    .get(api + '?' + qs.stringify(option))
    .then(res => res.data.result)
    .catch((err) => { console.error('getApiのエラー', err.message) })
}

export const getImage = (params) => {
  console.log(params)
  return axios
    .get(params.imageUrl, {responseType: 'arraybuffer'})
    .then((response) => { return Buffer.from(response.data, 'binary').toString('base64') })
    .then((res) => {
      const img = base64.decode(res)
      fs.writeFile(params.savePath, img, (err) => {
        if (err) {
          console.log(err.message)
        }
        console.log(params.savePath)
      })
    })
}

export const fileExist = (params) => {
  return new Promise((resolve, reject) => {
    fs.stat(params.savePath, (err, stat) => {
      if (err == null) {
        return reject(new Error('image file exist'))
      } else if (err.code === 'ENOENT') {
        return resolve(params)
      } else {
        return reject(new Error('image file error'))
      }
    })
  })
}
