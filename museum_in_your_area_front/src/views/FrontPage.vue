<script setup>
import MuseumModal from '@/components/MuseumModal.vue'
import { ref, onBeforeMount } from 'vue'
import { fetchCities, fetchMuseums, fetchRandom, fetchRegions } from '../../services/FetchAPI';

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

const datas = ref({})

onBeforeMount(async () => {
  try {
    datas.value = await fetchRandom();
  } catch (error) {
    console.error("Une erreur s'est produite lors de la récupération des données aléatoires:", error);
  }
})
console.log(datas.value)
</script>

<template>
  <div id="frontPageDiv" class="centeredDiv">
    <div
      class="card pageBody bg-base-100 shadow-xl centeredDiv"
      style="margin-top: 3rem; margin-bottom: 3rem"
    >
      <div class="card-body">
        <div class="centeredDiv text-center">
          <img src="../assets/MIYA-no-background.png" style="max-width: 75%" />
          <h1 class="" style="font-size: 3rem">Bienvenue sur Museum in Your Area !</h1>
          <p>
            Plongez dans le monde fascinant de la culture et de l'histoire à portée de main. Notre
            plateforme vous invite à découvrir une multitude de musées à proximité de chez vous,
            offrant une immersion unique dans diverses périodes, cultures et disciplines
            artistiques.
          </p>
          <br />
          <p>
            Que vous soyez passionné d'art contemporain, d'histoire ancienne, de sciences naturelles
            ou de tout autre domaine, Museum in Your Area (ou MIYA pour faire court) vous permet
            d'explorer et de planifier vos visites en quelques clics seulement.
          </p>
          <br />
          <p>
            Utilisez nos filtres intelligents pour affiner votre recherche selon vos préférences :
            localisation, thématique, horaires d'ouverture et bien plus encore. Que vous soyez un
            habitué des musées ou un novice curieux, notre plateforme est conçue pour vous offrir
            une expérience sur mesure.
          </p>
          <br />
          <p>
            Que vous souhaitiez passer une après-midi enrichissante en famille, organiser une sortie
            éducative avec des amis ou simplement vous évader seul(e) au cœur de la culture, MIYA
            est votre compagnon idéal pour explorer le riche patrimoine muséal qui vous entoure.
          </p>
          <br />
          <p>
            Préparez-vous à élargir vos horizons, à nourrir votre curiosité et à créer des souvenirs
            inoubliables. Bienvenue sur MIYA, où chaque visite est une aventure à part entière.
          </p>
        </div>
        <div class="card-actions justify-center">
          <router-link to="/map-search">
            <button class="btn btn-primary text-white">
              Rechercher les musées autour de moi <img src="../assets/map-marker-1-white.svg" />
            </button>
          </router-link>
          <router-link to="/advanced-search">
            <button class="btn btn-success text-white">
              Recherche avancée <img src="../assets/search-white.svg" />
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <div id="randomMuseums">
      <div class="card card-bordered bg-base-100 shadow-xl centeredDiv" style="margin-bottom: 3rem">
        <div class="card-body" style="display: flex; flex-direction: row; gap: 5rem">
          <div
            v-for="data in datas.data"
            :key="data.id"
            class="card w-96 bg-base-100 shadow-xl museumItem"
          >
            <figure>
              <img src="../assets/MIYA-no-background.png" style="max-width: 75%" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{{ data.official_name }}</h2>
              <p class="card-description">
                {{ data.history }}
              </p>
              <div class="card-actions justify-end">
                <button class="btn btnMuseum btn-primary text-white" @click="openModal(data.id)">
                  Découvrir le musée !
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <MuseumModal />
</template>

<style scoped>
#frontPageDiv {
  background-color: #c5dff8;
}

.centeredDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.pageBody {
  width: 65rem;
}

#randomMuseums {
  display: flex;
  flex-direction: row;
  gap: 5rem;
}

.card-description{
  height: 25vh;
  overflow-y: auto;
}
</style>
