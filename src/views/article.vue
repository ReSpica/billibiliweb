<template>
  <div class="datainfo bgc-w">
    <NavBar :model="model"></NavBar>
    <div>
      <div class="video">
        <video
          :src="this.articleDatas.content"
          controls
        ></video>
        <div class="detailinfo">
          <div>
            <span v-if="articleDatas.category">{{articleDatas.category.title}}</span>
            <span>{{articleDatas.name}}</span>
          </div>
          <div v-if="articleDatas.userinfo">
            <span>{{articleDatas.userinfo.name}}</span>
            <span>146.5万次观看</span>
            <span>528弹幕</span>
            <span>{{articleDatas.userinfo.date}}</span>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//api
import { userinfo, article } from "@/network/article.js";
//组件
import NavBar from "@/components/commom/NavBar.vue";

export default {
  data() {
    return {
      model: [],
      articleDatas: []
    };
  },
  methods: {
    async userinfoData() {
      const res = await userinfo({}).then(res => {
        this.model = res[0];
      });
    },
    async articleData() {
      const res = await article(this.$route.params.id, {}).then(res => {
        this.articleDatas = res[0];
        console.log(this.articleDatas);
      });
    }
  },
  created() {
    this.userinfoData();
    this.articleData();
  },
  components: {
    NavBar
  }
};
</script>

<style scoped lang="less">
.datainfo {
  width: 100%;
  height: auto;
  video {
    width: 100%;
  }
}
.detailinfo {
  padding: 4vw 4vw;
  font-size: 3.733vw;
  div:nth-child(1){
    span:nth-child(1){
      padding: 1.067vw 1.067vw;
      color:#fb7299;
      background-color: #f4f4f4;
      border-radius: 2.667vw;

    }
  }
  div:nth-of-type(2){
    span{
      color:rgb(138, 126, 126);
    }
  }
}
</style>