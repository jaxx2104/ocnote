import { setting, db } from '~/config/db.js'
import { getImage } from '../services/request.js'
import path from 'path'

exports.parseItem = (data) => {
  for (const item of data.items) {
    if (item.imageURL) {
      const imageUrl = item.imageURL.large
      console.log(__dirname, setting.basedir)
      // getImage(imageUrl, `${setting.basedir}/images/items/${path.basename(imageUrl)}`)
    }
    console.log(item)
    // saveItem(item)
  }
}

exports.parseActress = (data) => {
  for (const act of data.actress) {
    if (act.imageURL) {
      const imageUrl = act.imageURL.large
      // getImage(imageUrl, `${setting.basedir}/images/actress/${path.basename(imageUrl)}`)
    }
    // saveActress(act)
  }
}
/*
const saveItem = (data) => {
  var connection = mysql.createConnection(db)
  const record = {
    id: data.id ? data.id : 0,
    title: data.title ? data.title : '',
    product_id: data.product_id ? data.product_id : null,
    date: data.date ? data.date : null,
    url: data.URL ? data.URL : '',
    image: data.imageURL ? path.basename(data.imageURL.large) : '',
    sample: data.sampleMovieURL ? data.sampleMovieURL.size_720_480 : ''
  }
  connection.query('REPLACE INTO item SET ?', record, (error, results, fields) => {
    if (error) console.log(error)
  })
  connection.end()
}

const saveActress = (data) => {
  var connection = mysql.createConnection(db)
  const record = {
    id: data.id ? data.id : 0,
    name: data.name ? data.name : '',
    ruby: data.ruby ? data.ruby : '',
    cup: data.cup ? data.cup : '',
    bust: data.bust ? data.bust : null,
    waist: data.waist ? data.waist : null,
    hip: data.hip ? data.hip : null,
    height: data.height ? data.height : null,
    birthday: data.birthday ? data.birthday : null,
    blood_type: data.blood_type ? data.blood_type : '',
    hobby: data.hobby ? data.hobby : '',
    prefectures: data.prefectures ? data.prefectures : '',
    image: data.imageURL ? path.basename(data.imageURL.large) : ''
  }
  connection.query('REPLACE INTO actress SET ?', record, (error, results, fields) => {
    if (error) throw error
  })
  connection.end()
}
*/
