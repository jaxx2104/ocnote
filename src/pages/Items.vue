<template>
  <transition name="fade">
    <div class="item">
      <img >
      <h1>{{ title }}</h1>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      id: 10528,
      product_id: "kawd00794",
      actress_id: 1038133,
      title: "title",
      date: "2017-03-04T01:01:00.000Z",
      genre_id: "6533,6548,4025,5022,1027,6006",
      series_id: null,
      maker_id: 4469,
      director_id: 101159,
      url: "http://localhost",
      image: "kawd00794pl.jpg",
      sample: "http://www.dmm.co.jp/litevideo/-/part/=/cid=kawd00794/size=720_480/",
      created_at: "2017-06-25T17:31:18.000Z",
      updated_at: "2017-06-25T17:31:18.000Z"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
