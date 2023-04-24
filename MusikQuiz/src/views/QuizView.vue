<template>
  <div>
    <h1>{{ category }}</h1>
    <div class="songs">
      <div v-if="this.songs != null">
        <div class="question-container">
          <div v-for="question of questions" :key="question.title">
            {{ question.title }}</div>
        </div>
        <div v-for="song in alternatives" :key="song">
          <div class="options-container">
            <p>{{ song.artist }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="loading">Loading...</div>
  </div>
</template>

<script>
import { getQuizQuestions, getFour } from '../data/Quiz';

export default {
  name: "QuizView",

  data() {
    return {
      songs: [],
      startDate: "2022-09-23",
      endDate: "2023-03-23",
      loading: true,
      category: null,
      alternatives: [],
      questions: []
    }
  },
  methods: {

    async getSongs(id) {
      this.loading = true
      try {
        this.songs = await getQuizQuestions(id, this.startDate, this.endDate);
      }
      catch (err) {
        console.log("error");
      }

      this.loading = false
      this.displayQuestions(this.songs)
    },
    async displayQuestions(songs) {
      this.alternatives = await getFour(songs)

      this.questions.push(this.alternatives[0])
      console.log(this.questions)
    }

  },

  async mounted() {
    this.category = this.$route.query.genre
    this.getSongs(this.$route.params.id)

  },

}

</script>

<style >
.songs {
  display: flex;
}

.question-container,
.options-container {
  padding: 1rem;
  margin: 1rem;
  border-radius: 1rem;

  background: white;
  text-transform: none;
  font-family: Montserrat, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

}

h1 {
  color: white;
}
</style>
