<template>
	<div class="weui-picker weui-animate-slide-up" v-if="isHidden">
		<div class="weui-picker__hd">
			<a href="javascript:;" data-action="cancel" class="weui-picker__action" @click="hiddenChoose">取消</a>
			<a href="javascript:;" data-action="select" class="weui-picker__action" id="weui-picker-confirm" @click="hiddenChoose">确定</a>
		</div>
		<div class="weui-picker__bd">
			<div class="weui-picker__group">
				<div class="weui-picker__mask"></div>
				<div class="weui-picker__indicator"></div>
				<div class="weui-picker__content" style="transform: translate3d(0px, 102px, 0px);">
					<div class="weui-picker__item">广东</div>
					<div class="weui-picker__item">广西</div>
				</div>
			</div>
			<div class="weui-picker__group" style="display: block;">
				<div class="weui-picker__mask"></div>
				<div class="weui-picker__indicator"></div>
				<div class="weui-picker__content" style="transform: translate3d(0px, 68px, 0px);">
					<div class="weui-picker__item">广州</div>
					<div class="weui-picker__item">佛山</div>
				</div>
			</div>
			<div class="weui-picker__group" style="display: block;">
				<div class="weui-picker__mask"></div>
				<div class="weui-picker__indicator"></div>
				<div class="weui-picker__content" style="transform: translate3d(0px, 68px, 0px);">
					<div class="weui-picker__item">禅城</div>
					<div class="weui-picker__item">南海</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				isHidden:true
				
			}
		},
		methods:{
			hiddenChoose(){
				this.isHidden = false
			}
		}
	}
</script>
	
<style>

</style>