import Model from '~/server/models/Item'
import Actress from '~/server/models/Actress'
import path from 'path'

class Item {
  constructor () {
    this.attributes = [
      'product_id',
      'title',
      'date',
      'genre_id',
      'series_id',
      'maker_id',
      'director_id',
      'url',
      'image',
      'sample'
    ]
    this.sort = 'date'
    this.offset = 0
    this.limit = 20
  }

  save (data) {
    const record = {
      id: data.id ? data.id : 0,
      product_id: data.product_id ? data.product_id : null,
      actress_id: data.iteminfo.actress ? data.iteminfo.actress[0].id : null,
      title: data.title ? data.title : '',
      date: data.date ? data.date : null,
      genre_id: data.iteminfo.genre ? data.iteminfo.genre.map(v => v.id).join(',') : null,
      series_id: data.iteminfo.series ? data.iteminfo.series[0].id : null,
      maker_id: data.iteminfo.maker ? data.iteminfo.maker[0].id : null,
      director_id: data.iteminfo.director ? data.iteminfo.director[0].id : null,
      url: data.URL ? data.URL : '',
      image: data.imageURL ? path.basename(data.imageURL.large) : '',
      sample: data.sampleMovieURL ? data.sampleMovieURL.size_720_480 : ''
    }
    // console.log(record)

    Model.findOrCreate({
      where: { product_id: record.product_id },
      defaults: record
    }).spread((user, created) => {
      console.log(created)
    })
  }

  search (query) {
    const where = {}

    return Model.findAndCountAll({
      attributes: this.attributes,
      where: where,
      offset: this.offset,
      limit: this.limit,
      order: [[this.sort, 'DESC']]
    })
  }
}
export default Item
