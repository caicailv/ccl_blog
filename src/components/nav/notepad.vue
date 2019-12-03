<template>
  <div class="win">
    <List v-for="item in blogList" :item="item" :key="item.id" />
  </div>
</template>

<script>
export default {
  name: "Notepad",
  data() {
    return {
      type: "",
      total: 99,
      blogList: []
    };
  },
  computed: {},
  methods: {},
  created() {
    this.$axios
      .get("/query_blog", {
        params: {
          type: "随笔"
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
}
</style>
