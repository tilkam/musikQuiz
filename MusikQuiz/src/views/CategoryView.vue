<!-- eslint-disable no-unused-vars -->

<template>
  <div>
    <div class="container-category">
      <div class="header-category">
        <h2>Categories</h2>
      </div>
      <div class="background">
        <div class="content-category">
          <div class="container-category-buttons">
            <button
              v-for="category in categories"
              :key="category.id"
              :value="category.genre"
              :id="category.id"
              @click="
                selectCategory(category.id, category.genre, category.startDate, category.endDate)
              "
              class="category-button"
            >
              {{ category.genre }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import categories from '../data/categories.json'
const router = useRouter()

function selectCategory(id, categoryString) {
  router.push({ name: 'quiz', params: { id: id }, query: { genre: categoryString } })
}
</script>
<style scoped>
.header-category {
}

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
