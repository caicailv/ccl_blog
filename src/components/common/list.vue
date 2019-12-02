<template>
  <div class="win">
    <h3 class="title">{{item.title}}</h3>
    <p class="summary">
      {{item.summary}}...
      <span @click="hr_detail(item.id)">查看全部</span>
    </p>
    <p class="time">
      <i class="el-icon-pie-chart"></i>
      {{item.time}}
    </p>
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
        path:'/detail',
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
  &:last-child {
    // border:none;
  }
  .title {
    font-size: 22px;
    letter-spacing: 1px;
    padding-bottom: 5px;
  }
  .summary {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    span {
      color: $yel;
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .time {
    text-align: right;
    padding-top: 5px;
  }
}
</style>
