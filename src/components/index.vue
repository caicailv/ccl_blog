<template>
  <div class="wintt">
    <div class="_head">
      <Header />
    </div>
    <div class="_body">
      <div class="bod">
        <router-view class="bod_bod"></router-view>
      </div>
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
.wintt {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .head {
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
      border-radius: 10px;
      margin-right: 320px;
      background-color: rgba($color: #000, $alpha: .5);
      padding: 1vh 10px;
      box-sizing: border-box;
      height: 100%;
      .bod_bod {
        height: 100%;
        box-sizing: border-box;
        overflow: auto;
        &::-webkit-scrollbar {
          /*滚动条整体样式*/
          width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
          height: 4px;
          scrollbar-arrow-color: red;
        }
        &::-webkit-scrollbar-thumb {
          /*滚动条里面小方块*/
          border-radius: 5px;
          -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
          background: rgba(0, 0, 0, 0.2);
          scrollbar-arrow-color: red;
        }
        &::-webkit-scrollbar-track {
          /*滚动条里面轨道*/
          -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
          border-radius: 0;
          background: rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
}
</style>
