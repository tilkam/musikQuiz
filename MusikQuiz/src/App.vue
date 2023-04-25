<script>
import { RouterView } from 'vue-router'
import NavPage from '../src/components/NavPage.vue'
/* import QuizViewer from './views/QuizViewer.vue'; */

/* import GetQuizSongs from './data/GetQuizSongs.vue' */

export default {
  components: {
    /*  GetQuizSongs, */
    NavPage,
    RouterView
    /*   QuizViewer */
  }
}
</script>

<template>
  <main>
    <div class="container">
      <div class="header"></div>
      <div class="nav-startPage">
        <NavPage />
        <RouterView />
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  font-family: Adventuro, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  letter-spacing: 0.4rem;
  text-align: center;
  text-transform: uppercase;
  background-color: #83c5be;
}

header {
  color: #edf6f9;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}
</style>
