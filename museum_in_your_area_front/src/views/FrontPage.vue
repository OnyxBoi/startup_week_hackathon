<script setup>
import MuseumModal from '@/components/MuseumModal.vue'
import { ref, onBeforeMount } from 'vue'
import { fetchRandom } from '../../services/FetchAPI';

const selectedMuseum = ref('')

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
  modalCreationYear.innerHTML = data.Timestamp.creation_year ? data.Timestamp.creation_year : '-'
  modalSpaceProtection.innerHTML = data.Protection ? data.Protection.space_protection : '-'
  modalInterests.innerHTML = data.Detail.interest ? data.Detail.interest : '-'
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
                <button class="btn btnMuseum btn-primary text-white" @click="openModal(data)">
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
