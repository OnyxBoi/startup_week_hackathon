<script>
import mapboxgl from 'mapbox-gl'
import { ref } from 'vue'

mapboxgl.accessToken =
  'pk.eyJ1Ijoic3lsdmFpbmdhbHRpZXIiLCJhIjoiY2tsZ3JoZ3kyMWV3OTJ3cDdrcjM0azh0eiJ9.zH81EkDqnNnXFigXe1f7PQ'

let museumMap

export default {
  mounted() {
    const map = new mapboxgl.Map({
      container: this.$refs.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v12', // Replace with your preferred map style
      center: [-0.57918, 44.837789],
      zoom: 10
    })

    museumMap = map
  }
}

let latitude = ref('')
let longitude = ref('')

async function coordonnees(pos) {
  let crd = pos.coords

  latitude.value = crd.latitude
  longitude.value = crd.longitude

  let userCoordinates = [longitude.value, latitude.value]

  museumMap.flyTo({
    center: userCoordinates
  })
}

navigator.geolocation.getCurrentPosition(coordonnees)
</script>

<template>
  <div ref="mapContainer" id="map-container" class="map-container"></div>
</template>

<style scoped>
.map-container {
  height: 78.5vh;
}
</style>
