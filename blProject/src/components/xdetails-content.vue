<template>
	<div class="content">
		<div class="bigImg">
			<ul class="imgBox clearfix">
				<li class="fl" v-for="item in images"><img :src="item.src" alt="" /></li>
			</ul>
		</div>
		<xcountDown endTime="1531224633" :callback="callback" endText="已经结束了"></xcountDown>
		<div class="goodsData common" >
			<p class="priceP"><span>￥{{goodsData.price}}</span><span>参考价￥&nbsp;{{goodsData.reference}}</span><span>&nbsp;{{goodsData.activity}}</span></p>
			<p class="nameP"><span>【自营】</span><span>{{goodsData.name}}</span></p>
		</div>
		<div style="height: 10px;"></div>
		<div class="select common">
			<p>选择：<span>1</span>件<span class="fr icon-xiangyou iconfont"></span></p>
		</div>
		<div style="height: 10px;"></div>
		<div class="select common">
			<p>规格参数<span class="fr icon-xiangyou iconfont"></span></p>
		</div>
		<div style="height: 10px;"></div>
		<div @click="showAddress" class="address common select"><span>送至：</span><i class="icon-gerenzhongxindizhiguanli iconfont"></i></div>
		<xaddress v-if="isShowAddress"/>
	</div>
</template>

<script>
	import xcountDown from './xcountDown'
	import xaddress from './xaddress'
	export default {
		data() {
			return {
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
					},
				],
				goodsData:{
					id:1,
					name:'资生堂 珊珂 SENKA 棉润泡沫 120g 日本进口 （原洗颜专科洗面奶）',
					images:[],
					price:50.99,
					reference:58.99,
					activity:'闪购',
					
				},
				isShowAddress:false
			}
		},
		components:{xcountDown,xaddress},
		methods:{
			showAddress(){
				this.isShowAddress = true
			}
		}
	}
</script>

<style scoped>
	.content {
		margin-top: 75px;
		
	}
	.common{padding:0 20px;}
	.imgBox {
		width: 100%;
		height: 750px;
		overflow: hidden;
	}
	
	.imgBox li {
		width: 100%;
	}
	
	.imgBox img {
		width: 100%;
	}
	.priceP{
		height: 70px;
		border-bottom: 1px solid #000;
		font-size: 16px;
		line-height: 70px;
		font-weight: bold;
	}
	.priceP span:nth-child(1){
		color:#ff6f6f;
		font-size: 22px;
	}
	.priceP span:nth-child(2){
		margin-left: 18px;
		color:#999999;
	}
	.goodsData{
		background: #fff;
	}
	.priceP span:nth-child(3){
		color:#ff6f6f;
		border-right: 1px solid #ff6f6f;
		border-bottom: 1px solid #ff6f6f;
		margin-left: 20px;
	}
	.nameP{
		
	}
	.nameP span{
		font-size: 18px;
		line-height: 0;
	}
	.select{
		background: #fff;
		font-size: 16px;
		height: 40px;
	}
	.select p{
		line-height: 40px;
	}
	.iconfont{
		color:#aaa;
		
	}
	.address span{
		line-height: 40px;
		
	}
	.address{
		border-bottom: 1px solid #ccc;
	}
</style>