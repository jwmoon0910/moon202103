<template>
  <div id="app">
    <div id="nav">
      <router-link to="/about">ABOUT Me</router-link>||
      <router-link to="/btc">BTC</router-link> ||
      <router-link to="/todoList">TODO List</router-link>
      <!-- <router-link :to="{ name: 'EventList' }">Events</router-link> | -->
      <!-- <router-link :to="{ name: 'About' }">About</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
