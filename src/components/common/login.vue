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
      <el-input placeholder="请输入秘钥" ref="passwordInt" type="password" prefix-icon="el-icon-key" @keyup.enter.native="submit" v-model="password"></el-input>

    </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "aa",
  data() {
    return {
      show: true,
      password:'',
    };
  },
  computed: {},
  methods: {
    submit(){
      this.$axios.post('/password',{
        password:this.password,
      })
      .then(res=>{
        console.log(res);
      })
      .catch(err=>{
        console.log(err);
      })
    }
  },
  created() {
    // console.log(2312312312);
    this.$nextTick(function(){
      
      console.log(this.$refs.passwordInt.$refs.input.focus());
    })
  }
};
</script>

<style scoped lang="scss">
.win {
  .row{
    // width: 50%;
    margin: 0 auto;
  }
}
</style>
