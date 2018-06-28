<template>
	<div id="details">
		<xdetailsTop />
		<xdetailsContent />
		<xdetailsBottom />
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
			return{
				showGoodsChoose:false
			}
		}
	}
	
</script>

<style scoped>
	/*@import url("../../css/base.css");*/
	#details{
		background: #EDEDED;
	}
</style>