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
            <div class="title_form_row">
              <el-input v-model="title" class="title_text" placeholder="请输入标题"></el-input>
              <div>
                <el-radio v-model="addNewType" label="技术" border>技术</el-radio>
                <el-radio v-model="addNewType" label="图片" border>图片</el-radio>
              </div>
            </div>
          </el-form>
        </div>
        <div v-show="addNewType!=='图片'" class="editor_elem" ref="editorElem"></div>
        <div v-if="addNewType==='图片'">
          <el-upload
            action="http://localhost:3001/file/uploading"
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
    <login></login>

  </div>
</template>

<script>
import E from "wangeditor";

export default {
  name: "aa",
  data() {
    return {
      addNewPopup: false,
      addNewType: "", //新增内容类型
      dialogImageUrl: "", // 图片展示器,路径容器
      editor: null, //存储富文本编辑器元素
      dialogVisible: false, // 图片展示器显示隐藏
      imgArr: [], //上传的图片的路径的集合
      content: "", // 上传的内容
      title: "", //上传的标题
      isEmit: false //标识编辑还是增加, false 增加 true 编辑
    };
  },
  computed: {},
  watch: {
    // 切换时初始化容器
    addNewType() {
      this.imgArr = [];

      if (this.isEmit) {
        // 编辑,初始化isemit
        this.isEmit = false;
      } else {
        // 增加,初始化富文本
        this.content = "";
      }
      this.$nextTick(() => {
        this.initEditor(this.content);
      });
    }
  },
  methods: {
    // 开启弹窗
    addNew() {
      this.addNewPopup = true;
      setTimeout(() => {
        this.initEditor();
      }, 1);
    },
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
      if (this.addNewType === "") return this.$message("请选择新增内容的类型");
      if (this.title === undefined || this.title === "") {
        return this.$message("请输入标题");
      }
      // 图片
      if (this.addNewType === "图片" && this.imgArr.length == 0)
        return this.$message("请至少上传一张图片");
      //技术
      if (
        this.addNewType === "技术" &&
        (this.content === undefined || this.content === "")
      )
        return this.$message("请输入内容");

      this.$axios
        .post("/add_blog", {
          type: this.addNewType,
          title: this.title,
          content: this.content,
          img_arr: this.imgArr
        })
        .then(res => {
          if (res.status) {
            this.$message("上传成功!");
            this.title = "";
            this.addNewPopup = false;
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
      .editor_elem {
        text-align: left;
      }

      >>> .w-e-text-container {
        height: auto !important;
        min-height: 200px !important;
        max-height: 250px !important;
        overflow-y: auto;
      }
      >>> .w-e-text::-webkit-scrollbar {
        display: none;
      }
      >>> .w-e-text-container::-webkit-scrollbar {
        display: none;
      }
    }
  }
}
</style>
