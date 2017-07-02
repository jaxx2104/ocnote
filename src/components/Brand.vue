<template>
  <transition name="fade" mode="out-in">
    <div class="brand" v-if="isShow">
      <h1>{{title}}</h1>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Brand',
  props: ["isShow"],
  data () {
    return {
      title: 'OCNOTE'
    }
  },
}
</script>

<style>
.brand {
  text-align: center;
  background-color: #D81B60;
  padding: 80px 0;
  margin: 0 auto 0 auto;
}
.brand h1 {
  font-family: 'edosz';
  font-size: 8em;
  color: #F5F5F5;
}

</style>
