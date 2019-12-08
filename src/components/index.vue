<template>
  <div class="wintt">
    <div class="_head">
      <Header />
    </div>
    <div class="_body">
      <div class="bod">
        <router-view class="bod_bod scroll_style"></router-view>
      </div>
      <div class="right">
        <Right />
      </div>
    </div>
    <div class="_footer">
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {}
};
</script>

<style scoped lang="scss">
.wintt {
 height: 100vh;
  display: flex;
  flex-direction: column;
  ._head {
    width: 100%;
    box-sizing: border-box;
  }
  ._body {
    width: 1250px;
    margin-top: 10px;
    margin-bottom: 20px;
    margin: 10px auto 20px;
    position: relative;
    flex: 1;
    overflow: auto;
    .right {
      position: absolute;
      width: 300px;
      height: 450px;
      right: 0;
      top: 0;
    }
    .bod {
      border-radius: 10px;
      margin-right: 320px;
      background-color: rgba($color: #000, $alpha: .5);
      padding: 1vh 10px;
      box-sizing: border-box;
      height: 100%;
    }
  }
  // ._footer{

  // }
}
</style>
