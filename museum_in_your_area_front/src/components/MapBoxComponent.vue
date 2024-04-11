
<script>
import mapboxgl from 'mapbox-gl'
import { ref } from 'vue'

mapboxgl.accessToken =
  'pk.eyJ1Ijoic3lsdmFpbmdhbHRpZXIiLCJhIjoiY2tsZ3JoZ3kyMWV3OTJ3cDdrcjM0azh0eiJ9.zH81EkDqnNnXFigXe1f7PQ'

let museumMap
let mapMarkers = ref([])

let latitude = ref(44.837789)
let longitude = ref(-0.57918)

let locationAnswerContainer;

const datas = [
  {
    name: 'Musée 1',
    coordonnees: '48.581229, 7.751984'
  },
  {
    name: 'Musée 2',
    coordonnees: '45.321359, 0.586014'
  },
  {
    name: 'Musée 3',
    coordonnees: '47.998314, 2.729233'
  },
  {
    name: 'Musée 4',
    coordonnees: '44.79958240429276, 1.6175266643276274'
  }
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
      center: [longitude.value, latitude.value],
      zoom: 10
    })

    museumMap = map

    locationAnswerContainer = document.getElementById('location-answer-container')

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(coordonnees, showError)
    } else {
      locationAnswerContainer.innerHTML = "La géolocalisation n'est pas supportée par ce navigateur."
    }
  }
}

async function coordonnees(pos) {
  let crd = pos.coords

  latitude.value = crd.latitude
  longitude.value = crd.longitude

  let userCoordinates = [longitude.value, latitude.value]

  museumMap.flyTo({
    center: userCoordinates
  })

  placeMarkers(datas)
}

function placeMarkers(datas) {
  datas.forEach((data) => {
    const name = data.name
    const innerHtmlContent = `<div style="min-width: 600px;font-size: large;color : black;">
            <h4 class="h4Class">${name} </h4> 
        </div>`

    const divElement = document.createElement('div')
    const assignBtn = document.createElement('div')
    assignBtn.innerHTML = `<button class="btn btn-success btn-simple text-white" > Voir le musée </button>`
    divElement.innerHTML = innerHtmlContent
    divElement.appendChild(assignBtn)
    assignBtn.addEventListener('click', () => {
      console.log('Button clicked : ' + name)
    })

    const popup = new mapboxgl.Popup({
      offset: 25
    }).setDOMContent(divElement)

    const coords = data.coordonnees.split(', ')
    const marker = new mapboxgl.Marker()
      .setLngLat([coords[1], coords[0]])
      .setPopup(popup)
      .addTo(museumMap)
    mapMarkers.value.push(marker)
  })
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      locationAnswerContainer.innerHTML = "L'utilisateur a refusé la demande de géolocalisation."
      break
    case error.POSITION_UNAVAILABLE:
      locationAnswerContainer.innerHTML = "Les informations de localisation sont indisponibles."
      break
    case error.TIMEOUT:
      locationAnswerContainer.innerHTML = "La demande de localisation de l'utilisateur a expiré."
      break
  }

  placeMarkers(datas)
}
</script>

<template>
  <div id="location-answer-container"></div>
  <div ref="mapContainer" id="map-container" class="map-container"></div>
</template>

<style scoped>
.map-container {
  height: 78.5vh;
  flex: 1;
}

#location-answer-container {
  padding: 2vh 2vw;
  margin: 2vh 2vw;
  width: max-content;
  border-radius: 10px;

  position: absolute;
  z-index: 1;
}

#location-answer-container:empty {
  display: none;
}

#location-answer-container:not(:empty) {
  background-color: #7895cb;
}
</style>
