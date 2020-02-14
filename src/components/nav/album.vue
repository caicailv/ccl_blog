<template>
  <div class="win">
    <div class="list" v-for="item in blogList" @dblclick="deleteBlogCk(item)">
      <p class="time">{{item.date}}</p>
      <p class="title">{{item.title}}</p>
      <div class="img_row">
        <div v-for="ite,inde in item.img_arr" class="img_list">
          <el-image fit="contain" class="imgrow" :src="ite" :preview-src-list="item.img_arr"></el-image>
        </div>
      </div>
    </div>
    <no-data v-if="blogList.length===0"></no-data>
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
  methods: {
    deleteBlogCk(item,index) {
      this.$confirm("要删除该条内容吗", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.deleteBlog(item,index);
        })
        .catch(() => {});
    },
    deleteBlog(item,index) {
      this.$axios
        .post("/delete_blog", {
          _id:item._id
        })
        .then(res => {
          if (res.status) {
            this.$message(res.msg);
            this.blogList.splice(index,1);
          } else {
            console.log(res.msg);
            this.$message('删除错误');
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.$axios
      .get("/query_blog", {
        params: {
          type: "图片"
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
  .list {
    overflow: hidden;
    padding-left: 5px;
    border-bottom: 1px solid $theme;
    padding-bottom: 10px;
    position: relative;

    &:last-child {
      border: none;
    }
    & + .list {
      padding-top: 20px;
    }
    .list_btn {
      position: absolute;
      $r: 20px;
      right: $r;
      top: $r;
      width: $r;
      height: $r;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid #fff;
      border-radius: 50%;
    }
    .time {
      font-size: 24px;
      font-weight: bold;
    }
    .title {
      font-size: 20px;
      padding: 10px 0;
    }
    .img_row {
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
      // .zy {
      //   pointer-events: none;
      //   background-color: rgba(0, 0, 0, 0.2);
      //   position: absolute;
      //   left: 0;
      //   right: 0;
      //   bottom: 0;
      //   top: 0;
      //   transition: 0.3s;
      //   opacity: 0;
      // }
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
