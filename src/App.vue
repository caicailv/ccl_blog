<template>
  <div id="app">
    <!-- 背景 -->
    <div class="_bj1">
      <div class="_top_girl"></div>
    </div>
    <div class="_con">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang='scss' scoped>
#app {
  position: relative;
  ._bj1 {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    bottom: 0;
    // background-color: red;
    height: 100vh;
    // padding-top: 250px;
    display: flex;
    align-items: center;
  }

  ._top_girl {
    $w: 100%;
    overflow: hidden;
    position: relative;
    background-image: url("./assets/img/bj.jpg");
    z-index: -1;
    background-position: 0 0;
    background-attachment: fixed;
    background-size: cover;
    width: $w;
    height: 800px;
    &._bot {
      background-position: 0 bottom;
    }
    &::after {
      position: absolute;
      left: 0;
      top: 0;
      border-left: 1920px solid $black;
      z-index: -1;
      border-bottom: 130px solid transparent;
      box-sizing: border-box;
      content: "";
    }
    &::before {
      position: absolute;
      right: 0;
      bottom: 0;
      border-right: 1920px solid $black;
      z-index: -1;
      border-top: 130px solid transparent;
      box-sizing: border-box;
      content: "";
    }
  }
  ._con {
    margin: 0 auto;
    width: 1250px;
    box-sizing: border-box;
    position: relative;
  min-height: 100vh;

  }
}
</style>
