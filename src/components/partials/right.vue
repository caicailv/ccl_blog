<template>
  <div class="win">
    <div class="right right1">
      <p>
        <a href>还没想好这里写啥</a>
      </p>
      <p>
        <a href>还没想好这里写啥</a>
      </p>
      <p>
        <a href>还没想好这里写啥</a>
      </p>
      <p>
        <a href>还没想好这里写啥</a>
      </p>
      <p>
        <a href>还没想好这里写啥</a>
      </p>
    </div>
    <div class="right right1">
      <p>
        <a href>还没想好这里写啥</a>
      </p>
      <p>
        <a href>还没想好这里写啥</a>
      </p>
      <p>
        <a href>还没想好这里写啥</a>
      </p>
      <p>
        <a href>还没想好这里写啥</a>
      </p>
      <p>
        <a href>还没想好这里写啥</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "right",
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
  .right {
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 10px 5px;
    min-height: 240px;
    &+.right{
      margin-top: 10px;
    }
    p{
      padding-left: 10px;
      line-height: 2;
    }
  }
  
}
</style>
