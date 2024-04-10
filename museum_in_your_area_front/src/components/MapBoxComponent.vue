<script>
import mapboxgl from 'mapbox-gl'
import { ref } from 'vue'

mapboxgl.accessToken =
  'pk.eyJ1Ijoic3lsdmFpbmdhbHRpZXIiLCJhIjoiY2tsZ3JoZ3kyMWV3OTJ3cDdrcjM0azh0eiJ9.zH81EkDqnNnXFigXe1f7PQ'

let museumMap;

const datas = [
    {
        "name": "Musée 1",
        "coordonnees": "48.581229, 7.751984"
    },
    {
        "name": "Musée 2",
        "coordonnees": "45.321359, 0.586014"
    },
    {
        "name": "Musée 3",
        "coordonnees": "47.998314, 2.729233"
    },
    {
        "name": "Musée 4",
        "coordonnees": "44.79958240429276, 1.6175266643276274"
    },
]

export default {
  mounted() {
    // Ajouter le style de MapBox
    const cssLink = document.createElement('link')
    cssLink.href = 'https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css'
    cssLink.rel = 'stylesheet'
    document.head.appendChild(cssLink)

    // Ajouter le script de MapBox
    const script = document.createElement('script')
    script.src = 'https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.js'
    document.head.appendChild(script)

    const map = new mapboxgl.Map({
      container: this.$refs.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v12',
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

  placeMarkers(datas);
}

function placeMarkers(datas) {

    datas.forEach((data) => {
        const coords = data.coordonnees.split(', ');
        new mapboxgl.Marker().setLngLat([coords[1], coords[0]]).addTo(museumMap)
    });

//   // Create a default Marker, colored black, rotated 45 degrees.
//   const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
//     .setLngLat([12.65147, 55.608166])
//     .addTo(museumMap)
}

navigator.geolocation.getCurrentPosition(coordonnees)

</script>

<template>
  <div ref="mapContainer" id="map-container" class="map-container"></div>
</template>

<style scoped>
.map-container {
  height: 78.5vh;
  flex: 1;
}
</style>
