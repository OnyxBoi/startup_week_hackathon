<script>
import mapboxgl from 'mapbox-gl'
import { computed, ref } from 'vue'
import { fetchMuseumsMaps } from '../../services/FetchAPI.js'
import { eventBus } from '../stores/eventBus'
import {API_CREDENTIALS}  from '../../GLOBAL_VALUES.js'

mapboxgl.accessToken = API_CREDENTIALS

let museumMap
let mapMarkers = ref([])

const selectedMuseum = ref('')

const datas = ref({})
const latitude = ref(44.837789)
const longitude = ref(-0.57918)
const radius = ref(5)
const userLocalisation = computed(() => ({
  latitude: latitude.value,
  longitude: longitude.value,
  radius: radius.value
}))

let locationAnswerContainer;

export default {
  mounted() {
    eventBus.on('retrieveSlider', async (newRadius) => {
      radius.value = newRadius
      await placeMarkers()
    })

    const cssLink = document.createElement('link')
    cssLink.href = 'https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css'
    cssLink.rel = 'stylesheet'
    document.head.appendChild(cssLink)

    const script = document.createElement('script')
    script.src = 'https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.js'
    document.head.appendChild(script)

    museumMap = new mapboxgl.Map({
      container: this.$refs.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-0.57918, 44.837789],
      zoom: 10
    })

    locationAnswerContainer = document.getElementById('location-answer-container')

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(coordonnees, showError)
    } else {
      locationAnswerContainer.innerHTML = 'Geolocation is not supported by this browser.'
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

  await placeMarkers()
}

