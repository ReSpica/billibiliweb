<template>
	<div>
		<div class="LoginTop bgc-w d-flex jc-around ai-center">
			<div>
				<slot name="left"></slot>
			</div>
			<div>{{middleTop}}</div>
			<div>
				<slot name="right"></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:['middleTop'],
		data(){
			return{
			}
		}
	}
</script>

<style lang="less" scoped>
	.LoginTop{
		height: 12vw;
	}
</style>
