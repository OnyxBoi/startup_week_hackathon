<script setup>
import { ref } from 'vue'
import SelectForm from '@/components/SelectForm.vue'

const villes = ['Strasbourg', 'Bordeaux', 'Montluçon', 'Beaune']
const departements = ['Bas-Rhin', 'Dordogne', 'Gironde', 'Lot-et-Garonne']
const regions = [
  'Grand Est',
  'Nouvelle-Aquitaine',
  'Auvergne-Rhone-Alpes',
  'Bourgogne-Franche-Comté'
]
const domaines_thematiques = [
  'Archéologie',
  'Arts décoratifs',
  'Histoire',
  'Technique et industrie',
  'Ethnologie',
  'Beaux-arts',
  'Sciences de la nature',
  'dfghjklm',
  'dfghjklm',
  'sdfghjkl',
  'qsdfghjklm',
  'dfghjklm',
  'sdfghjkl',
  'dfghjklm',
  'dfghjkl',
  'dfghjkl'
]

let selectedFilters = ref([[], [], [], []])

let datas = [
  {
    id: 1,
    image: '../assets/MIYA-no-background.png',
    titre: 'Musée 1',
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
  },
  {
    id: 2,
    image: '../assets/MIYA-no-background.png',
    titre: 'Musée 2',
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
  },
  {
    id: 3,
    image: '../assets/MIYA-no-background.png',
    titre: 'Musée 3',
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
  },
  {
    id: 4,
    image: '../assets/MIYA-no-background.png',
    titre: 'Musée 4,jnhbgvfcd',
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
  },
  {
    id: 5,
    image: '../assets/MIYA-no-background.png',
    titre: 'Musée 5',
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
  }
]

function changeSelected(data, type) {
  let index = selectedFilters.value[type].indexOf(data)
  if (index !== -1) {
    selectedFilters.value[type].splice(index, 1)
  } else {
    selectedFilters.value[type].push(data)
  }
}

function handleSubmit() {
  console.log(
    'Filtres sélectionnées : \n Villes :',
    selectedFilters.value[0],
    '\n Départements :',
    selectedFilters.value[1],
    '\n Régions :',
    selectedFilters.value[2],
    '\n Domaines thématiques :',
    selectedFilters.value[3]
  )
}
</script>

<template>
  <div id="advancedSearchDiv">
    <form action="" @submit.prevent="handleSubmit">
      <details class="collapse bg-base-200">
        <summary class="collapse-title text-xl font-medium">Modifier les filtres</summary>
        <div class="collapse-content">
          <div class="select-container">
            <SelectForm
              :datas="villes"
              :default-title="'Villes'"
              :type="0"
              @change-selected="changeSelected"
            />

            <SelectForm
              :datas="departements"
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
              :datas="domaines_thematiques"
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
            v-for="data in datas"
            :key="data.id"
            class="card w-96 bg-base-100 shadow-xl museumItem"
          >
            <figure>
              <img src="../assets/MIYA-no-background.png" style="max-width: 75%" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{{ data.titre }}</h2>
              <p>
                {{ data.description }}
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
