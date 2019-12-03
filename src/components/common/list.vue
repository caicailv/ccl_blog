<template>
  <div @click="hr_detail(item.id)" class="win">
    <h3 class="title">{{item.title}}</h3>
    <div class="content" v-if="item.content" v-html="item.content"></div>
    <div class="img_row" v-if="item.img_arr">
      <img :src="ite" alt v-for="ite,ind in item.img_arr" :key="ind" />
    </div>
    <div class="fot">
      <div class="tips">{{item.type}}</div>
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
  props: ["item"],
  computed: {},
  methods: {
    hr_detail(id) {
      this.$router.push({
        path: "/detail",
        query: {
          id
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
  padding: 10px 0 5px;
  .title {
    font-size: 22px;
    letter-spacing: 1px;
    padding-bottom: 5px;
  }
  .content {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .img_row {
    display: flex;
    align-items:center;
    img {
      margin-right: 10px;
      height: 100px;
    }
  }
  .fot {
    display: flex;
    justify-content: space-between;
    padding-top: 5px;

    .tips {
      background-color: $theme;
      border-radius: 3px;
      line-height: 1;
      padding: 2px;
    }
    .time {
      text-align: right;
    }
  }
}
</style>
