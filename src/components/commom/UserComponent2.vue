<template>
  <div class="userinfo2">
    <div style="height:25.333vw"></div>
    <div>
      <span>{{model.name}}</span>
      <div class="d-flex jc-between">
        <p>{{user_desc}}</p>
        <span @click="spanClick">下拉</span>
      </div>
      <span v-show="flag">uid:18125656984</span>
    </div>
  </div>
</template>

<script>
export default {
  props:['model'],
  data() {
    return {
        flag:false
    };
  },
  computed:{
    user_desc(){
      if(this.model.user_desc){
        return this.model.user_desc;
      }else{
        return '这个人很神秘，什么都没写...';
      }
    }
  },
  methods: {
    spanClick(e) {
      if (e.target.innerHTML == "下拉") {
        e.target.innerHTML = "收起";
        this.flag = true;
      } else {
        e.target.innerHTML = "下拉";
        this.flag = false;
      }
    }
  }
};
</script>

<style scoped lang="less">
.userinfo2 {
//   height: 44.666vw;
  padding-right: 2.667vw;
  padding-left: 2.667vw;
  padding-bottom: 4.8vw;
  background-color: white;
  & :nth-of-type(2) > span:nth-of-type(1) {
    font-weight: 700;
    font-size: 4.8vw;
  }
  & :nth-of-type(2) p {
    color: #b3b2b2;
    font-size: 3.2vw;
  }
  & :nth-of-type(2) > span:nth-of-type(2) {
    color: #b3b2b2;
    padding:1.067vw;
    background-color: #eee;
    font-size: 3.2vw;
  }
  & :nth-of-type(2) div > span {
    color: rgb(15, 169, 211);
    font-size: 3.733vw;
  }
}
</style>

