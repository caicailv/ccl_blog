<template>
  <div class="win">
   <!-- 博客详情 -->
    
  </div>
</template>

<script>
export default {
  name: "Newlyadd",
  data() { 
    return {
      detial:{}
    };
  },
  computed: {},
  methods: {
  
  },

  created() {
    console.log(this.$route.query.id);
  }
};
</script>

<style scoped lang="scss">
.win {
  .editorElem {
    background-color: #fff;
  }
 
}
</style>
