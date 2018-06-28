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
	}
	.top_l{
		flex:3;
		flex-direction: column;justify-content:center;
	}
	.top_l,.top_r{
		
		/*margin-top:-10px;*/
		display: flex;
		height: 75px;
	}
	.top_c{
		flex:5;
		height: 75px;
	}
	.top_r{
		flex:3;
		vertical-position:center;
		line-height: 75px;
	}
	.top_r i{margin-left: 64px;}
	.icon-back,.icon-more,.icon-fenxiang{
		font-size: 24px;
		margin-left: 20px;
		
	}
	.topTab{
		display: flex;
	}
	.topTab li{flex:1;font-size: 28px;text-align:center;}
	.topTab span{line-height: 75px;}
	.topTab .active span{
		border-bottom: 1px solid #000;
	}
	.moreMsg{
		width: 130px;
		background: #000;
		/*opacity: 0.5;*/
		padding:0 4px;
		border-radius: 4px;
		position:absolute;
		top:96px;
		right: 0;
	}
	.moreMsg span{
		font-size: 12px;
		margin-left: 10px;
	}
	.moreMsg li{
		height: 40px;
		border-bottom: 1px solid #fff;
		opacity: 1;
		color:#fff;
		display: flex;
		line-height: 40px;
	}
	.moreMsg i{
		margin-left: 20px;
	}
	.moreMsg .last{
		border-bottom: 0 none;
	}
	.trIcon{
		width:0;
		height:0;
		border-left:6px solid transparent;
		border-right:6px solid transparent;
		border-bottom:6px solid #000;
		position:absolute;
		top:-6px;
		right:6px;
	}
</style>