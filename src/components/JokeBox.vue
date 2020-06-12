<template>
  <div class="jokeBox">
    <div class="name">
      {{ $store.getters.randomJoke.name }}
    </div>
    <div class="content">
      {{ $store.getters.randomJoke.content }}
    </div>
    <div class="controller">
      <button class="getNewBtn" @click="$store.dispatch('getRandomJoke')">
        Get new joke
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: "JokeBox",
  created() {
    this.$store.dispatch("fetchJokes");
  }
};
</script>

<style scoped lang="scss">
.jokeBox {
  width: 500px;
  height: 240px;
  background: #ffffff;
  border-radius: 0.4em;
  padding: 16px 48px;
  box-sizing: border-box;

  .name {
    display: flex;
    align-items: center;
    margin: 8px 0px;
    font-weight: bold;
    font-size: 24px;
    color: #ff9666;
  }

  .content {
    font-size: 20px;
    margin: 20px 0px;
    color: #000000bb;
    overflow: auto;
    height: 60px;
  }

  .controller {
    text-align: right;

    .getNewBtn {
      width: 140px;
      height: 40px;
      font-size: 16px;
      border-radius: 0.2em;
      border: none;
      background: #10eb94;
      color: #ffffff;
      font-weight: bold;
    }
  }
}
</style>
