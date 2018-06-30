<template>
	<div>
		<swiper :options="swiperOption" ref="mySwiper">
			<!-- 这部分放你要渲染的那些内容 -->
			<swiper-slide v-for="(item,index) in goodsData.images">
				<img :src="item.src" alt="" />
				<div class="van-swipe__indicators">
				<i class="van-swipe__indicator" v-for="(item,index) in goodsData.images" ></i>
				</div>
			</swiper-slide>
			<!-- 这是轮播的小圆点 -->
			<!--<div class="swiper-pagination" slot="pagination"></div>-->
			<!--<div class="van-swipe__indicators">
				<i class="van-swipe__indicator" v-for="item in goodsData.images"></i>
				<i class="van-swipe__indicator van-swipe__indicator--active"></i>
				<i class="van-swipe__indicator"></i>
				<i class="van-swipe__indicator"></i>
			</div>-->
			<!--<div class="van-swipe__indicators"><i class="van-swipe__indicator" v-for="(item,index) in goodsData.images"></i></div>-->
		</swiper>
	</div>
</template>
<script>
	import'../lib/swiper.min.js'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		components: {
			swiper,
			swiperSlide
		},
		data() {
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
			}
		},
		//定义这个sweiper对象
		computed: {

			swiper() {
				return this.$refs.mySwiper.swiper;
			}
		},
		mounted() {
			//这边就可以使用swiper这个对象去使用swiper官网中的那些方法
			this.swiper.slideTo(0, 0, false);
		}

	}
</script>
<style scoped>
	img {
		width: 100%;
	}
	.van-swipe__indicator{
		width: 0.186666rem;
		height: 0.186666rem;
	}
	.van-swipe__indicator:not(:last-child) {
    	margin-right: 0.226666rem;
    }
    .van-swipe__indicators{
    	margin-bottom: 0.426666rem;
    }
    .countDown .icon-xiangyou{
    	font-size:0.533333rem;
    }
</style>