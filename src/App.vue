<template>
  <div id="app">
    <JokeBox msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import JokeBox from "./components/JokeBox.vue";

export default {
  name: "App",
  components: {
    JokeBox
  }
};
</script>

<style lang="scss">
#app {
  
}
</style>
