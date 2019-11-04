<template>
  <div class="win">
    <el-form ref="form" :model="form" label-width="80px">
      <el-input placeholder="请输入标题" v-model="form.name"></el-input>
    </el-form>
    <div class="editorElem" ref="editorElem" style="text-align:left;"></div>
  </div>
</template>

<script>
export default {
  name: "Newlyadd",
  data() {
    return {
      form: {},
      editor: null,
      editorContent: ""
    };
  },
  computed: {},
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  },

  created() {}
};
</script>

<style scoped lang="scss">
.win {
  .editorElem {
    background-color: #fff;
  }
 
}
</style>
