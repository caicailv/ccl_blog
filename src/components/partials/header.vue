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
      <el-submenu index="/skill">
        <template slot="title">技术</template>
        <el-menu-item index="css">css</el-menu-item>
        <el-menu-item index="html">html</el-menu-item>
        <el-menu-item index="vue">vue</el-menu-item>
        <el-menu-item index="node">node</el-menu-item>
        <el-menu-item index="小程序">小程序</el-menu-item>
        <el-menu-item index="混合APP">混合APP</el-menu-item>
        <el-menu-item index="react">react</el-menu-item>
        <el-menu-item index="anglue">anglue</el-menu-item>
      </el-submenu>
      <el-menu-item index="/notepad">随笔</el-menu-item>
      <el-menu-item index="/album">相册</el-menu-item>
      <el-menu-item index="/about">关于我</el-menu-item>
    </el-menu>
    <div class="block">
      <span class="demonstration">hover 触发子菜单</span>
      <el-cascader
        v-model="selectValue"
        :options="options"
        :props="{ expandTrigger: 'hover' }"
        @change="selectChange"
      ></el-cascader>
    </div>
    <!-- <el-dropdown trigger="click" @command="addNew">
      <el-button type="primary" class="addnewbtn" icon="el-icon-plus">新增内容</el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-coordinate" command="skill">技术贴</el-dropdown-item>
        <el-dropdown-item icon="el-icon-edit" command="notepad">随笔</el-dropdown-item>
        <el-dropdown-item icon="el-icon-picture-outline" command="album">图片</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>-->
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "/home",
      selectValue: "",
      form:{},
      options: [
        {
          value: "jishu",
          label: "技术",
          children: [
            {
              value: "css",
              label: "css"
            },
            {
              value: "vue",
              label: "vue"
            },
            {
              value: "react",
              label: "react"
            }
          ]
        }
      ]
    };
  },
  computed: {},
  methods: {
    selectChange() {},
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
      this.$router.push({
        path: "/newlyadd",
        query: {
          type
        }
      });
      this.activeIndex = "";
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
    background-color: red;
    color: $yel;
  }
}
</style>
