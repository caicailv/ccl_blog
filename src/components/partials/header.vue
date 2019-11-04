<template>
  <div class="win">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
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
    <el-dropdown trigger="click" @command="addNew">
      <el-button type="primary" class="addnewbtn" icon="el-icon-plus">新增内容</el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-coordinate" command="skill">技术贴/随笔</el-dropdown-item>
        <el-dropdown-item icon="el-icon-picture-outline" command="album">图片</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <!-- 新增内容/随笔弹窗 -->
    <el-dialog
      title="添加新内容"
      :visible.sync="addNewPopup"
      width="40%"
      :before-close="()=>{addNewPopup=false}"
    >
      <div class="editorElem" ref="editorElem" style="text-align:left;"></div>
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
      addNewType: "",
      addNewPopup: false,
      editor: null,
      editorContent: ""
    };
  },
  computed: {},
  methods: {
    handleSelect(key, keyPath) {
      if (keyPath[0] == this.$route.path) return;
      this.$router.push({
        path: keyPath[0],
        query: {
          type: keyPath[1]
        }
      });
    },
    addNew(type) {
      this.addNewType = type;
      this.addNewPopup = true;
      setTimeout(() => {
      this.initEditor();
        
      }, 1);
      return;
      this.$router.push({
        path: "/newlyadd"
      });
      this.activeIndex = "";
    },
    initEditor() {
      console.log(this.$refs.editorElem);
      // this.editor = new E(this.$refs.editorElem);
      // this.editor.customConfig.onchange = html => {
      //   this.editorContent = html;
      //   console.log(this.editorContent);
      // };
      // this.editor.customConfig.uploadImgShowBase64 = true;
      // this.editor.customConfig.zIndex = 100;
      // this.editor.create();
    }
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
}
</style>
