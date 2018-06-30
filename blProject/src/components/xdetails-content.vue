<template>
	<div class="content" :data-goods="addTocar">
		<div class="bigImg">
			<swiper :options="swiperOption" ref="mySwiper">
				<!-- 这部分放你要渲染的那些内容 -->
				<swiper-slide v-for="(item,index) in goodsData[0].img">
					<img :src="`http://47.106.213.218:1802/${item}`" alt="" />
					<div class="van-swipe__indicators">
						<i class="van-swipe__indicator" v-for="(item,index) in goodsData.img"></i>
					</div>
				</swiper-slide>
				<!-- 这是轮播的小圆点 -->
				<!--<div class="swiper-pagination" slot="pagination"></div>-->
			</swiper>
		</div>
		<xcountDown endTime="1531224633" endText="已经结束了"></xcountDown>
		<div class="goodsData common">
			<p class="priceP"><span>￥{{goodsData[0].price}}</span><span>参考价￥&nbsp;{{goodsData[0].reference}}</span><span>&nbsp;{{goodsData[0].prescription}}</span></p>
			<p class="nameP"><span>【自营】</span><span>{{goodsData[0].title}}</span></p>
		</div>
		<div style="height: 20px;"></div>
		<div class="select common">
			<p>选择：<span v-model="chooseNum">1</span>件<span class="fr icon-xiangyou iconfont"></span></p>
		</div>
		<div style="height: 20px;"></div>
		<div class="select common">
			<p>规格参数<span class="fr icon-xiangyou iconfont"></span></p>
		</div>
		<div style="height: 20px;"></div>
		<div @click="showAddress" class="address common select"><span>送至：</span><i class="icon-gerenzhongxindizhiguanli iconfont"></i></div>
		<div v-html="goodsData[0].introduce" class="introduce"></div>
		<xaddress v-if="isShowAddress" />
		<!--<div class="van-toast van-toast--text van-toast--middle" style="z-index: 2024; display: none;">
			<div>当前 Swipe 索引：1</div>
			
		</div>-->
		<transition name="fade">
			<div class="van-toast van-toast--text van-toast--middle" style="z-index: 2026;" v-show="$store.state.addSuccess">
				<div>加入购物车成功</div>
			</div>
		</transition>
	</div>

</template>

<script>
	import '../lib/swiper.min.js'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import xcountDown from './xcountDown'
	import xaddress from './xaddress'
	export default {
		data() {
			$.post('http://47.106.213.218:1802/api/goods', {
				id: 79454
				}, (res) => {
					console.log(this)
					this.goodsData=res;
					console.log(res)
					
			});
			if(this.$root.goods){
				var chooseNum = this.$root.goods.num;
			}
			console.log(chooseNum);
			return {
				swiperOption: {
					//是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
					notNextTick: true,
					pagination: '.swiper-pagination',
					slidesPerView: 'auto',
					centeredSlides: true,
					paginationClickable: true,
					spaceBetween: 30,
					onSlideChangeEnd: swiper => {
						//这个位置放swiper的回调方法
						this.page = swiper.realIndex + 1;
						this.index = swiper.realIndex;
					}
				},
				goodsData:{},
				chooseNum:chooseNum,
				isShowAddress: false
			}
			
		},
		components: {
			swiper,
			swiperSlide,
			xcountDown,
			xaddress
		},
		methods: {
			showAddress() {
				this.isShowAddress = true
			},
			
		},
		//定义这个sweiper对象
		computed: {

			swiper() {
				return this.$refs.mySwiper.swiper;
			},
			addTocar(){
				this.$root.details =this.goodsData;
				console.log(this.$root.details)
			}
		},
		mounted() {
			//这边就可以使用swiper这个对象去使用swiper官网中的那些方法
			this.swiper.slideTo(0, 0, false);
		}
	}
</script>

<style scoped>
	.fade-enter-active, .fade-leave-active {
	    transition: opacity .5s;
	}
	.fade-enter, .fade-leave-active {
	     opacity: 0;
	}
	.van-toast{
		top: 88%;
		border-radius: 0.666666rem;
		height: 0.666666rem;
		min-width: 2.4rem;
		text-align: center;
		font-size:0.266666rem;
		line-height: 1.6;
	}
	.bigImg img {
		width: 100%;
	}
	
	.van-swipe__indicator {
		width: 0.186666rem;
		height: 0.186666rem;
	}
	
	.van-swipe__indicator:not(:last-child) {
		margin-right: 0.226666rem;
	}
	
	.van-swipe__indicators {
		margin-bottom: 0.426666rem;
	}
	
	.countDown .icon-xiangyou {
		font-size: 0.533333rem;
	}
	
	.content {
		margin-top: 1.12rem;
		margin-bottom: 1.4rem;
	}
	
	.common {
		padding: 0 0.266666rem;
	}
	
	.bigImg {
		width: 100%;
		/*height: 750px;*/
		overflow: hidden;
	}
	
	.priceP {
		height: 1.333333rem;
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
	
	.nameP {
		padding-bottom: 0.4rem;
		padding-top: 0.133333rem;
	}
	
	.nameP span {
		font-size: 0.4rem;
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
	
	.icon-xiangyou {
		font-size: 0.426666rem;
	}
	
	.address span {
		line-height: 1.173333rem;
	}
	
	.address {
		border-bottom: 0.013333rem solid #ccc;
	}
	
	.address i {
		font-size: 0.346666rem;
	}
	.introduce{
		background: #fff;
	}
</style>