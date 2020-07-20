<template>
  <div class="userinfo3">
    <van-tabs v-model="activeName">
      <van-tab
        title="动态"
        name="a"
      ><div>暂时无动态信息</div></van-tab>
      <van-tab
        title="视频"
        name="b"
      ><div>你还没有投稿视频</div></van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "a"
    };
  }
};
</script>

<style scoped lang="less">
.userinfo3 {
  height: 26.667vw;
  background-color: white;

  & div:nth-of-type(1){
      text-align: center;
      color: #b3b2b2;
      margin-top: 4px;
  }
}
</style>