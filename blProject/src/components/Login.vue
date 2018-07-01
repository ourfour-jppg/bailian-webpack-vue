<template>
    <div id="new-login">
        <div class="new-login-title">
            <a href="javascript:void(0);"  class="new-login-left"><i class="iconfont icon-back"></i></a>
            <div class="new-login-center clearfix"><img :src="logo" class="fl"><span class="fl">登录</span></div>
            <a href="#/reg"  class="new-login-right">注册</a>
        </div>
        <!-- tab切换 -->
        <div class="new-login-nav">
            <ul>
                <li><a href="#" :class="{newloginon:isLogin,}" @click="isLoginOn">账户密码登录</a></li>
                <li><a href="#" @click="isPhoneLoginOn" :class="{newloginon:isPhoneLogin}">手机动态密码登录</a></li>
            </ul>
        </div>
        <div class="islogin" v-show="isLogin">
             <div class="new-login-input">
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label">账号</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" id="new-login-username" placeholder="请输入账号">
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label">密码</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" id="new-login-username" placeholder="请输入密码">
                    </div>
                </div>
            </div>
            <div class="new-login-checkbox clearfix">
                <label for="weuiAgree" class="weui-agree">
                    <input type="checkbox">
                    <span class="weui-agree__text">
                        两周内免登录
                    </span>
                    <a href="#" class="new-login-forget fr">忘记密码?</a>
                </label>
                <div class="new-login-btn"><a href="#/me" class="weui-btn">登录</a></div>
            </div>
        </div>
        <!-- 手机登录 -->
        <div class="inPhonelogin" v-show="isPhoneLogin">
            <div class="new-login-input">
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label">手机号</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请输入账号">
                    </div>
                </div>
                <div class="weui-cell weui-cell_vcode">
                    <div class="weui-cell__hd">
                        <label class="weui-label">验证码</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="tel" placeholder="请输短信验证码">
                    </div>
                    <div class="weui-cell__ft">
                        <button class="weui-vcode-btn">获取验证码</button>
                    </div>
                </div>
            </div>
            <div class="new-login-checkbox clearfix">
                <label for="weuiAgree" class="weui-agree">
                    <input type="checkbox">
                    <span class="weui-agree__text">
                        两周内免登录
                    </span>
                </label>
                <div class="new-login-btn"><a href="#/me" class="weui-btn">登录</a></div>
            </div>
        </div>    
    </div> 
</template>
<script>
import $ from 'jquery'
export default {
  data () {
    return {
      logo:'../static/bl-logo.png',
      isLogin:true,
      isPhoneLogin:false
    }
  },
   methods:{
        isLoginOn(){
            this.isLogin = true;
            this.isPhoneLogin = false;
        },
        isPhoneLoginOn(){
            this.isLogin = false;
            this.isPhoneLogin = true;
        }
    }
  }

</script>
<style scoped>
    i{
        font-size: .533333rem;
    }
    #new-login{
        display: flex;
        height: 100%;
        display:flex;
        flex-direction: column;
        font-size: .4rem;
    }
    .new-login-title{
        overflow-x: hidden;
        display: flex;
        justify-content: space-between;
        height: 1.2rem;
        box-sizing: content-box;
        background: #fff;
        border-bottom: .026667rem solid #dedede;
    }
    .new-login-title a{
        padding: 0rem 0.5rem;
        color: #333333;
    }
    .new-login-center,.new-login-left,.new-login-right{
        line-height: 1.2rem;
    }
     .new-login-title .new-login-right{
        color: red;
    }
    .new-login-center img{
        margin-top: 10px;
    }
    .new-login-center span{
        padding: 0 .133333rem;
    }
    .new-login-nav{
        border-bottom: .013333rem solid #dedede;
        font-size: .373333rem;
    }
    .new-login-nav ul{
        display: flex;
    }
    .new-login-nav li{
        flex:1;
        display: flex;
        float:left;
        text-align: center;
    }
    .new-login-nav li a{
        flex:1;
        display: block;
        background: #fcfcfc;
    }
    /* 切换样式 */
    .new-login-nav .newloginon{
        color: #e6133c;
        border-bottom: .026667rem solid #e6133c;
        background: #fff;
    }
    .new-login-nav ul li:nth-child(1) {
        border-right: .026667rem solid #dedede;
    }
    .new-login-nav li a{
        color:#333333;
        line-height: 1.2rem;
    }
    .weui-cell{
        height: 1.333333rem;
        border: .013333rem solid #cccccc;
    }
    .weui-cell__hd{
        padding: 0 .266667rem;
        line-height: 1.333333rem;
    }
    .weui-input{
        height: 1.333333rem;
    }
    .new-login-checkbox{
        padding: 0 .266667rem;
        line-height: 1.2rem;
    }
    .weui-agree{
        font-size: .373333rem;
    }
    .new-login-forget{
        color:#ccc;
    }
    .weui-agree input{
        width: .426667rem;
        height: .426667rem;
        font-size: .426667rem;
    }
    .new-login-btn{
        padding: 0 .266667rem;
    }
    .weui-btn{
        height: 1.2rem;
        line-height: 1.2rem;
        font-size: .426667rem;
        background: #dad7d2;
        color: #fff;
        border-radius: 10px;
        background: #e6133c;
        color:#fff;
    }
    /* 手机获取验证码 */
    .weui-cell__ft{
        width: 3.666667rem;
        background: #e6133c;
        height: 1.333333rem;
    }
    .weui-vcode-btn{
        width: 100%;
        border:0 none;
        height: 1.333333rem;
        font-size: .373333rem;
        color:#fff;
    }
</style>
