<template>
	<div id="details" >
		<xdetailsTop />
		<xdetailsContent />
		<xdetailsBottom />
		<!--<p>{{getId()}}</p>-->
	</div>
</template>

<script>
	
	import xdetailsTop from '../xdetails-top'
	import xdetailsContent from '../xdetails-content'
	import xdetailsBottom from '../xdetails-bottom'
	export default {
		
		name: 'Details',
		components: {
			xdetailsTop,
			xdetailsContent,
			xdetailsBottom
		},
		data(){
//			var goodsId = getId()
//			console.log(goodsId)
//			$.post('http://47.106.213.218:1802/api/goods',{id:79454},(res)=>{
//				this.$root.res = res;
//				console.log(this.$root.res)
//				console.log(this)
//			})	
			

			return{
				
			}
		},
		
		computed:{
			
			
		}
	}
	
</script>

<style scoped>
	/*@import url("../../css/base.css");*/
	#details{
		background: #EDEDED;
		/*line-height: 0.6;*/
	}
</style>