<template>
  <div class="win">
    <div class="container">
      <List v-for="item in blogList" :item="item" :key="item.id" />
      <!-- <List v-for="item in blogList" :item="item" :key="item.id" /> -->
    </div>
  </div>
</template>
 
<script>
export default {
  name: "Home",
  data() {
    return {
      blogList: []
    };
  },
  computed: {},
  methods: {},
  created() {
    this.$axios
      .get("/query_blog")
      .then(res => {
        console.log(res.data);
        this.blogList = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped lang="scss">
.win {
  // .container {
  //   height: 100%;
  //   background-color: #fff;
  // }
  .list {
    .img {
      overflow: hidden;
      img {
        width: 50px;
        float: left;
      }
    }
  }
}
</style>
