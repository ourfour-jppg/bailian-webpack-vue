<template>
	<div class="bj">
		<div class="van-picker van-area">
			<div class="van-hairline--top-bottom van-picker__toolbar fz">
				<div class="van-picker__cancel" @touchstart='anjian(0)'>取消</div>
				<div class="van-picker__confirm" @touchstart='anjian(1)'>确认</div>
			</div>
			<div class="van-picker__columns">
			 	<div class="van-picker-column">
			 		<div class="heng" >
			 			<ul class="sheng" @touchstart='start(0,$event)' >
			 				<li v-for="(a,i) in city.sheng"  :class='city_index[0]==i?{"activate":true}:{"activate":false}' v-text='a'>乌鲁木齐市</li>
			 			</ul>
			 		</div> 
			 		
			 	</div>
			 	<div class="van-picker-column">
			 		<div class="heng" >
			 			<ul class="shi" @touchstart='start(1,$event)' >
				 			<li v-for="(a,i) in city.shi"  :class='city_index[1]==i?{"activate":true}:{"activate":false}' v-text='a'>乌鲁木齐市</li>
				 		</ul>
			 		</div> 
			 		
			 	</div>
			 	<div class="van-picker-column">
			 		<div class="heng" >
			 			<ul class="xian" @touchstart='start(2,$event)' >
				 			<li v-for="(a,i) in city.xian"  :class='city_index[2]==i?{"activate":true}:{"activate":false}' v-text='a'>乌鲁木齐市</li>
				 		</ul>
			 		</div> 
			 		
			 	</div>
			</div>
		</div>
	</div>
</template>
<script>
	//取消事件 cancel
	//确认事件 confirm
	export default{
		data(){
			let data={
				city_list:[],
				city:{
						sheng:[],
						shi:['请选择'],
						xian:['请选择']
					},
				city_index:[0,0,0],
				ul:[],
				ul_li_h:0
			}
			$.get('./static/region.json',(res)=>{
						this.city_list=res.regions
						this.city.sheng=this.recity([])
						this.ul.push($('.sheng',this.$el))
						this.ul.push($('.shi',this.$el))
						this.ul.push($('.xian',this.$el))
					})

			// $(,this)
			return data;
		},
		methods:{
			// 返回城市列表
				recity(name){
//					console.log(name)
					let data=['请选择']
						for(let i=0;i<this.city_list.length;i++){
							// 名称大于0则寻找名称否则输出第一层名字
							if(name.length>0 ){//名称数量为1的情况
								if(this.city_list[i].name==name[0]){ 
//									console.log(this.city_list[i])
									for(let a=0;a<this.city_list[i].regions.length;a++){
										// 名称大于1则寻找名称否则输出第二层名字
										if(name.length>1 ){//名称数量为2的情况
											if(this.city_list[i].regions[a].name==name[1]){
												// 名称大于1则输出第三层
												for(let c=0;c<this.city_list[i].regions[a].regions.length;c++){
													data.push(this.city_list[i].regions[a].regions[c].name)
												}
											}//名字不对则舍去
										}else{
											data.push(this.city_list[i].regions[a].name)
										}
									}
								}//名字不对则舍去
							}else {
								data.push(this.city_list[i].name)
							}
						}
					return data;
				},
			//
			start(index,event){
				
				let ul=this.ul[index]
				//获取li高度
				if(!this.ul_li_h){
					this.ul_li_h=$('li',this.ul[0]).height()
				}
				ul.css({'transition': '0ms'})
				let e=event.targetTouches[0]
				let p={
					top:ul.position().top,
					y:e.pageY
				}
//				console.log(this.ul_li_h)
				ul[0].ontouchmove=(e)=>{
					// 获取手指
					e=e.targetTouches[0]
					let z=p.top+e.pageY-p.y
					if(z>0){
						z=0
					}
					if(z<ul.height()*-1+this.ul_li_h){
						z=ul.height()*-1+this.ul_li_h
					}
					ul.css({'transform': 'translateY('+z+'px)'})
				}
				ul[0].ontouchend=(e)=>{
					ul[0].ontouchmove=0
					e=e.targetTouches[0]
					// 手动触发渲染
					this.$set(this.city_index,index, Math.round(ul.position().top*-1/this.ul_li_h))
					let z=this.ul_li_h*this.city_index[index]*-1
//					console.log(this.city_index)
					ul.css({'transform': 'translateY('+z+'px)'})
					ul.css({'transition': '200ms'})
					let list=[]
					// 循环将后面的还原
					for(var i=index+1;i<3;i++){
//						console.log(i)
						this.city_index[i]=0
						this.ul[i].css({'transform': ''})
					}
					// 获取前面的城市
					if(index>=0){
						list.push(this.city.sheng[this.city_index[0]])
						this.city.shi=this.recity(list)
					}
					if(index>=1){
						list.push(this.city.shi[this.city_index[1]])
						this.city.xian=this.recity(list)
					}
				}

			},
			anjian(i){
				if(i==0){
					this.$emit('cancel',[])
				}else{
					let z=[
					this.city.sheng[this.city_index[0]],
					this.city.shi[this.city_index[1]],
					this.city.xian[this.city_index[2]]
					]
					if(this.city_index[0]==0 || this.city_index[1]==0 || this.city_index[2]==0){
						z=[]
					}
					
					this.$emit('confirm',z)
				}
			}


		}
	}
	

</script>
<style scoped>
	.bj{
		background: rgba(0, 0, 0, 0.3);
		position: fixed;
		top:0;
		left: 0;
		width: 100%;
		height: 100%;

	}
	.fz{
		font-size: 0.346667rem;
		line-height:1.293333rem;
		height: 1.293333rem;
		border-top:0.013333rem solid #e5e5e5;
		border-bottom: 0.013333rem solid #e5e5e5;
	}
	.fz div{
		padding: 0 0.4rem;
		color: #000;
	}
	.van-area{
		width: 100%;
		position: absolute;
		bottom: 1.36rem;
		height:5.946667rem;
	}
	.van-picker-column ul li{
		/*height:0.8rem;*/
		line-height:0.93066rem;
		font-size: 0.4666rem;
	}
	.van-picker-column{
		position: relative;
		height:4.653333rem;
		/*overflow: hidden;*/
	}
	.heng{
		border:0.026667rem solid #aaa;
		border-right: 0;
		border-left: 0;
		position: absolute;
		height:1rem;
		top:50%;
		width: 2.733333rem;
		margin:0 0.266667rem;
		box-sizing: border-box;
		transform: translateY(-50%);

	}
	.activate{
		color:#000;
	}
</style>