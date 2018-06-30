<template>
	<div >
		<!-- <i v-text='add()'></i> -->
		<p v-text='title' class="bt"></p>
		<a  v-for='obj in goods' :href='"#/detail?"+obj.id'>
			<img :src='"http://47.106.213.218:1802/"+obj.img[0]' />
			<p v-text='obj.title' class="fz"></p>
			<p v-text='"￥"+obj.reference'></p>
		</a>
	</div>
</template>
<script>
// import bottom from './com/bottom.vue'
import $ from 'Jquery'
export default{
	data(){
		let data={
			title:'',
			goods:[],
			data:{},
			index:5
		}
		$.get('http://47.106.213.218:1802/api/home',(res)=>{
				console.log('$get')
				// res=json.parse(res)
				res=res[res.length-1]
				data.title=res.title
				data.data=res.promotion
				// index++
				for(let i=0;i<6;i++){
					data.goods.push(data.data[i])
				}
				

			})
		return data;
	},
	computed:{
		get_goods:function(){
			console.log('res')
			
		}
	},
	methods:{
		add(){
			console.log('c')
			if(this.data.length>index){
				index++
				this.goods.push(this.data(index))
				index++
				this.goods.push(this.data(index))	
			}
			
		}
	}
}
</script>
<style scoped>
	img,p{
		padding:0;
		margin:0;
	}
	img{
		width: 4.533333rem;
		height: 4.533333rem;
	}
	a{
		display: block;
		float: left;
		width: 50%;
		box-sizing: border-box;
		color:#353535;
		text-decoration: none;
		font-size: 0.4rem;
		line-height: 0.533333rem;
		padding: 0.133333rem;
	}
	.fz{
		font-size: 0.333333rem;
		line-height: 0.4rem;
		color: #7B7C78;
		padding-bottom: 0.266667rem;
	}
	.bt{
		line-height: 1.16rem;
		font-size: 0.466667rem;
		text-align: center;
		font-weight:bold;
	}
</style>