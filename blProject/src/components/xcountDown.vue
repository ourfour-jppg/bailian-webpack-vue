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
		height: 58px;
		background: #ff6f6f;
		line-height: 22px;
		color:#fff;
		padding:0 16px;
	}
	.countDown span:nth-child(1){
		font-size: 20px;
		/*font-weight: bold;*/
	}
	.countDown span:nth-child(2),.countDown span:nth-child(3){
		font-size: 18px;
		float:right;
		line-height: 58px;
		
	}
	.countDown i{float:right;}
</style>