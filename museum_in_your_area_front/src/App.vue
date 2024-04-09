<script setup>
import { ref } from 'vue'

import SelectForm from './components/SelectForm.vue'

const villes = ['Strasbourg', 'Bordeaux', 'Montluçon', 'Beaune']
const regions = ['Grand Est', 'Nouvelle-Aquitaine', 'Auvergne-Rhone-Alpes', 'Bourgogne-Franche-Comté']
const departements = ['Bas-Rhin', 'Dordogne', 'Gironde', 'Lot-et-Garonne']
const domaines_thematiques = ['Archéologie', 'Arts décoratifs', 'Histoire', 'Technique et industrie']

let selectedFilters = ref([[], [], [], []])


function changeSelected(data, type) {
  let index = selectedFilters.value[type].indexOf(data)
  if (index !== -1) {
    selectedFilters.value[type].splice(index, 1)
  } else {
    selectedFilters.value[type].push(data)
  }
}

function handleSubmit() {
  console.log('Filtres sélectionnées :', selectedFilters.value[0], selectedFilters.value[1], selectedFilters.value[2], selectedFilters.value[3])
}
</script>

<template>
  <form action="" @submit.prevent="handleSubmit">
    <div style="display: flex; flex-direction: row">
      <SelectForm
        :datas="villes"
        :default-title="'Ville'"
        :type=0
        @change-selected="changeSelected"
      />
      <SelectForm
        :datas="regions"
        :default-title="'Région'"
        :type=1
        @change-selected="changeSelected"
      />
      <SelectForm
        :datas="departements"
        :default-title="'Département'"
        :type=2
        @change-selected="changeSelected"
      />
      <SelectForm
        :datas="domaines_thematiques"
        :default-title="'Domaine thématique'"
        :type=3
        @change-selected="changeSelected"
      />
    </div>

    <input type="submit" value="OK" class="btn btn-neutral" />
  </form>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
