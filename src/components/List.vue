<template>
  <div class="list">
    <Card v-for="(item, key) in items" :key="key" :data="item"></Card>
  </div>
</template>

<script>
import Card from './Card'
export default {
  name: 'List',
  components: {Card},
  data () {
    return {
      title: 'OCNOTE'
    }
  },
  props: ["count", "items", "isShow"]
}
</script>

<style scope>
.list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
