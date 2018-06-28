<template>
	<div style="background: #EEEEEE;width:100%;position: absolute;left:0;top:0;">
		<p class='mes' v-text='mse'></p>
		<ul>
			<label>
				<span>收件人</span><input type="text" value="" v-model="name"  placeholder="收获人姓名不超过10个字">
			</label>
			<label>
				<span>联系方式</span><input type="text" value=""  v-model="phone" placeholder="请输入收货人联系电话">
			</label>
			<label>
				<span>省份</span>
				<select name="" v-model="site[0]" @change='site[1]="请选择";site[2]="请选择"'>
					<option v-for='i in city.sheng' :value="i" v-text='i'></option>
				</select>
				<i class="iconfont icon-xiala1 font"></i>
			</label>
			<label>
				<span>城市</span>
				<select name=""  v-model="site[1]" @change='site[2]="请选择"' @touchend='city.shi=recity([site[0]])'>
					<option v-for='i in city.shi' :value="i" v-text='i'></option>
				</select>
				<i class="iconfont icon-xiala1 font"></i>
			</label>
			<label>
				<span>区县</span>
				<select name=""  v-model="site[2]" @touchend='city.xian=recity([site[0],site[1]])'>
					<option v-for='i in city.xian' :value="i" v-text='i'></option>
				</select>
				<i class="iconfont icon-xiala1 font"></i>
			</label>
			<label>
				<span>街道地址</span><input type="text" value="" v-model="site[3]" placeholder="请输入详细地址">
			</label>
			<p @touchend='setDefault()'>
				<input type="radio" id='address_radio' style='width: 0.5rem;height: 0.5rem;margin-right:0.266667rem'><span style='width:3.066667rem;vertical-align: middle;'  >设置为默认地址</span>
			</p>
		</ul>
		<div class="center">
			<button @touchend='save()'>完成</button>
		</div>
	</div>
</template>
<script>
	import $ from 'Jquery';
	export default{
		props:['index'],
		data(){
			console.log(this)
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
			var data={
					name:'',
					phone:'',
					site:['请选择','请选择','请选择',''],
					default1:false,
					city_list:[],
					city:{
						sheng:[],
						shi:['请选择'],
						xian:['请选择']
					},
					mse:''
				}
				if(this.index!=-1){
					let data1=this.$root.ress.list[this.index]
					//console.log(data1)
					data.name=data1.name;
					data.phone=data1.phone;
					data.site=data1.site;
				}
				$.get('./static/region.json',(res)=>{
					this.city_list=res.regions
					this.city.sheng=this.recity([])
					console.log(this.index)
					if(this.index!=-1){
						console.log(this.$root.ress.list[this.index])
						this.city.shi=this.recity([this.site[0]])
						this.city.xian=this.recity([this.site[0],this.site[1]])
					}
				})
			return data
		},
		methods:{
			setDefault(){
				this.default1=!this.default1
				$('#address_radio').prop("checked",this.default1); 
				console.log(this.default1)
			},
			// 返回城市列表
			recity(name){
				let data=['请选择']
					for(let i=0;i<this.city_list.length;i++){
						// 名称大于0则寻找名称否则输出第一层名字
						if(name.length>0 ){//名称数量为1的情况
							if(this.city_list[i].name==name[0]){ 
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
			save(){
				
				let data={
						name:this.name,
						phone:this.phone,
						site:this.site
					}
				let yz=true;//验证是否通过
				if(data.name.length>10 || data.name==''){
					this.mse='收件人名错误'
					yz=false
				}else if(!data.phone.match(/^1[3,4,5,8]\d[\s,-]?\d{4}[\s,-]?\d{4}$/ig)){
					this.mse='手机号错误'
					yz=false
				}else if(data.site[0]=='请选择' || data.site[1]=='请选择' || data.site[2]=='请选择' || data.site[3]==''){
					this.mse='请填写地址'
					yz=false
				}
				//通过则执行
				if(yz){
					if(!this.$root.ress){
						this.$root.ress={
							Default:0,
							list:[]
						}
					}
					if(this.index!=-1){
						this.$root.ress.list[this.index]=data
						if(this.default1){
							this.$root.ress.Default=this.index;
						}
					}else{
						this.$root.ress.list.push(data)
						if(this.default1){
							this.$root.ress.Default=this.$root.ress.list.length-1
						}
					}
					
					this.$emit('yc')
				}
				
				
			}

		}
	}
	
</script>
<style scoped>
	.center{
		text-align: center;
		padding-top: 0.266667rem;
	}
	.fl{
		float: left;
	}
	button{
		width: 9.56rem;
		background: #FE5B4A;
		line-height: 1.2rem;
		color:#fff;
		border-radius: 0.133333rem;
		font-size: 0.466667rem;

	}
	ul{
		background: #fff;
		padding:0 0.266667rem;
	}
	ul label{
		display: block;
		font-size: 0.4rem;
		line-height: 1.133333rem;
		border-bottom: 0.013333rem solid #ccc;
		position: relative;
	}
	ul span{
		display: inline-block;
		width: 2.666667rem;
		font-size: 0.4rem;
	}
	ul label input{
		width: 6.746667rem;
		font-size: 0.4rem;
	}
	ul label select{
		appearance:none;
		vertical-align: middle;
		/*line-height:  1.066667rem;	*/
		width: 6.666667rem;
		font-size: 0.4rem;
		border:0;
		
	}
	ul label .font{
		position: absolute;
		top:0;
		right: 0.133333rem;
		display: block;
		font-size: 0.6rem;
		color:#ccc;
		/*width: ;*/
	}
	ul p{
		line-height: 1.133333rem;
	}
	.mes{
		color:red;
		font-size: 0.4rem;
		height:0.5rem;
	}
</style>