<template>
	<div id="collection">
		<div id="collection-tab">
			<div class="collectionType tab">
				<p>我收藏的商品</p>
			</div>
			<div class="collectionType">
				<p>我收藏的门店</p>
			</div>
		</div>
		<div id="collection-main">
			<div class="goods clearfix">
				<div class="goodsImg fl">
					<a href="#/details"><img src="../../static/images/shoes3.jpg" alt="" /></a>
				</div>
				<div class="goodsMsg fl">
					<p class="goodsName"><a href="#/details">符合好多分防护而繁华凤吴海峰返回</a></p>
					<p class="goodsPrice">￥149</p>
				</div>
			</div>
			<div class="goods"></div>
			<div class="goods"></div>
		</div>
	</div>
	
	
</template>

<script>
</script>

<style scoped>
	#collection{
		background: #F8F8F8;
		height: 100%;
		line-height: 0.6;
	}
	#collection-tab{
		height: 1.28rem;
		display: flex;
		background: #fff;
	}
	.collectionType{
		flex:1;
		
		text-align: center;
		font-size: 0.373333rem;
		font-weight: bold;
	}
	.collectionType p{
		line-height:1.28rem;
		border-bottom: 0.013333rem solid #E6E6E6;
	}
	.tab{
		border-bottom: 0.08rem solid #E31A41;
		color:#E31A41;
		
	}
	#collection-main{
		padding:0.266666rem;
		
	}
	.goods{
		border:0.026666rem solid #E6E6E6;
		height: 3.333333rem;
		margin-bottom: 0.186666rem;
		border-radius: 0.133333rem;
		background: #fff;
	}
	.goodsImg{
		width: 3.333333rem;
	}
	.goodsMsg{
		width:6rem;
		padding:0.266666rem 0.586666rem 0.266666rem 0.32rem;
	}
	img{
		width: 3.2rem;
		height: 3.2rem;
	}
	.goodsName a{
		font-size: 0.346666rem;
		/*line-height: 0.453333rem;*/
		color:#262626;
	}
	.goodsPrice{
		font-size: 0.4rem;
		color:#E2143C;
		margin-top:0.506666rem;
		line-height: 0.666666rem;
	}
</style>