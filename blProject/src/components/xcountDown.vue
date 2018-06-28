<template>
	<div class="countDown">
		<span>闪购</span>
		<span class="icon-xiangyou iconfont"></span>
		<span :endTime="endTime" :callback="callback" :endText="endText" >
			剩余时间：
		    <slot>
		      {{content}}
		    </slot>
	  	</span>
	  	
	</div>
</template>
<script>
	export default {
		data() {
			return {
				content: '',
			}
		},
		props: {
			endTime: {
				type: String,
				default: ''
			},
			endText: {
				type: String,
				default: '已结束'
			},
			callback: {
				type: Function,
				default: ''
			}
		},
		mounted() {
			this.countdowm(this.endTime)
		},
		methods: {
			countdowm(timestamp) {
				let self = this;
				let timer = setInterval(function() {
					let nowTime = new Date();
					let endTime = new Date(timestamp * 1000);
					let t = endTime.getTime() - nowTime.getTime();
					if(t > 0) {
						let day = Math.floor(t / 86400000);
						let hour = Math.floor((t / 3600000) % 24);
						let min = Math.floor((t / 60000) % 60);
						let sec = Math.floor((t / 1000) % 60);
						hour = hour < 10 ? "0" + hour : hour;
						min = min < 10 ? "0" + min : min;
						sec = sec < 10 ? "0" + sec : sec;
						let format = '';
						if(day > 0) {
							format = `${day}天${hour}小时${min}分${sec}秒`;
						}
						if(day <= 0 && hour > 0) {
							format = `${hour}小时${min}分${sec}秒`;
						}
						if(day <= 0 && hour <= 0) {
							format = `${min}分${sec}秒`;
						}
						self.content = format;
					} else {
						clearInterval(timer);
						self.content = self.endText;
						self._callback();
					}
				}, 1000);
			},
			_callback() {
				if(this.callback && this.callback instanceof Function) {
					this.callback(...this);
				}
			}
		}
	}
</script>

<style scoped>
	.countDown{
		height: 1.12rem;
		background: #ff6f6f;
	/*	line-height: 48px;*/
		color:#fff;
		padding:0 0.213333rem;
	}
	.countDown span:nth-child(1){
		font-size: 0.373333rem;
		
		/*font-weight: bold;*/
	}
	.countDown span:nth-child(2),.countDown span:nth-child(3){
		font-size: 0.373333rem;
		float:right;
		line-height: 1.12rem;
		
	}
	.countDown i{float:right;}
</style>