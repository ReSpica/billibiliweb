<template>
  <div>
    <van-cell-group>
      <van-field
        :label="label"
        :type="type"
        :placeholder="placeholder"
        :rule="rule"
        v-model="content"
        :error-message="err"
      />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  props: ["label","type","placeholder","rule"],
  data() {
    return {
      content:'',
      err:''
    };
  },
  methods:{
    handlearning(){
      const rule = new RegExp(this.rule)
      //判断传来的正则
      if(rule.test(this.content)){
        this.err = ''
        this.$emit('inputChange',this.content)
      }else{
        this.err = '请输入6-12位字符'
      }
    }
  },
  watch:{
    content(){
      this.handlearning()
    }
  }
};
</script>

<style lang="less" scoped>
</style>
