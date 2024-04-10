<template>
  <p>MapBoxComponent</p>

  <div ref="mapContainer" id="map-container" class="map-container"></div>
</template>
<script>
import mapboxgl from 'mapbox-gl'


mapboxgl.accessToken =
  'pk.eyJ1Ijoic3lsdmFpbmdhbHRpZXIiLCJhIjoiY2tsZ3JoZ3kyMWV3OTJ3cDdrcjM0azh0eiJ9.zH81EkDqnNnXFigXe1f7PQ'
export default {
  mounted() {
    const map = new mapboxgl.Map({
      container: this.$refs.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v12', // Replace with your preferred map style
      center: [-71.224518, 42.213995],
      zoom: 9
    })

    this.map = map
  }
}
</script>