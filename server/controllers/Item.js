import Model from '~/server/models/Item'
import path from 'path'

class Item {
  constructor () {
    this.attributes = [
      'product_id',
      'title',
      'date',
      'url',
      'image',
      'sample'
    ]
    this.offset = 0
    this.limit = 50
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

    if (query.keyword) {
      where.$or = [
        {name: {$like: `%${query.keyword}%`}},
        {ruby: {$like: `%${query.keyword}%`}}
      ]
    }

    if (query.gte_bust || query.lte_bust) {
      where.bust = {
        $gte: query.gte_bust ? query.gte_bust : 1,
        $lte: query.lte_bust ? query.lte_bust : 100
      }
    }

    if (query.gte_waist || query.lte_waist) {
      where.waist = {
        $gte: query.gte_waist ? query.gte_waist : 1,
        $lte: query.lte_waist ? query.lte_waist : 100
      }
    }

    if (query.gte_hip || query.lte_hip) {
      where.hip = {
        $gte: query.gte_hip ? query.gte_hip : 1,
        $lte: query.lte_hip ? query.lte_hip : 100
      }
    }

    if (query.gte_height || query.lte_height) {
      where.height = {
        $gte: query.gte_height ? query.gte_height : 1,
        $lte: query.lte_height ? query.lte_height : 200
      }
    }

    return Model.findAndCountAll({
      attributes: this.attributes,
      where: where,
      offset: this.offset,
      limit: this.limit
      // order: [query.sort, 'DESC']
    })
  }
}
export default Item
