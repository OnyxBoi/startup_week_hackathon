<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'
import SelectForm from '@/components/SelectForm.vue'


let selectedFilters = ref([[], [], [], []])

const datas = ref({})
const cities = ref([])
const departments = ref([])
const regions = ref([])
const themes = ref([])

onBeforeMount(async () => {
  const responseMuseums = await fetch('http://localhost:3000/api/v1/museums/filter')
  datas.value = await responseMuseums.json()

  const responseCities = await fetch('http://localhost:3000/api/v1/cities')
  cities.value = await responseCities.json()

  const responseDepartments = await fetch('http://localhost:3000/api/v1/departments')
  departments.value = await responseDepartments.json()

  const responseRegions = await fetch('http://localhost:3000/api/v1/regions')
  regions.value = await responseRegions.json()

  const responseThemes = await fetch('http://localhost:3000/api/v1/themes')
  themes.value = await responseThemes.json()
})


function changeSelected(data, type) {
  let index = selectedFilters.value[type].indexOf(data)
  if (index !== -1) {
    selectedFilters.value[type].splice(index, 1)
  } else {
    selectedFilters.value[type].push(data)
  }
}

function handleSubmit() {
  let url = 'http://localhost:3000'

  const filtersActivated = selectedFilters.value.some((filter) => filter.length > 0)

  if (filtersActivated) {
    url += '?'

    const filterTypes = ['cityId', 'departmentId', 'regionId', 'themeId']
    let isFirstFilter = true

    filterTypes.forEach((type, typeIndex) => {
      if (selectedFilters.value[typeIndex].length > 0) {
        if (!isFirstFilter) {
          url += '&'
        } else {
          isFirstFilter = false
        }

        url += type + "="
        selectedFilters.value[typeIndex].forEach((item, filterIndex) => {
          url += item
          if (filterIndex !== selectedFilters.value[typeIndex].length - 1) url += ','
        })
      }
    })
  }

  console.log(url)
  console.log(selectedFilters)
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
          <button class="btn text-white">
            <input type="submit" value="Rechercher" />
          </button>
        </div>
      </details>
    </form>

    <div id="listMuseums">
      <div style="margin-bottom: 3rem">
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
              <p>
                {{ data.history }}
              </p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary text-white">Découvrir le musée !</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

.btn {
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
}
</style>
