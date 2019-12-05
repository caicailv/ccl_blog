<template>
  <div class="win">
    <div class="container">
      <List v-for="item in blogList" :item="item" :key="item.id" />
      <no-data v-if="blogList.length===0"></no-data>
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
