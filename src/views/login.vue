<template>
  <div>
    <LoginTop middleTop="登陆bilibili">
        <span slot="left" style="visibility:hidden">注册</span>
        <span slot="right"  @click="$router.push('/register')">注册</span>
    </LoginTop>
    <img
      src="@/assets/imgs/registerLogo.jpg"
      alt=""
      style="margin:3vw 0"
    >
    <LoginText
      label="账号"
      type="text"
      placeholder="请输入账号( respica )"
      @inputChange="getSno"
    ></LoginText>
    <LoginText
      label="密码"
      type="password"
      placeholder="请输入密码( 130123 )"
      @inputChange="getPwd"
    ></LoginText>
    <LoginBtn
      btnName="登陆"
      @btnClick="btnClick"
    ></LoginBtn>
  </div>
</template>

<script>
//接口
import { login } from "@/network/login.js";
//组件
import LoginTop from "@/components/commom/LoginTop.vue";
import LoginText from "@/components/commom/LoginText.vue";
import LoginBtn from "@/components/commom/LoginBtn.vue";
export default {
  data() {
    return {
      username: "",
      password:""
    };
  },
  methods: {
    getSno(e) {
      this.username = e;
    },
    getPwd(e) {
      this.password = e;
    },
    async btnClick() {
      await login({
        username: this.username,
        password:this.password
      }).then(res => {
        if(res.code != 200){
            this.$tip.fail("请准确输入信息");
        }else{
          localStorage.setItem('id',res.id);
          localStorage.setItem('token',res.token);
          this.$router.push('/home')
        }
      });
    }
  },
  components: {
    LoginTop,
    LoginText,
    LoginBtn
  }
};
</script> 

<style scoped lang="less">
img {
  width: 100%;
  height: auto;
}
</style>