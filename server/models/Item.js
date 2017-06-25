import Sequelize from 'sequelize'
import db from '~/server/services/db'

const Item = db.define('item', {
  product_id: { type: Sequelize.INTEGER },
  actress_id: { type: Sequelize.INTEGER },
  title: { type: Sequelize.STRING },
  date: { type: Sequelize.DATE },
  genre_id: { type: Sequelize.INTEGER },
  series_id: { type: Sequelize.INTEGER },
  maker_id: { type: Sequelize.INTEGER },
  director_id: { type: Sequelize.INTEGER },
  url: { type: Sequelize.STRING },
  image: { type: Sequelize.STRING },
  sample: { type: Sequelize.STRING }
}, {
  timestamps: true,
  paranoid: false,
  underscored: true,
  freezeTableName: true
})

export default Item
