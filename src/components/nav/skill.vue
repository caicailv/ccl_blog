<template>
  <div class="win">
    <List v-for="item in blogList" :item="item" :key="item.id" />
      <no-data v-if="blogList.length===0"></no-data>

  </div>
</template>

<script>
export default {
  name: "Skill",
  data() {
    return {
      type: "",
      blogList: []
    };
  },
  computed: {},
  methods: {},
  created() {
    this.$axios
      .get("/query_blog", {
        params: {
          type: "技术"
        }
      })
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
  color: #fff;
  .pag {
    margin: 10px auto;
  }
}
</style>
