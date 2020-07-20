<template>
  <div class="userinfo1">
    <div class=" d-flex bgc-w">
      <div class="logo d-flex ai-center jc-center">
        <img
          :src="user_img"
          alt="userlogo"
        >
      </div>
      <div class="num d-flex jc-center ai-center">
        <div class="d-flex jc-center">
          <span>6<p>粉丝</p></span>
          <span>58<p>关注</p></span>
          <span>67<p>获赞</p></span>
        </div>
        <div class="detall" @click="detailClick">编辑资料</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['model'],
  data(){
    return{
    }
  },
    computed:{
    user_img(){
      if(this.model.user_img){
        return this.model.user_img;
      }else{
        return require("@/assets/imgs/userlogo.jpg")
      }
    }
  },
  methods: {
    detailClick(){
      this.$emit('detailClick')
    }
  },
};
</script>

<style scoped lang="less">
.userinfo1 {
  width: 100%;
  height: 25.333vw;
  position: absolute;
  .logo {
    flex: 2;
    img {
      width: 70%;
      height: auto;
      border-radius: 50%;
      position: relative;
      margin-top: -3.2vw;
    }
  }
  .num {
    flex: 4;
    flex-direction: column;
    span {
      display: inline-block;
      padding: 2.667vw;
      font-size: 3.2vw;
      text-align: center;
      border-left: 0.267vw solid #eee;
      color: rosybrown;
      &:nth-of-type(1) {
        border-left: 0vw;
      }
    }
    s div {
      width: 100%;
    }
    .detall {
      width: 80%;
      border: solid 0.267vw #ff9db5;
      text-align: center;
      color: #ff9db5;
      border-radius: 1.6vw;
    }
    
  }
}
</style>