import Sequelize from 'sequelize'
import db from '~/server/services/db'
import Item from './Item'

const Actress = db.define('actress', {
  name: { type: Sequelize.STRING },
  ruby: { type: Sequelize.STRING },
  cup: { type: Sequelize.STRING },
  bust: { type: Sequelize.INTEGER },
  waist: { type: Sequelize.INTEGER },
  hip: { type: Sequelize.INTEGER },
  height: { type: Sequelize.INTEGER },
  birthday: { type: Sequelize.DATE },
  blood_type: { type: Sequelize.INTEGER },
  hobby: { type: Sequelize.INTEGER },
  prefectures: { type: Sequelize.INTEGER },
  image: { type: Sequelize.INTEGER }
}, {
  timestamps: true,
  paranoid: false,
  underscored: true,
  freezeTableName: true
})

Actress.hasMany(Item, {foreignKey: 'actress_id'})

export default Actress
