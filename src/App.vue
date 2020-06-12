<template>
  <div class="app">
    <JokeBox />
    <div class="imageResource">
      背景圖片來自 <a href="https://pngtree.com/free-backgrounds">pngtree.com</a>
    </div>
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
.app {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url('./assets/background.jpg');
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.imageResource {
  position: absolute;
  bottom: 4px;
  color: #fff;
  background: #00000088;
  a:link {
    color: #fff;
  }
  a:visited {
    color: #fff;
  }
  a:hover {
    color: #fff;
  }
  a:active {
    color: #fff;
  }
}
</style>
