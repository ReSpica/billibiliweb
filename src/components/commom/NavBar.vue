<template>
  <div class="navbar bgc-w d-flex jc-around ">
    <div  @click="logoClick">
      <img
        class="logo"
        src="@/assets/imgs/logo.png"
        alt="logo"
      >
    </div>
    <div class="search d-flex ai-center">
      <p class="d-flex ai-center">
        <van-icon
          style="margin-left:1.6vw;"
          name="search"
          color="#cccbcb"
        />
        <span class="color-w">鬼灭之刃漫画连载中</span>
      </p>
    </div>
    <div class="d-flex">
      <div
        class=" d-flex ai-center"
        v-if="model"
      >
        <img
          class="userlogo"
          :src="model.user_img"
          alt="userlogo"
          v-if="model.user_img"
           @click="userlogoClick"
        />
        <img
         @click="userlogoClick"
          class="userlogo"
          src="@/assets/imgs/userlogo.jpg"
          alt="userlogo"
          v-else
        >
      </div>
      <div>
        <span class="download bgc-dp color-w">下载App</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["model"],
  methods:{
    userlogoClick(){
      this.$router.replace('/userinfo')
    },
    logoClick(){
       this.$router.replace('/home')
    }
  }
};
</script>

<style scoped lang="less">
.navbar {
  height: 12vw;
  & div {
    height: 12vw;
    line-height: 12vw;
  }
  .logo {
    height: 12vw;
    width: auto;
  }
  .userlogo {
    border-radius: 50%;
    height: 8vw;
    width: auto;
    margin-right: 1.6vw;
  }
  .download {
    padding: 1.6vw;
    border-radius: 1.067vw;
    font-size: 3.2vw;
  }
  .search p {
    height: 66%;
    width: 32vw;
    background-color: #f4f4f4;
    border-radius: 2.133vw;

    &.icon {
      margin-left: 4px;
    }
  }
  .search span {
    font-size: 3.2vw;
    color: #cccbcb;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>