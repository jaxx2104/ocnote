<template>
  <md-toolbar>
    <h1 class="md-title logo" style="flex: 1">{{title}}</h1>
    <router-link to="/" class="md-button">Top</router-link>
    <router-link to="/actress" class="md-button">Actress</router-link>
    <router-link to="/item" class="md-button">Item</router-link>
  </md-toolbar>
</template>

<script>
export default {
  name: 'Navibar',
  data () {
    return {
      title: 'OCNOTE'
    }
  }
}
</script>

<style>


</style>
