

<template>
    <div>
        <h1>{{ genre }}</h1>
        <div class="songs">
            <div v-if="this.songs != null">
                <div class="question-container">
                    <div v-for="question of question" :key="question.title">
                        {{ question.title }}
                    </div>
                </div>

                <!--  <SongCards :song="alternatives" @click="isClicked(song.artist)" />  -->
                <div v-for="song in alternatives" :key="song.artist + song.title" :song="alternatives"
                    @click="isClicked(song.artist)">
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

import { getQuizQuestions } from '../data/getQuiz'
import { getFour, generateTimespan } from '../utils/misc.js'
import categories from '../data/categories.json'
/* import SongCards from './SongCards.vue' */

export default {

    name: 'QuizGetSongs',

    components: {
        /*  SongCards, */
    },

    data() {
        return {
            songs: [],
            loading: true,
            genre: null,
            alternatives: [],
            question: [],
            category: [],
            today: null,
            correct: false

        }
    },

    methods: {
        
      
        async getAllSongs(id, dateString) {
            try {
                this.songs = await getQuizQuestions(id, dateString)
            } catch (err) {
                console.log('error')
            }
            this.loading = false
            this.displayQuestions(this.songs)
        },

        async displayQuestions(songs) {
            this.alternatives = await getFour(songs)
            this.question.unshift(this.alternatives[0])
            this.alternatives.sort(() => 0.5 - Math.random())
        },

        //compare player choice and correct answer to see if it's a match
        //When an alternative is clicked, generate four new songs from the songlist

        isClicked(song) {
            console.log('Right Answer: ' + this.question[0].artist)
            console.log('Player Choice: ' + song)
            let isCorrect = false;
            if (song === this.question[0].artist) {
                console.log('YES')
                this.correct = true
                isCorrect = true;
                //this.correct++
            }

            if (this.question.length === 1) {
                this.question.pop()
            }
            this.displayQuestions(this.songs)
            this.correct = false;
            this.total++

            if (this.total === 10) {
                this.loading = true
                this.finished = true
            }
            this.$emit('is-correct', isCorrect);
        }
    },

    //We get the name of the genre through our route (we send it as a query from CategoryView)
    // We find the matching object from the categories import (which is a json-file)
    //From the json file we get: id, genre (name), startDate, endDate
    //Call method getSong to gett all Song from that genre and timespan
    async mounted() {

        this.genre = this.$route.query.genre
        this.category = categories.find(el => el.genre === this.genre)

        const dateString = generateTimespan(this.category.timespan)
        this.getAllSongs(this.category.id, dateString)
    }
}
</script>
  
<style>
.songs {
    display: flex;
}

.question-container {
    padding: 3rem;
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