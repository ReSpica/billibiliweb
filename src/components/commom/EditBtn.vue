<template>
  <div @click="editBtnClick">
      <div class="editbtn d-flex jc-between ai-center">
          <span>{{left}}</span>
          <span><slot name="right"></slot></span>
      </div>
  </div>
</template>

<script>
export default {
    props:['left'],
    methods:{
        editBtnClick(){
            this.$emit('editBtnClick')
        }
    }
}
</script>

<style scoped lang="less">
.editbtn{
    background-color: white;
    padding: 15px 12px;
    border-bottom: 1px solid #fafafa;
    span:nth-of-type(1){
        color:rgb(132, 112, 112);
        font-size: 14px;
    }
    span:nth-of-type(2){
        font-size: 12px;
    }
}
</style>