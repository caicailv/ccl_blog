<template>
  <div class="win">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="navTabSelect"
      background-color="#1c1c1c"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/skill">技术</el-menu-item>
      <el-menu-item index="/notepad">随笔</el-menu-item>
      <el-menu-item index="/album">相册</el-menu-item>
      <el-menu-item index="/about">关于我</el-menu-item>
    </el-menu>
    <el-button type="primary" class="addnewbtn" @click="addNew" icon="el-icon-plus">新增内容</el-button>

    <!-- 新增内容/随笔弹窗 -->
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
              <el-cascader
                v-model="addNewType"
                :options="addNewArr"
                :props="{ expandTrigger: 'hover' }"
                @change="cascaderChange"
                placeholder="请选择类型"
              ></el-cascader>
              <el-input v-model="form.name" class="title_text" placeholder="请输入标题"></el-input>
            </div>
          </el-form>
        </div>
        <div v-show="addNewType[0]!='tupian'" class="editor_elem" ref="editorElem"></div>
        <div v-if="addNewType[0]==='tupian'">
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
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "/home",
      addNewPopup: false,
      addNewType: [],
      dialogImageUrl: "",
      editor: null,
      dialogVisible: false,
      imgArr: [], //上传的图片的路径的集合
      addNewArr: [
        {
          label: "技术",
          value: "jishu",
          children: [
            {
              label: "CSS",
              value: "css"
            }
          ]
        },
        {
          label: "图片",
          value: "tupian"
        },
        {
          label: "随笔",
          value: "suibi"
        }
      ],
      form: {}
    };
  },
  computed: {},
  watch: {
    addNewType() {
      if (this.addNewType[0] === "tupian") {
        // console.log("开放上传图片组件");
        this.imgArr = []; //初始化图片容器 醃
      } else {
        this.initEditor();
      }
    }
  },
  methods: {
    navTabSelect(key, keyPath) {
      if (keyPath[0] == this.$route.path) return;
      this.$router.push({
        path: keyPath[0],
        query: {
          type: keyPath[1]
        }
      });
    },
    cascaderChange(e) {
      this.addNewType = e;
    },
    addNew() {
      this.addNewPopup = true;
      setTimeout(() => {
        this.initEditor();
      }, 1);
    },
    initEditor() {
      if (this.addNewPopup === false) return;
      this.$refs.editorElem.innerHTML = "";
      this.editor = new E(this.$refs.editorElem);
      this.editor.customConfig.onchange = html => {
        this.form.text = html;
        // console.log(this.form.text);
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
    },
    // 图片上传成功回调
    successImg(res, file, fileList) {
      this.imgArr.push(res.data.url);
      console.log(file);
      console.log(fileList);
    },
    // 删除图片回调
    removeImg(file, fileList) {
      console.log(file, fileList);
      // this.imgArr.push(res.data.url);
    },
    // 打开图片展示器
    viewBigImg(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 保存
    saveAddNew() {
      // 把类型，内容或者图片列表写入数据库，
      if (this.addNewType.length === 0)
        return this.$message("请选择新增内容的类型");
      if (this.form.name === undefined || this.form.name === "") {
        return this.$message("请输入标题");
      }
      // 图片
      if (this.addNewType[0] === "tupian") {
        if (this.imgArr.length == 0) return this.$message("请至少上传一张图片");
        this.saveImg();
      } else {
        //技术
        if (this.form.text === undefined || this.form.text === "")
          return this.$message("请输入内容");
        this.saveSkill();
      }
    },
    // 添加技术博客
    saveSkill() {
      //分类 标题，编辑器
      this.$axios
        .post("/add_skill", {
          type: this.addNewType,
          title: this.form.name,
          content: this.form.text
        })
        .then(res => {
          if (res.status) {
            this.$message("上传成功!");
            this.form.name = "";
            this.addNewArr = [];
            this.addNewPopup = false;
          } else {
            this.$message(res.msg);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 添加图片
    saveImg() {
      // 标题，路径集合
      this.$axios.post("/add_img", {
        title: this.form.name,
        img_arr: this.imgArr,
      });
      then(res => {
        if (res.status) {
          this.$message("上传成功!");
          this.form.name = "";
          this.addNewArr = [];
          this.imgArr = []; 
          this.addNewPopup = false;
          console.log('我提交');
        } else {
          this.$message(res.msg);
        }
      }).catch(err => {
        console.log(err);
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initEditor();
    });
  },
  created() {
    this.activeIndex = this.$route.path;
  }
};
</script>

<style scoped lang="scss">
.win {
  width: 100%;
  margin-bottom: 0px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $black;
  .el-menu.el-menu--horizontal {
    border: none;
  }
  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .addnewbtn {
    background-color: $yel;
    border-color: $yel;
  }
  .wwin[data-v-d8e3fd6c] {
    color: $yel;
  }
  >>> .w-e-text-container p {
    color: #666;
  }
  .add_new_pop {
    .row {
      min-height: 200px !important;
      max-height: 550px !important;
      overflow-y: auto;
      .title {
        .title_form_row {
          // display: flex;
          // justify-content: space-between;
          // align-items: center;
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
