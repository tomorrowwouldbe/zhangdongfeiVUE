<template>
  <div class="pay-application">
    <UMHeader></UMHeader>
    <div class="content-default-style content">
      <div class="content-title">
        <span class="title-item">1.填写应用基础信息</span>
        <span class="title-item">2.购买应用服务</span>
        <span class="title-item">3.创建应用</span>
      </div>
      <div class="pay-app clearfix">
        <div class="app-icon">
          <div class="app-icon-img"><img src="../assets/images/pexels-photo-541525@2x.png" alt=""></div>
        </div>
        <div class="app-service">
          <div class="service-title"><span>应用服务</span></div>
          <div class="service-term">
            <div class="service-term-desc"><span>服务期限</span></div>
            <div class="service-term-time">
              <el-radio v-model="termTime" label="服务期限">三个月</el-radio>
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
            <el-button @click="jumpPath('/payappsuccess')">支付</el-button>
          </div>

        </div>
      </div>
      <div class="shop-detail">
        <div class="detail-title">
          商品详情
        </div>
        <div class="shop-content">
          <p>基础信息</p>
          <p>商品模块：分类管理；商品显示管理；</p>
          <p>广告模块：应用首页广告管理；</p>
          <p>订单模块：下单；结算；</p>
          <p>佣金模块：提现；</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import UMHeader from '../components/header/headerre.vue'
  export default {
    name: 'payapplication',
    components: {
      UMHeader
    },
    data () {
      return {
        termTime: '服务期限',
        payWay: '支付方式'
      }
    },
    methods: {
      jumpPath (path) {
        this.$router.go(path)
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
  .el-radio__input+.el-radio__label{
    color: #000;
    font-size: 18px;
  }
  .pay{
    .el-button{
      width: 136px;
      height: 40px;
      color: #fff;
      background-color: #ee451f;
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
      .title-item {
        display: inline-block;
        padding: 0 10px;
        color: #999;
        font-size: 14px;
      }
      .title-item:nth-child(2) {
        font-size: 18px;
        color: #333;
      }
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
          font-size: 18px;
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
