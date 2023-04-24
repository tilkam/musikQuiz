<!-- eslint-disable no-unused-vars -->

<template>
  <div>
    <div class="container-category">
      <div class="header-category">
 
        <div v-if="show">
          <h2>Categories</h2>
        </div>
        <div class="background">
          <div class="content-category">
            <div class="container-category-buttons">
              <button v-for="category in category" :key="category.id" :value="category.category" :id="category.id"
                @click="selectCategory(category.id, category.category)" class="category-button">
                {{ category.category }}
               
              </button>
            </div>
            <QuizView :categoryId="selectedCategoryId" :categoryString="selectedCategoryString"/>
          <!--   <QuizView v-for="song in songs" :key="song">
              {{ song.title + song.artist}}
            </QuizView> -->
            
          </div>
        </div>
      </div>
    
      <!--   <div v-if="this.songs != null">
 -->
    <!--   <div class="song-container">

        <div v-for="song in songs" :key="song">
          <p>{{ song.artist }}</p>
          <p>{{ song.title }}</p> 
         
         

     </div> 
      </div> -->

    </div>
  </div>
</template>

<script>
/* import GetQuizSongs from '../data/GetQuizSongs.vue' */


/* import { getQuizQuestions } from '../data/Quiz'; */

import QuizView from './QuizView.vue';
/* import QuizViewer from './QuizViewer.vue'; */




export default {
  name: 'CategoryView',

  components: {
    /*  GetQuizSongs, */
    QuizView,
  /*   QuizViewer */
},
  props: {
    category: {
      type: Array,
      default: () => [
        { id: 2697, category: 'pop' },
        { id: 5523, category: 'country' },
        { id: 2680, category: 'soul' },
        { id: 1603, category: 'klassiskt' },
        { id: 3135, category: 'dansband' },
        { id: 4433, category: 'visor' }
      ]
    },
  },


  data() {
    return {
      selectedCategoryId: 1190,
      selectedCategoryString: 'Genre',
      songs: [],
      startDate: "2022-09-23",
      endDate: "2023-03-23",
      show: true

    }
  },

  methods: {
    selectCategory(id, categoryString) {

      this.selectedCategoryId = id
      this.selectedCategoryString = categoryString

      /* this.songs = this.getSongs(id) */
      this.$router.push({ name: 'quiz', params: { id: this.selectedCategoryString } });  

    },
/* 
    async getSongs(id) {

      try {
        this.songs = await getQuizQuestions(id, this.startDate, this.endDate);
        if (this.songs != null) {
          console.log(this.songs)

        }
      }
      catch (err) {
        console.log("error");

      }

      this.show = false
    },
 */
  /*   async created() {
      if (this.song == null) {
        console.log("loading");
      }

      this.getSongs(this.categoryId)

    }, */

    /*  created() {
       if (this.songs == null) {
         this.getSongs(this.selectedCategoryId)
       }
     }, */


  },
}

</script>
<style scoped>
.song-container {
  color: white;
}

.container-category-buttons,
.content-category {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-around;
}

.category-button {
  flex-grow: 1;
  flex-basis: auto;
  max-width: 100%;
  width: 10rem;
  height: 10rem;
  padding: 3rem;
  /* border-radius: 1rem; */
  border-radius: 20% / 20%;
  margin: 0.5rem;
  border: none;
  background-color: #ffddd2;
  font-family: Adventuro, Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color: #e29578;
  font-size: 1.4rem;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.categoryButton::after {
  background-color: #e29578;
}

.categoryButton:active {
  background-color: #e29578;
  color: white;
}
</style>
