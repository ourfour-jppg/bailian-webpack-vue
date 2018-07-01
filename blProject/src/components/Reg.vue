<template>
    <div id="new-reg">
        <div class="new-reg-title">
            <ul>
                <li @click="isLeave"><i class="iconfont icon-back"></i></li>
                <li class="clearfix"><img :src="logo" class="fl" style="margin-top:10px;"><span class="fl">注册</span></li>
                <li></li>
            </ul>
        </div>
        <div class="new-reg-input">
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">手机号</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="number" id="new-reg-phoneNum" @input="isPhoneNum()" placeholder="请输入手机号">
                </div>
            </div>
            <div class="weui-cell weui-cell_vcode">
                <div class="weui-cell__hd">
                    <label class="weui-label">图形码</label>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" id="new-reg-code" @input="isCode()" placeholder="请输右侧图形码">
                </div>
                <div class="new-reg-code" ><p @click="newCode()" v-text="code"></p></div>
            </div>
            <div class="weui-cell weui-cell_vcode">
                <div class="weui-cell__hd">
                    <label class="weui-label">验证码</label>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="tel" placeholder="请输短信验证码">
                </div>
                <div class="weui-cell__ft">
                    获取验证码
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">设置密码</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="password" id="new-reg-PassWord" @input="isPassWord()" placeholder="8-20位字母、数字组合">
                </div>
            </div>
        </div>
        <div class="new-reg-tips">
            注册即视为你阅读并同意<a href="#">《百联用户协议》</a>
        </div>
        <div class="new-reg-btn">
            <div class="new-reg-btn"><a href="javascript:;" class="weui-btn" :class="{isReg:hasPhoneNum&&hasCode&&hasPassWord}">注册</a></div>
        </div>
        <a href="#/login" class="new-reg-tologin">已有百联通账户，直接登录</a>
        <div class="new-reg-alert" v-show="bool">
            <div class="new-reg-alert-title">注册尚未完成，是否继续完成注册</div>
            <button><a href="#/login">退出</a></button><button @click="isLeave">继续</button>
        </div>
    </div>
</template>
<script>
import $ from "jquery"
export default {
    data () {
    return {
      logo:'../static/bl-logo.png',
      bool:false,
      hasPhoneNum:false,
      hasCode:false,
      hasPassWord:false,
      code:(function(){
          let code = '';
          let codeStr = '1234567890'
          for(let i=0;i<4;i++){
              let idx = parseInt(Math.random()*10);
              code += codeStr[idx];
          }

          return code 
      })()
    }
  },
  methods:{
      newCode(){
          console.log(123);
          let code = '';
          let codeStr = '1234567890'
          for(let i=0;i<4;i++){
              let idx = parseInt(Math.random()*10);
              code += codeStr[idx];
          }

          this.code = code
      },
      isLeave(){
          this.bool = !this.bool
      },
      isPhoneNum(){
          let phoneNum = $('#new-reg-phoneNum').val();

          if(/^^1[3456789]\d{9}$/.test(phoneNum)){
            this.hasPhoneNum = true
            console.log(this.hasPhoneNum)
          }
          else{
              this.hasPhoneNum = false
          }
      },
      isCode(){
          let code = $('#new-reg-code').val();
          if( code === this.code){
            this.hasCode = true
            console.log(this.hasCode);
          }
          else{
            this.hasCode = false
          }
      },
      isPassWord(){
        let password = $('#new-reg-PassWord').val();
        if(/\w{8,20}/ig.test(password)){
            this.hasPassWord = true
            console.log(this.hasPassWord);
        }
        else{
            this.hasPassWord = false
        }
      }
  }
}
</script>
<style scoped>
<<<<<<< HEAD
    i{
        font-size: .533333rem;
    }
=======
>>>>>>> 52b654110ded9053646de2e38360a7256c7d0cda
    #new-reg{
        display: flex;
        height: 100%;
        flex-direction: column;
        font-size: .4rem;
        background:rgb(238, 238, 238);
        position:relative;
        overflow: hidden;
    }
    .new-reg-title{
        /* height: 1.2rem; */
        box-sizing: content-box;
        background: #fff;
        border-bottom: .026667rem solid #dedede;
    }
    .new-reg-title ul{
        display: flex;
       justify-content: space-between;
    }
    .new-reg-title li{
        float:left;
        padding: 0 .266667rem;
        height: 1.2rem;
        line-height: 1.2rem;
    }
    .new-reg-title li span{
        margin-left: .133333rem;
    }
    .new-reg-center{
        font-size: .4rem;
    }
    .new-reg-left,.new-reg-center{
        line-height: 1.2rem;
    }
    .new-reg-input{
        margin: .8rem 0;
        font-size: .373333rem;
    }
    .weui-cell{
        font-size: .373333rem;
        background: #fff;
        height: 1.066667rem;
    }
    .weui-vcode-btn{
        height: 1.066667rem;
        line-height: 1.066667rem;;
    }
    .weui-label{
        width: 100%;
        padding-right: .266667rem;
    }
    .weui-cell__ft{
        width: 3.666667rem;
        background: #e6133c;
        height: 1.066667rem;
        text-align: center;
        line-height: 1.066667rem;
        color:#fff;
    }
    .weui-cell:nth-child(4){
        margin-top: .8rem;
    }
    .new-reg-btn{
        padding: 0 .266667rem;
    }
    .new-reg-btn .isReg{
        background: #e6133c;
        color:#fff;
    }
    .weui-btn{
        height: 1.2rem;
        line-height: 1.2rem;
        font-size: .426667rem;
        background:#dad7d2;
        color: #fff;
        border-radius: 6px;
    }
    .new-reg-tips{
        font-size: .32rem;
        padding: 0 .266667rem;
    }
    .new-reg-tips a{
        color: #343535;
    }
    .new-reg-tologin{
        text-align: right;
        color:#4f9fc9;
        text-decoration: underline;
        font-size: .373333rem;
        margin-top: .2rem;
        margin-right: .266667rem;
    }
    .new-reg-alert{
        width: 6.333333rem;
        height: 2.866667rem;
        font-size: .346667rem;
        padding: .366667rem;
        border-radius: 20px;
        background: #f8f8f8;
        position:absolute;
        left: 50%;
        top: 50%;
        transform:translate(-50%,-50%);
    }
    .new-reg-alert-title{
        padding: .266667rem 0;
    }
    .new-reg-alert button{
        height: 1rem;
        width: 2.666667rem;
        border-radius:8px;
        border: .013333rem solid #ddd;
        background: #e6133c;
        font-size: .346667rem;
        color: #fff;
    }
    .new-reg-alert button:nth-child(2){
        background: #fff;
        margin-right: 16px;
        color: #343535;
    }
    /* 验证码 */
    .new-reg-code{
        width: 2.666667rem;
        border: .026667rem solid #ddd;
        margin-right: .2rem;
    }
    .new-reg-code p{
        letter-spacing:6px;
        font-size: .533333rem;
        text-align: center;
    }
</style>


