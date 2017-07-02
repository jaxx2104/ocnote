<template>
  <div id="app">
    <Navibar></Navibar>
    <div class="contents">
      <Brand :isShow="!isLoad"></Brand >
      <router-view :isShow="isLoad"></router-view>
    </div>
  </div>
</template>

<script>
import "./assets/edosz.ttf";
import Navibar from "./components/Navibar"
import Brand from "./components/Brand"

export default {
  name: 'app',
  components: {Navibar, Brand},
  data () {
    return {
      isLoad: false,
    }
  },
  mounted () {
    setTimeout(() => {
      this.isLoad = true
    }, 1000)
  },
  methods: {
  },



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

/* transtion */
.fade-enter-active {
  transition: all 1s ease;
  position: absolute;
  top: 64px;
}

.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

</style>
