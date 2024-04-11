<script setup>
import { ref } from 'vue'
import { eventBus } from '@/stores/eventBus.js'

const sliderValue = ref(5)

function updateSliderValue(value) {
  sliderValue.value = value
  eventBus.sliderValue = value
}

function retrieveSliderValue() {
  const slider = document.querySelector('#sliderInput')
  eventBus.emit('retrieveSlider', slider.value)
}
</script>
<template>
  <div id="sliderContainer" class="mb-5 pt-5">
    <div id="slider" class="w-full ml-5">
      <div class="w-full">
        <input
          id="sliderInput"
          type="range"
          min="005"
          max="300"
          :value="sliderValue"
          class="range"
          step="05"
          @input="updateSliderValue($event.target.value)"
        />
        <div class="w-full flex justify-between text-xs px-2">
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
        </div>
      </div>
      <div id="sliderValueDiv">
        <span
          >Rayon : <span id="sliderValue">{{ sliderValue }}</span></span
        >
      </div>
    </div>

    <div id="sliderButton" class="w-full">
      <button class="btn btn-success text-white" @click="retrieveSliderValue()">
        Montrer les musées dans ce rayon <img src="../assets/search-white.svg" />
      </button>
    </div>
  </div>
</template>

<style scoped>
#sliderContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 5rem;
  border-top: 2px solid;
  border-color: #ccc;
}

#slider {
  display: flex;
  gap: 5rem;
}
</style>
