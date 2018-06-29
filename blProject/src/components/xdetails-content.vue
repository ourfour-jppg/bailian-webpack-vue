<template>
	<div class="content">
		<div class="bigImg">
			<!--<div class="van-swipe imgBox">
				<ul class="imgBoxUl clearfix">
					<li class="fl" v-for="(item,index) in goodsData.images"><img :src="item.src" alt="" /></li>
				</ul>
				<div class="van-swipe__indicators"><i class="van-swipe__indicator" v-for="(item,index) in goodsData.images"></i></div>
			</div>-->
			<!--<xdetailsSlider />-->
			<xswiper />
		</div>
		<xcountDown endTime="1531224633" :callback="callback" endText="已经结束了"></xcountDown>
		<div class="goodsData common">
			<p class="priceP"><span>￥{{goodsData.price}}</span><span>参考价￥&nbsp;{{goodsData.reference}}</span><span>&nbsp;{{goodsData.activity}}</span></p>
			<p class="nameP"><span>【自营】</span><span>{{goodsData.name}}</span></p>
		</div>
		<div style="height: 20px;"></div>
		<div class="select common">
			<p>选择：<span>1</span>件<span class="fr icon-xiangyou iconfont"></span></p>
		</div>
		<div style="height: 20px;"></div>
		<div class="select common">
			<p>规格参数<span class="fr icon-xiangyou iconfont"></span></p>
		</div>
		<div style="height: 20px;"></div>
		<div @click="showAddress" class="address common select"><span>送至：</span><i class="icon-gerenzhongxindizhiguanli iconfont"></i></div>
		<xaddress v-if="isShowAddress" />
		<div class="van-toast van-toast--text van-toast--middle" style="z-index: 2024; display: none;">
			<div>当前 Swipe 索引：1</div>
			<!---->
			<!---->
		</div>
	</div>

</template>

<script>
	$(function(){
		var imgBox = document.querySelector(".imgBox");
		var imgBoxUl = document.querySelector(".imgBoxUl");
	
	})
	
	import xswiper from './xswiper'
	import xcountDown from './xcountDown'
	import xaddress from './xaddress'
	export default {
		data() {
			return {
				goodsData: {
					id: 1,
					name: '资生堂 珊珂 SENKA 棉润泡沫 120g 日本进口 （原洗颜专科洗面奶）',
					images: [{
							src: "../../static/goods.jpg"
						},
						{
							src: "../../static/goods.jpg"
						},
						{
							src: "../../static/goods.jpg"
						},
						{
							src: "../../static/goods.jpg"
						}
					],
					price: 50.99,
					reference: 58.99,
					activity: '闪购',

				},
				isShowAddress: false
			}
		},
		components: {
			xswiper,
			xcountDown,
			xaddress
		},
		methods: {
			showAddress() {
				this.isShowAddress = true
			}
		}
	}
</script>

<style scoped>
	.content {
		margin-top: 1.12rem;
		margin-bottom: 1.4rem;
	}
	
	.common {
		padding: 0 0.266666rem;
		
	}
	
	.bigImg{
		width: 100%;
		/*height: 750px;*/
		overflow: hidden;
	}
	
	.priceP {
		height: 100px;
		border-bottom: 0.013333rem solid #000;
		font-size: 0.373333rem;
		line-height: 1.333333rem;
		font-weight: bold;
	}
	
	.priceP span:nth-child(1) {
		color: #ff6f6f;
		/*font-size: 22px;*/
	}
	
	.priceP span:nth-child(2) {
		margin-left: 0.24rem;
		color: #999999;
	}
	
	.goodsData {
		background: #fff;
	}
	
	.priceP span:nth-child(3) {
		color: #ff6f6f;
		border-right: 0.013333rem solid #ff6f6f;
		border-bottom: 0.013333rem solid #ff6f6f;
		margin-left: 0.266666rem;
	}
	
	.nameP {padding-bottom: 0.4rem;}
	
	.nameP span {
		font-size: 0.4rem;
		/*line-height: 34px;*/
	}
	
	.select {
		background: #fff;
		font-size: 0.346666rem;
		height: 1.173333rem;
	}
	
	.select p {
		line-height: 1.173333rem;
	}
	/*.select span{
		font-size: 26px;
	}*/
	.iconfont {
		color: #aaa;
	}
	
	.address span {
		line-height: 1.173333rem;
	}
	
	.address {
		border-bottom: 0.013333rem solid #ccc;
		
	}
	.address i{
		font-size: 0.346666rem;
	}
</style>