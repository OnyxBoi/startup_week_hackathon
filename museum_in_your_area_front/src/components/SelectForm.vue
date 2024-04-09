<script setup>
import { ref } from 'vue'

defineProps({
  datas: Array,
  defaultTitle: String,
  type: Number
})

const emit = defineEmits(['changeSelected'])

function emitEvent(data, dataType) {
  emit('changeSelected', data, dataType)
}

let expanded = ref(false)

function showCheckboxes() {
  let checkboxes = document.getElementById('checkboxes')
  if (expanded.value) {
    checkboxes.style.display = 'none'
    expanded.value = false
  } else {
    checkboxes.style.display = 'block'
    expanded.value = true
  }
}
</script>

<template>
  <div class="multiselect">
    <div class="selectBox" @click="showCheckboxes">
      <select>
        <option>{{ defaultTitle }}</option>
      </select>
      <div class="overSelect"></div>
    </div>
    <div id="checkboxes">
      <label v-for="data in datas" :key="data" :for="data">
        <input type="checkbox" :id="data" @change="emitEvent(data, type)" /> {{ data }}
      </label>
    </div>
  </div>
</template>

<style scoped>
.multiselect {
  width: 200px;
}

.selectBox {
  position: relative;
}

.selectBox select {
  width: 100%;
  font-weight: bold;
}

.overSelect {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#checkboxes {
  display: none;
  border: 1px #dadada solid;
}

#checkboxes label {
  display: block;
}

#checkboxes label:hover {
  background-color: #1e90ff;
}
</style>
