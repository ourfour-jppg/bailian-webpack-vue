<template>
    <div v-show="isShowsheet">
        <div class="weui-mask" id="iosMask" style="opacity: 1;" @click="hidesheet"></div>
        <transition name="bounce">
        <div class="weui-actionsheet weui-actionsheet_toggle" id="iosActionsheet" style="height:5.0rem;">
            <div class="weui-actionsheet__menu" style="height:3.64rem;padding:0 0.4rem;">
                <div class="weui-actionsheet__cell" style="height:1.866667rem;border-bottom:1px solid #ccc;text-align:left;">
                    <div class="fl">
                        <h3>在线支付</h3>
                        <p>支持百联卡/微信支付/支付宝/银联在线支付等，具体以收银台为准</p>
                    </div>
                    <div class="fr"><i class="iconfont icon-gou"></i></div>
                </div>
                <div class="weui-actionsheet__cell" style="height:1.813333rem;text-align:left;">
                    <div class="fl">
                        <h3>货到付款</h3>
                        <p>门店自提不支持货到付款</p>
                    </div>
                    <div class="fr"><i class="iconfont icon-danxuankuangxuanzhong" style="color:#BCBCC6;"></i></div>
                </div>
            </div>
            <div class="weui-actionsheet__action" style="height:1.36rem;backgroundColor:#F0F0F0;line-height:1.16rem;">
                <div class="weui-actionsheet__cell" id="iosActionsheetCancel" style="font-size:0.4rem;" @click="hidesheet">取消</div>
            </div>
        </div>
        </transition>
</div>

</template>

<script>
    import "../css/animate.css"
    export default {
        name:'isheet',
        computed: {
            isShowsheet() {
                return this.$store.state.isShowsheet
            }
        },
        methods: {
            hidesheet() {
                this.$store.state.isShowsheet = false;
            }
        }
    }
</script>

<style scoped>
.fl{
    float:left;
    width:8.0rem;
    height:1.866667rem;
}
.fl h3{
    font-size:0.4rem;
}
.fl p{
    font-size:0.333333rem;
    color:#BEBEBE;
}
.fr{
    float:right;
    width:1.2rem;
    height:1.866667rem;
    line-height:1.866667rem;
    text-align:right;
}
.fr i{
    font-size:0.48rem;
    color:#FC7271;
}


.bounce-enter-active {
    animation: fadeInUp 3s;
}
.bounce-leave-active {
    animation: fadeInUp 3s reverse;
}
    
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
}
</style>