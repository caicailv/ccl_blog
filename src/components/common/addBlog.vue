<template>
  <div class="win">
    <!-- 添加.编辑内容 -->
    <el-dialog
      :visible.sync="addNewPopup"
      width="90%"
      :before-close="()=>{addNewPopup=false}"
      :close-on-click-modal="false"
      class="add_new_pop"
    >
      <div class="row">
        <div class="title">
          <el-form>
            <el-form-item>
              <el-input v-model="title" ref="titile" class="title_text" placeholder="请输入标题"></el-input>
            </el-form-item>
            <!-- 内容分类 -->
            <el-form-item>
              <el-radio-group v-model="addNewType">
                <el-radio
                  v-for="item,index in blogTypes"
                  :key="index"
                  border
                  :label="index"
                >{{item}}</el-radio>
              </el-radio-group>
            </el-form-item>
            <!-- 技术分类 -->
            <el-form-item v-if="addNewType===0">
              <el-checkbox-group v-model="skillActives">
                <el-checkbox-button
                  v-for="item,index in skillTypes"
                  :key="index"
                  :label="item"
                  :max="4"
                  border
                  size="medium"
                ></el-checkbox-button>
              </el-checkbox-group>
            </el-form-item>
          </el-form>
        </div>
        <div class="emit_content scroll_style" v-show="addNewType!==2">
          <mavonEditor
            defaultOpen="edit"
            :subfield="false"
            v-model="content"
            ref="md"
            @fullScreen="fullScreenChange"
          />
        </div>

        <div v-if="addNewType===2">
          <el-upload
            :action="imgUpdateUrl"
            list-type="picture-card"
            :on-preview="viewBigImg"
            :on-remove="removeImg"
            :on-success="successImg"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </div>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="addNewPopup = false">取 消</el-button>
        <el-button type="primary" @click="saveAddNew">保 存</el-button>
      </span>
    </el-dialog>
    <el-dialog :visible.sync="dialogVisible">
      <img width="80%" :src="dialogImageUrl" alt />
    </el-dialog>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  name: "addBlog",
  data() {
    return {
      addNewPopup: false,
      blogTypes: ["技术", "随笔", "图片"],
      // 技术标签
      skillTypes: [
        "HTML",
        "CSS",
        "JS",
        "微信小程序",
        "webpack",
        "数据结构",
        "算法",
        "VUE",
        "React",
        "TypeScript",
        "Node",
        "Mongod"
      ],
      skillActives: [], //选中的技术标签
      addNewType: 0, //新增内容类型
      dialogImageUrl: "", // 图片展示器,路径容器
      editor: null, //存储富文本编辑器元素
      dialogVisible: false, // 图片展示器显示隐藏
      imgArr: [], //上传的图片的路径的集合
      content: "", // 上传的内容
      title: "", //上传的标题
      isEmit: false, //标识编辑还是增加, false 增加 true 编辑
      _id: "", //编辑时,本条内容的_id  00  .
      // 图片上传路径
      imgUpdateUrl: this.$url + "file/uploading"
    };
  },
  components: {
    mavonEditor
  },
  computed: {},
  watch: {},
  methods: {
    // 切换全屏状态开启关闭
    fullScreenChange(status) {
      let headElement = document.querySelector(".v-note-op");
      headElement.style.position = status ? "static" : "sticky";
    },
    // 新增内容
    addblog() {
      if (this.isEmit) {
        this.isEmit = false;
        this.title = "";
        this._id = "";
        this.addNewType = 0;
        this.content = "";
        this.skillActives = [];
        
      }
      this.addNew();
    },
    // 编辑
    emit(detail) {
      this.isEmit = true;
      this.title = detail.title;
      this._id = detail._id;
      this.addNewType = detail.type;
      this.content = detail.content;
      if (this.addNewType === 0) {
        this.skillActives = detail.tips;
      }
      this.addNew();
    },
    // 开启弹窗
    addNew() {
      // 暂时取消登录相关功能
      // 判断登录状态
      // let token = localStorage.getItem("token");
      // if (!token) {
      //   return this.$refs.login.openPopup();
      // }
      // 编辑
      this.addNewPopup = true;
      this.$nextTick(() => {
        this.$refs.titile.$refs.input.focus();
      });
    },
    // 图片上传成功回调
    successImg(res, file, fileList) {
      this.imgArr.push(res.data.url);
      console.log(this.imgArr);
    },
    // 删除图片回调
    removeImg(file, fileList) {
      console.log(file, fileList);
    },
    // 打开图片展示器
    viewBigImg(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 保存
    saveAddNew() {
      // 广播事件
      if (this.title === undefined || this.title === "") {
        return this.$message("请输入标题");
      }
      switch (this.addNewType) {
        case 0:
        case 1:
          if (this.content === undefined || this.content === "") {
            return this.$message("请输入内容");
          }
          break;
        case 2:
          if (this.imgArr.length === 0) {
            return this.$message("请至少上传一张图片");
          }
          break;
      }
      let url = this.isEmit ? "/emit_blog" : "/add_blog";
      this.$axios
        .post(url, {
          type: this.addNewType,
          title: this.title,
          content: this.content,
          img_arr: this.imgArr,
          skillActives: this.skillActives,
          _id: this._id || ""
        })
        .then(res => {
          if (res.status) {
            this.$message(this.isEmit ? "修改成功" : "上传成功");
            this.title = "";
            this.addNewPopup = false;
            // 广播保存成功
            this.$bus.$emit("on-save");
            // location.reload();
          } else {
            this.$message(res.msg);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.$nextTick(() => {
      // this.initEditor();
    });
  }
};
</script>

<style scoped lang="scss">
.win {
  .add_new_pop {
    .row {
      min-height: 200px !important;
      max-height: 550px !important;
      overflow-y: auto;
      .title {
        .title_form_row {
          padding-bottom: 10px;
          .title_text {
            margin: 10px 0;
          }
        }
      }
      .emit_content {
        max-height: 180px;
        overflow-y: auto;
        position: relative;
        &::-webkit-scrollbar {
          /*滚动条整体样式*/
          width: 7px; /*高宽分别对应横竖滚动条的尺寸*/
          height: 7px;
          scrollbar-arrow-color: red;
        }
        .v-note-wrapper {
          min-height: 180px;
          // position: relative;
        }
        >>> .v-note-op {
          position: sticky;
          top: 0;
        }
      }
    }
  }
}
</style>
