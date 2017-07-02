<template>
  <figure class="card">
    <router-link :to="'/items/' + data.items[0].product_id">
      <img :src="'../../static/images/items/' + data.items[0].image">
      <figcaption>
        <h2 class="name">{{data.name}}</h2>
        <p class="size">B{{data.bust}} / W{{data.waist}} / H{{data.hip}}</p>
      </figcaption>
    </router-link>
  </figure>
</template>

<script>
export default {
  name: 'Card',
  props: ["data"],
  data() {
    return {
      index: 0
    }
  },

  mounted() {
  },

  updated() {
  },

  methods: {
    reload: function () {
      setTimeout(() => {
        if (this.index === this.data.items.length) {
          this.index = 0;
        } else {
          this.index++
        }
      }, Math.random() * 10000)
    }
  },

  computed: {
  }
}
</script>

<style scope>
figure {
  flex: 0 0 200px;
  height: 100px;
  object-fit: cover;
  position: relative;
  overflow: hidden;
  margin: 0;
  text-align: center;
}

figcaption {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: rgba(0, 0, 0, .6);
  -webkit-transition: .3s;
  transition: .3s;
  opacity: 0;
}

figure:hover figcaption {
  opacity: 1;
}

h2 {
  font-weight: 900;
  color: #D81B60;
  margin: 0;
}

.size {
  font-size: 0.8em;
  font-weight: 100;
  color: #F5F5F5;
  margin: 0;
}

.item {
  font-size: 0.5em;
  color: #F5F5F5;
  margin: 5px 0;
}
</style>
