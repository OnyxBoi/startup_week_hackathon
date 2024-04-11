<script setup>
import { ref, onBeforeMount } from 'vue'
import SelectForm from '@/components/SelectForm.vue'
import MuseumModal from '@/components/MuseumModal.vue'
import {
  fetchMuseums,
  fetchCities,
  fetchRegions,
  fetchDepartments,
  fetchThemes
} from '../../services/FetchAPI'

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

let selectedFilters = ref([[], [], [], []])

const datas = ref({})
const cities = ref([])
const departments = ref([])
const regions = ref([])
const themes = ref([])

onBeforeMount(async () => {
  datas.value = await fetchMuseums(selectedFilters.value)
  cities.value = await fetchCities()
  departments.value = await fetchDepartments()
  regions.value = await fetchRegions()
  themes.value = await fetchThemes()
})

function changeSelected(data, type) {
  let index = selectedFilters.value[type].indexOf(data)
  if (index !== -1) {
    selectedFilters.value[type].splice(index, 1)
  } else {
    selectedFilters.value[type].push(data)
  }
}

async function handleSubmit() {
  datas.value = await fetchMuseums(selectedFilters.value)
}

async function handlePreviousPage(url) {
  datas.value = await fetchMuseums(selectedFilters.value, url)
}

async function handleNextPage(url) {
  datas.value = await fetchMuseums(selectedFilters.value, url)
}
</script>

<template>
  <div id="advancedSearchDiv">
    <form action="" @submit.prevent="handleSubmit">
      <details class="collapse collapse-arrow border border-base-300 bg-base-200">
        <summary class="collapse-title text-xl font-medium">Modifier les filtres</summary>
        <div class="collapse-content">
          <div class="select-container">
            <SelectForm
              :datas="cities"
              :default-title="'Villes'"
              :type="0"
              @change-selected="changeSelected"
            />

            <SelectForm
              :datas="departments"
              :default-title="'Départements'"
              :type="1"
              @change-selected="changeSelected"
            />

            <SelectForm
              :datas="regions"
              :default-title="'Régions'"
              :type="2"
              @change-selected="changeSelected"
            />

            <SelectForm
              :datas="themes"
              :default-title="'Domaines thématiques'"
              :type="3"
              @change-selected="changeSelected"
            />
          </div>
          <button class="btn btnMuseum text-white">
            <input type="submit" value="Rechercher" />
          </button>
        </div>
      </details>
    </form>

    <div id="listMuseums">
      <div>
        <div class="card-body museumContainer">
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
              <p class="history">
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
    <div class="pagination">
      <div v-if="datas.previousURL" class="card-actions justify-center paginationButtons previous">
        <button @click="handlePreviousPage(datas.previousURL)"><span>Page précédente</span></button>
      </div>
      <div v-if="datas.nextURL" class="card-actions justify-center paginationButtons next">
        <button @click="handleNextPage(datas.nextURL)"><span>Page suivante</span></button>
      </div>
    </div>
  </div>
  <MuseumModal />
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
}

.paginationButtons {
  display: inline-block;
  border-radius: 4px;
  background-color: #4a55a2;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 17px;
  padding: 16px;
  width: auto;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.paginationButtons span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.next span:after {
  content: '🢂';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -50px;
  transition: 0.5s;
}

.previous span:after {
  content: '🢀';
  position: absolute;
  opacity: 0;
  top: 0;
  left: -50px;
  transition: 0.5s;
}

.next:hover span {
  padding-right: 15px;
}

.previous:hover span {
  padding-left: 15px;
}

.next:hover span:after {
  opacity: 1;
  right: 0;
}

.previous:hover span:after {
  opacity: 1;
  left: 0;
}

#advancedSearchDiv {
  background-color: #c5dff8;
}

.select-container {
  display: flex;
  flex-direction: row;
}

.collapse {
  width: 85vw;
  margin: 3vh 3vw;
}

form {
  display: flex;
  justify-content: center;
}

.btnMuseum {
  background-color: #4a55a2;
}

.museumContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.museumItem {
  width: calc(33.33% - 3vw);
  margin: 2vh 1vw;
  height: 100%;
}

.history {
  height: 25vh;
  overflow-y: auto;
}
</style>
