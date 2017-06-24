<template>
  <div id="app">
    <h1 class="logo">Logo</h1>
    <img src="./assets/logo.png">
    <div class="navi">
      <router-link to="/">Top</router-link>
      <router-link to="/actress">Actress</router-link>
      <router-link to="/item">Item</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import "./assets/edosz.ttf";
export default {
  name: 'app'
}
</script>

<style>


body {
  text-align: center;
  color: #F5F5F5;
  background: #283137;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 500;

}

h1, h2 {
  color: #E2325A;
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
  color: #E2325A;
}

#app {
  margin-top: 60px;
}

.logo {
  font-family: 'edosz';
  font-size: 4em;
  color: #F5F5F5;
}
</style>
