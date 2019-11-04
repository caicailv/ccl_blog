<template>
  <div class="win">
    <List  v-for="item in list" :item="item" :key="item.id"/>
  </div>
</template>

<script>
export default {
  name: "Notepad",
  data() {
    return {
      type: "",
      total:99,
      list: []
    };
  },
  computed: {},
  methods: {},
  created() {
    this.list = list;
  }
};
let list = [
  {
    id: 1,
    title: "国庆节的第一天",
    summary:
      "CCS常用的三个知识CCS常用的三个知识CCS常用的三个知识CCS常用的三个知识CCS常用的三个知识CCS常用的三个知识CCS常用的三个知识CCS常用的三个知识",
    time: "2019-08-09"
  },
  {
    id: 2,
    title: "国庆节的第一天",
    summary: "CCS常用的三个知识CCS常用的三个知识CCS常用的三个知识",
    time: "2019-08-09"
  },
  {
    id: 3,
    title: "国庆节的第一天",
    summary: "CCS常用的三个知识CCS常用的三个知识CCS常用的三个知识",
    time: "2019-08-09"
  }
];
</script>

<style scoped lang="scss">
.win {

}

</style>
