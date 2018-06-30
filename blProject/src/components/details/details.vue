<template>
	<div id="details">
		<xdetailsTop />
		<xdetailsContent />
		<xdetailsBottom />
	</div>

</template>

<script>
	import { mapGetters } from 'vuex'
	//引入vuex仓库
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
			return{
				showGoodsChoose:false
			}
		},
		// 获取id方法
		methods: {
			...mapGetters([
				// 在store.js 中注册的getters
				'getId'
			])
		}
	}
	
</script>

<style scoped>
	/*@import url("../../css/base.css");*/
	#details{
		background: #EDEDED;
		line-height: 0.6;
	}
</style>