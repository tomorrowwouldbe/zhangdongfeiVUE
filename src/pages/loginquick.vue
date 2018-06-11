<template>
  <div class="content-default-style content">
    <div class="container clearfix">
      <div class="container-left"></div>
      <div class="container-right">
        <div class="lrf-title">
          <span>快捷登录</span>
        </div>
        <div class="lrf-content">
          <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item prop="phone">
              <div class="icon"></div>
              <el-input v-model.number="ruleForm2.phone" placeholder="手机号"></el-input>
            </el-form-item>
            <el-form-item prop="code">
              <div class="icon"></div>
              <el-input v-model.number="ruleForm2.code" placeholder="验证码"></el-input>
              <a href="javascript:;">发送验证码</a>
            </el-form-item>
            <el-form-item>
              <el-button @click="resetForm('ruleForm2')">登录</el-button>
            </el-form-item>
          </el-form>
          <div class="no-username">
            <span>还没有账号？</span>
            <router-link to="/register" tag="div" class="back-login" >
              <a href="javascript:;" class="register">立即注册</a>
            </router-link>
            <router-link to="/register" tag="div" class="back-login" style="margin-left: 20px" >
              <a href="javascript:history.go(-1)" class="register">返回上一步</a>
            </router-link>
          </div>

        </div>
        <!--<div class="lrf-content">-->
        <!--<div class="phone">-->
        <!--<div class="icon"></div>-->
        <!--<input placeholder="手机号" type="text"/>-->
        <!--</div>-->
        <!--<div class="code">-->
        <!--<div class="icon"></div>-->
        <!--<input placeholder="验证码" type="text"/>-->
        <!--<a href="javascript:;">发送验证码</a>-->
        <!--</div>-->
        <!--<div class="lock">-->
        <!--<div class="icon"></div>-->
        <!--<input placeholder="新密码" type="password"/>-->
        <!--</div>-->
        <!--<div class="lock">-->
        <!--<div class="icon"></div>-->
        <!--<input placeholder="确认密码" type="password"/>-->
        <!--</div>-->
        <!--</div>-->
        <!--<el-button><span>重设密码</span></el-button>-->
      </div>
    </div>
  </div>
</template>
<script>
  import { validator } from '../config'
  export default{
    name: 'login',
    data () {
      var checkCode = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('验证码不能为空'))
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'))
          } else {
            if (value.toString().length !== 4) {
              callback(new Error('请输入四位验证码'))
            } else {
              callback()
            }
          }
        }, 1000)
      }
      var checkPhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'))
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'))
          } else {
            if (value.toString().length !== 11) {
              callback(new Error('手机号必须为11位'))
            } else if (!validator.phone) {
              callback(new Error('请输入正确的手机号格式'))
            } else {
              callback()
            }
          }
        }, 1000)
      }
      return {
        ruleForm2: {
          phone: '',
          code: ''
        },
        rules2: {
          phone: [
            { validator: checkPhone, trigger: 'blur' }
          ],
          code: [
            { validator: checkCode, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style lang="scss">
  .lrf-content{
    padding: 0 70px;
    .el-form-item{
      height: 60px;
      .el-form-item__content{
        border-bottom: 1px solid #d7d7d7;
        height: 50px;
        position: relative;
        margin-left: 0 !important;
        .el-input{
          width: 200px;
          display: inline-block;
          .el-input__inner{
            display: inline-block;
            height: 18px;
            outline: none;
            border: none;
          }
        }
        a{
          color: #0086b3;
        }
        .el-form-item__error{
          padding-top: 15px;
          position: absolute;
          font-size: 14px;
          color: #ee451f;
          padding-left: 30px;
        }
      }
    }
    .el-form-item:last-child .el-form-item__content{
      margin-top: 30px;
      border-bottom: none;
    }
    .icon{
      display: inline-block;
      width: 15px;
      height: 18px;
      vertical-align: middle;
      margin-right: 15px;
    }
    input::placeholder{
      font-size: 16px;
      color: #d7d7d7;
    }
    .forget-pass{
      display: block;
      margin-top: 10px;
      font-size: 14px;
      color: #0686d8;
    }
    $stars: ((bg_img: 'phone.png'),(bg_img: 'yanzhengma_nor@2x.png'),(bg_img: 'yonghuming_nor@2x.png'),(bg_img: 'mima_nor@2x.png'));
    @for $i from 1 through length($stars){
      $item: nth($stars, $i);
      .el-form-item:nth-child(#{$i}){
        .icon{
          background-image: url("../assets/images/denglu_zhuce/#{map-get($item,bg_img)}");
        }
      }
    }
  }
</style>
<style lang="scss" scoped>
  @import "../assets/style/src/base";
  .content{
    .container{
      position: fixed;
      top: 50%;
      height: 603px;
      width: 100%;
      margin-top: -302px;
      .container-left{
        float: left;
        width: 738px;
        height: 100%;
        background-image: url("../assets/images/denglu_zhuce/zhuhce_img@2x.png");
      }
      .container-right{
        height: 100%;
        margin-left: 738px;
        width: 462px;
        -moz-box-shadow: 8px 8px 10px #888888; /* 老的 Firefox */
        box-shadow: 8px 8px 10px #cbcbcb;
        .lrf-title{
          padding-top: 80px;
          text-align: center;
        }
        .el-button{
          display: block;
          width: 320px;
          height: 54px;
          border-radius: 27px;
          background-color: #ee451f;
          margin: 0 auto;
          color: #fff;
          font-size: 20px;
        }
        .no-username{
          text-align: right;
          font-size: 14px;
          color: #999;
          margin-top: 130px;
          .back-login{
            display: inline-block;
            text-align: right;
            .register{
              color: #0686d8;
            }
          }

        }
      }
    }
  }

</style>
