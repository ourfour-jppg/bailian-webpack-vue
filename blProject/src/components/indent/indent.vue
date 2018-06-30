<template>
    <div>
        <div class="dtop">
            <div class="van-hairline--bottom van-doc-nav-bar van-nav-bar" style="z-index:50;height:1.333333rem;line-height:1.333333rem;border-bottom:1px solid #ccc;width:100%;position:fixed;top:0;">
                <div class="van-nav-bar__left" style="font-size:0.533333rem;heigh:1.333333rem;" @click="igo">
                    <i class="van-icon van-icon-arrow van-nav-bar__arrow"></i>
                </div>
                <div class="van-ellipsis van-nav-bar__title" style="font-size:0.506667rem;">确定订单</div>
            </div>
        </div>
        
        <div class="main">
            <div class="dti" v-show="showdti" @click="dti">
                <div class="dtiL">
                    温馨提示：订单中含有不支持7天无理由退货的商品，请确定商品信息后提交订单
                </div>
                <div class="dtiR">
                    &times;
                </div>
            </div>
            <div class="dsite">
                <i class="iconfont icon-dizhidingwei"></i>+点击添加收货地址
            </div>
            <div class="ddc">
                <div class="ddct">
                    <span class="ddctl">配送方式</span>
                    <span class="ddctr"><i class="iconfont icon-gou">&nbsp;</i>物流配送&nbsp;&nbsp;<i class="iconfont icon-danxuankuangxuanzhong" style="color:#BCBCC6;"></i>&nbsp;门店自提</span>
                </div>
                <div class="ddcb clearfix">
                    <span class="ddcbl">
                        配送时间
                    </span>
                    <span class="ddcbr">
                        双休日、节假日均可配送&nbsp;<i class="iconfont icon-xiangyou"></i>
                        <p>由百联/商家合作的快递为您配送</p>
                    </span>
                </div>
            </div>
            <ul class="dpay">
                    <li @click="showsheet"><span class="payl">支付方式</span><span class="payr">在线支付&nbsp;<i class="iconfont icon-xiangyou"></i></span></li>
                    <li><span class="payl">优惠券</span><span class="payr" style="float:right;">无可用&nbsp;<i class="iconfont icon-xiangyou"></i></span></li>
                    <li><span class="payl"><i class="iconfont icon-danxuankuangxuanzhong" style="color:#BCBCC6;"></i>&nbsp;暂无可用积分</span></li>
                    <li><span class="payl"><i class="iconfont icon-danxuankuangxuanzhong" style="color:#BCBCC6;"></i>&nbsp;电子卡可抵扣0.0元</span><span class="payr"><i class="iconfont icon-xiangyou"></i></span></li>
                    <li style="border-bottom:none;"><span class="payl"><i class="iconfont icon-danxuankuangxuanzhong" style="color:#BCBCC6;"></i>&nbsp;暂无账户余额</span></li>
            </ul>
            <div class="dgoods">
                <div class="dgtop">
                    <span class="dgtopl">i百联（订单）</span><span class="dgtopr" @click="dgtop">查看所有3件商品<i class="iconfont icon-plus-select-down"></i></span>
                </div>
                <ul class="dggoods">
                    <li>
                        <div class="dgimg">
                            <img src="http://Img.iblimg.com/photo-42/3020/342816512_200x200.jpg">
                        </div>
                        <div class="dgcon">
                            <p>华为 荣耀10 COL-AL10 幻夜黑 6+128GB 尊享版 AI摄影全网通4G手机 双卡双待</p>
                            <span>不支持7天无理由退货</span>
                        </div>
                        <div class="dgprice">
                            <p>￥2799.0</p>
                            <p>X1</p>
                        </div>
                    </li>
                    <li v-show="showdg">
                        <div class="dgimg">
                            <img src="http://Img.iblimg.com/photo-42/3020/342816512_200x200.jpg">
                        </div>
                        <div class="dgcon">
                            <p>华为 荣耀10 COL-AL10 幻夜黑 6+128GB 尊享版 AI摄影全网通4G手机 双卡双待</p>
                            <span>不支持7天无理由退货</span>
                        </div>
                        <div class="dgprice">
                            <p>￥2799.0</p>
                            <p>X1</p>
                        </div>
                    </li>
                    <li v-show="showdg">
                        <div class="dgimg">
                            <img src="http://Img.iblimg.com/photo-42/3020/342816512_200x200.jpg">
                        </div>
                        <div class="dgcon">
                            <p>华为 荣耀10 COL-AL10 幻夜黑 6+128GB 尊享版 AI摄影全网通4G手机 双卡双待</p>
                            <span>不支持7天无理由退货</span>
                        </div>
                        <div class="dgprice">
                            <p>￥2799.0</p>
                            <p>X1</p>
                        </div>
                    </li>
                </ul>
                <div class="dyou">
                    <span>免邮</span>
                </div>
                <div class="dall">
                    <span>合计：<i>￥8888.0</i></span>
                </div>
            </div>
        </div>
        <div class="hi" style="height:1.4rem"></div>
        <div class="van-submit-bar">
            <div class="van-submit-bar__bar" style="height:1.4rem;">
                <div class="van-submit-bar__price" style="height:1.4rem;font-size:0.506667rem;line-height:1.4rem;border-top:1px solid #ccc;">
                    <span>应付：</span>
                    <span class="van-submit-bar__price-integer">¥30.</span>
                    <span class="van-submit-bar__price-decimal" style="font-size:0.506667rem;">50</span>
                </div>
                <button class="van-button van-button--danger van-button--normal" style="height:1.4rem;width:3.6rem;font-size:0.506667rem;">
                <span class="van-button__text">提交订单</span>
                </button>
            </div>
        </div>
        <isheet />
    </div>
