<template>
  <div class="bgc-w">
    <NavBar :model="model"></NavBar>

    <!-- 滑动导航 -->
    <van-tabs
      v-model="active"
      swipeable
      animated
    >
      <van-tab
        v-for="(item1,i1) in categories"
        :title="item1.title"
        :key="i1"
      >

        <!-- 循环了的item -->
        <div class="detailParent d-flex jc-around">
          <Detail
            class="detailitem"
            v-for="(item2,i2) in item1.list"
            :key="i2"
            :model="item2"
          />
        </div>

        <!-- 上拉加载更多 -->
        <van-list
          :immediate-check="false"
          v-model="item1.loading"
          :finished="item1.finished"
          finished-text="没有更多了"
          @load="onLoad"
        />

      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
//api
import { userinfo, category, detail } from "@/network/home.js";
//组件
import NavBar from "@/components/commom/NavBar.vue";
import Detail from "@/views/detail.vue";

export default {
  data() {
    return {
      model: [],
      categories: {},
      active: 0
    };
  },
  methods: {
    async userinfoData() {
      const res = await userinfo({}).then(res => {
        this.model = res[0];
      });
    },
    async categoryData() {
      await category({}).then(res => {
        this.changeCategory(res);
      });
    },
    //循环添加个list进去
    async changeCategory(e) {
      const category1 = e.map((item, index) => {
        item.list = [];
        item.page = 0;
        item.pagesize = 10;
        //上拉加载的flag
        item.finished = false;
        item.loading = false;
        return item;
      });
      this.categories = category1;
      //刚加完空的list后，获取首页actyive：0的数据，且加到list中
      this.selectArticle();
    },
    //面对不同id，list的值
    async selectArticle() {
      const categoryitem = this.categoryitem();
      const res = await detail(categoryitem._id, {
        page: categoryitem.page,
        pagesize: categoryitem.pagesize
      });
      categoryitem.list.push(...res);
      console.log(categoryitem)
    //   categoryitem.loading = true;
    if(res.length <categoryitem.pagesize){
        categoryitem.finished = true;
    }
    },
    //监听active，获取当前id
    categoryitem() {
      const categoryitem = this.categories[this.active];
      return categoryitem;
    },
    //上拉加载
    onLoad() {
      //知道一下我上拉的是那个category
      const categoryitem = this.categoryitem()
      console.log('拉动的是：'+categoryitem.title+'，准备page++');
      categoryitem.loading =false;
      setTimeout(() => {
        categoryitem.page += 1;
        this.selectArticle();
      }, 1000);
    }
  },
  watch: {
    active() {
      this.selectArticle();
    }
  },
  components: {
    NavBar,
    Detail
  },
  created() {
    this.userinfoData();
    this.categoryData();
  }
};
</script>

<style lang="less" scoped>
.detailParent {
  flex-wrap: wrap;
  .detailitem {
    width: 45%;
    margin: 5px 0;
  }
}
</style>