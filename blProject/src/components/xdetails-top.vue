<template>
	<div id="top">
		<div class="top_l"><i class="iconfont icon-back" @click="goBack"></i></div>
		<div class="top_c">
			<ul class="topTab">
				<li class="active"><span>商品</span></li>
				<li><span>评价</span></li>
				<li><span>详情</span></li>
			</ul>
		</div>
		<div class="top_r">
			<i class="iconfont icon-fenxiang"></i>
			<i class="iconfont icon-more" @click="showMore"></i>
		</div>
		<div class="moreMsg" v-show="isMoreMsg">
			<ul>
				<li><i class="iconfont icon-message"></i><span>消息</span></li>
				<li><i class="iconfont icon-shouye"></i><span>首页</span></li>
				<li><i class="iconfont icon-iconfontzhizuobiaozhun22"></i><span>搜索</span></li>
				<li><i class="iconfont icon-guanzhu"></i><span>我的关注</span></li>
				<li class="last"><i class="iconfont icon-yanjing"></i><span>浏览记录</span></li>
			</ul>
			<div class="trIcon"></div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				isMoreMsg:false
			}
		},
		methods:{
			showMore:function(){
				return this.isMoreMsg = !this.isMoreMsg;
			},
			goBack:function(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
	/*@import url("../css/base.css");*/
	#top{
		display: flex;
		color: #666666;
		background: #fff;
		vertical-align: middle;
		position:fixed;
		top:0;
		left: 0;
		right:0;
		font-size: 0.426666rem;
		z-index: 5000;
	}
	.top_l{
		flex:3;
		flex-direction: column;justify-content:center;
	}
	.top_l,.top_r{
		
		/*margin-top:-10px;*/
		display: flex;
		height: 1.12rem;
	}
	.top_c{
		flex:5;
		height: 1.12rem;
	}
	.top_r{
		flex:3;
		vertical-position:center;
		line-height: 1.12rem;
	}
	.top_r i{margin-left: 0.853333rem;}
	.icon-back,.icon-more,.icon-fenxiang{
		font-size: 0.426666rem;
		margin-left: 0.266666rem;
		
	}
	.topTab{
		display: flex;
	}
	.topTab li{flex:1;font-size: 0.426666rem;text-align:center;}
	.topTab span{line-height: 1.12rem;}
	.topTab .active span{
		border-bottom: 0.013333rem solid #000;
	}
	.moreMsg{
		width: 38%;
		background: #000;
		/*opacity: 0.5;*/
		padding:0 0.053333rem;
		border-radius: 0.133333rem;
		position:absolute;
		top:1.28rem;
		right: 0;
		z-index: 2018;
	}
	.moreMsg span{
		font-size: 0.346666rem;
		margin-left: 0.293333rem;
	}
	.moreMsg li{
		margin:0 0.16rem;
		height: 1.173333rem;
		border-bottom: 0.013333rem solid #fff;
		opacity: 1;
		color:#fff;
		display: flex;
		line-height: 1.173333rem;
	}
	.moreMsg i{
		margin-left: 0.4rem;
		font-size: 0.426666rem;
	}
	.moreMsg .last{
		border-bottom: 0 none;
	}
	.trIcon{
		width:0;
		height:0;
		border-left:0.186666rem solid transparent;
		border-right:0.186666rem solid transparent;
		border-bottom:0.186666rem solid #000;
		position:absolute;
		top:-0.16rem;
		right:0.32rem;
	}
</style>