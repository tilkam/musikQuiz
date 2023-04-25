<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <div class="nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/category/"> Categories</RouterLink>
      <!--  <RouterLink to="/:id/quiz/"> quiz</RouterLink> -->
    </div>
  </div>
</template>

<style scoped>
body {
  color: white;
}
.nav {
  padding-bottom: 2rem;
}
</style>
