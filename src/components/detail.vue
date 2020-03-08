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
    <div class="tips_row" v-if="detail.tips&&detail.tips.length!=0">
      <div class="tips" v-for="item,index in detail.tips" :key="index">{{item}}</div>
    </div>
    <div class="content">
      <mavonEditor
        v-model="detail.content"
        defaultOpen="preview"
        :toolbarsFlag="false"
        :subfield="false"
        :editable="false"
      />
    </div>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import utils from "@/assets/js/utils.js";
let findBrothersComponents = utils.findBrothersComponents;
export default {
  name: "detail",
  data() {
    return {
      detail: {},
      type: 0,
      _id: ""
    };
  },

  inject: ["appComponents"],
  components: {
    mavonEditor
  },

  computed: {},
  methods: {
    emit() {
      let detail = {
        ...this.detail,
        _id: this._id,
        type: this.type
      };
      this.appComponents.addBlog.emit(detail);
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
    this.type = Number(this.$route.query.type);
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
        console.log(err);
      });
  },
  mounted() {},
  destroyed() {
    findBrothersComponents(this, "Header")[0].updateMenuActive();
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
    border-radius: 10px;
  }
}
</style>