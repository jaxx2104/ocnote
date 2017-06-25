import Sequelize from 'sequelize'
import log from '~/utils/log'
import { db as config } from '~/config/db'

const db = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})

db.authenticate()
  .then(() => message('Success connect DB.'))
  .catch(err => errorMessage('Faild connect DB:', err.message))

const message = function (message, data = '') {
  // console.log(message, data)
  log.info(message, data)
}

const errorMessage = function (message, data = '') {
  // console.error(message, data)
  log.error(message, data)
}

export default db
