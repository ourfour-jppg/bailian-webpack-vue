<template>
	<div style="background: #EEEEEE;position: relative;" >
		<div style=' overflow-x: hidden;width:100%;' v-if='!address.show'>
			<ul>
				<i style="display: block;height: 1px"></i>
				<li v-for='(obj,i) in li.list'>
					<div class="x">
						<p v-text='obj.name+" "+obj.phone'></p>
						<p class="hui" v-text='obj.site[0]+" "+obj.site[1]+" "+obj.site[2]+" "+obj.site[3]'></p>
					</div>
					<div >
						<label class="fl" @touchend='default_(i)'><i v-text='li.Default==i?"√":""' ></i><span>默认地址</span></label>
						<span class="fr">
							<a href="javesrcipt:;"  @touchend='add(i)'><i class="iconfont icon-dingdan"></i>编辑</a>
							<a href="javesrcipt:;" @touchend='remove(i)'><i class="iconfont icon-chahao" ></i>删除</a>
						</span>
					</div>
				</li>
			</ul>
			<div class="center">
				<button @touchend='add()'>添加收获地址</button>
			</div>
		</div>
		
		<address1 v-if='address.show' :index='address.index' @yc='re()'/>
	</div>
</template>
<script>
	import $ from 'Jquery';
	import address1 from './address_1.vue';
	export default{
		data(){
			
			let data={
				li:{
					Default:1,
					list:[]
				},
				// li:{
				// 	Default:1,
				// 	list:[{
				// 	name:'xxx',
				// 	phone:'13123123',
				// 	site:['江苏省','杭州市','xx县','ccccc店']
				// 	},{
				// 	name:'888',
				// 	phone:'13123123dwad',
				// 	site:['江苏省','北京市','xx县','ccccc店']
				// 	}]
				// },
				address:{
					show:false,
					index:-1
				}
			}
			// 
			// address1.$on('yc',()=>{
			// 	this.
			// })
			return data; 
		},
		methods:{
			add(i){
				// location.href='address_1'
				console.log('xxx')
				this.address.show=true
				if(i==undefined){
					this.address.index=-1
				}else{
					this.address.index=i
				}
				
			},
			remove(i){
				this.$root.ress.list.splice(i,1)
				
				this.re()
			},
			re(){

				this.address.show=false;
				this.li=this.$root.ress;
			},
			// 设置默认
			default_(i){
				this.$root.ress.Default=i;
				this.re()
			}
		},
		components:{
			address1
		}


	}
	
</script>
<style scoped>
	.fr{
		float: right;
	}
	.fl{
		float: left;
	}
	.hui{
		color:#969696;
	}
	.center{
		text-align: center;
		padding: 0.266667rem 0;
	}
	.x{
		border-bottom: 0.013333rem solid #969696;
	}
	ul{
		
	}
	ul li{
		margin-top: 0.4rem;
		padding:0 0.266667rem;
		background: #fff;
	}
	ul li >div{
		
		padding:0.226667rem 0;
		overflow: hidden;
	}
	ul li >div p{
		font-size: 0.373333rem;
		line-height: 0.56rem;
	}
	ul div >span{
		font-size: 0.373333rem;
		/*line-height: 0.56rem;*/
	}
	ul div >span a{
		text-decoration: none;
		color:#969696;
		padding:0 10px;
	}
	ul div >span i{
		font-size: 0.373333rem;
	}
	ul div >label{
		font-size: 0.453333rem;
		line-height: 0.56rem;
		color:#969696;
		/*display: block;*/
		width: 50%;
	}
	ul div >label i{
		display: inline-block;
		float: left;
		margin-right: 0.133333rem;
		width: 0.666667rem;
		height: 0.666667rem;
		border-radius: 50%;
		background: #E6113C;
		color:#fff;
		text-align: center;
		/*line-height: 0.56rem;*/

	}
	button{
		width: 9.56rem;
		background: #FE5B4A;
		line-height: 1.2rem;
		color:#fff;
		border-radius: 0.133333rem;
		font-size: 0.466667rem;

	}
	/*address1{
		position: absolute;
		top:0;
		left:0;
		z-index: 2;
	}*/
</style>