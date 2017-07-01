<template>
  <div class="slider">
    <p class="slider-label">{{title}}</p>
    <div :id="'slider-' + this.title"></div>
  </div>
</template>

<script>
import noUiSlider from 'materialize-css/extras/noUiSlider/nouislider.min.js'
import wNumb from 'wnumb'

export default {
  name: 'Slider',
  data () {
    return {
    }
  },
  props: [
    "title",
    "min",
    "max"
  ],
  mounted () {
    const slider = document.getElementById(`slider-${this.title}`);
    const options = {
	    connect: true,
      tooltips: true,
      format: wNumb({
	    	decimals: 0
    	}),
      range: {
        'min': [ 0 ],
        'max': [ 100 ]
      },
      start: [ this.min, this.max ]
    }
    noUiSlider.create(slider, options);
    slider.noUiSlider.on('update', (values) => {
      console.log(values)
    });
  }
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
