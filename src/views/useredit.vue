<template>
  <div v-if="model">
    <navBar :model="model"></navBar>

    <div class="uploadfile">
      <van-uploader
        class="uploading"
        :after-read="afterRead"
        preview-size="100vw"
      />
      <EditBtn
        style="margin-top:10px"
        left="头像"
      >
        <img
          v-if="model.user_img"
          :src="model.user_img"
          slot="right"
          alt="logo"
        />
        <img
          v-else
          src="@/assets/imgs/userlogo.jpg"
          slot="right"
          alt="logo"
        />
      </EditBtn>
    </div>

    <EditBtn
      left="昵称"
      @editBtnClick="editBtnClick"
    ><a
        href="javascript:;"
        slot="right"
      >{{model.name}}</a></EditBtn>

    <EditBtn
      left="账号"
      @editBtnClick="editBtnClick"
    ><a
        href="javascript:;"
        slot="right"
      >{{model.username}}</a></EditBtn>

    <EditBtn
      left="个性签名"
      @editBtnClick="editBtnClick"
    ><a
        href="javascript:;"
        slot="right"
      >{{model.user_desc}}</a></EditBtn>

    <div @click="editbackClick" class="editback d-flex ai-center jc-center bgc-p color-w">返回个人信息页</div>

    <!-- 弹出框 -->
    <van-dialog
      v-model="vanshow"
      title="修改"
      show-cancel-button
      @confirm="dialogClick"
    >
      <van-field
        v-model="model.name"
        label="昵称"
      />
      <van-field
        v-model="model.username"
        label="账号"
      />
      <van-field
        v-model="model.user_desc"
        label="个人签名"
      />
    </van-dialog>

  </div>
</template>

<script>
//api
import { userinfo, upload1, userupdate } from "@/network/user.js";
//组件
import NavBar from "@/components/commom/NavBar.vue";
import EditBtn from "@/components/commom/EditBtn.vue";

export default {
  data() {
    return {
      model: {},
      vanshow: false
    };
  },
  methods: {
    async userinfoData() {
      const res = await userinfo({}).then(res => {
        this.model = res[0];
      });
    },
    //图片上传
    async afterRead(file) {
      // 此时可以自行将文件上传至服务器
      const formdata = new FormData();
      formdata.append("file", file.file);
      await upload1(formdata).then(res => {
        console.log(res);
        this.model.user_img = res.url;
      });

      this.edit();
    },
    async edit() {
      await userupdate(this.model).then(res => {
        console.log(res);
      });
    },
    editBtnClick() {
      this.vanshow = true;
    },
    dialogClick() {
      this.edit();
    },
    editbackClick(){
        this.$router.go(-1)
    }
  },
  components: {
    NavBar,
    EditBtn
  },
  created() {
    this.userinfoData();
  }
};
</script>

<style scoped lang="less">
img {
  border-radius: 50%;
  height: 10.667vw;
  width: auto;
}
.uploadfile {
  position: relative;
  overflow: hidden;
  .uploading {
    position: absolute;
    opacity: 0;
  }
}
.editback {
  font-size: 5vw;
  padding: 4vw 0;
  margin-top: 2.667vw;
}
</style>