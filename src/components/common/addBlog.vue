<template>
  <div class="win">
    <!-- 添加.编辑内容 -->
    <el-dialog
      :visible.sync="addNewPopup"
      width="70%"
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
        <div v-show="addNewType!==2" class="editor_elem" ref="editorElem" @click="editorElemCk"></div>
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
import E from "wangeditor";

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
  computed: {},
  watch: {},
  methods: {
    editorElemCk() {
      // console.log(123);
    },
    // 开启弹窗
    addNew(_id) {
      // 暂时取消登录相关功能
      // 判断登录状态
      // let token = localStorage.getItem("token");
      // if (!token) {
      //   return this.$refs.login.openPopup();
      // }
      // 编辑
      if (_id) {
        this.isEmit = true;
      }
      this.addNewPopup = true;
      setTimeout(() => {
        this.initEditor();
        this.$refs.titile.$refs.input.focus();
      }, 1);
    },
    initAddNew() {},
    // 初始化富文本编辑器
    initEditor(text = "") {
      if (this.addNewPopup === false) return;
      this.editor = new E(this.$refs.editorElem);
      this.editor.customConfig.onchange = html => {
        this.content = html;
      };
      this.editor.customConfig.uploadImgShowBase64 = true;
      this.editor.customConfig.zIndex = 100;
      this.editor.customConfig.menus = [
        "bold",
        "fontSize",
        "fontName",
        "italic",
        "underline",
        "foreColor",
        "backColor",
        "link",
        "list",
        "justify",
        "quote",
        "image",
        "table",
        "code"
      ];
      this.editor.create();
      this.editor.txt.html(text);
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
      this.initEditor();
    });
  },
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
      .editor_elem {
        text-align: left;
      }

      >>> .w-e-text-container {
        // height: auto !important;
        // min-height: 200px !important;
        // max-height: 250px !important;
        overflow-y: auto;
      }
      >>> .w-e-text::-webkit-scrollbar {
        display: none;
      }
      >>> .w-e-text-container::-webkit-scrollbar {
        display: none;
      }
      // >>> .w-e-text p{
      //   min-height: 200px;
      // }
    }
  }
}
</style>