async function placeMarkers() {
  mapMarkers.value.forEach((marker) => marker.remove())
  mapMarkers.value = []

  datas.value = await fetchMuseumsMaps(userLocalisation.value)
  datas.value.data.forEach((data) => {
    const name = data.official_name
    const innerHtmlContent = `<div style="font-size: large;color : black; width: 10vw; padding-bottom: 1vh" >
            <h4 class="h4Class">${name} </h4>
        </div>`

    const divElement = document.createElement('div')
    const assignBtn = document.createElement('div')
    assignBtn.innerHTML = `<button class="btn btn-success btn-simple text-white"  > Voir le musée </button>`
    divElement.innerHTML = innerHtmlContent
    divElement.appendChild(assignBtn)
    assignBtn.addEventListener('click', () => {
      console.log('Button clicked : ' + name)

      function openModal(data) {
        selectedMuseum.value = data
        const modal = document.getElementById('museumModal')
        const modalTitle = document.getElementById('modalTitle')
        const modalName = document.getElementById('modalName')
        const modalHistory = document.getElementById('modalHistory')
        const modalAdresse = document.getElementById('modalAdresse')
        const modalWebsite = document.getElementById('modalWebsite')
        const modalAtouts = document.getElementById('modalAtouts')
        const modalArtists = document.getElementById('modalArtists')
        const modalKeyCharacters = document.getElementById('modalKeyCharacters')
        const modalCoordinates = document.getElementById('modalCoordinates')
        const modalUpdateDate = document.getElementById('modalUpdateDate')
        const modalThemes = document.getElementById('modalThemes')
        const modalPhone = document.getElementById('modalPhone')
        const modalCreationYear = document.getElementById('modalCreationYear')
        const modalSpaceProtection = document.getElementById('modalSpaceProtection')
        const modalInterests = document.getElementById('modalInterests')
        modalTitle.innerHTML = data.official_name ? data.official_name : '-'
        modalName.innerHTML = data.official_name ? data.official_name : '-'
        modalHistory.innerHTML = data.history
        let adresse = ''
        adresse += data.Address.address ? data.Address.address : '-'
        adresse += ', ' + data.Address.postal_code ? data.Address.postal_code : '-'
        adresse += ', ' + data.Address.City.city_name ? data.Address.City.city : '-'
        modalAdresse.innerHTML = adresse
        modalAdresse.innerHTML =
          "<a class='text-blue-400 hover:text-blue-800 hover:underline' href='https://www.google.com/maps/place/" +
          data.Coordinate.coordinates +
          "'>" +
          adresse +
          '</a>'
        modalCoordinates.innerHTML =
          "<a class='text-blue-400 hover:text-blue-800 hover:underline' href='https://www.google.com/maps/place/" +
          data.Coordinate.coordinates +
          "'>" +
          data.Coordinate.coordinates +
          '</a>'
        modalWebsite.innerHTML =
          "<a class='text-blue-400 hover:text-blue-800 hover:underline' href='https://" +
          data.Contact.url +
          "'>" +
          data.Contact.url +
          '</a>'
        modalAtouts.innerHTML = data.Detail.highlight ? data.Detail.highlight : '-'
        modalArtists.innerHTML = data.Detail.artist ? data.Detail.artist : '-'
        modalKeyCharacters.innerHTML = data.Detail.key_figure ? data.Detail.key_figure : '-'
        modalUpdateDate.innerHTML = data.Timestamp.update_date ? data.Timestamp.update_date : '-'
        let themesInnerHTML = ''
        data.Thematic_Domains.forEach((theme) => {
          themesInnerHTML += '<li>' + theme.name + '</li>'
        })
        modalThemes.innerHTML = themesInnerHTML
        modalPhone.innerHTML = data.Contact.phone ? data.Contact.phone : '-'
        modalCreationYear.innerHTML = data.Timestamp.creation_year
          ? data.Timestamp.creation_year
          : '-'
        modalSpaceProtection.innerHTML = data.Protection ? data.Protection.space_protection : '-'
        modalInterests.innerHTML = data.Detail.interest ? data.Detail.interest : '-'
        modal.showModal()
      }

      openModal(data)
    })

    const popup = new mapboxgl.Popup({
      offset: 25,
      closeOnMove: true,
      closeButton: false
    }).setDOMContent(divElement)

    const coords = data.Coordinate.coordinates.split(', ')
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
      locationAnswerContainer.innerHTML = 'User denied the request for Geolocation.'
      break
    case error.POSITION_UNAVAILABLE:
      locationAnswerContainer.innerHTML = 'Location information is unavailable.'
      break
    case error.TIMEOUT:
      locationAnswerContainer.innerHTML = 'The request to get user location timed out.'
      break
  }

  placeMarkers(datas)
}

</script>
<template>
  <div id="location-answer-container"></div>
  <div ref="mapContainer" id="map-container" class="map-container"></div>
  <dialog id="museumModal" class="modal">
    <div class="modal-box w-11/12 max-w-6xl">
      <div
        id="modalTitleDiv"
        class=""
        style="display: flex; flex-direction: row; justify-content: space-between"
      >
        <h1 id="modalTitle" class="text-3xl font-bold"></h1>
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            <img src="../assets/x-black.svg" alt="" />
          </button>
        </form>
      </div>
      <hr />
      <div id="modalBody">
        <div class="container modalBodyPart">
          <img src="../assets/MIYA-no-background.png" style="border-radius: 10%" class="mb-5" />
          <div class="container mb-5">
            <div>
              <h2 id="modalThemesTitle" class="text-2xl mb-2">Domaines thématiques :</h2>
              <hr />
              <br />
              <ul id="modalThemes" class="list-disc ml-10">
                <li>Technique et industrie</li>
              </ul>
            </div>
          </div>
          <div class="container mb-5">
            <h2 id="modalAtoutsTitle" class="text-2xl mb-2">Atouts :</h2>
            <hr />
            <br />
            <div id="modalAtouts" class="scrollable-container">
              <p></p>
            </div>
          </div>
          <div class="container mb-5">
            <h2 id="modalArtistsTitle" class="text-2xl mb-2">Artistes :</h2>
            <hr />
            <br />
            <div id="modalArtists" class="scrollable-container">
              <p></p>
            </div>
          </div>
          <div class="container mb-5">
            <div>
              <h2 id="modalMoreInfos" class="text-2xl mb-2">Informations complémenaires:</h2>
              <hr />
              <br />
              <span id="modalSpaceProtectionTitle" class="font-semibold">Protection espace : </span>
              <span id="modalSpaceProtection"></span>
              <br />
              <span id="modalCoordinatesTitle" class="font-semibold">Coordonées GPS : </span>
              <span id="modalCoordinates"
                ><a href="" class="text-blue-400 hover:text-blue-800 hover:underline"
                  >47.76161416701042, 7.327893525261629</a
                ></span
              >
              <br />
              <span id="modalUpdateDateTitle" class="font-semibold"
                >Date de mise à jour des données :
              </span>
              <span id="modalUpdateDate">25/01/2024</span>
            </div>
          </div>
        </div>
        <div class="container modalBodyPart">
          <div class="container mb-5">
            <div>
              <h2 id="modalInfoTitle" class="text-2xl mb-2">Informations générales:</h2>
              <hr />
              <br />
              <span id="modalNameTitle" class="font-semibold">Nom officiel : </span>
              <span id="modalName"></span>
              <br />
              <span id="modalAdresseTitle" class="font-semibold">Adresse : </span>
              <span id="modalAdresse"
                ><a
                  id="modalAdresseUrl"
                  href=""
                  class="text-blue-400 hover:text-blue-800 hover:underline"
                ></a
              ></span>
              <br />
              <span id="modalWebsiteTitle" class="font-semibold">Site Web : </span>
              <span id="modalWebsite"
                ><a
                  id="modalWebsiteUrl"
                  href=""
                  class="text-blue-400 hover:text-blue-800 hover:underline"
                ></a
              ></span>
              <br />
              <span id="modalPhoneTitle" class="font-semibold">Téléphone : </span>
              <span id="modalPhone"></span>
              <br />
              <span id="modalCreationYearTitle" class="font-semibold">Année de création : </span>
              <span id="modalCreationYear"></span>
            </div>
          </div>
          <div class="container mb-5">
            <h2 id="ModalHistoryTitle" class="text-2xl mb-2">Histoire :</h2>
            <hr />
            <br />
            <div id="modalHistory" class="scrollable-container">
              <p></p>
            </div>
          </div>
          <div class="container mb-5">
            <h2 id="modalKeyCharactersTitle" class="text-2xl mb-2">Personnages Phares :</h2>
            <hr />
            <br />
            <div id="modalKeyCharacters" class="scrollable-container">
              <p></p>
            </div>
          </div>
          <div class="container mb-5">
            <h2 id="modalInterestsTitle" class="text-2xl mb-2">Intêrets :</h2>
            <hr />
            <br />
            <div id="modalInterests" class="scrollable-container">
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </dialog>
</template>

<style scoped>
.map-container {
  height: 66vh;
  flex: 1;
}
.modalBodyPart {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
}

#modalBody {
  display: flex;
  flex-direction: row;
  gap: 3rem;
}

.scrollable-container {
  max-height: 200px;
  border: 3px solid #e8e8e8;
  border-radius: 10px;
  padding: 15px;
  overflow-y: auto;
}

#location-answer-container {
  padding: 2vh 2vw;
  margin: 2vh 2vw;
  width: max-content;
  border-radius: 10px;

  position: absolute;
  z-index: 1;

  font-size: 1.5vh;
  color: white;
}

#location-answer-container:empty {
  display: none;
}

#location-answer-container:not(:empty) {
  background-color: #4A55A2;
}
</style>
