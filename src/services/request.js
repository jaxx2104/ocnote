import axios from 'axios'
import base64 from 'urlsafe-base64'
import { apis, options } from '../../config.js'
import fs from 'fs'
import qs from 'querystring'

exports.getApi = ({key, ext}) => {
  const api = apis[key]
  let option = options[key]
  if (ext) {
    option = Object.assign(option, ext)
  }
  return axios
    .get(api + '?' + qs.stringify(option))
    .then(res => res.data.result)
    .catch((err) => { console.error('getApiのエラー', err) })
}

exports.getImage = (url, save) => {
  console.log(url)
  return axios
    .get(url, {responseType: 'arraybuffer'})
    .then((response) => { return Buffer.from(response.data, 'binary').toString('base64') })
    .then((res) => {
      const img = base64.decode(res)
      fs.writeFile(save, img, (err) => {
        if (err) {
          console.log(err)
        }
        console.log(save)
      })
    })
}
