<template>
  <div class="submit_information">
    <div class="header">
      <div class="header_left">
        <span class="font_1">制作主页&nbsp;/&nbsp;</span>
        <span class="font_1">App上架&nbsp;/&nbsp;</span>
        <span class="font_2">ios自助上架申请</span>
      </div>
    </div>
    <div class="content">
      <div class="content_top">
        <div class="one">
          <div class="num">1</div>
          <span class="font">提交资料</span>
          <img src="../assets/images/audit_success/qj@2x.png"/>
        </div>
        <div class="two">
          <div class="num">2</div>
          <span class="font">审核资料</span>
          <img src="../assets/images/audit_success/qj@2x.png"/>
        </div>
        <div class="three">
          <div class="num">3</div>
          <span class="font">审核结果</span>
        </div>
      </div>
      <div class="content_center">
          <div class="iphone">
            <p><span>联系电话</span><input type="text" /></p>
            <p><span>上架紧急QQ</span><input type="text" /></p>
          </div>

          <div class="name">
            <p><span>APP名称</span><input type="text" /></p>
            <p><span>Apple ID</span><input type="text" /></p>
            <p><span>苹果上架地址</span><input type="text" /></p>
            <p><span>苹果证书</span><input type="button" value="上传" class="shangchuang"/></p>
            <div class="font">
              <p>1)请将以下证书放入文件夹，将文件压缩成zip格式包提交</p>
              <p>2)证书创建流程参考教程</p>
              <p>3)苹果开发者帐号证书：ios_Diatribution.p12</p>
              <p>4)应用对应Apple ID的推送证书：Push.p12</p>
              <p>5)应用对应Apple ID的prov文件：描述文件标识符.mobileprovision</p>
            </div>
            <div class="password">
              <p><span>Bundle ID</span><input type="text" placeholder="必填项"/></p>
              <p><span>ios Distribution.p12证书密码</span><input type="text"/></p>
            </div>
            <input class="btn btn_one" type="button" value="上一步"/>
            <input class="btn btn_two" type="button" value="提交上架申请"/>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'submit_information',
    data() {
      return {

      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../assets/style/src/base";
  .header{
    margin-bottom: 34px;
    .header_left{
      text-align: left;
      padding:30px 0 20px 30px;
      border-bottom: 1px solid #cccccc;
      span{
        color: #999999;
      }
      .font_1{
        font-size:14px;
      }
      .font_2{
        font-size: 20px;
      }
    }
  }
  .content{
    .content_top{
      /*margin:0 auto;*/
      /*width:930px;*/
      margin-left: 366px;
      padding:26px 0;
      .one,.two{
        margin-right: 150px;
      }
      .one,.two,.three{
        display: inline-block;
        .num{
          width: 50px;
          height:50px;
          border:3px solid #e5e5e5;
          border-radius: 50%;
          text-align: center;
          line-height: 50px;
          color: #d2d2d2;
          font-size: 22px;
          display: inline-block;
          margin-right: 20px;
        }
        .font{
          font-size: 18px;
          color: #e5e5e5;
          margin-right: 40px;
        }
      }
      .one{
        .num{
          border:3px solid #41cfc7;
          color: #41cfc7;
        }
        .font{
          color: #41cfc7;
        }
      }
    }
    .content_center{
      padding-top: 86px;
      padding-left: 366px;
      .iphone,.name,.password{
        p{
          span{
            font-size: 14px;
            color: #999999;
            margin-right: 50px;
            display: inline-block;
            width:120px;
            text-align: right;
          }
          input{
            width:300px;
            height:40px;
            border-radius: 5px;
            border: none;
            border: 1px solid #e5e5e5;
            margin-bottom: 40px;
          }
        }
      }
      .name{
        margin-top: 86px;
        p{
          .shangchuang{
            width:136px;
            height:40px;
            border-radius: 5px;
            background: #e5e5e5;
            font-size: 14px;
            color: #999999;
          }
        }
      }
      .font{
        font-size: 12px;
        color: #999999;
        line-height: 24px;
        margin-bottom: 40px;
        margin-left: 170px;
      }
      .btn{
        width:136px;
        height:40px;
        border-radius: 4px ;
        font-size: 14px;
        border:none;
        margin-top: 86px;
      }
      .btn_one{
        color: #333333;
        background: #e5e5e5;
        margin-left: 300px;
        margin-right: 30px;
      }
      .btn_two{
        color: #ffffff;
        background: #41cfc7;
      }
    }
  }
</style>
