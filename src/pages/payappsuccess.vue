<template>
  <div class="pay-app-success">
    <UMHeader></UMHeader>
    <div class="content-default-style content">
      <div class="content-title">
        <span class="title-item">1.填写应用基础信息</span>
        <span class="title-item">2.购买应用服务</span>
        <span class="title-item">3.创建应用</span>
      </div>
      <div class="pay-app">
        <div class="pay-success-icon">
          <!--<img src="" alt="">-->
        </div>
        <p>亲爱的用户，您已成功付款￥598888.00</p>
        <el-button><span>创建应用</span></el-button>
      </div>
    </div>
  </div>
</template>
<script>
  import UMHeader from '../components/header/headerre.vue'
  export default {
    name: 'payappsuccess',
    components: {
      UMHeader
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss">
  .pay-app{
    .el-button{
      margin-top: 70px;
      width: 136px;
      height: 40px;
      color: #fff;
      background-color: #ee451f;
      border-radius: 5px;
    }
    .el-button:hover{
      border-color:  #ee451f;
    }
  }
</style>


<style lang="scss" scoped>
  @import "../assets/style/src/base";
  .content {
    padding: 0 40px 0;
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
      text-align: center;
      .pay-success-icon{
        width: 80px;
        height: 80px;
        margin: 0 auto;
        margin-top: 66px;
        background-image: url("../assets/images/pprompt-icon.png");
        background-position: 0 0;

      }
      p{
        margin-top: 80px;
        font-size: 18px;
        color: #222;
      }
    }
  }
</style>
