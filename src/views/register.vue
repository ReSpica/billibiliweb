<template>
  <div>
    <LoginTop middleTop="注册bilibili">
      <span
        slot="left"
        style="visibility:hidden"
      >登陆</span>
      <span
        slot="right"
        @click="$router.push('/login')"
      >登陆</span>
    </LoginTop>
    <img
      src="@/assets/imgs/registerLogo.jpg"
      alt=""
      style="margin:3vw 0"
    >
    <LoginText
      label="姓名"
      type="text"
      placeholder="请输入姓名"
      rule="^.{6,16}$"
      @inputChange="getName"
      style="margin:0 0 3vm 0"
    ></LoginText>
    <LoginText
      label="账号"
      type="text"
      placeholder="请输入账号"
      rule="^.{6,16}$"
      @inputChange="getSno"
    ></LoginText>
    <LoginText
      label="密码"
      type="password"
      placeholder="请输入密码"
      rule="^.{6,16}$"
      @inputChange="getPwd"
    ></LoginText>
    <LoginBtn
      btnName="注册"
      @btnClick="btnClick"
    ></LoginBtn>
  </div>
</template>

<script>
//接口
import { register } from "@/network/login.js";
//组件
import LoginTop from "@/components/commom/LoginTop.vue";
import LoginText from "@/components/commom/LoginText.vue";
import LoginBtn from "@/components/commom/LoginBtn.vue";
export default {
  data() {
    return {
      name: "",
      username: "",
      password: ""
    };
  },
  methods: {
    getName(e) {
      this.name = e;
    },
    getSno(e) {
      this.username = e;
    },
    getPwd(e) {
      this.password = e;
    },
    async btnClick() {
      const rulg = /^.{6,12}$/;

      if (
        rulg.test(this.name) &&
        rulg.test(this.username) &&
        rulg.test(this.password)
      ) {
        await register({
          name: this.name,
          username: this.name,
          password: this.password
        }).then(res => {
          if (res.code == 200) {
            this.$tip.success("注册成功");
            this.$router.push('/login')
          } else {
            this.$tip.fail("账号已存在");
          }
        });
      } else {
        this.$tip.fail("请准确输入信息");
      }
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
