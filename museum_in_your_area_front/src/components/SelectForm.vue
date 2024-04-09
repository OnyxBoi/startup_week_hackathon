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

function showCheckboxes(type) {
  const checkboxes = document.getElementsByClassName('checkboxes')
  if (expanded.value) {
    checkboxes[type].style.display = 'none'
    expanded.value = false
  } else {
    checkboxes[type].style.display = 'block'
    expanded.value = true
  }
}
</script>

<template>
  <div class="multiselect">
    <div class="selectBox" @click="showCheckboxes(type)">
      <select class="select w-full max-w-xs" :class="{ 'select-item': expanded }">
        <option class="default-option">{{ defaultTitle }}</option>
      </select>
      <div class="overSelect"></div>
    </div>
    <div class="checkboxes">
      <label class="checkbox-container" v-for="data in datas" :key="data" :for="data">
        <input class="custom-checkbox" type="checkbox" :id="data" @change="emitEvent(data, type)" />
        <span class="checkmark"></span>
        {{ data }}
      </label>
    </div>
  </div>
</template>

<style scoped>
.select{
  background-color: white;
  color: black;
}

.multiselect {
  width: 200px;

  margin: 1vh 1vw;
}

.selectBox {
  position: relative;
}

.selectBox select {
  width: 100%;
  font-weight: bold;
}

.select-item{
 border-bottom-left-radius: 0;
 border-bottom-right-radius: 0;
}


.overSelect {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.checkboxes {
  display: none;
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: black 0px 0px 50px;

  padding: 1vh 1vw;
}

.checkboxes label {
  display: block;
  margin: 1vh 1vw;
}



.checkbox-container {
  display: inline-block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  user-select: none;

  color: black;
}

.custom-checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 4px;
  transition: background-color 0.3s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.checkmark:after {
  content: "";
  position: absolute;
  /* display: none; */
  left: 10px;
  top: 7px;
  width: 5px;
  height: 10px;
  border: solid #eee;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

.custom-checkbox:checked ~ .checkmark {
  background-color: #2196F3;
  box-shadow: 0 3px 7px rgba(33, 150, 243, 0.3);
}

.custom-checkbox:checked ~ .checkmark:after {
  display: block;
}

@keyframes checkAnim {
  0% {
    height: 0;
  }

  100% {
    height: 10px;
  }
}

.custom-checkbox:checked ~ .checkmark:after {
  animation: checkAnim 0.2s forwards;
}

</style>
