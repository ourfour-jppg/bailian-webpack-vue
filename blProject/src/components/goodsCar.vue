<template>
	<div id="goodsCar">
		<div id="top">
			<p>购物车（<span class="totalNum">{{goodsData.length}}</span>）<span class="fr edit" @click="toggleEdit" v-model="status">{{status}}</span></p>
		</div>
		<div id="main">
			<div class="main-top">
				<span class="check-all mr0 fl iconfont" :class="{'icon-gou':isSelectAll,'check-span':!isSelectAll}" @click="selectProduct(isSelectAll)"></span><span class="mr30 fl">i百联自营</span>
			</div>
			<div v-for="(item,index) in goodsData" :data-gid="item.id" class="content clearfix">
				<div class="content-left fl">
					<span class="iconfont" @click="item.select=!item.select" :class="{'icon-gou':item.select,'check-span':!item.select}"></span>
				</div>
				<div class="content-right fl">
					<div class="content-right-left fl">
						<a href="#" class="liImg"><img :src="item.img"></a>
					</div>
					<div class="content-right-right fl">
						<ul class="content-right-right-ul">
							<li>
								<a href="../html/details.html" class="goodsName fontSize26" v-text="item.name"></a>
							</li>
							<li>
								<span class="fontSize26 color1">颜色：[{{item.color}}]&nbsp;&nbsp;</span><span class="color1 fontSize26">尺码：{{item.size}}</span>
							</li>
							<li class="lastLi">
								<span class="price fl">￥{{item.price}}</span>
								<p class="fr"><span class="debtn btn00 fl" @click="singleNumD(item)">-</span><input type="text" class="chengeNumInput fl" v-model="item.num"><span class="inbtn btn00 fl" @click="singleNumI(item)">+</span></p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="payBar clearfix">
				<div class="check fl">
					<span class="check-all mr0 fl iconfont" :class="{'icon-gou':isSelectAll,'check-span':!isSelectAll}" @click="selectProduct(isSelectAll)"></span><span class="mr30 fl fontSize26">全选</span>
				</div>
				<div class="total fl">
					<p class="p1" v-if="status=='编辑'"><span class="totalP">合计：</span><span class="tP">￥{{getTotal.totalPrice}}</span></p>
					<p class="p1" v-if="status=='完成'"><span class="collect">移动到收藏夹</span></p>
					<p class="p2" v-if="status=='编辑'"><span class="save">优惠：-￥{{getTotal.totalSave}}</span><span></span></p>
					
				</div>
				<div class="toPay fl">
					<a href="#" v-if="status=='编辑'">去结算（{{getTotal.totalNum}}）</a>
					<a href="#" v-if="status=='完成'" class="delete" @click="deleteProduct">删除</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'xcarContent',
		data() {
			return {
				status:'编辑',
				goodsData: [{
						id: 1,
						img: '../../static/images/shoes1.jpg',
						name: 'Belle/百丽夏专柜同款白/黑白羊皮粗跟一字型女凉鞋BLA39BL7',
						color: '白色',
						size: '37码',
						price: 180.99,
						refrence:220.99,
						num: 1,
						total: 180.99
					},
					{
						id: 2,
						img: '../../static/images/shoes2.jpg',
						name: 'Belle/百丽夏专柜同款白/黑白羊皮粗跟一字型女凉鞋BLA39BL7',
						color: '黑色',
						size: '37码',
						price: 248.96,
						refrence:280.99,
						num: 1,
						total: 180.99
					},
					{
						id: 3,
						img: '../../static/images/shoes3.jpg',
						name: 'Belle/百丽夏专柜同款白/黑白羊皮粗跟一字型女凉鞋BLA39BL7',
						color: '白色',
						size: '37码',
						price: 200.00,
						refrence:220.99,
						num: 1,
						total: 180.99
					},
					{
						id: 4,
						img: '../../static/images/shoes4.jpg',
						name: 'Belle/百丽夏专柜同款白/黑白羊皮粗跟一字型女凉鞋BLA39BL7',
						color: '白色',
						size: '37码',
						price: 120.66,
						refrence:140.99,
						num: 1,
						total: 180.99
					},
				]
			}
		},
		methods: {
			toggleEdit(){
				if(this.status=='编辑'){
					this.status = '完成';
				}
				else if(this.status == '完成'){
					this.status='编辑'
				}
			},
			singleNumD(item) {
				item.num <= 1 ? 1 : item.num--;
				item.total = (item.num * item.price).toFixed(2);
			},
			singleNumI(item) {
				item.num++;
				item.total = (item.num * item.price).toFixed(2);
			},
			//全选与取消全选
			selectProduct: function(_isSelect) {
				//遍历goodsData，全部取反
				for(var i = 0, len = this.goodsData.length; i < len; i++) {
					this.goodsData[i].select = !_isSelect;
				}
			},
			//删除已经选中(select=true)的产品
			deleteProduct: function() {
				this.goodsData = this.goodsData.filter(function(item) {
					//返回select=false的数据
					return !item.select
				})
			},
			//删除单条产品
			deleteOneProduct: function(index) {
				//根据索引删除productList的记录
				this.goodsData.splice(index, 1);
			},
			//清空购物车
			deleteAll: function() {
				this.goodsData = [];
			}

		},
		computed: {
			//			totalPay() {
			//
			//				var totalPay = this.goodsData.reduce((sum, item) => {
			//					return sum + item.num * item.price;
			//				}, 0);
			//				return totalPay.toFixed(2);
			//			},
			//检测是否全选
			isSelectAll: function() {
				//如果goodsData中每一条数据的select都为true，返回true，否则返回false;
				return this.goodsData.every(function(val) {
					return val.select
				});
			},
			//获取总价和产品总件数
			getTotal: function() {
				//获取goodsData中select为true的数据。
				var _proList = this.goodsData.filter(function(val) {
						return val.select
					}),
					totalPrice = 0;
					var totalrPrice = 0;
				for(var i = 0, len = _proList.length; i < len; i++) {
					//总价累加
					totalPrice += _proList[i].num * _proList[i].price;
					//总优惠
					totalrPrice += _proList[i].num * _proList[i].refrence;
				}
				var totalSave = totalrPrice-totalPrice;
				//选择产品的件数就是_proList.length，总价就是totalPrice
				return {
					totalNum: _proList.length,
					totalPrice: totalPrice.toFixed(2),
					totalSave:totalSave.toFixed(2)
				}
			}

		},
		mounted: function() {
			var _this = this;
			//为goodsData添加select（是否选中）字段，初始值为true
			this.goodsData.map(function(item) {
				_this.$set(item, 'select', true);
			})
		}
	}
