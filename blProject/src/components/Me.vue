<template>
    <div id="new-me">
        <div class="new-me-title clearfix">
            <a href="#"><i class="iconfont icon-shezhi"></i></a><a href="#"><i class="iconfont icon-xiaoxi"></i></a>
        </div>
        <div class="new-me-user clearfix">
            <div class="new-me-img fl">
                <i class="iconfont icon-wode new-me-logo"></i>
            </div>
            <div class="new-me-data fl clearfix">
                <div class="new-me-name fl">
                    <p>XXX会员</p> 
                    <p><i class="iconfont icon-huiyuan1"></i>超级会员</p>
                </div>
                <div class="new-me-num fr">
                    <p>成长值50</p>
                    <p>还差999升级至尊会员</p>
                </div>
            </div>
        </div>
        <div class="new-me-gongneng">
            <div class="new-me-one new-me-top">
                <ul>
                    <li><i class="iconfont icon-guanzhu"></i><p>我的收藏</p><span>1</span></li>
                    <li><i class="iconfont icon-liwu"></i><p>我的福利</p><span>海量优惠券</span></li>
                    <li><i class="iconfont icon-vip"></i><p>热门活动</p><span>优享沙龙活动</span></li>
                </ul>
            </div>
            <div class="new-me-two new-me-top">
                <ul>
                    <li>
                        <span>0</span>
                        <p>积分</p>
                    </li>
                    <li>
                        <span>2</span>
                        <p>优惠券</p>
                    </li>
                    <li>
                        <span>0.00</span>
                        <p>电子卡</p>
                    </li>
                    <li>
                        <i class="iconfont icon-fukuanma"></i>
                        <p>会员支付</p>
                    </li>
                    <li>
                        <i class="iconfont icon-daifukuan"></i>
                        <p>我的钱包</p>
                    </li>
                </ul>
            </div>
            <div class="new-me-three new-me-top">
                <ul>
                    <li><i class="iconfont icon-zhifu"></i><p>待付款</p></li>
                    <li><i class="iconfont icon-daishouhuo"></i><p>待收款</p></li>
                    <li><i class="iconfont icon-daipingjia"></i><p>待品论</p></li>
                    <li><i class="iconfont icon-shouhou"></i><p>售后</p></li>
                    <li><i class="iconfont icon-dingdan"></i><p>我的订单</p></li>
                </ul>
            </div>
            <div class="new-me-four new-me-top">
                <ul>
                    <li>
                        <div class="new-me-four-box">
                            <span class="new-me-four-title">
                                <i class="iconfont icon-mendian icon-pr"></i>
                                门店会员活动
                            </span>
                            <i class="iconfont icon-xiangyou fr"></i>
                        </div>
                    </li>
                    <li>
                        <div class="new-me-four-box">
                            <span class="new-me-four-title">
                                <i class="iconfont icon-weibiaoti- icon-pr"></i>银行卡活动</span>
                                <i class="iconfont icon-xiangyou fr"></i>
                        </div>
                    </li>
                    <li>
                        <div class="new-me-four-box">
                            <span class="new-me-four-title">
                            <i class="iconfont icon-liuliang icon-pr"></i>银行卡活动</span>
                            <i class="iconfont icon-xiangyou fr"></i>
                        </div>
                    </li>
                    <li>
                        <div class="new-me-four-box">
                            <span class="new-me-four-title">
                            <i class="iconfont icon-huiyuan1 icon-pr"></i>百联通特权汇</span>
                            <i class="iconfont icon-xiangyou fr"></i>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <div class="new-me-four-box">
                            <span class="new-me-four-title">
                                <i class="iconfont icon-huiyuan icon-pr"></i>
                                联系客服
                            </span>
                            <i class="iconfont icon-xiangyou fr"></i>
                        </div>
                    </li>
                    <li>
                        <div class="new-me-four-box">
                            <span class="new-me-four-title">
                                <i class="iconfont icon-bangzhu icon-pr"></i>
                                帮助中心
                            </span>
                            <i class="iconfont icon-xiangyou fr"></i>
                        </div>
                    </li>
                    <li>
                        <div class="new-me-four-box">
                            <span class="new-me-four-title">
                                <i class="iconfont icon-iconset0142 icon-pr"></i>
                                关于百联i
                            </span>
                            <i class="iconfont icon-xiangyou fr"></i>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
#new-me{
    display: flex;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: #E13A44;
    flex-direction: column;
}
#new-me i{
    font-size: .586667rem;
}
.new-me-title{
    padding: .266667rem .4rem;
}
.new-me-title a{
    display: block;
    margin-left: .533333rem;
    float: right;
    color: #fff;
}
.new-me-user{
    height: 2.373333rem;
    padding-bottom: .56rem;
}
.new-me-img{
    border-radius: 50%;
    background: #fff;
    margin: 0 .4rem;
}
#new-me .new-me-img .new-me-logo{
    display: block;
    text-align: center;
    line-height: 1.813333rem;
    font-size: 1.4rem;  
    width: 1.813333rem;
    height: 1.813333rem;
    color: #ccc
}
.new-me-data{
    height: 1.813333rem;
    width: 7.386667rem;
    padding: .346667rem 0;
    font-size: .266667rem;
}
.new-me-data p{
    line-height: .573333rem;
    color: #fff;
}
.new-me-num{
    box-sizing:content-box;
    padding: 0 .8rem 0 1.226667rem;
    background: #B9414A;
    border-bottom-left-radius:.573333rem;
    border-top-left-radius: .573333rem;
}
.new-me-gongneng{
    flex:1;
    background: #F5F5F5;
    overflow-y: scroll;
}
.new-me-top{
    margin-top: .213333rem;
}
.new-me-one ul{
    display: flex;
    height: 2.666667rem;
    background: #fff;
}
.new-me-one li{
    padding-top: .453333rem;
    float: left;
    flex:1;
    text-align: center;
}
.new-me-one li i{
    color:#E13A44;
}
.new-me-one li p{
    font-size: .346667rem;
}
.new-me-one li span{
    font-size: .266667rem;
    color:#ccc;
}
/* 2 */
.new-me-two ul{
    display: flex;
    height: 2.666667rem;
    background: #fff;
}
.new-me-two li{
    padding: .373333rem 0;
    float: left;
    flex:1;
    text-align: center;
}
.new-me-two li p{
    font-size: .346667rem;
}
.new-me-two li span{
    margin-top: .4rem;
    line-height: .586667rem;
    display: block;
    height: .586667rem;
    font-size: .266667rem;
}
/* 3  */
.new-me-three ul{
    display: flex;
    height: 2.106667rem;
    background: #fff;
}
.new-me-three li{
    padding: .373333rem 0;
    float: left;
    flex:1;
    text-align: center;
}
.new-me-three li p{
    font-size: .346667rem;
}
/* 4 */
.new-me-four ul{
    margin-top: .213333rem;
}
.new-me-four-box{
    border-bottom: .013333rem solid #ccc;
    height: 1.386667rem;
    line-height: 1.386667rem;
    font-size: .4rem;
    padding: 0 .4rem; 
    background: #fff;
}
.new-me-four-title{
    display: inline-block;
    height: 1.386667rem;
    line-height: 1.386667rem;
}
.icon-pr{
    margin-right: .266667rem;
}
</style>
