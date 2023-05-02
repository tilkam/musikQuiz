<script setup>
import { defineProps } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute();
const genre = route.query.genre
const questionCounter = defineProps(['questionIndex'])

</script>

<template>
    <div class="question-counter">
        <h1>{{ genre }}</h1>
        <h2>Question {{ questionCounter.questionIndex }}/10 </h2>
        <div class="bar">
            <div class="completion">.
            </div>
        </div>
    </div>
</template>

<style scoped>
.question-counter {
    color: white;
}

.completion {
    width: 100%;
    background-color: white;
}
</style>