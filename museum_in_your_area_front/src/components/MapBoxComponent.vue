<script>
import mapboxgl from 'mapbox-gl'
import { ref } from 'vue'

mapboxgl.accessToken =
  'pk.eyJ1Ijoic3lsdmFpbmdhbHRpZXIiLCJhIjoiY2tsZ3JoZ3kyMWV3OTJ3cDdrcjM0azh0eiJ9.zH81EkDqnNnXFigXe1f7PQ'

let museumMap
let mapMarkers = ref([])

const museum_placeholder = {
  M0015: {
    name: 'musée archéologique',
    location: '2 place du château',
    postal_code: '67000',
    city: 'Strasbourg',
    departements: 'Bas-Rhin',
    region: 'Grand Est',
    url: 'www.musees.strasbourg.eu/musee-archeologique',
    phone: '03 68 98 74 90',
    themes: ['Archéologie'],
    history:
      "Création en 1855 par la Société pour la conservation des Monuments historiques d'Alsace (SCMHA) ;  1870 : destruction complète lors de la Guerre franco-prussienne ; à partir de 1871 : recréation des collections et installation au palais Rohan en 1896 ; 1909 à 1939 : gestion du musée par Robert Forrer, pour la Société pour la conservation des Monuments historiques d'Alsace : nombreuses fouilles et enrichissement considérable des collections ; 1946 : donation du musée par la SCMHA à la Ville de Strasbourg (devient musée classé en octobre 1946) ; 1946 à 1981 : gestion par Jean-Jacques Hatt, directeur des Antiquités historiques d'Alsace et professeur à l'Université de Strasbourg : nombreuses fouilles à Strasbourg et sites romains régionaux et enrichissement important des collections gallo-romaines ; 1988 à 1992 : réaménagement muséographique complet. Les collections médiévales sont déposées au musée historique.",
    atout:
      "Collections néolithiques présentant l'ensemble des civilisations entre - 5800 et -2000 ;  collections de protohistoire : Ages du Bronze et du Fer ; très importante section gallo-romaine ; collections mérovingiennes.",
    artists: '',
    key_personnalities: '',
    interest:
      "Palais Rohan, construit de 1739 à 1742 par Robert de Cotte pour le cardinal Armand Gaston de Rohan-Soubise. De style classique, le palais est édifié selon l'ordonnance habituelle de l'hôtel parisien entre cour et jardin.",
    area_protection:
      "Site patrimonial remarquable. Patrimoine mondial de l'UNESCO. Abords d'un Monument historique.",
    creation_year: '1855',
    gps_coordinates: '48.581229, 7.751984',
    modification_date: '07/02/2024'
  },
  M0035: {
    name: "musée national de l'automobile - collection Schlumpf",
    location: '192 avenue de Colmar',
    postal_code: '68051',
    city: 'Mulhouse',
    departements: 'Haut-Rhin',
    region: 'Grand Est',
    url: 'www.citedelautomobile.com/',
    phone: '03 89 33 23 23',
    themes: ['Technique et industrie', 'couscous'],
    history:
      "Le musée conserve la collection des frères Schlumpf (environ 480 pièces dont 422 ont été classées au titre des Monuments historiques), constituée entre 1961 et 1963. Pour effectuer ces achats, Fritz Schlumpf noue une série de contacts avec des « rabatteurs » en France, en Suisse, en Angleterre, en Italie, en Allemagne et aux Etats-Unis. Le riche industriel achète sans répit les voitures européennes de la haute époque en refusant les modèles américains. Dans les années 1970, la crise textile frappe les entreprises Schlumpf et les deux frères sont contraints de déposert le bilan. En 1981, l'Association du Musée national de l'Automobile – qui regroupe la ville de Mulhouse, le Département du Haut-Rhin, la Région Alsace, la Chambre de Commerce et d'Industrie de Mulhouse, l'Automobile Club de France, la Société Panhard et le Comité du salon de l'Automobile – rachète la collection pour 44 millions de francs, rachat autorisé par la Cour de cassation l’année précédente. Le 10 juillet 1982, le Musée national de l’Automobile ouvre au public. En 1989, suite à des arrêts de la Cour d'appel de Paris, le Musée national de l'Automobile est contraint d'ajouter « Collection Schlumpf » à son nom et sur tous les documents mentionnant un élément de la collection. De nouvelles pièces ont été acquises, données ou prêtées depuis 1982.",
    atout:
      "Importante collection automobile couvrant 120 marques et l'histoire de l'automobile européenne de 1878 à nos jours. Plusieurs espaces lèvent le voile sur la vie des collections, sur les problématiques de conservation ou encore sur l'évolution de la mécanique. Une piste d’évolution permet à la Cité de l’Automobile de passer de 4 à 8 hectares et introduit dans ce complexe muséal, un théâtre de plein air. Les voitures reprennent leur mouvement pour le plaisir des visiteurs et des collectionneurs. Elle peut accueillir 4.500 personnes dans ses gradins. Elle propose également un paddock non couvert dans lequel jusqu’à 30 voitures peuvent stationner ainsi qu’un clubhouse équipé d’un garage pour recevoir les clubs et permettre de travailler sur les véhicules. Ses trois anneaux permettent de proposer des spectacles et animations autour de l’automobile ainsi que des défilés des voitures les plus prestigieuses du Musée. Elle est également un lieu d’accueil pour les différents clubs et associations de collectionneurs de voitures.",
    artists: '',
    key_personnalities: 'Hans et Fritz Schlumpf, Ettore et Jean Bugatti',
    interest:
      "Le musée est installé dans une ancienne filature construite en 1880. L'accès à l'imposante entrée de la Cité de l'Automobile se fait grâce à une passerelle enjambant le canal. Cet espace a été conçu par le Studio Milou en 2006 lors de la création des nouveaux espaces d'accueil et de découverte. Il symbolise la création et l'imagination humaine, particulièrement fertiles dans le domaine de l'automobile.",
    area_protection: 'Site patrimonial remarquable.',
    creation_year: '',
    gps_coordinates: '47.76161416701042, 7.327893525261629',
    modification_date: '25/01/2024'
  }
}

