<template>
    <!-- 页面容器 -->
    <div id="new-goodslist">
        <!-- 商品列表容器 -->
        <div class="new-goodslist-box">
            <ul>
                <li v-for="g in goodsData">
                    <div class="goods-items clearfix">
                        <div class="goods-img fl">
                            <img :src="'http://47.106.213.218:1802/'+g.img[0]">
                        </div>
                        <div class="goods-info fr">
                            <div class="goods-title">{{g.title}}</div>
                            <div class="goods-data">
                                <div class="goods-type"></div>
                                <div class="goods-sale"><span>满100减99</span><span>闪</span></div>
                                <div class="goods-data clearfix">
                                    <div class="goods-price">{{g.price}}</div>
                                    <div class="goods-comment">
                                        <span>999+</span><span>100%</span>
                                    </div>  
                                    <a href="#" class="fr">0</a>
                                </div> 
                            </div>   
                        </div>
                    </div>
                </li>
            </ul>
        </div>  
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    data(){
        return {
            goodsData:''
        }
    },mounted(){
        this.$nextTick(()=>{
            var self = this;
            $.ajax({
                type:"POST",
                url:"http://47.106.213.218:1802/api/quire",
                data:{
                    inquire:"女装",
                    start:0,
                    num:20,
                    type:''
                },
                success:function(data){
                    self.goodsData = data.data;
                    console.log(self.goodsData)
                }
            })
        })
    }
}
</script>
<style scoped>
    #new-goodslist{
        display: flex;
        height: 100%;
        font-size: .373333rem;
    }
    .new-goodslist-box{
        width: 100%;
    }
    .new-goodslist-box ul{
        padding-left: .266667rem;
        
    }
    .new-goodslist-box li{
       padding: .213333rem .213333rem .213333rem 0;
        border-bottom: .013333rem solid #cccccc;
    }
    .goods-img img{
        width: 3.2rem;
        height: 3.2rem;
    }
    .goods-info{
        width: 6.053333rem;
    }
    .goods-title{
        height: .88rem;
        line-height: .44rem;
        overflow: hidden;
        color:#333;
    }
    .goods-type{
        height: .5rem;
    }
    .goods-sale{
        margin-top: 10px;
    }
    .goods-sale span{
        border:1px solid #e6133c;
        color:#e6133c;
        padding: 0 .053333rem; 
        font-size: .293333rem;
        margin: 0 .133333rem;
        margin-top: .3rem;
        display: inline-block;
    }
    .goods-data{
        width: 100%;
    }
    
    .goods-price{
        margin-top: .24rem;
        font-size: .4rem;
        color: #e6133c;
        display: inline-block;
        font-weight: bold;
    }
    .goods-price::before{
        content:'￥';
    }
    .goods-comment{
        display: inline-block;
        color:#999;
    }
    .goods-data .goods-comment span:nth-child(1){
        margin: 0 .346667rem 0 .666667rem;
    }
    .goods-data a{
        display: block;
        border: .026667rem solid #ccc;
        border-radius: 50%;
        width: .8rem;
        height: .8rem;
        text-align: center;
        line-height: .8rem;
    }
</style>
