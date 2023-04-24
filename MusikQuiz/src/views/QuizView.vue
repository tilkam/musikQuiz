<template>
  <div>

    <h1>{{ categoryString}}</h1>

    <div class="songs">
      <div v-if="this.songs != null">
        <div v-for="song in songs" :key="song">

          <p>{{ song.title }}</p>
          <p>{{ song.artist }}</p>
        </div>
      </div>
    </div>


    <div v-if="loading">Loading...</div>

  </div>
</template>

<script>
import { getQuizQuestions } from '../data/Quiz';
/* import CategoryView from '../views/CategoryView.vue' */



export default {
  name: "QuizView",
  components: {
    /*     QuizViewer */
    /*     CategoryView */


  },
  props: {
    categoryId: {
      type: Number,
      required: false,
    },
    categoryString: {
      type: String,
      required: false,
    },
    song: {
      type: Array,
      required: false
    },
    setup(props) {
   
    console.log(props.categoryString)
  }
  },
  data() {
    return {
      songs: [],
      startDate: "2022-09-23",
      endDate: "2023-03-23",
      loading: false,
      id: null,
      /* categoryString: event.target.value */

    }
  },
  methods: {

    async getSongs(id) {

      try {
        this.songs = await getQuizQuestions(id, this.startDate, this.endDate);
        if (this.songs != null) {
          console.log(this.songs)
          this.songs.forEach(song => {
            console.log(song.title)
          });

        }
      }
      catch (err) {
        console.log("error");

      }

      this.show = false
    },

  },
/*       watch: {
  categoryString: function(newCategory){
   
    this.getSongs(newCategory)
  },
    },  */ 
  async mounted() {
    console.log(this.categoryId)
    
    this.getSongs(this.categoryId) 
   this.getSongs(event.target.id)
    
  },

/*   created() {
    this.loading = true;
    getQuizQuestions(this.categoryId)
      .then((data) => {
        this.songs = data;
      })
      .finally(() => {
        this.loading = false;
      });
  } */


}

</script>

<style >
.songs {
  display: flex;
}
</style>
