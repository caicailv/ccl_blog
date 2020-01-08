<template>
  <div class="win">
    <div class="rott">
      <div class="left">
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
      </div>
      <el-button type="primary" class="addnewbtn" @click="addNewPop" icon="el-icon-plus">新增内容</el-button>
    </div>
    <login ref="login" @adopt></login>
    <add-blog class="add_blog" ref="add_blog"></add-blog>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "/home",
      loginStatus: false //登录状态 true 登录中 false未登录
    };
  },
  computed: {},
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
    // 开启弹窗, 用ref拿到子组件实例,操作子组件实例中的方法
    addNewPop() {
      this.$refs.add_blog.addNew();
    }
  },
  created() {
    this.activeIndex = this.$route.path;
  }
};
</script>

<style scoped lang="scss">
.win {
  margin-bottom: 0px;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: $black;
  -webkit-user-select: none;
  .rott {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .add_blog {
    position: absolute;
  }
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
    background-color: $theme;
    border-color: $theme;
  }
  .wwin[data-v-d8e3fd6c] {
    color: $theme;
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
