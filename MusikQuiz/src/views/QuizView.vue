<script setup>
import QuizGetSongs from '../components/QuizGetSongs.vue';
import QuizHeader from '../components/QuizHeader.vue'


import { ref } from 'vue';

const totalPoints = ref(0)
const questionIndex = ref(1)

console.log(questionIndex.value)
const addPoints = (isCorrect) => {
  if(isCorrect === true){
    totalPoints.value++;
  }
  questionIndex.value++;
}
/* function maxQuestions(){
  if (questionIndex.value === 10){
    console.log("GAME FINISHED")
  }
}
maxQuestions() */

</script>

<template>
  <div>
    <QuizHeader :questionIndex="questionIndex"/>
    <QuizGetSongs @is-correct="addPoints"/>
    {{ totalPoints }}
    {{ questionIndex }} 

  </div>
</template>

