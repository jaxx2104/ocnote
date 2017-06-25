<template>
  <div class="brand">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Brand',
  data () {
    return {
      title: 'OCNOTE'
    }
  }
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
