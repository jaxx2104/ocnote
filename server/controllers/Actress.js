import Model from '~/server/models/Actress'
import Item from '~/server/models/Item'

class Actress {
  constructor () {
    this.attributes = [
      'name',
      'ruby',
      'cup',
      'bust',
      'waist',
      'hip',
      'height',
      'birthday',
      'blood_type',
      'hobby',
      'prefectures',
      'image'
    ]
    this.offset = 0
    this.limit = 50
  }

  save () {

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
      limit: this.limit,
      // order: [query.sort, 'DESC']
      include: [
        {
          model: Item,
          separate: false,
          required: true
        }
      ]
    })
  }
}
export default Actress
