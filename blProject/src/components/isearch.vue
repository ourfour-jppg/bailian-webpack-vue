<template>
    <div>
        <header class="header-tap ">
        <div :class = "{'ds':isShowSearch}">
            <div class="logo">
                <img src="../../static/img/logo.png"/>
            </div>
            <div class="button" @click="search">
                <span>
                    <img src="../../static/img/search.png"/>
                    <i>搜索</i>
                </span>
            </div>
        </div>
        <div :class = "{'ds':ShowSearch}">
            <input type="text" placeholder="搜索" autofocus/>
            <i class="qux" @click="sear">取消</i>
        </div>
        </header>
    </div>
</template>

<script>
    export default {
        name: 'isearch',
        data(){
            return {
                isShowSearch:!true,
                ShowSearch:!false
            }
        },
        methods:{
            search(){
                this.isShowSearch = !this.isShowSearch;
                this.ShowSearch = !this.ShowSearch;
            },
            sear(){
                this.isShowSearch = !true;
                this.ShowSearch = !false;
            }
        }
    }
</script>
    export default {
        name: 'ifooter',
        components: {
            isearch
        }
    }
<style scoped>
header{
    position:fixed;
    top:0;
    left:0;
    right:0;
    width: 100%;
    height: 1.266667rem;
    background:#fff;
    padding:0.133333rem 0.266667rem;
    border-bottom:1px solid #ccc;
    z-index:100;
}
header .logo{
    width: 0.893333rem;
    height: 0.613333rem;
    margin-top:10px;
    float: left;
}
header .logo img{
    width:0.52rem;
    height:0.613333rem;
    width:0.893333rem;
}
header .button{
    width: 8.20rem;
    height: 0.853333rem;
    float:right;
    margin-left: 0.253333rem;
    background:#f6f6f6;
    border-radius: 0.106667rem;
}
header .button span{
    display:block;
    width: 1.333333rem;
    margin:0 auto;
    line-height: 0.853333rem;
}
header .button span img{
    height:0.52rem;
    float:left;
    margin-top:0.133333rem;
}
header .button span i{
    font-size: 0.373333rem;
    float:right;
    color:#d0d0d0;
    vertical-align:middle;
}

.header-tap input{
    width: 8.5rem;
    height: 0.853333rem;
    float:left;
    background:#f6f6f6;
    border-radius: 0.106667rem;
    padding:0.266667rem;
    color:#333;
    font-size: 0.373333rem;
    line-height: 0.853333rem;
}
::-webkit-input-placeholder { /* WebKit browsers */
    color:#d0d0d0;
}
.header-tap .qux{
    float:right;
    font-size: 0.373333rem;
    color:#333;
    line-height: 0.853333rem;
}
.ds{
    display:none;
}
</style>