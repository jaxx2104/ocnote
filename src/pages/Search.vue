<template>
  <div class="search">
    <h1>{{ title }}</h1>
    <p>{{ msg }}</p>
    <md-input-container>
      <label>Keyword</label>
      <md-input v-model="keyword"></md-input>
    </md-input-container>
    <Slider
      v-for="(param, key) in params"
      :key="key"
      :title="key"
      :min="param.min"
      :max="param.max"
    ></Slider>
  </div>
</template>

<script>
import Slider from "../components/Slider"

export default {
  name: 'Search',
  data () {
    return {
      title: 'Search',
      msg: 'Welcome to Your Vue.js App',
      keyword: '',
      params: {
        height: {min: 0, max: 100},
        bust: {min: 0, max: 60},
        west: {min: 70, max: 80},
        hip: {min: 80, max: 100}
      }
    }
  },
  components: {Slider}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search {
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
