<script setup>
import {useRoute} from 'vue-router'

const songs = defineProps({
    songs: {
        type: String
    }
})

const route = useRoute()


console.log(route.params)
</script>


<template>
    <div>
        <div class="song-container">
            {{ songs.artist}}
        </div>
    </div>
</template>
<style scoped>
.song-container {
    width: 100%;
    background-color: white;
    
}
</style>