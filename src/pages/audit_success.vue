<template>
  <div class="aduit_success">
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
        <div class="img">
          <img src="../assets/images/audit_success/shenhechenggong@2x.png" />
        </div>
        <p class="success">审核成功</p>
        <p class="pass">恭喜您通过了审核</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'aduit_success',
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
      .three{
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
      margin-left: 732px;
      margin-top: 200px;
      .img{
        width:300px;
        height:300px;
        img{
          width:100%;
        }
      }
      .success,.pass{
        color: #333333;
        width:300px;
        text-align: center;
      }
      .success{
        font-size: 36px;
        margin-top: 40px;
        margin-bottom: 20px;
      }
      .pass{
        font-size:22px;
      }
    }
  }
</style>
