<template>
  <div class="purchase-service">
    <UMHeader></UMHeader>
    <div class="content-default-style content">
      <div class="content-title">
        <span class="title-item">1.填写应用基础信息</span>
        <span class="title-item">2.购买应用服务</span>
        <span class="title-item">3.创建应用</span>
      </div>
      <div class="service-items">
        <div class="service-title">
          <span>服务项</span>
        </div>
        <div class="basic-service service-item clearfix">
          <div class="item-left">
            <span>基础服务</span>
          </div>
          <div class="item-right">
            <el-checkbox-group v-model="basicService">
              <el-checkbox label="APP基础信息配置" disabled></el-checkbox>
              <el-checkbox label="商品配置" disabled></el-checkbox>
              <el-checkbox label="订单配置" disabled></el-checkbox>
              <el-checkbox label="支付通道配置" disabled></el-checkbox>
              <el-checkbox label="内置IM配置" disabled></el-checkbox>
              <el-checkbox label="短信模板" disabled></el-checkbox>
              <el-checkbox label="分销" disabled></el-checkbox>
              <el-checkbox label="话费充值" disabled></el-checkbox>
              <el-checkbox label="佣金" disabled></el-checkbox>
            </el-checkbox-group>
          </div>
          <div class="basic-service-desc">
            <span>基础服务为必选项，不可修改</span>
          </div>
        </div>
        <div class="supply-methods service-item clearfix">
          <div class="item-left">
            <span>供销方式</span>
          </div>
          <div class="item-right">
            <div class="custom-shop">
              <el-checkbox label="自有商品销售" v-model="customShop"></el-checkbox>
              <el-radio-group  v-model="customShopRadio">
                <el-radio :label="1" disabled>全网销售</el-radio>
                <el-radio :label="2" disabled>不公开</el-radio>
              </el-radio-group>
            </div>
            <div class="all-net-shop clearfix">
              <el-checkbox label="代售全网商品" v-model="allNetShop" class="all-net-shop-lock"></el-checkbox>
              <el-checkbox-group v-model="allNetShopCheckbox">
                <el-checkbox label="3C数码"></el-checkbox>
                <el-checkbox label="米面粮油"></el-checkbox>
                <el-checkbox label="家具家居"></el-checkbox>
                <el-checkbox label="图书乐器"></el-checkbox>
                <el-checkbox label="汽车用品"></el-checkbox>
                <el-checkbox label="护肤美妆"></el-checkbox>
                <el-checkbox label="鞋帽箱包"></el-checkbox>
                <el-checkbox label="内衣配饰"></el-checkbox>
                <el-checkbox label="服装"></el-checkbox>
                <el-checkbox label="家电"></el-checkbox>
              </el-checkbox-group>
            </div>
            <div></div>
          </div>
        </div>
        <div class="service-term service-item clearfix">
          <div class="item-left">
            <span>服务期限</span>
          </div>
          <div class="item-right">
            <el-radio-group  v-model="serviceTermRadio">
              <el-radio :label="3">3个月</el-radio>
              <el-radio :label="6">6个月</el-radio>
              <el-radio :label="12">1年</el-radio>
              <el-radio :label="36">3年</el-radio>
              <el-radio :label="60">5年</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="add-value-service service-item clearfix">
          <div class="item-left">
            <span>增值服务</span>
          </div>
        </div>
        <div class="add-service-items clearfix">
          <div class="add-service-item">
            <div class="service-item-wrap">
              <div class="service-item-bg"></div>
              <div class="service-item-desc"><span>促销功能</span></div>
            </div>
          </div>
          <div class="add-service-item">
            <div class="service-item-wrap">
              <div class="service-item-bg"></div>
              <div class="service-item-desc"><span>返利</span></div>
            </div>
          </div>
          <div class="add-service-item">
            <div class="service-item-wrap">
            <div class="service-item-bg"></div>
            <div class="service-item-desc"><span>火车票</span></div>
            </div>
          </div>
          <div class="add-service-item">
            <div class="service-item-wrap">
            <div class="service-item-bg"></div>
            <div class="service-item-desc"><span>机票</span></div>
            </div>
          </div>
          <div class="add-service-item">
            <div class="service-item-wrap">
            <div class="service-item-bg"></div>
            <div class="service-item-desc"><span>话费充值</span></div>
            </div>
          </div>
          <div class="add-service-item">
            <div class="service-item-wrap">
            <div class="service-item-bg"></div>
            <div class="service-item-desc"><span>流量充值</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="step-total">
        <div class="total-price"><span>总价：</span><span class="amount">￥59999.00</span></div>
        <router-link to="/payapplication" tag="a">
          <el-button><span>下一步</span></el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import UMHeader from '../components/header/headerre.vue'
  export default {
    name: 'purchaseservice',
    components: {
      UMHeader
    },
    data () {
      return {
        basicService: ['APP基础信息配置', '商品配置', '订单配置', '支付通道配置', '内置IM配置', '短信模板', '分销', '话费充值', '佣金'],
        customShop: false,
        customShopRadio: [],
        allNetShop: true,
        allNetShopCheckbox: ['3C数码', '米面粮油', '家具家居', '图书乐器', '汽车用品', '护肤美妆', '鞋帽箱包', '内衣配饰', '服装', '家电'],
        serviceTermRadio: 3
      }
    }
  }