const museumData = ref(museum_placeholder)
const selectedMuseum = ref('')

const datas = [
  {
    id: 'M0015',
    name: 'Musée Archéologique',
    coordonnees: '48.581229, 7.751984'
  },
  {
    id: 'M0035',
    name: "musée national de l'automobile - collection Schlumpf",
    coordonnees: '47.76161416701042, 7.327893525261629'
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
    assignBtn.innerHTML = `<button class="btn btn-success btn-simple text-white"  > Voir le musée </button>`
    divElement.innerHTML = innerHtmlContent
    divElement.appendChild(assignBtn)
    assignBtn.addEventListener('click', () => {
      console.log('Button clicked : ' + name)
      function openModal(id) {
      selectedMuseum.value = id
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
      if (museumData.value[selectedMuseum.value].name) {
        modalTitle.innerHTML = museumData.value[selectedMuseum.value].name
        modalName.innerHTML = museumData.value[selectedMuseum.value].name
      } else {
        modalTitle.innerHTML = 'Non communiqué'
        modalName.innerHTML = 'Non Communiqué'
      }
      if (museumData.value[selectedMuseum.value].history) {
        modalHistory.innerHTML = museumData.value[selectedMuseum.value].history
      } else {
        modalHistory.innerHTML = 'Non communiqué'
      }
      let adresse = ''
      if (museumData.value[selectedMuseum.value].location) {
        adresse += museumData.value[selectedMuseum.value].location
        if (museumData.value[selectedMuseum.value].postal_code) {
          adresse += ', ' + museumData.value[selectedMuseum.value].postal_code
        }
        if (museumData.value[selectedMuseum.value].city) {
          adresse += ', ' + museumData.value[selectedMuseum.value].city
        }
        modalAdresse.innerHTML = adresse
      } else {
        modalAdresse.innerHTML = 'Non communiqué'
      }
      if (museumData.value[selectedMuseum.value].gps_coordinates) {
        if (adresse) {
          modalAdresse.innerHTML =
            "<a class='text-blue-400 hover:text-blue-800 hover:underline' href='https://www.google.com/maps/place/" +
            museumData.value[selectedMuseum.value].gps_coordinates +
            "'>" +
            adresse +
            '</a>'
        }
        modalCoordinates.innerHTML =
          "<a class='text-blue-400 hover:text-blue-800 hover:underline' href='https://www.google.com/maps/place/" +
          museumData.value[selectedMuseum.value].gps_coordinates +
          "'>" +
          museumData.value[selectedMuseum.value].gps_coordinates +
          '</a>'
      } else {
        modalCoordinates.innerHTML = 'Non Communiqué'
      }
      if (museumData.value[selectedMuseum.value].url) {
        modalWebsite.innerHTML =
          "<a class='text-blue-400 hover:text-blue-800 hover:underline' href='https://" +
          museumData.value[selectedMuseum.value].url +
          "'>" +
          museumData.value[selectedMuseum.value].url +
          '</a>'
      } else {
        modalWebsite.innerHTML = 'Non communiqué'
      }
      if (museumData.value[selectedMuseum.value].atout) {
        modalAtouts.innerHTML = museumData.value[selectedMuseum.value].atout
      } else {
        modalAtouts.innerHTML = 'Non communiqué'
      }
      if (museumData.value[selectedMuseum.value].artists) {
        modalArtists.innerHTML = museumData.value[selectedMuseum.value].artists
      } else {
        modalArtists.innerHTML = 'Non communiqué'
      }
      if (museumData.value[selectedMuseum.value].key_personnalities) {
        modalKeyCharacters.innerHTML = museumData.value[selectedMuseum.value].key_personnalities
      } else {
        modalKeyCharacters.innerHTML = 'Non communiqué'
      }
      if (museumData.value[selectedMuseum.value].modification_date) {
        modalUpdateDate.innerHTML = museumData.value[selectedMuseum.value].modification_date
      } else {
        modalUpdateDate.innerHTML = 'Non communiqué'
      }
      if (museumData.value[selectedMuseum.value].themes) {
        let themesInnerHTML = ''
        museumData.value[selectedMuseum.value].themes.forEach((theme) => {
          themesInnerHTML += '<li>' + theme + '</li>'
        })
        modalThemes.innerHTML = themesInnerHTML
      } else {
        modalThemes.innerHTML = 'Non communiqué'
      }
      if (museumData.value[selectedMuseum.value].phone) {
        modalPhone.innerHTML = museumData.value[selectedMuseum.value].phone
      } else {
        modalPhone.innerHTML = 'Non communiqué'
      }
      if (museumData.value[selectedMuseum.value].creation_year) {
        modalCreationYear.innerHTML = museumData.value[selectedMuseum.value].creation_year
      } else {
        modalCreationYear.innerHTML = 'Non communiqué'
      }
      if (museumData.value[selectedMuseum.value].area_protection) {
        modalSpaceProtection.innerHTML = museumData.value[selectedMuseum.value].area_protection
      } else {
        modalSpaceProtection.innerHTML = 'Non communiqué'
      }
      if (museumData.value[selectedMuseum.value].interest) {
        modalInterests.innerHTML = museumData.value[selectedMuseum.value].interest
      } else {
        modalInterests.innerHTML = 'Non communiqué'
      }
      modal.showModal()
    }
    openModal(data.id);
      
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

navigator.geolocation.getCurrentPosition(coordonnees)
</script>
<template>
  <div ref="mapContainer" id="map-container" class="map-container"></div>
  <dialog id="museumModal" class="modal">
    <div class="modal-box w-11/12 max-w-6xl">
      <div
        id="modalTitleDiv"
        class=""
        style="display: flex; flex-direction: row; justify-content: space-between"
      >
        <h1 id="modalTitle" class="text-3xl font-bold">
          musée national de l'automobile - collection Schlumpf
        </h1>
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
              <p>
                Importante collection automobile couvrant 120 marques et l'histoire de l'automobile
                européenne de 1878 à nos jours. Plusieurs espaces lèvent le voile sur la vie des
                collections, sur les problématiques de conservation ou encore sur l'évolution de la
                mécanique. Une piste d’évolution permet à la Cité de l’Automobile de passer de 4 à 8
                hectares et introduit dans ce complexe muséal, un théâtre de plein air. Les voitures
                reprennent leur mouvement pour le plaisir des visiteurs et des collectionneurs. Elle
                peut accueillir 4.500 personnes dans ses gradins. Elle propose également un paddock
                non couvert dans lequel jusqu’à 30 voitures peuvent stationner ainsi qu’un clubhouse
                équipé d’un garage pour recevoir les clubs et permettre de travailler sur les
                véhicules. Ses trois anneaux permettent de proposer des spectacles et animations
                autour de l’automobile ainsi que des défilés des voitures les plus prestigieuses du
                Musée. Elle est également un lieu d’accueil pour les différents clubs et
                associations de collectionneurs de voitures.
              </p>
            </div>
          </div>
          <div class="container mb-5">
            <h2 id="modalArtistsTitle" class="text-2xl mb-2">Artistes :</h2>
            <hr />
            <br />
            <div id="modalArtists" class="scrollable-container">
              <p>Non communiqués</p>
            </div>
          </div>
          <div class="container mb-5">
            <div>
              <h2 id="modalMoreInfos" class="text-2xl mb-2">Informations complémenaires:</h2>
              <hr />
              <br />
              <span id="modalSpaceProtectionTitle" class="font-semibold">Protection espace : </span>
              <span id="modalSpaceProtection">Site patrimonial remarquable.</span>
              <br />
              <span id="modalCoordinatesTitle" class="font-semibold">Coordonées GPS : </span>
              <span id="modalCoordinates"
                ><a
                  href="https://www.google.com/maps/place/192+Av.+de+Colmar,+68100+Mulhouse/@47.7613355,7.3252663,17z/data=!3m1!4b1!4m6!3m5!1s0x47919b643619ac3f:0xb4140a1f056c5d5b!8m2!3d47.7613355!4d7.3278466!16s%2Fg%2F11c24x395q?entry=ttu"
                  class="text-blue-400 hover:text-blue-800 hover:underline"
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
              <span id="modalName">Musée national de l'automobile - Collection Schlumpf</span>
              <br />
              <span id="modalAdresseTitle" class="font-semibold">Adresse : </span>
              <span id="modalAdresse"
                ><a
                  id="modalAdresseUrl"
                  href="https://www.google.com/maps/place/192+Av.+de+Colmar,+68100+Mulhouse/@47.7613355,7.3252663,17z/data=!3m1!4b1!4m6!3m5!1s0x47919b643619ac3f:0xb4140a1f056c5d5b!8m2!3d47.7613355!4d7.3278466!16s%2Fg%2F11c24x395q?entry=ttu"
                  class="text-blue-400 hover:text-blue-800 hover:underline"
                  >192 avenue de Colmar, 98051, Mulhouse</a
                ></span
              >
              <br />
              <span id="modalWebsiteTitle" class="font-semibold">Site Web : </span>
              <span id="modalWebsite"
                ><a
                  id="modalWebsiteUrl"
                  href="www.citedelautomobile.com/"
                  class="text-blue-400 hover:text-blue-800 hover:underline"
                  >www.citedelautomobile.com/</a
                ></span
              >
              <br />
              <span id="modalPhoneTitle" class="font-semibold">Téléphone : </span>
              <span id="modalPhone">03 89 33 23 23</span>
              <br />
              <span id="modalCreationYearTitle" class="font-semibold">Année de création : </span>
              <span id="modalCreationYear">Non communiquée</span>
            </div>
          </div>
          <div class="container mb-5">
            <h2 id="ModalHistoryTitle" class="text-2xl mb-2">Histoire :</h2>
            <hr />
            <br />
            <div id="modalHistory" class="scrollable-container">
              <p>
                Le musée conserve la collection des frères Schlumpf (environ 480 pièces dont 422 ont
                été classées au titre des Monuments historiques), constituée entre 1961 et 1963.
                Pour effectuer ces achats, Fritz Schlumpf noue une série de contacts avec des «
                rabatteurs » en France, en Suisse, en Angleterre, en Italie, en Allemagne et aux
                Etats-Unis. Le riche industriel achète sans répit les voitures européennes de la
                haute époque en refusant les modèles américains. Dans les années 1970, la crise
                textile frappe les entreprises Schlumpf et les deux frères sont contraints de
                déposert le bilan. En 1981, l'Association du Musée national de l'Automobile – qui
                regroupe la ville de Mulhouse, le Département du Haut-Rhin, la Région Alsace, la
                Chambre de Commerce et d'Industrie de Mulhouse, l'Automobile Club de France, la
                Société Panhard et le Comité du salon de l'Automobile – rachète la collection pour
                44 millions de francs, rachat autorisé par la Cour de cassation l’année précédente.
                Le 10 juillet 1982, le Musée national de l’Automobile ouvre au public. En 1989,
                suite à des arrêts de la Cour d'appel de Paris, le Musée national de l'Automobile
                est contraint d'ajouter « Collection Schlumpf » à son nom et sur tous les documents
                mentionnant un élément de la collection. De nouvelles pièces ont été acquises,
                données ou prêtées depuis 1982.
              </p>
            </div>
          </div>
          <div class="container mb-5">
            <h2 id="modalKeyCharactersTitle" class="text-2xl mb-2">Personnages Phares :</h2>
            <hr />
            <br />
            <div id="modalKeyCharacters" class="scrollable-container">
              <p>Hans et Fritz Schlumpf, Ettore et Jean Bugatti</p>
            </div>
          </div>
          <div class="container mb-5">
            <h2 id="modalInterestsTitle" class="text-2xl mb-2">Intêrets :</h2>
            <hr />
            <br />
            <div id="modalInterests" class="scrollable-container">
              <p>
                Le musée est installé dans une ancienne filature construite en 1880. L'accès à
                l'imposante entrée de la Cité de l'Automobile se fait grâce à une passerelle
                enjambant le canal. Cet espace a été conçu par le Studio Milou en 2006 lors de la
                création des nouveaux espaces d'accueil et de découverte. Il symbolise la création
                et l'imagination humaine, particulièrement fertiles dans le domaine de l'automobile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </dialog>
</template>

<style scoped>
.map-container {
  height: 78.5vh;
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
</style>
