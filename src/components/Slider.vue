<template>
  <div class="slider">
    <p class="slider-label">{{title}}</p>
    <div :id="'slider-' + title">
      <input type="hidden" class="slider-min" :value="min">
      <input type="hidden" class="slider-max" :value="max">
    </div>
  </div>
</template>

<script>
import noUiSlider from 'materialize-css/extras/noUiSlider/nouislider.min.js'
import wNumb from 'wnumb'

export default {
  name: 'Slider',
  data () {
    return {
      options: {
        connect: true,
        tooltips: true,
        format: wNumb({
          decimals: 0
        }),
        range: {
          'min': [ this.rangeMin ],
          'max': [ this.rangeMax ]
        },
        start: [ this.min, this.max ]
      }
    }
  },
  props: [
    "title",
    "rangeMin",
    "rangeMax",
    "min",
    "max"
  ],
  updated () {
  },
  mounted () {
    this.slider = document.getElementById(`slider-${this.title}`);
    noUiSlider.create(this.slider, this.options);
    this.slider.noUiSlider.on('update', (values) => {
      events.$emit('updateQuery', this.title, values)
    });
    this.slider.noUiSlider.on('set', (values) => {
      events.$emit('setQuery', this.title, values)
    });
  },
  /*
  watch: {
    min: function(val, oldVal) {
      events.$emit('add-todo', val)

      // this.slider.noUiSlider.set(val);
    },
    max: function(val, oldVal) {
      this.slider.noUiSlider.set(val);
    }
  },
  */
}
</script>

<style>
.slider p {
  font-weight: 900;
  text-align: left;
}
.noUi-horizontal .noUi-handle, .noUi-vertical .noUi-handle {
  background-color: #D81B60;
}
.noUi-target.noUi-horizontal .noUi-tooltip {
  background-color: #D81B60;
}
.noUi-connect {
  background-color: #D81B60;
}
</style>