</template>

<script>
    import isheet from '../isheet'
    export default {
        name: 'indent',
        data(){
            return {
                showdti:true,
                showdg:false,
                dgall:[]
            }
        },
        methods:{
            igo(){
                this.$router.go(-1);
            },
            dti(){
                this.showdti = false;
            }
            ,dgtop(){
                this.showdg =!this.showdg;
            },
            showsheet(){
                this.$store.state.isShowsheet = true
            }
        },
        components:{isheet}
    }
</script>

<style scoped>
.main{
    margin-top:1.336667rem;
}
.main .dti{
    height: 1.2rem;
    background:#FFF1F0;
}
.main .dti .dtiL{
    float:left;
    width: 8.8rem;
    height: 1.2rem;
    padding:0 0.4rem;
    font-size:0.373333rem;
    line-height: 0.533333rem;
}
.main .dti .dtiR{
    float:right;
    width: 1.2rem;
    height: 0.72rem;
    margin:0.24rem 0;
    font-size:0.533333rem;
    color:#999;
    line-height:0.72rem;
    text-align: center;
    border-left: 1px solid #333;
}

.main .dsite{
    height: 2.133333rem;
    line-height: 2.133333rem;
    text-align: center;
    font-size: 0.373333rem;
    color:#6F6F6F;
    border-bottom:0.266667rem solid #DEDEDE;
}
.main .dsite i{
    font-size: 0.373333rem;
    text-decoration: underline;
}
.main .ddc{
    padding:0 0.4rem;
    height: 2.933333rem;
    font-size: 0.373333rem;
    border-bottom:0.266667rem solid #DEDEDE;
}
.main .ddct{
    height: 1.2rem;
    border-bottom: 1px solid #ccc;
    line-height: 1.2rem;
}
.main .ddct .ddctl{
    float:left;
}
.main .ddct .ddctr{
    float:right;
}
.main .ddct .ddctr i{
    font-size:0.506667rem;
    color:#FD7275;
    line-height: 1.2rem;
    vertical-align:middle;
}
.main .ddcb{
    height: 1.706667rem;
}
.main .ddcb .ddcbl{
    float:left;
    margin-top:0.466667rem;
}
.main .ddcb .ddcbr{
    float:right;
    margin-top:0.266667rem;
}
.main .ddcb .ddcbr i{
    font-size:0.4rem;
}
.main .ddcb .ddcbr p{
    color:#A9A9A9;
    font-size:0.266667rem;
    line-height: 28px;
}


.main .dpay{
    height:6.0rem;
    padding:0 0.4rem;
    border-bottom:0.266667rem solid #DEDEDE;
}
.main .dpay li{
    height:1.2rem;
    font-size: 0.373333rem;
    border-bottom: 1px solid #ccc;
    line-height: 1.1rem;
}
.main .dpay li .payl{
    float:left;
}
.main .dpay li .payl i{
    font-size: 0.373333rem;
}
.main .dpay li .payr{
    float:right;
}
.main .dpay li .payr i{
    font-size: 0.373333rem;
}

.main .dgoods{
    min-height: 6.533333rem;
    border-bottom:0.266667rem solid #DEDEDE;
}
.main .dgoods:first-child{
    display:block;
}
.main .dgoods .dgtop{
    height:1.066667rem;
    line-height:1.066667rem;
    font-size: 0.373333rem;
    padding:0 0.4rem;
    color:#6B6B6B;
}
.main .dgoods .dgtop .dgtopl{
    float:left;
}
.main .dgoods .dgtop .dgtopr{
    float:right;
}
.main .dgoods .dgtop .dgtopr i{
    font-size: 28px;
}
.main .dgoods .dggoods{
    min-height: 224px;
}
.main .dgoods .dggoods li{
    padding:0 0.4rem;
    height: 3.066667rem;
    padding:0.4rem 0;
    border-bottom: 1px solid #ccc;
    position:relative;
}
.main .dgoods .dggoods li:nth-child(1){
    display:block;
}
.main .dgoods .dggoods li .dgimg{
    width: 2.266667rem;
    height:2.266667rem;
    float:left;
}
.main .dgoods .dggoods li .dgimg img{
    width: 2.266667rem;
    height:2.266667rem;
    
}
.main .dgoods .dggoods li .dgcon{
    width: 5.8rem;
    height:2.266667rem;
    float:left;
    padding:0 0.066667rem;
}
.main .dgoods .dggoods li .dgcon p{
    font-size: 0.346667rem;

}
.main .dgoods .dggoods li .dgcon span{
    font-size:0.266667rem;
    position:absolute;
    bottom:0.466667rem;
}
.main .dgoods .dggoods li .dgprice{
    width: 1.133333rem;
    height: 170px;
    font-size: 0.346667rem;
    text-align:right;
    float:left;
}
.main .dgoods .dyou{
    height: 1.146667rem;
    line-height: 1.146667rem;
    font-size: 0.373333rem;
    color:#747474;
    padding:0 1.066667rem;
    border-bottom: 1px solid #ccc;
}
.main .dgoods .dyou span{
    float:right;
}
.main .dgoods .dall{
    height:0.933333rem;
    margin-top:0.266667rem;
}
.main .dgoods .dall span{
    font-size:0.373333rem;
    float:right;
    margin-right: 0.4rem;
}
.main .dgoods .dall span i{
    color:#F94A41;
    font-weight: 700;
}
</style>