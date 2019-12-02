<template>
  <div class="win">
    <div class="container">
      <div class="list" v-for="item in blogList">
        <p class="title">
          {{item.title}}
        </p>
        <p class="content" v-html="item.content"></p>
        <!-- <p class="img"></p> -->
        <div class="img" v-if="item.img_arr!==undefined&&item.img_arr.length!==0">
          <img :src="ite" v-for="ite in item.img_arr">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      blogList:[]
    };
  },
  computed: {},
  methods: {},
  created() {
    this.$axios
      .get("/bloglist",{})
      .then(res => {
        this.blogList = res.data
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
  .list{
    .img{
      overflow: hidden;
      img{
        width: 50px;
        float: left;
      }
    }
  }
}
</style>
