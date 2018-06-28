<template>
	<div style="position: relative;overflow: hidden; height: 3.466667rem;">
		<ul class="box_ul baner_ul_vue" :style='{width:w_width*img_url.length+"px",left:0}' @touchstart='start($event)'>
			<img v-for='url in img_url' :src="url" :style="{width:w_width+'px'}">
		</ul>
		<ul class="list" :style='list'>
			<li v-for='(a,i) in list.num' :class='{activate:index==i?true:false}'></li>
		</ul>
	</div>
</template>
<script>
import $ from 'Jquery'
export default{
	data(){
		var data={
			w_width:window.innerWidth,
			img_url:[],
			list:{
				left:0,
				width:10,
				num:[]
			},
			ul_l:0,
			index:0,
			time:0,
			ul:'',
			p:{
				left:0,
				x:0,
			}
		}
		setTimeout(()=>{this.fn_time()},1000)
		data.list.left=data.w_width/2+'px';

		$.post('http://m.bl.com/h5-web/page/queryAdvertByResourceId.index',{resourceId: 7250,adv:'',cookieId:'' },(res)=>{
			// 获取uljq对象元素
			this.ul=$('.baner_ul_vue',$(this.$el))
			//遍历obj获取地址并且添加到img_url变量中
			res.obj.map((obj)=>{
				this.img_url.push(obj.imgPath)
				this.list.num.push(0)
			})
			data.list.width=this.img_url.length*0.32 +'rem'//设置指示器总宽度
			this.img_url.push(this.img_url[0])//复制第一张
			console.log(this.img_url)
		})
		return data;
	},
	methods:{
		//手指触摸事件处理
		start (e){
			$(e.path[1]).stop()// 停止之前的动画
			clearInterval(this.time)//停止上一个计时器
			let t_e=e.targetTouches[0]// 获取手指事件
			let target=$(e.path[1])//获取ul而不是img,里target为手指所在的元素img所以要获取他上一级
			// 记录按下时坐标和手指位置
			this.p.left=parseInt(target.css('left'))
			this.p.x=t_e.pageX
			//添加手指移动事件
			target[0].ontouchmove=(e)=>{
				// 获取手指
				t_e=e.targetTouches[0]
				let left=t_e.pageX-this.p.x+this.p.left
				// 判断是否第一张
				if(left>0){
					left=0
				}
				// 判断是否到最后
				let ul_width=parseInt($(e.path[1]).css('width'))
				if( (left*-1)> ul_width-this.w_width){
					left=(ul_width-this.w_width)*-2
				}
				//设置ul属性
				$(e.path[1]).css({
					left:left+'px'
				})
			}
			//添加手指放开事件
			target[0].ontouchend=(e)=>{
				e.path[1].ontouchmove='';
				// 获取手指
				t_e=e.changedTouches[0]
				//计算到第几张
				let w=Math.floor( parseInt(this.ul.css('left'))/this.w_width*-1)
				if(this.p.x>t_e.pageX){
					//如果手指放开的x位置大于按下时的位置则增加张
					w++
				}
				//获取总宽度
				let ul_width=parseInt($(e.path[1]).css('width'))
				// 总张数
				let num=ul_width/this.w_width
				//判断是否是最后一张
				if(w>num-1){
					w--
				}
				this.index=w
				this.play(this.index)
				// let left=w*this.w_width*-1
				// $(e.path[1]).animate({left:left+'px'},300)
				this.p={}// 清空按下时记录
				this.fn_time()//开启计时器
			}
		},
		play(index){
			let left=this.w_width*index*-1
			/////判断是否到最后一张
			let first=false  //判断是否到最后一张,默认为false
			if(this.index>=this.list.num.length){
				this.index=0
				first=true; //动画播放完成后立刻切换
			}
			/////判断是否到-1
			if(index<0){//如果小于0则播放最后一张
				this.index=this.list.num.length-1
			}
			// 执行动画
			this.ul.animate({left:left+'px'},300,()=>{
				if(first){ //如果到最后一张则立刻切换
					console.log('cfa')
					this.ul.css({left:'0px'})
				}
			})	
		},
		fn_time(){
			console.log(66)
			this.time=setInterval(()=>{
				console.log(this.index)
				this.index++
				this.play(this.index)
				
			},1000)
			
		}
	}
}
</script>
<style scoped>
	.box{
		height: 3.466667rem;
	}
	.box_ul{
		position: absolute;
		
		overflow: hidden;
	}
	.box_ul img{
		float: left;
	}
	.list{
		overflow: hidden;
		position: absolute;
		z-index: 1;
		left:0;
		bottom: 0.133333rem;
		transform: translateX(-50%);
	}
	.list li{
		float: left;
		display: block;
		margin: 0.066667rem;
		width: 0.186667rem;
		height: 0.186667rem;
		border-radius: 50%;
		background: rgba(0, 0, 0, 0.8);
		border:0.013333rem solid #000;
	}
	.list .activate{
		background:#fff;
	}
</style>