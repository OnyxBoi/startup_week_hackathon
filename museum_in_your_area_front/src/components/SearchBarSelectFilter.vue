<script setup>
import { defineEmits, ref } from 'vue';

let searchString = ref("");

const emit = defineEmits(['updateSearchString']);

function emitEvent(string) {
  emit('updateSearchString', string);
}
</script>

<template>
    <input type="text" placeholder="Type here" v-model="searchString" class="input input-bordered w-full max-w-xs" @keyup="emitEvent(searchString)" />
</template>