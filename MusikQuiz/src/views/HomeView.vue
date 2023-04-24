<template>
  <div>
    <div class="container">
      <div class="header">
        <h1>HOME</h1>
      </div>
      <div class="content">
        <div class="background">
          <div class="menu-container">
            <button class="homeButtons">Play</button>
            <button class="homeButtons">Leaderboard</button>
          </div>
        </div>
      </div>
      <div class="div-top-five"></div>
    </div>
  </div>
</template>
<script></script>
<style>
.menu-container {
  display: flex;
  flex-wrap: wrap;
}

.homeButtons {
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
</style>
