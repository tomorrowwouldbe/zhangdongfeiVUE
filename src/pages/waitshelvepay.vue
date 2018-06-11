<template>
  <div class="wait-shelve-pay">
    <UMHeader></UMHeader>
    <div class="content-default-style content">
      <div class="content-title">
        IOS首次上架
      </div>
      <div class="pay-app clearfix">
        <div class="app-icon">
          <div class="app-icon-img"><img src="../assets/images/shoucishangjia@2x.png" alt=""></div>
        </div>
        <div class="app-service">
          <div class="service-title"><span>IOS首次上架</span></div>
          <div class="service-term">
            <div class="service-term-desc"><span>选择</span></div>
            <div class="service-term-time">
              <el-radio v-model="termTime" label="服务期限">1次</el-radio>
            </div>
          </div>
          <div class="service-term pay-way">
            <div class="service-term-desc"><span>支付方式</span></div>
            <div class="service-term-time">
              <el-radio v-model="payWay" label="支付方式"><img src="../assets/images/zhifubao@2x.png" alt=""></el-radio>
            </div>
          </div>
          <div class="service-term pay-amount">
            <div class="service-term-desc"><span>支付金额</span></div>
            <div class="service-term-time service-pay-amount">
              <span>￥</span>
              <span class="amount">500</span>
            </div>
          </div>
          <div class="pay">
            <el-button>支付</el-button>
          </div>

        </div>
      </div>
      <div class="shop-detail">
        <div class="detail-title">
          商品详情
        </div>
        <div class="shop-content">
          <p>用户下单IOS代上架服务并支付完成后，由上架专员代为提交上架AppStore，如出现申请打回将有上架专员处理调整并重新提交，直至上架成功。</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import UMHeader from '../components/header/headerre.vue'
  export default {
    name: 'waitshelvepay',
    components: {
      UMHeader
    },
    data () {
      return {
        termTime: '服务期限',
        payWay: '支付方式'
      }
    }
  }
</script>

<style lang="scss">
  .el-radio{
    .el-radio__label{
      margin-left: 28px;
    }
  }
  .el-radio__input.is-disabled+.el-radio__label{

  }
  .pay{
    .el-button{
      width: 136px;
      height: 40px;
      color: #fff;
      background-color: #41cfc7;
      border-radius: 5px;
    }
  }
</style>


<style lang="scss" scoped>
  @import "../assets/style/src/base";
  .content {
    padding: 0 40px 200px;
    .content-title {
      padding: 50px 0 30px;
      border-bottom: 1px solid #ddd;
      font-size: 22px;
      color: #000;

    }
    .pay-app{
      padding-top: 80px;
      height: 550px;
      border-bottom: 1px solid #ddd;
      .app-icon{
        width: 370px;
        float: left;
        height: 100%;
        .app-icon-img{
          width: 300px;
          height: 300px;
        }
      }
      .app-service{
        height: 100%;
        width: auto;
        margin-left: 370px;
        .service-title{
          font-size: 22px;
          color: #000;
        }
        .service-term{
          margin-top: 100px;
          .service-term-desc{
            display: inline-block;
            width: 136px;
            text-align: left;
            font-size: 18px;
            color: #000;
          }
          .service-term-time{
            display: inline-block;
            margin-left: 60px;
          }
        }
        .service-term.pay-way{
          margin-top: 52px;
        }
        .service-term.pay-amount{
          margin-top: 51px;
          color: #000;
          .service-pay-amount{
            padding-left: 50px;
            .amount{
              font-size: 36px;
            }
          }

        }
        .pay{
          margin-top: 80px;

        }
      }

    }
    .shop-detail{
      padding-top: 20px;
      .detail-title{
        font-size: 16px;
        color: #333;
        padding: 4px;
      }
      .shop-content{
        font-size: 14px;
        color: #666;
        p{
          padding:4px;
        }
      }
    }
  }
</style>
