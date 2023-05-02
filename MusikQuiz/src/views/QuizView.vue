<script setup>
import QuizGetSongs from '../components/QuizGetSongs.vue';

import { ref } from 'vue';

const totalPoints = ref(0)
console.log(totalPoints.value)
const addPoints = (isCorrect) => {
  if(isCorrect === true){
    totalPoints.value++;
  }
}

</script>

<template>
  <div>
    <QuizGetSongs @is-correct="addPoints"/>
    {{ totalPoints }}

  </div>
</template>

