<template>
  <div class="win">
    <el-dialog
      :visible.sync="show"
      title="请输入秘钥"
      width="30%"
      :before-close="()=>{show=false}"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      class="add_new_pop"
    >
      <div class="row">
        <el-input
          placeholder="请输入秘钥"
          ref="passwordInt"
          type="password"
          prefix-icon="el-icon-key"
          @keyup.enter.native="submit"
          v-model="password"
        ></el-input>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      show: false,
      password: "",
    };
  },
  computed: {},
  methods: {
    // 验证登录状态
    isLoginStatus(callback){
      let token = localStorage.getItem("token");
      if(!token){
        this.openPopup();
      }else{
        callback(); 
      }
    },

    openPopup() {
      this.show = true;
      this.$nextTick(() => {
        // 自动聚焦
        this.$refs.passwordInt.$refs.input.focus();
      });
    },
    submit() {
      this.$axios
        .post("/password", {
          password: this.password
        })
        .then(res => {
          if (res.status) {
            let token = res.data;
            localStorage.setItem("token", token);
            this.$message("验证通过!");
            this.show = false;
            this.$emit("adopt");
          }else{
            this.$message(res.msg)
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {},
  mounted() {
  }
};
</script>

<style scoped lang="scss">
.win {
  .row {
    // width: 50%;
    margin: 0 auto;
  }
}
</style>
