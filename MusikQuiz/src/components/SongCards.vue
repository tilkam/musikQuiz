<script setup>
import {useRoute} from 'vue-router'

const route = useRoute()

console.log(route.params)
</script>


<template>
    <div>
        <div class="song-container">
            {{ song.artist + song.title }}
        </div>
    </div>
</template>