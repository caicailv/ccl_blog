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
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或
              <em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="addNewPopup = false">取 消</el-button>
        <el-button type="primary" @click="saveAddNew">保 存</el-button>
      </span>
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
      editor: null,
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
        console.log("开放上传图片组件");
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
        console.log(this.form.text);
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
    // 保存
    saveAddNew() {
      this.form.type = this.addNewType;
      console.log(this.form);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initEditor();
    });
  },
  created() { 
    this.activeIndex = this.$route.path;
    // this.$axios
    //   .get("/v1/album")
    //   .then(res => { 
    //     console.log(res);
    //     // this.imgList = res.data;
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
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
