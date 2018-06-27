<template>
	<div style="position: relative;overflow: hidden; height: 3.466667rem;">
		<ul class="box_ul" id='baner_ul_vue' :style='{width:w_width*img_url.length+"px",left:0}' @touchstart='start($event)'>
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
			this.ul=$('#baner_ul_vue')
			// console.log(res.obj)
			res.obj.map((obj)=>{
				this.img_url.push(obj.imgPath)
				this.list.num.push(0)
			})
			data.list.width=this.img_url.length*0.32 +'rem'
			this.img_url.push(this.img_url[0])
			console.log(this.img_url)
		})
		return data;
	},
	methods:{
		start (e){
			// console.log(this.ul.left)
			// 停止动画
			$(e.path[1]).stop()
			clearInterval(this.time)
			// 获取手指
			let t_e=e.targetTouches[0]
			//获取ul,手指对象里的target为手指所在的元素也就是img
			//所以要获取他上一级
			let target=$(e.path[1])
			// 记录按下时坐标和手指位置
			this.p.left=parseInt(target.css('left'))
			
			this.p.x=t_e.pageX
			//手指移动
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
					left=(ul_width-this.w_width)*-1
				}
				// console.log(ul_width-this.w_width)
				//设置ul属性
				$(e.path[1]).css({
					left:left+'px'
				})
			}
			//手指放开
			target[0].ontouchend=(e)=>{
				// console.log(e)
				e.path[1].ontouchmove='';
				// 获取手指
				t_e=e.changedTouches[0]
				console.log(e)
				let ul=$(e.path[1])
				let w=Math.floor( parseInt(ul.css('left'))/this.w_width*-1)
				this.index--
				if(this.p.x>t_e.pageX){
					w++
					this.index+=2
					
					console.log('gg',this.index)
				}
				//判断是否是最后一张
				let ul_width=parseInt($(e.path[1]).css('width'))
				// 总张数
				let num=ul_width/this.w_width

				//判断是否是追后一张
				if(w>num-1){
					w--
				}
				if(this.index>num){
					this.index=0
				}
				let left=w*this.w_width*-1

				// this.animation(left,300)
				$(e.path[1]).animate({left:left+'px'},300)
				
				// 清空按下时记录
				this.p={}
				this.fn_time()
			}
		},
		play(index){
			// let w=praseInt(this.ul.css('width'))
			let left=this.w_width*index*-1
			// if(this.index>this.list.num.length){
			// 	this.index=0
			// }
			this.ul.animate({left:left+'px'},300,()=>{
				if(this.index>=this.list.num.length){
					this.index=0
					console.log('cfa')
					// this.ul_l=-1
					this.ul.css({left:'0px'})
				}
			})
			if(index<0){
				this.index=this.list.num.length
			}
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