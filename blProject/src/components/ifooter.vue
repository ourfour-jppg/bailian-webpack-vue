<template>
    <footer>
            <div class="ul">
                <a class="iconfont icon-shouye">
                    <p>首页</p>
                </a>
                <a class="iconfont icon-fenlei1">
                    <p>分类</p>
                </a>
                <a class="iconfont icon-gouwuche">
                    <p>购物车</p>
                </a>
                <a class="iconfont icon-wode">
                    <p>我的</p>
                </a>
            </div>
        </footer>
</template>

<script>
    export default {
        name: 'ifooter'
        }
</script>
    
<style scoped>
footer{
    display:flex;
    height: 1.333333rem;
    width: 100%;
    border-top:1px solid #ccc;
    background:#fff;
    position: fixed;
    bottom:0;
    left:0;
    right:0;
}
footer{
    width: 100%;
}
footer a{display:block;float:left;width:2.493333rem;height:1.333333rem;text-align: center;padding-top:0.066667rem;line-height:1.2;}
footer a:hover .iconfont{color:#111;}
footer a:hover p{color:#111;}
footer .iconfont{font-size:0.666667rem;color:#333;}
footer p{font-size:0.32rem;color:#333;}
</style>