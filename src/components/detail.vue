<template>
  <div class="win">
    <!-- 博客详情 -->
    <h3 class="title">{{detail.title}}</h3>
    <el-row class="btn_row">
      <el-button type="primary" @click="emit" icon="el-icon-edit" circle></el-button>
      <el-popconfirm title="确定删除该博客吗?" @onConfirm="deleteBlog">
        <el-button type="danger" icon="el-icon-delete" slot="reference" circle></el-button>
      </el-popconfirm>
    </el-row>
    <div class="tips_row" v-if="detail.tips.length!=0">
      <div class="tips" v-for="item,index in detail.tips" :key="index">{{item}}</div>
    </div>
    <div class="content scroll_style">
      <div class="bod" v-html="detail.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Newlyadd",
  data() {
    return {
      detail: {},
      _id: ""
    };
  },

  inject: ["appComponents"],
  computed: {},
  methods: {
    emit() {
      this.appComponents.addBlog.addNew(this._id);
      this.appComponents.addBlog.isEmit = true; //标题
      this.appComponents.addBlog.title = this.detail.title; //标题
      this.appComponents.addBlog.addNewType = Number(this.type); //类型
      this.appComponents.addBlog.skillActives = this.detail.tips; //类型
      this.appComponents.addBlog.content = this.detail.content; //内容
    },
    deleteBlog() {
      this.appComponents.login.isLoginStatus(() => {
        this.$axios
          .post("/delete_blog", {
            _id: this._id,
            type: this.type
          })
          .then(res => {
            if (res.status) {
              this.$message(res.msg);
            } else {
              console.log(res.msg);
            }
            setTimeout(() => {
              this.$router.back(-1);
            }, 500);
          })
          .catch(err => {
            console.log(err);
          });
      });
    }
  },

  created() {
    this._id = this.$route.query._id;
    this.type = this.$route.query.type;
    this.$axios
      .get("/query_blogdetail", {
        params: {
          _id: this._id,
          type: this.type
        }
      })
      .then(res => {
        if (res.status) {
          this.detail = res.data;
        } else {
          this.$message(res.msg);
          setTimeout(() => {
            this.$router.back(-1);
          }, 500);
        }
      })
      .catch(err => {
        console.log("12312312" + err);
      });
  }
};
</script>

<style scoped lang="scss">
.win {
  display: flex;
  flex-direction: column;
  position: relative;
  .btn_row {
    position: absolute;
    right: 5px;
    top: 5px;
  }
  .title {
    font-size: 28px;
    margin-bottom: 10px;
  }
  .tips_row {
    margin-bottom: 10px;
    .tips {
      background-color: $theme;
      border-radius: 3px;
      line-height: 1;
      padding: 2px;
      display: inline-block;
      margin-right: 10px;
    }
  }
  .content {
    padding: 10px;
    border: 1px solid #fff;
    border-radius: 5px;
    flex: 1;
    overflow: auto;

    position: relative;
    .copy {
      position: absolute;
      right: 10px;
      top: 5px;
    }
  }
}
</style>