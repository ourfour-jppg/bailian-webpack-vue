<template>
	<div v-if="showGoodsChoose" style="max-height: 10.666666rem;">
		<div class="van-hairline--bottom van-doc-nav-bar van-nav-bar" style="z-index: 1;">
			<div class="van-nav-bar__left"><i class="van-icon van-icon-arrow van-nav-bar__arrow"><!----></i>
				<!---->
			</div>
			<div class="van-ellipsis van-nav-bar__title">Sku 商品规格弹层</div>
			<div class="van-nav-bar__right">
				<a href="https://github.com/youzan/vant/blob/dev/packages/sku/demo/index.vue" target="_blank"><i class="van-icon van-icon-edit"><!----></i></a>
			</div>
		</div>
		<section class="van-doc-demo-block">
			<div class="sku-container">
				<div class="van-sku-container van-popup van-popup--bottom" style="z-index: 2013;">
					<div class="van-hairline--bottom van-sku-header clearfix" style="height: 3rem;">
						<div class="van-sku-header__img-wrap" style="margin-top:0.186666rem;width: 2.666666rem;height: 2.666666rem;"><img :src="`http://47.106.213.218:1802/${goodsData[0].img[0]}`"></div>
						<div class="van-sku-header__goods-info">
							<div class="van-sku__goods-name van-ellipsis commonSize">{{goodsData[0].title}}</div>
							<div class="van-sku__goods-price"><span class="van-sku__price-symbol commonSize" style="font-weight: bold;">￥{{goodsData[0].price}}</span></div>
							<div style="font-size: 0.266666rem">{{goodsData[0].title_ad}}</div>
							<i class="van-sku__close-icon van-icon van-icon-close" @click="$store.state.isChooseGoods = false"><!----></i></div>
					</div>
					<div class="van-sku-body">
						<!--<div class="van-sku-group-container van-hairline--bottom">
							<div class="van-sku-row">
								<div class="van-sku-row__title commonSize">颜色：</div><span class="van-sku-row__item commonSize" :class="{'van-sku-row__item--active':activetoggle}" @click="activetoggle=!activetoggle" v-model="activetoggle">天蓝色</span></div>
							<div class="van-sku-row">
								<div class="van-sku-row__title commonSize">尺寸：</div>
								<span class="van-sku-row__item commonSize">1</span>
								<span class="van-sku-row__item commonSize">2</span>
							</div>
						</div>-->
						<div class="van-sku-stepper-stock">
							<div class="van-sku-stepper-container">
								<div class="van-sku__stepper-title commonSize">购买数量：</div>
								<div class="van-sku__stepper van-stepper">
									<button class="van-stepper__minus commonSize" @click="choosedGoods.num>1?choosedGoods.num--:choosedGoods.num"></button>
									<input type="number" class="van-stepper__input commonSize" value="1" v-model="choosedGoods.num">
									<button class="van-stepper__plus commonSize" @click="choosedGoods.num<choosedGoods.max_num?choosedGoods.num++:choosedGoods.num"></button>
								</div>
							</div>
							<div class="van-sku__stock" style="font-size: 0.266666rem;line-height: 0.8rem;">剩余{{goodsData[0].num}}件</div>
							<div class="van-sku__quota commonSize" style="font-size:0.266666rem">单次限购100件</div>
						</div>
						<div class="van-cell-group van-hairline--top-bottom van-sku-messages">
							<div class="van-cell van-cell--required van-hairline van-field" style="height: 1.333333rem;padding-top: 0.266666rem">
								<!---->
								<div class="van-cell__title"><span class="commonSize">留言1</span>
									<!---->
								</div>
								<div class="van-cell__value">
									<div class="van-field__body"><input type="text" maxlength="200" placeholder="输入文本" class="van-field__control commonSize">
										<!---->
										<!---->
										<!---->
									</div>
									<!---->
								</div>
								<!---->
							</div>

						</div>
					</div>
					<div class="van-sku-actions">
						<button class="van-button van-button--default van-button--normal van-button--bottom-action" @click="addToCar(goodsData[0].id)"><!---->
							<span class="van-button__text">加入购物车</span>
						</button>
						<button class="van-button van-button--primary van-button--normal van-button--bottom-action" @click="topay"><!---->
							<span class="van-button__text">立即购买</span>
						</button>
					</div>
				</div><button class="van-button van-button--primary van-button--normal van-button--block"><!----><span class="van-button__text">自定义步进器相关配置</span></button>
				<div class="van-modal" style="z-index: 2012;"></div>
			</div>
		</section>
	</div>

	</div>
</template>

<script>
	export default {
		data() {
			var goodsData = this.$root.details;
			console.log(goodsData)
			return {
				activetoggle: false,
				showGoodsChoose: true,
				goodsData: goodsData,
				choosedGoods: {
					id: goodsData[0].id,
					num: 1,
					max_num: 100
				}
			}

		},
		methods: {
			addToCar: function(id) {
				this.$store.state.isChooseGoods = false;
				//				this.id = id;
				this.$root.goods = this.choosedGoods; //商品加入购物车信息
				console.log(this.$root.goods)
				this.$root.carNum = 1;
				this.$store.state.addSuccess = true;
				$.post('http://47.106.213.218:1802/api/shoppingcart', {
					way:'set',
					id:'5b36ed70413bd207bc01d15c' ,
					data:JSON.stringify(this.choosedGoods)
				},(res)=>{
					console.log(JSON.parse(res))
				});
			},
			topay: function() {
				this.$root.buy = this.choosedGoods; //商品结算信息
			}
		}
	}
</script>

<style scoped>
	.van-sku-header__goods-info {
		padding: 0.4rem 0.8rem 0.133333rem 0.133333rem;
	}
	
	.commonSize {
		font-size: 0.373333rem;
	}
	/**{
		max-height: 10.666666rem;
	}*/
	
	.van-sku-body {
		max-height: 8rem;
	}
	
	.van-sku-row__item {
		width: 1.946666rem;
		height: 0.906666rem;
		text-align: center;
		line-height: 0.8rem;
		border-radius: 0.133333rem;
	}
	
	.van-stepper__minus,
	.van-stepper__plus {
		width: 1.106666rem;
		height: 1.093333rem;
	}
	
	.van-stepper__input {
		width: 1.653333rem;
		height: 1.04rem;
		font-size: 0.373333rem;
	}
	
	.van-sku-stepper-stock {
		padding: 0.64rem 0;
	}
	
	.van-button {
		height: 1.413333rem;
		font-size: 0.4rem;
		line-height: 1.413333rem;
	}
	
	.van-sku__close-icon {
		font-size: 0.4rem;
	}
	
	.van-stepper__minus::before,
	.van-stepper__plus::before {
		width: 0.373333rem;
		height: 0.08rem;
	}
	
	.van-stepper__minus::after,
	.van-stepper__plus::after {
		width: 0.066666rem;
		height: 0.506666rem;
	}
</style>