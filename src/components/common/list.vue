<template>
  <div @click="hr_detail(item._id)" class="win">
    <h3 class="title">{{item.title}}</h3>
    <div class="right">
      <div class="tips" v-for="ite,inde in item.tips" :key="inde" >{{ite}}</div>
      <p class="time">
        <i class="el-icon-pie-chart"></i>
        {{item.date}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {};
  },
  props: ["item","type"],
  computed: {},
  methods: {
    ellipisContent(text) {
      console.log(text);
      if (text.length <= 50) return text;
      return text.substr(0, 50) + "...";
    },

    hr_detail(_id) {
      this.$router.push({
        path: "/detail",
        query: {
          _id,
          type:this.type
        }
      });
    }
  },
  created() {}
};
</script>

<style scoped lang="scss">
.win {
  color: #fff;
  border-bottom: 1px solid #fff;
  padding: 10px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 22px;
    letter-spacing: 1px;
    padding-bottom: 5px;
    @include ellipsis(60%,1);
  }
  .right {
    display: flex;
    justify-content: space-between;
    padding-top: 5px;

    .tips {
      background-color: $theme;
      border-radius: 3px;
      line-height: 1;
      padding: 2px;
      margin-right: 5px;
    }
    .time {
      text-align: right;
    }
  }
}
</style>
