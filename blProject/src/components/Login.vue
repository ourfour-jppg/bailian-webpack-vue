<template>
    <div id="new-login">
        <div class="new-login-title">
            <a href="javascript:void(0);"  class="new-login-left">&lt;</a>
            <div class="new-login-center"><i><img :src="logo"></i>登录</div>
            <a href="javascript:void(0);"  class="new-login-right">注册</a>
        </div>
    </div> 
</template>
<script>
export default {
  data () {
    return {
      logo:'../static/bl-logo.png'
    }
  }
}
</script>
<style>
    #new-login{
        display: flex;
        height: 100%;
        display:flex;
        flex-direction: column;
    }
    .new-login-title{
        overflow-x: hidden;
        display: flex;
        justify-content: space-between;
        height: 2.2rem;
        box-sizing: content-box;
        background: #fff;
        border-bottom: 0.05rem solid #dedede;
    }
    .new-login-title a{
        padding: 0rem 0.5rem;
        color: #333333;
    }
    .new-login-center{
        line-height: 2.2rem;
    }
    .new-login-left{
        line-height: 2.2rem;
    }
    .new-login-right{
        line-height: 2.2rem;
    }
    i{
        display: inline-block;
        margin-right: 0.5rem; 
    }
    img{
        width: 2.25rem;
        line-height: 2.2rem;
    }
</style>
