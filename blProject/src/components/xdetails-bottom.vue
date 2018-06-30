<template>
	<div>
		<div class="bottom">
			<ul>
				<li><a href="#"><i class="iconfont icon-tubiaolunkuo-"></i><span>客服</span></a></li>
				<li><a href="#/goodsCar"><i class="iconfont icon-03"></i><span>购物车</span><span></span></a></li>
				<li><a @click="toggleCollect"><i class="iconfont icon-guanzhu" :class="{'background':collectState}"></i><span>已关注</span></a></li>
				<li class="addToCar" @click="chooseGoods">加入购物车</li>
				<li class="toPay" @click="chooseGoods">立即购买</li>
			</ul>
		</div>
		<xaddToCar v-if="$store.state.isChooseGoods"/>
	</div>

</template>

<script>
	import xaddToCar from './xaddToCar'
	export default {
		data(){
			return {
				collectState:false,
			}
		},
		methods: {
			chooseGoods: function() {
				console.log(this)
				this.$store.state.isChooseGoods = true;
			},
			toggleCollect:function(){
				this.collectState = !this.collectState;
			},
			
			
		},
		components: {
			xaddToCar
		},
		
	}
</script>

<style scoped>
	.bottom {
		background: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.background{
		color: #E2143C;
	}
	.bottom span {
		font-size: 0.24rem;
		color: #A8A8A8;
	}
	
	.bottom ul {
		height: 1.4rem;
		display: flex;
		justify-content: space-between;
	}
	
	.bottom ul li a{
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		position: relative;
		color: #D6D6D6;
		
	}
	
	.bottom ul li:nth-child(1),
	.bottom ul li:nth-child(2),
	.bottom ul li:nth-child(3) {
		flex: 1.5;
		
	}
	
	.bottom ul li:nth-child(4),
	.bottom ul li:nth-child(5) {
		flex: 3;
	}
	
	.bottom ul li:nth-child(4) {
		background: #ff6f6f;
	}
	
	.bottom ul li:nth-child(5) {
		background: #333;
	}
	
	.bottom ul li i {
		font-size: 0.506666rem;
		line-height: 0.96rem;
	}
	
	.bottom .addToCar,
	.bottom .toPay {
		font-size: 0.4rem;
		color: #fff;
		line-height: 1.4rem;
		text-align: center;
	}
</style>