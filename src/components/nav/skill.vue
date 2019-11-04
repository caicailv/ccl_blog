<template>
  <div class="win">
    <List  v-for="item in list" :item="item" :key="item.id"/>
  </div>
</template>

<script>
export default {
  name: "Skill",
  data() {
    return {
      type: "",
      list: []
    };
  },
  computed: {},
  methods: {},
  created() {
    console.log(this.$route.query);
    this.list = list;
  }
};
let list = [
  {
    id: 1,
    title: "CCS常用的三个知识",
    summary:
      "CCS常用的三个知识CCS常用的三个知识CCS常用的三个知识CCS常用的三个知识CCS常用的三个知识CCS常用的三个知识CCS常用的三个知识CCS常用的三个知识",
    time: "2019-08-09"
  },
  {
    id: 2,
    title: "CCS常用的三个知识",
    summary: "CCS常用的三个知识CCS常用的三个知识CCS常用的三个知识",
    time: "2019-08-09"
  },
  {
    id: 3,
    title: "CCS常用的三个知识",
    summary: "CCS常用的三个知识CCS常用的三个知识CCS常用的三个知识",
    time: "2019-08-09"
  }
];
</script>

<style scoped lang="scss">
.win {
  color: #fff;
  .pag{
    margin: 10px auto;
  }
}

</style>
