<template>
  <div class="shelves">
      <div class="header">
        <div class="header_left">
          <span class="font_1">制作主页 / </span>
          <span class="font_2">APP上架</span>
        </div>
        <div class="header_right">
          <div class="img"></div>
          <!--<el-dropdown trigger="click">-->
            <!--<span class="el-dropdown-link">-->
              <!--aiyouyouadmin<i class="el-icon-caret-bottom el-icon&#45;&#45;right"></i>-->
            <!--</span>-->
            <!--<el-dropdown-menu slot="dropdown">-->
              <!--<el-dropdown-item class="clearfix">-->
                <!--退出账号-->
              <!--</el-dropdown-item>-->
            <!--</el-dropdown-menu>-->
          <!--</el-dropdown>-->
        </div>
      </div>
    <div class="content">
      <p class="shangjia">APP上架</p>
      <div class="content_box">
        <div class="box">
          <div class="img">
            <img src="../assets/images/shelves/apple2@2x.png" />
          </div>
          <p>ios待上架</p>
          <div class="font">
            用户下单ios待上架服务并支付完成后由上架专员代为提交上架AppStore,如果出现申请打回将由上架专员处理调整并从新提交,直至上架成功。
          </div>
          <el-button>￥800.00/<span>次</span></el-button>
        </div>
        <div class="box">
          <div class="img">
            <img src="../assets/images/shelves/andriod1@2x.png" />
          </div>
          <p>Android待上架</p>
          <div class="font">
            用户下单安卓代上架服务并支付完成后，由专门的上架员代为提交应用宝、安卓市场、91、百度4个安卓应用市场上架,如出现申请打回将由上架专员处理调整并从新提交,直至上架成功。
          </div>
          <el-button>￥500.00/<span>次</span></el-button>
        </div>
        <div class="box">
          <div class="img">
            <img src="../assets/images/shelves/apple1@2x.png" />
          </div>
          <p>ios自助上架</p>
          <div class="font">
            用户下单ios待上架服务并支付完成后由上架专员代为提交上架AppStore,如果出现申请打回将由上架专员处理调整并从新提交,直至上架成功
          </div>
          <el-button>自助上架</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'shelves',
    data () {
      return {

      }
    }
  }
</script>
<!--<style lang="scss">-->
  <!--.el-dropdown-link{-->
    <!--display: inline-block;-->
    <!--color: #333;-->
    <!--.el-icon-caret-bottom{-->
      <!--display: inline-block;-->
      <!--vertical-align: middle;-->
      <!--margin-left: 8px;-->
      <!--width: 0;-->
      <!--height: 0;-->
      <!--border-left:8px solid transparent;-->
      <!--border-right: 8px solid transparent;-->
      <!--border-top: 10px solid #666;-->
    <!--}-->
    <!--.el-icon-caret-bottom:before{-->
      <!--content: '';-->
    <!--}-->
  <!--}-->
  <!--.el-dropdown-menu{-->
    <!--top: 75px !important;-->
    <!--left: 1380px !important;-->
    <!--padding: 10px 20px !important;-->
    <!--.el-dropdown-menu__item{-->
      <!--width: 150px !important;-->
      <!--.mark{-->
        <!--display: inline-block;-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</style>-->

<style lang="scss">
  .el-button{
    width: 244px;
    height:46px;
    border-radius: 23px;
    border:none;
    border:1px solid #d2d2d2;
    font-size:18px;
    margin-bottom: 20px;
    margin-left: 26px;
    span{
      font-size:14px;
    }
  }
</style>
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
     /*.header_right{*/
       /*overflow: hidden;*/
       /*.img{*/
         /*width:40px;*/
         /*height:40px;*/
         /*border-radius: 50%;*/
         /*background: #666666;*/
         /*float: left;*/
       /*}*/
     /*}*/
   }
  .content{
    margin-left: 20px;
    margin-top: 34px;
    margin-right:30px;
    .shangjia{
      text-align: left;
      font-size: 22px;
      color: #333333;
      line-height: 100px;
      margin-left: 20px;
    }
    .content_box{
      padding:150px 0 0 300px;
      .box{
        width:300px;
        border: 2px solid #cccccc;
        display: inline-block;
        margin-right: 100px;
        .img{
          border:none;
          width: 100px;
          height: 100px;
          margin: 0 auto;
          margin-top: 50px;
        }
        p{
          text-align: center;
          font-size:18px;
          color: #333333;
        }
        .font{
          width:244px;
          margin: auto;
          text-align: left;
          font-size: 12px;
          line-height: 24px;
          color: #333333;
          margin-bottom: 44px;
          margin-top: 50px;
          border:none;
          height:120px;
          padding:0;
        }
      }
    }
  }
</style>
