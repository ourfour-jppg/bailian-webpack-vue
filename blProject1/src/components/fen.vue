<template>
	<div style='height: 100%' class="div">
		<ul class="l" :style='{height:w_height}'>
			<li v-for='(t,i) in list_text' v-text='t' 
			:value="list_text_value[i]" 
			@touchstart='getgoods(list_text_value[i],i)' 
			:class='{activate:index==i?true:false}'>
			</li>
		</ul>
		<ul class="r" :style='{height:w_height}'>
			<div>
				<dl v-for='obj in list_goods'>
					<dt v-text='obj.title'></dt>
					<dd v-for='a in obj.data' v-text=''>
						<a :href='"#/goodsList?ss="+a.name'>
							<img :src="a.url" alt="">
							<span v-text='a.name'></span>
						</a>
					</dd>
				</dl>
			</div>
		</ul>
		<!-- <i v-text=''></i> -->
	</div>
</template>
<script>
// import bottom from './com/bottom.vue'
import $ from 'Jquery'
export default{
	data(){
		let data={
			w_height:(window.innerHeight/75)-1.2+'rem',
			index:0,
			list_text:[],
			list_text_index:0,
			list_text_value:[],
			list_goods:[{
				title:'',
				data:[{
					name:'',
					url:''
				}]
			}],
		}
		$.get('http://m.bl.com/h5-web/product/SearchCategorylist.html',(res)=>{
			let html=$(res)
			// console.log(res)
			let li=$('#categoryleft li',html)
			console.log(li)
			li.map((i,obj)=>{
				console.log(i,obj)
				data.list_text.push(obj.innerText)
				data.list_text_value.push($('a',$(obj)).attr('value'))
			})
			this.getgoods(data.list_text_value[0],0)
			// console.log(li)
		})

		return data;
	},
	methods:{
		getgoods(i,index){
			this.index=index
			console.log(i)
			$.get('http://m.bl.com/h5-web/product/findSearchCategorylist.html?parentSid='+i,(res)=>{
				let html=$('<div>'+res+'</div>');
				// 获取全部dl
				let dl_z=$('dl',html);
				console.log(dl_z.length)
				let data=[];
				dl_z.map((i,obj)=>{
					obj=$(obj)
					let dl={}
					// 获取单个dt
					dl.title=$('dt',obj).text();
					// 获取dd
					let dd=[]
					$('dd',obj).map((i_1,obj_1)=>{
						obj_1=$(obj_1)
						// 获取dd下img的url
						let url=$('img',obj_1).attr('src')
						// 获取dd下div的text
						let name=$('div',obj_1).text()
						dd.push({url:url,name:name})
					})
					// 将dd添加到单个dl里
					dl.data=dd
					// 数据合并
					data.push(dl)
				})
				this.list_goods=data
				console.log(this.list_goods)
			})
		}
	}
}
</script>
<style scoped>
	img,li,ul{
		padding: 0;
		margin:0;
	}
	.div{
		border:1px solid #ccc;
		width: 100%;
		height: 100%;
		overflow:  hidden;
	}
	.l{
		width: 2.666667rem;
		height: 100%;
		float: left;
		overflow-x:  hidden;
	}
	.l li{
		background: #EEEEEE;
		border-left: 0.04rem solid #EEEEEE;
		list-style: none;
		/*height: 1.2rem;*/
		border-bottom: 0.013333rem solid #ccc;
		border-right: 0.026667rem solid #ccc;
		text-align: center;
		line-height: 1.2rem;
		font-size: 0.4rem;
		box-sizing: border-box;

	}
	.r{
		float: left;
		width: 7.28rem;
		height: 100%;
		overflow-x:  hidden;
		padding:0.266667rem;
		box-sizing: border-box;
	}
	.r dl{
		overflow: hidden;
	}
	.r dl dt{
		padding-left: 0.133333rem;
		margin:0.266667rem 0;
		margin-left:0.133333rem; 
		font-size: 0.333333rem;
		border-left: 0.026667rem solid #f00;
	}
	.r dd{
		float: left;
		width: 2.226667rem;
		font-size: 0.333333rem;
		text-align: center;
		padding:0.2rem 0;
	}
	.r dd img{
		width: 2.0rem;
		height: 2.0rem;
		/*padding:0 0.133333rem;*/
	}
	.r dd a{
		text-decoration: none;
		color:#5A5A5A;
	}
	.l .activate{
		background: #fff;
		border-left: 0.04rem solid #FE5B4A;
		border-right: 0.026667rem solid #fff;
	}
</style>