</script>

<style scoped>
	* {
		font-size: 0.213333rem;
	}
	
	#goodsCar {
		padding-left: 0.266666rem;
	}
	#top {
		padding: 0 0.266666rem;
		position: fixed;
		top:0;
		left:0;
		background: #fff;
		width: 100%;
	}
	
	#top p {
		height: 1.386666rem;
		text-align: center;
		line-height: 1rem;
		font-size: 0.48rem;
		color: #2D2D2D;
	}
	.totalNum{
		font-size: 0.48rem;
	}
	.edit {
		font-size: 0.48rem;
		color: #8E8E8E;
		margin-right: 0.613333rem;
	}
	.main-top {
		height: 1.333333rem;
		width: 100%;
	}
	#main{
		margin-top:1.386666rem;
	}
	.mr30 {
		font-size: 0.373333rem;
		color: #262626;
		margin-left: 0.4rem;
	}
	
	img {
		width: 2.666666rem;
		height: 2.466666rem;
	}
	/*.check-span {
		margin: 30px 6px 0 6px;
		float: left;
	}*/
	
	.check-span {
		border-radius: 50%;
		display: inline-block;
		width: 0.4rem;
		height: 0.4rem;
		border: 0.013333rem solid #8E8E8E;
		margin-top:1.146666rem;
		margin-left: 0.053333rem;
		/*background: url("../../static/shopping_cart.fw.png") no-repeat -17px -197px;*/
	}
	
	.icon-gou {
		font-size: 0.453333rem;
		color:#FB6E67;
		line-height:2.746666rem;
		
		/*background: url("../../static/shopping_cart.fw.png") no-repeat -34px -197px;*/
	}
	
	/*.content-middle {
		padding-left: 24px;
	}*/
	.content-right{
		width: 8.666666rem;
		margin-left:0.533333rem ;
		border-bottom: 0.013333rem dotted #E2E2E2;
		padding-bottom: 0.8rem;
	}
	.content {
		padding-top: 0.426666rem;
		
	}
	.content-right-right{
		padding-left: 0.346666rem;
		width: 5.973333rem;
	}
	.content-right-right li{
		overflow: hidden;text-overflow: ellipsis;white-space: nowrap;display:block;
		line-height: 0.506666rem;
	}
	.fontSize26{
		font-size: 0.346666rem;
		color:#323232;
	}
	.color1{
		color:#ccc;
	}
	.price{
		
		font-size: 0.373333rem;
		color:#000000;
	}
	.lastLi{
		margin-top: 1rem;
	}
	.lastLi p{
		width: 2.8rem;
		height: 0.573333rem;
	}
	.btn00{
		display: inline-block;
		width: 0.853333rem;
		height: 0.573333rem;
		border:0.013333rem solid #EAEAEA;
		text-align: center;
		line-height: 0.573333rem;
	}
	.chengeNumInput{
		width:0.8rem;
		height:0.573333rem;
		border-top:0.013333rem solid #EAEAEA;
		border-bottom: 0.013333rem solid #EAEAEA;
		text-align: center;
		line-height: 0.573333rem;
	}
	.payBar{
		padding-left: 0.266666rem;
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		height: 1.36rem;
		background: #fff;
		border-top: 0.013333rem solid #D2D2D0;
	}
	.total{
		width: 3.76rem;
		height: 1.36rem;
		
	}
	.total .p1{
		padding-top:0.08rem;
	}
	.check{
		width: 2.773333rem;
	}
	.check span{
		line-height: 1.36rem;
		color:#323232;
	}
	.totalP,.tP{
		
		font-size: 0.426666rem;
	}
	.tP{
		color:#F04040;
	}
	.p2 span{
		font-size: 0.32rem;
		color:#A4A4A4;
	}
	.toPay a{
		display: inline-block;
		width: 3.2rem;
		background: #FE4A49;
		line-height:1.36rem ;
		text-align: center;
		color:#fff;
		font-size: 0.48rem;
	}
	.main-top .icon-gou{
		line-height:0.613333rem;
	}
	.payBar .icon-gou{
		color:#FB6E67;
	}
	.main-top .check-span{
		margin-top:0.133333rem;
	}
	.payBar .check-span{
		margin-top:0.466666rem;
	}
	.collect{
		color:#FE4A49;
		line-height: 0.906666rem;
		font-size: 0.346666rem;
	}
</style>