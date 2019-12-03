<template>
  <div class="win">
    <div class="list" v-for="item in blogList">
      <p class="time">{{item.date}}</p>
      <p class="title">
        {{item.title}}
      </p>
      <div class="img_row">
        <div v-for="ite,inde in item.img_arr" class="img_list">
          <el-image fit="contain" class="imgrow" :src="ite" :preview-src-list="item.img_arr"></el-image>
          <!-- <p class="title">{{ite.title}}</p>
          <div class="zy"></div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Album",
  data() {
    return {
      blogList: [],
      imgList: []
    };
  },
  computed: {
    aImgSrc: function() {
      let arr = [];
      this.imgList.forEach(el => {
        arr.push(el.img_scr);
      });
      return arr;
    }
  },
  methods: {},
  created() {
    this.$axios
      .get("/v1/album")
      .then(res => {
        this.imgList = res;
      })
      .catch(err => {
        console.log(err);
      });

    this.$axios
      .get("/query_blog", {
        params: {
          type: "图片"
        }
      })
      .then(res => {
        // console.log(res.data);
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
  overflow: hidden;
  .list {
    overflow: hidden;
    padding-left: 5px;
    border-bottom: 1px solid $theme;
    .time{
      font-size: 24px;
      font-weight: bold;
    }
    .title{
      font-size: 20px;
      padding: 10px 0;
    }
    .img_row{
      margin-left: 20px;
    }
    .img_list {
      position: relative;
      border-radius: 3px;
      margin-right: 5px;
      margin-bottom: 5px;
      float: left;
      .imgrow {
        height: 200px;
        display: block;
      }
      .imgrow >>> img {
        display: block;
        width: auto;
        height: 100%;
      }
      .zy {
        pointer-events: none;
        background-color: rgba(0, 0, 0, 0.2);
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        transition: 0.3s;
        opacity: 0;
      }
      &:hover {
        .title {
          opacity: 1;
          background: linear-gradient(
            rgba(255, 255, 255, 0),
            rgba(0, 0, 0, 0.8)
          );
        }
        .zy {
          opacity: 1;
        }
      }
      .title {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        box-sizing: border-box;
        opacity: 0;
        padding: 2px 3px;
        transition: 0.3s;
      }
    }
  }
}
</style>
