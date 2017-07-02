<template>
  <transition name="fade">
    <div class="search" v-show="isShow">
      <List :items="items"></List>
      <div class="search-box">
        <h1>{{ title }}</h1>
        <p>{{ msg }}</p>
        <md-input-container>
          <label>Keyword</label>
          <md-input v-model="keyword"></md-input>
        </md-input-container>
        <Slider v-for="(param, key) in params" :key="key" :title="key" :min="param.min" :max="param.max" :rangeMin="param.min" :rangeMax="param.max"></Slider>
      </div>
    </div>
  </transition>
</template>

<script>
import Slider from "../components/Slider"
import List from "../components/List"
import axios from 'axios'
import qs from 'querystring'

export default {
  name: 'Search',
  data() {
    return {
      title: 'Search',
      msg: 'Welcome to Your Vue.js App',
      count: 0,
      items: [],
      keyword: '',
      params: {
        height: { min: 130, max: 180 },
        bust: { min: 50, max: 120 },
        west: { min: 50, max: 120 },
        hip: { min: 50, max: 120 }
      }
    }
  },
  props: ["isShow"],
  mounted() {
    events.$on('search', this.search)
    events.$on('updateQuery', this.updateQuery)
    events.$on('setQuery', this.setQuery)
    this.search()
  },
  methods: {
    updateQuery: function (key, values) {
      this.params[key].min = values[0]
      this.params[key].max = values[1]
      // console.log(this.params)
    },
    setQuery: function (key, values) {
      this.params[key].min = values[0]
      this.params[key].max = values[1]
      events.$emit('search', this.params)
    },
    search: function (params = {}) {
      const instance = axios.create({
        baseURL: 'http://localhost:3000',
        timeout: 1000,
        headers: { 'X-Custom-Header': 'foobar' }
      });
      const options = {
        gte_height: params.height ? params.height.min : 0,
        lte_height: params.height ? params.height.max : 200,
        gte_bust: params.bust ? params.bust.min : 0,
        lte_bust: params.bust ? params.bust.max : 200,
        gte_west: params.west ? params.west.min : 0,
        lte_west: params.west ? params.west.max : 200,
        gte_hip: params.hip ? params.hip.min : 0,
        lte_hip: params.hip ? params.hip.max : 200,
        gte_birthday: '1990-01-01',
        lte_birthday: '2020-01-01',
        limit: 20
      }
      instance.get(`/actress?${qs.stringify(options)}`)
        .then((response) => {
          this.count = response.data.count
          this.items = response.data.rows
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },

  computed: {
  },
  components: { Slider, List }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search {
  top: 64px;
  position: absolute;
}

.search-box {
  width: 480px;
  margin: 60px auto 0 auto;
}

.md-input-container label {
  color: #D81B60;
  font-weight: 900;
}

.md-input-container.md-has-value input {
  color: white;
}
</style>
