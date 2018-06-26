<template>
	<div id="top">
		<div class="top_l">123</div>
		<div class="top_c">456</div>
		<div class="top_r">789</div>
	</div>
</template>

<script>
</script>

<style scoped>
	/*@import url("../css/base.css");*/
	#top{
		display: flex;
		color: #666666;
		height: 1rem;
	}
	.top_l{
		flex:1;
		background: red;
	}
	.top_c{
		flex:5;
		background: blue;
	}
	.top_r{
		flex:1;
		background: red;
	}
	.iconfont {
		
	}
</style>