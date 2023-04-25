<script setup>
 import { defineProps } from 'vue'; 
// eslint-disable-next-line vue/no-setup-props-destructure
const {song} = defineProps(['song']) 
console.log(song)
</script>

<template>
  <div>
   
      <div class="options-container">
        <div v-for="song in song" :key="song.artist + song.title" @click="isClicked(song.artist)">
        <p>{{ song.artist }}</p>
      </div>
    </div>
    </div>
</template>
<style scoped>
.song-container {
  width: 100%;
  background-color: white;
  padding: 3rem;
}
</style>
