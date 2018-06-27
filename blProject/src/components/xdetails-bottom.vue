<template>
	<div class="bottom">
		<ul>
			<li><i class="iconfont icon-tubiaolunkuo-"></i><span>客服</span></li>
			<li><i class="iconfont icon-03"></i><span>购物车</span></li>
			<li><i class="iconfont icon-guanzhu"></i><span>已关注</span></li>
			<li class="addToCar">加入购物车</li>
			<li class="toPay">立即购买</li>
		</ul>
	</div>
</template>

<script>
</script>

<style scoped>
	.bottom{background: #fff;}
	.bottom span{font-size: 18px;color:#A8A8A8;}
	.bottom ul{height:83px;display:flex;justify-content: space-between;}
	.bottom ul li{display:flex;flex-direction: column;justify-content:center;text-align:center;position:relative;color:#D6D6D6;}
	.bottom ul li:nth-child(1),.bottom ul li:nth-child(2),.bottom ul li:nth-child(3){
		flex:1.5;
	}
	.bottom ul li:nth-child(4),.bottom ul li:nth-child(5){
		flex:3;
	}
	.bottom ul li:nth-child(4){
		background: #ff6f6f;
	}
	.bottom ul li:nth-child(5){
		background: #333;
	}
	.bottom ul li i{font-size:25px;}
	.bottom .addToCar,.bottom .toPay{font-size: 20px;color:#fff;}
</style>