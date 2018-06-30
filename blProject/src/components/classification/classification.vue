<template>
	<div>
		<xsearch />
		<xfen />
		<xfooter />
	</div>
</template>

<script>
	import xsearch from '../isearch'
	import xfen from '../fen'
	import xfooter from '../ifooter'
	export default{
		name: 'classification',
		components: {
			xsearch,
			xfen,
			xfooter
		},
	}
</script>

<style>
</style>