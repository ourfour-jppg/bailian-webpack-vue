<template>
    <footer>
            <ul>
                <li class="iconfont icon-shouye">
                    <p>首页</p>
                </li>
                <li class="iconfont icon-fenlei1">
                    <p>分类</p>
                </li>
                <li class="iconfont icon-gouwuche">
                    <p>购物车</p>
                </li>
                <li class="iconfont icon-wode">
                    <p>我的</p>
                </li>
            </ul>
    </footer>
</template>

<script>
    export default {
        name: 'ifooter'
        }
</script>
    
<style scoped>
footer{
    width: 100%;
    display:flex;
    height: 1.333333rem;
    width: 100%;
    border-top:1px solid #ccc;
    background:#fff;
    position: fixed;
    bottom:0;
    left:0;
    right:0;
    box-sizing: border-box;
    z-index:100;
}
footer li{float:left;width:2.493333rem;height:1.333333rem;text-align: center;padding-top:0.066667rem;}
footer .iconfont:hover{color:skyblue;}
footer li:hover p{color:skyblue;}
footer .iconfont{font-size:0.666667rem;color:#333;}
footer p{font-size:0.32rem;color:#333;}
</style>