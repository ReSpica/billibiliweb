<template>
  <div class="userinfo">
    <NavBar :model="model"></NavBar>
    <img
      class="bgi"
      src="@/assets/imgs/userbackground.jpg"
      alt=""
    >
    <UserComponent1 :model="model" @detailClick="detailClick"></UserComponent1>
    <UserComponent2 :model="model"></UserComponent2>
    <UserComponent3 :model="model"></UserComponent3>
  </div>
</template>

<script>
//api
import { userinfo } from "@/network/user.js";
//组件
import NavBar from "@/components/commom/NavBar.vue";
import UserComponent1 from "@/components/commom/UserComponent1.vue";
import UserComponent2 from "@/components/commom/UserComponent2.vue";
import UserComponent3 from "@/components/commom/UserComponent3.vue";

export default {
  data() {
    return {
      model:{}
    };
  },
  methods: {
     async userinfoData(){
      const res = await userinfo({}).then(res=>{
        this.model = res[0];
      })
    },
    detailClick(){
      console.log('...')
      this.$router.push('/useredit')
    }
  },
  components: {
    NavBar,
    UserComponent1,
    UserComponent2,
    UserComponent3
  },
  created(){
    this.userinfoData()
  }
};
</script>

<style scoped lang="less">
.userinfo{
    .bgi{
        width: 100%;
        height: 46vw;
    }
}
</style>