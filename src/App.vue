<template>
  <div id="app">
    <Navibar></Navibar>
    <div class="contents">
      <Brand></Brand>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import "./assets/edosz.ttf";
import axios from 'axios'
import Navibar from "./components/Navibar"
import Brand from "./components/Brand"

export default {
  name: 'app',
  components: {Navibar, Brand},
  data () {
    return {
      count: 0,
      items: []
    }
  },
  mounted () {
    const instance = axios.create({
      baseURL: 'http://localhost:3000',
      timeout: 1000,
      headers: {'X-Custom-Header': 'foobar'}
    });
    instance.get('/item')
      .then((response) => {
        this.count = response.data.count
        this.items = response.data.rows
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style>
body {
  color: #F5F5F5;
  background: #283137;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 500;

}

h1, h2 {
  color: #D81B60;
  font-weight: 900;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #fff;
}

.contents {
  margin: 0 auto 0 auto;
  word-wrap: break-word;
  clear: both;

}

.logo {
  font-family: 'edosz';
  font-size: 4em;
  color: #F5F5F5;
}
</style>
