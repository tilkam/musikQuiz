<template>
  <div>

    <h1>{{ categoryString }}</h1>

    <div class="songs">
      <div v-if="this.songs != null">
        <div v-for="song in songs" :key="song">

          <p>{{ "Artist: " + song.artist + " " + "Title: " + song.title }}</p>

          <!--  <p>{{ song.artist }}</p> -->
        </div>
      </div>
    </div>


    <div v-if="loading">Loading...</div>

  </div>
</template>

<script>
import { getQuizQuestions } from '../data/Quiz';

export default {
  name: "QuizView",
  components: {
    /*     QuizViewer */



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
    updateId(newId) {
      this.id = newId
      console.log(newId)
    }

  },

  async mounted() {
    console.log(this.$route.params.id)

    this.getSongs(this.$route.params.id)
    

  },


}

</script>

<style >
.songs {
  display: flex;
  background: white;
  text-transform: none;
}
</style>
