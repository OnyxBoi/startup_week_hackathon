<script setup>
import { ref, onBeforeMount, onMounted } from 'vue'
import SearchBarSelectFilter from './SearchBarSelectFilter.vue'

const props = defineProps({
  datas: Array,
  defaultTitle: String,
  type: Number
})

const emit = defineEmits(['changeSelected'])

function emitEvent(data, dataId, dataType, index) {
  console.log(data)
  emit('changeSelected', data, dataType, 1)
  console.log(checkedDatas.value[index])
  checkedDatas.value[index] = !checkedDatas.value[index]
}

let filteredDatas = ref([])
onBeforeMount(async () => {
  setTimeout(() => {
    filteredDatas.value = props.datas
  }, 500)
})



console.log("datas: ", props.datas)
console.log(filteredDatas.value)

let checkedDatas = ref([])

let expanded = ref(false)

let searchString = ref('')

for (let i = 0; i < props.datas.length; i++) checkedDatas.value.push(false)

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

function updateSearchString(string) {
  searchString.value = string
  getFilteredDatas()
}

function getFilteredDatas() {
  filteredDatas.value = props.datas.filter((str) =>
    str.name.toLowerCase().includes(searchString.value.toLowerCase())
  )
}

function generateKey(data) {
  return props.type + '-' + data.id
}
</script>

<template>
  <div class="multiselect">
    <div class="selectBox" @click="showCheckboxes(props.type)">
      <select
        class="select w-full max-w-xs"
        :class="{ 'select-item': expanded, 'not-select-item': !expanded }"
      >
        <option class="default-option">{{ props.defaultTitle }}</option>
      </select>
      <div class="overSelect"></div>
    </div>
    <div class="checkboxes">
      <SearchBarSelectFilter
        :search-string="searchString"
        @update-search-string="updateSearchString"
      />
      <label
        class="checkbox-container"
        v-for="data in filteredDatas"
        :key="generateKey(data)"
        :for="generateKey(data)"
      >
        <input
          class="custom-checkbox"
          type="checkbox"
          :id="generateKey(data)"
          :checked="checkedDatas[props.datas.findIndex((item) => item.id === data.id)]"
          @change="
            emitEvent(
              data,
              data.id,
              props.type,
              props.datas.findIndex((item) => item.id === data.id)
            )
          "
        />
        <span class="checkmark"></span>
        {{ data.name }}
      </label>
    </div>
  </div>
</template>

<style scoped>
.select {
  background-color: white;
  color: black;
}

.multiselect {
  width: 20vw;

  margin: 1vh 1vw;

  border-radius: 10px;
}

.selectBox {
  position: relative;
}

.selectBox select {
  width: 100%;
  font-weight: bold;
}

.not-select-item {
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
}

.select-item {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  box-shadow: 0px;
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

  height: 40vh;
  overflow-y: scroll;
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
  content: '';
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
  background-color: #2196f3;
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
