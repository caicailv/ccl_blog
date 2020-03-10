<template>
  <div class="win">
    <List v-for="item in blogList" :type="0" :item="item" :key="item.id" />
    <no-data v-if="blogList.length===0"></no-data>
  </div>
</template>

<script>
export default {
  name: "Skill",
  data() {
    return {
      type: 0,
      blogList: []
    };
  },
  computed: {},
  methods: {
    getList() {
      this.$axios
        .get("/query_blog", {
          params: {
            type: this.type
          }
        })
        .then(res => {
          this.blogList = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 监听新增内容,更新博客
    onSave() {
      this.$bus.$on("on-save", type => {
        if (this.type === type) this.getList();
      });
    }
  },
  created() {
    this.getList();
    this.onSave();
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
