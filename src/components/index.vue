<template>
  <div class="win">
    <div class="_head">
      <Header />
    </div>
    <div class="_body">
      <router-view class="bod"></router-view>
      <div class="right">
      <Right />
      </div>
    </div>
    <div class="_head">
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
.win {
  .head {
    background-color: red;
    width: 100%;
  }
  ._body {
    margin-top: 10px;
    margin-bottom: 20px;
    position: relative;
    .right {
      position: absolute;
      width: 300px;
      height: 450px;
      right: 0;
      top: 0;
    }
    .bod {
      background-color: #6b6c70;
      border-radius: 10px;
      margin-right: 320px;
      min-height: 800px;
      padding: 10px;
      box-sizing: border-box;
    }
  }
}
</style>
