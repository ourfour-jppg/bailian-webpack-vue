<template>
	<div v-if="showGoodsChoose">
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
					<div class="van-hairline--bottom van-sku-header">
						<div class="van-sku-header__img-wrap"><img src="https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg"></div>
						<div class="van-sku-header__goods-info">
							<div class="van-sku__goods-name van-ellipsis">测试商品</div>
							<div class="van-sku__goods-price"><span class="van-sku__price-symbol">￥</span><span class="van-sku__price-num">1.00</span></div><i class="van-sku__close-icon van-icon van-icon-close" @click="showGoodsChoose=false"><!----></i></div>
					</div>
					<div class="van-sku-body" style="max-height: 263px;">
						<div class="van-sku-group-container van-hairline--bottom">
							<div class="van-sku-row">
								<div class="van-sku-row__title">颜色：</div><span class="van-sku-row__item" :class="{'van-sku-row__item--active':activetoggle}" @click="activetoggle=!activetoggle" v-model="activetoggle">天蓝色</span></div>
							<div class="van-sku-row">
								<div class="van-sku-row__title">尺寸：</div>
								<span class="van-sku-row__item">1</span>
								<span class="van-sku-row__item">2</span>
							</div>
						</div>
						<div class="van-sku-stepper-stock">
							<div class="van-sku-stepper-container">
								<div class="van-sku__stepper-title">购买数量：</div>
								<div class="van-sku__stepper van-stepper">
									<button class="van-stepper__minus" @click="goodsData.num>1?goodsData.num--:goodsData.num"></button>
									<input type="number" class="van-stepper__input" value="1" v-model="goodsData.num">
									<button class="van-stepper__plus" @click="goodsData.num<goodsData.totalNum?goodsData.num++:goodsData.num"></button>
								</div>
							</div>
							<div class="van-sku__stock">剩余227件</div>
							<div class="van-sku__quota">单次限购100件</div>
						</div>
						<div class="van-cell-group van-hairline--top-bottom van-sku-messages">
							<div class="van-cell van-cell--required van-hairline van-field">
								<!---->
								<div class="van-cell__title"><span>留言1</span>
									<!---->
								</div>
								<div class="van-cell__value">
									<div class="van-field__body"><input type="text" maxlength="200" placeholder="输入文本" class="van-field__control">
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
					<div class="van-sku-actions"><button class="van-button van-button--default van-button--normal van-button--bottom-action"><!----><span class="van-button__text">加入购物车</span></button><button class="van-button van-button--primary van-button--normal van-button--bottom-action"><!----><span class="van-button__text">立即购买</span></button></div>
				</div><button class="van-button van-button--primary van-button--normal van-button--block"><!----><span class="van-button__text">自定义步进器相关配置</span></button>
				<div class="van-modal" style="z-index: 2012;"></div>
			</div>
		</section>
	</div>

	</div>
</template>

<script>
	export default{
		data(){
			return {
				activetoggle:false,
				showGoodsChoose:true,
				goodsData:{
					id:1,
					num:1,
					totalNum:20
				}
			}
		}
	}
</script>

<style>

</style>