</script>

<style lang="scss">
  .el-checkbox{
    width: 220px;
    padding: 7px 0;
    font-size: 14px;
    color: #999;
    .el-checkbox__input.is-checked+.el-checkbox__label{
      color: #222;
    }
    .el-checkbox__input+.el-checkbox__label,.el-checkbox__input.is-disabled+.el-checkbox__label{
      color: #999;
    }
  }
  .el-radio{
    font-size: 14px;
    .el-radio__input.is-checked+.el-radio__label{
      color: #222;
    }
    .el-radio__input+.el-radio__label,.el-radio__input.is-disabled+.el-radio__label{
      color: #999;
    }
  }
  .el-checkbox+.el-checkbox{
    margin-left: 0;
  }
  .all-net-shop{
    .el-checkbox-group{
      margin-top: 10px;
      width: 560px;
      padding: 20px;
      display: inline-block;
      border: 1px solid #ddd;
      .el-checkbox{
        width: 100px;
      }
    }
  }
  .step-total{
    .el-button{
      width: 136px;
      height: 50px;
      background-color: #ee451f;
      color: #fff;
      font-size: 14px;
      margin-left: 40px;
    }
  }
</style>



<style lang="scss" scoped>
  @import "../assets/style/src/base";
  .content{
    padding:0 40px 200px;
    .content-title{
      padding: 50px 0 30px ;
      border-bottom: 1px solid #ddd;
      .title-item{
        display: inline-block;
        padding: 0 10px ;
        color: #999;
        font-size: 14px;
      }
      .title-item:nth-child(2){
        font-size: 18px;
        color: #333;
      }
    }
    .service-items{
      .service-title{
        font-size: 18px;
        color: #ee451f;
        padding: 90px 0 20px;
        border-bottom: 1px solid #ddd;
        line-height: 20px;
      }
      .service-item{
        position: relative;
        padding: 40px 0;
        border-bottom: 1px solid #ddd;
        .item-left{
          float: left;
          padding-left: 12px;
          font-size: 18px;
          color: #666;
          width: 136px;
          height: 100%;
        }
        .item-right{
          padding-left: 50px;
          margin-left: 136px;
          height: 100%;
        }
      }
      .basic-service{
        height: 170px;
        .basic-service-desc{
          position: absolute;
          right: 0;
          bottom: 10px;
          font-size: 14px;
          color: #ee451f;
        }
      }
      .supply-methods{
        height: 230px;
        .all-net-shop-lock{
          float: left;
          width: 220px;
        }
      }
      .service-term{
        height: 98px;
        padding: 0;
        .item-left{
          line-height: 98px;
        }
        .item-right{
          padding: 38px 0;
        }
      }
      .add-value-service{
        height: 126px;
        padding: 80px 0 20px;
        .item-left{
          color: #ee451f;
        }
      }
      .add-service-items{
        height: 76px;
        padding: 20px 0;
        .add-service-item{
          float: left;
          width: 166px;
          margin-left: 20.5px;
          border: 1px solid #ddd;
          padding: 5px ;
          cursor: pointer;
          .service-item-wrap{
            margin: 0 auto;
            width: 135px;
          }
          .service-item-bg{
            display: inline-block;
            width: 36px;
            height: 36px;
            vertical-align: middle;
            /*background-color: #0086b3;*/
            background-image: url("../assets/images/img_service.png");
            background-position: 0px -7px;
          }
          .service-item-desc{
            padding-left: 16px;
            display: inline-block;
            vertical-align: middle;
            height: 30px;
            line-height: 30px;
            border-right: 1px solid #ddd;
            font-size: 18px;
            color: #999;
          }
        }
        .add-service-item:nth-child(2){
          .service-item-wrap{
            width: 99px;
          }
          .service-item-bg{
            background-position: -66px -7px;
          }
        }
        .add-service-item:nth-child(3){
          .service-item-wrap{
            width: 116px;
          }
          .service-item-bg{
            background-position: -134px -7px;
          }
        }
        .add-service-item:nth-child(4){
          .service-item-wrap{
            width: 99px;
          }
          .service-item-bg{
            background-position: -203px -7px;
          }
        }
        .add-service-item:nth-child(5){
          .service-item-bg{
            background-position: -271px -7px;
          }
        }
        .add-service-item:nth-child(6){
          .service-item-bg{
            background-position: -337px -7px;
          }
        }
        .add-service-item:last-child{
          .service-item-desc{
            border-right: none;
          }
        }

      }
    }
    .step-total{
      width: 500px;
      margin: 0 auto;
      height: 100px;
      margin-top: 40px;
      .total-price{
        display: inline-block;
        width: 150px;
        font-size: 18px;
        color: #333;
        .amount{
          color: #ee451f;
        }
      }

    }
  }
</style>
