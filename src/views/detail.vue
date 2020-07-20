<template>
  <div
    class="detailitem"
    @click="detailitemClick"
  >
    <div class="imgparnt">
      <img
        :src="this.model.img"
        alt=""
        style="width:100%"
      />

      <div class="bottom d-flex jc-between">
        <span class="icon-play2"> 23333</span>
        <span class="icon-file-text"> {{model.commentlen ? model.commentlen:66}}</span>
      </div>

    </div>

    <p>{{model.name}}</p>
  </div>
</template>

<script>
export default {
  props: ["model"],
  data() {
    return {};
  },
  methods: {
    detailitemClick() {
      this.$router.push("/article/" + this.model.id);
    }
  }
};
</script>

<style scoped lang="less">
p {
  font-size: 3.2vw;
  color: rgb(79, 95, 125);
}
.imgparnt {
  position: relative;
  .bottom {
    position: absolute;
    width: 100%;
    bottom: 1.067vw;
    font-size: 3.2vw;
    color: white;
    background: linear-gradient(0.5deg, rgba(0, 0, 0, 0.85), transparent);
    & :nth-of-type(1) {
      margin-left: 2.667vw;
    }
    & :nth-of-type(2) {
      margin-right: 2.667vw;
    }
  }
}
</style>