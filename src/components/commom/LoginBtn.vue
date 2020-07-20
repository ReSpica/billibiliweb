<template>
  <div class="btnparnt"  @click="btnClick">
   <div class="loginbtn bgc-p color-w d-flex jc-center ai-center">{{btnName}}</div>
  </div>
</template>

<script>
export default {
  props:['btnName'],
  data() {
    return {

    };
  },
  methods:{
    btnClick(){
      this.$emit('btnClick')
    }
  }
};
</script>

<style lang="less" scoped>
.btnparnt{
  padding: 10px 10px;
}
.loginbtn{
  margin: 1.6vw 0;
  height: 12vw;
  border-radius: 6vw;
}
</style>
