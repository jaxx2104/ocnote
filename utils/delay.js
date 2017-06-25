import { setting } from '~/config/db.js'

const delay = (value) => {
  console.log(value)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value)
    }, setting.timeout * value.index)
  })
}
export default delay
