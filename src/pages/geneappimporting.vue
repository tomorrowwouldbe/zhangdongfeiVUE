<template>
  <div class="geneapp-importing">
    <UMHeader></UMHeader>
    <div class="content-default-style content">
      <div class="content-title">
        <span class="title-item">1.填写应用基础信息</span>
        <span class="title-item">2.购买应用服务</span>
        <span class="title-item">3.创建应用</span>
      </div>
      <div class="app-importing">
        <div class="importing-title">
          <span>APP示例正在导入中，请稍等片刻...</span>
        </div>
        <div class="importing-content">
          <div class="importing-left">
            <div class="left-item"></div>
            <div class="left-item"></div>
            <div class="left-item"></div>
            <div class="left-item"></div>
          </div>
          <div class="importing-middle">
            <div class="loader">
              <div class="loader-inner ball-triangle-path">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          <div class="importing-right">
            <div class="right-bg"></div>
          </div>
        </div>
      </div>
      <div class="app-imported">
        <div class="imported-title">
          <span>APP示例导入成功</span>
        </div>
        <div class="imported-content">
          <div class="imported-content-bg"></div>
        </div>
        <div class="sure">
          <el-button><span>确定</span></el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import UMHeader from '../components/header/headerre.vue'
  export default {
    name: 'geneappimporting',
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
  .sure{
    .el-button{
      width: 136px;
      height: 40px;
      background-color: #ee451f;
      color: #fff;
    }
  }
</style>

<style lang="scss" scoped>
  @import "../assets/style/src/base";
  .content {
    padding: 0 40px 100px;
    .content-title {
      padding: 50px 0 30px;
      border-bottom: 1px solid #ddd;
      .title-item {
        display: inline-block;
        padding: 0 10px;
        color: #999;
        font-size: 14px;
      }
      .title-item:nth-child(3) {
        font-size: 18px;
        color: #333;
      }
    }
    .app-importing{
      /*display: none;*/
      padding-top: 80px;
      .importing-title{
        text-align: center;
        color: #333;
        font-size: 30px;
      }
      .importing-content{
        padding-top: 100px;
        height: 520px;
        width: 900px;
        margin: 0 auto;
        .importing-left{
          position: relative;
          display: inline-block;
          width: 260px;
          height: 100%;
          border: 1px dashed #ddd;
          .left-item{
            position: absolute;
            width: 192px;
            height: 295px;
            bottom: 100px;
            right: -20px;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
            -webkit-animation: rtlb 3s 5s infinite cubic-bezier(0.21, 0.53, 0.56, 0.8);
            animation: rtlb 3s 5s infinite cubic-bezier(0.21, 0.53, 0.56, 0.8);
          }
          .left-item:nth-child(1){
            z-index: 100000;
            -webkit-animation: none;
            animation: none;
          }
          @for $i from 1 through 4{
            .left-item:nth-child(#{$i}){
              -webkit-transform: translate(#{-$i*20}px,#{$i*20}px);
              transform: translate(#{-$i*20}px,#{$i*20}px);
              background-image: url("../assets/images/iphone_0#{$i}.png");
              background-size: 192px auto;

            }
          }
          @for $i from 2 through 4{
            .left-item:nth-child(#{$i}){
              -webkit-animation-delay: #{-$i*0.5}s;
              animation-delay: #{-$i*0.5}s;
            }
          }
        }
        .importing-middle{
          display: inline-block;
          width: 370px;
          height: 100%;
          position: relative;
          .loader{
            width: 100%;
            height: 200px;
            .loader-inner{
              width: 80px;
              height: 80px;
              margin: 0 auto;
              margin-top: 170px;
            }
          }
        }
        .importing-right{
          display: inline-block;
          width: 260px;
          height: 100%;
          .right-bg{
            width: 100%;
            height: 100%;
            background-image: url("../assets/images/iphone_img.png");
            background-size: 260px auto;
          }
        }
      }
    }
    .app-imported{
      display: none;
      .imported-title{
        text-align: center;
        padding-top: 100px;
        font-size: 30px;
        color: #333;
      }
      .imported-content{
        .imported-content-bg{
          width: 307px;
          height: 194px;
          background-image: url("../assets/images/daoruchenggong_nor@2x.png");
          background-size: 307px auto;
          margin: 0 auto;
          margin-top: 60px;
        }
      }
      .sure{
        padding-top: 170px;
        text-align: center;
      }
    }
  }


  @keyframes rtlb {
    0%{
      -webkit-transform: translate(-20px,40px);
      transform: translate(-80px,20px);
    }
    25%{
      -webkit-transform: translate(20px,20px);
      transform: translate(-60px,30px);
    }
    50%{
      -webkit-transform: translate(40px,40px);
      transform: translate(-40px,20px);
    }
    75%{
      -webkit-transform: translate(-20px,60px);
      transform: translate(-20px,60px);
    }
    100%{
      -webkit-transform: translate(-20px,40px);
      transform: translate(-80px,20px);
    }
  }

  @-webkit-keyframes ball-triangle-path-1 {
    33% {
      -webkit-transform: translate(25px, -50px);
      transform: translate(25px, -50px); }
    66% {
      -webkit-transform: translate(50px, 0px);
      transform: translate(50px, 0px); }
    100% {
      -webkit-transform: translate(0px, 0px);
      transform: translate(0px, 0px); } }

  @keyframes ball-triangle-path-1 {
    33% {
      -webkit-transform: translate(25px, -50px);
      transform: translate(25px, -50px); }
    66% {
      -webkit-transform: translate(50px, 0px);
      transform: translate(50px, 0px); }
    100% {
      -webkit-transform: translate(0px, 0px);
      transform: translate(0px, 0px); } }

  @-webkit-keyframes ball-triangle-path-2 {
    33% {
      -webkit-transform: translate(25px, 50px);
      transform: translate(25px, 50px); }
    66% {
      -webkit-transform: translate(-25px, 50px);
      transform: translate(-25px, 50px); }
    100% {
      -webkit-transform: translate(0px, 0px);
      transform: translate(0px, 0px); } }

  @keyframes ball-triangle-path-2 {
    33% {
      -webkit-transform: translate(25px, 50px);
      transform: translate(25px, 50px); }
    66% {
      -webkit-transform: translate(-25px, 50px);
      transform: translate(-25px, 50px); }
    100% {
      -webkit-transform: translate(0px, 0px);
      transform: translate(0px, 0px); } }

  @-webkit-keyframes ball-triangle-path-3 {
    33% {
      -webkit-transform: translate(-50px, 0px);
      transform: translate(-50px, 0px); }
    66% {
      -webkit-transform: translate(-25px, -50px);
      transform: translate(-25px, -50px); }
    100% {
      -webkit-transform: translate(0px, 0px);
      transform: translate(0px, 0px); } }

  @keyframes ball-triangle-path-3 {
    33% {
      -webkit-transform: translate(-50px, 0px);
      transform: translate(-50px, 0px); }
    66% {
      -webkit-transform: translate(-25px, -50px);
      transform: translate(-25px, -50px); }
    100% {
      -webkit-transform: translate(0px, 0px);
      transform: translate(0px, 0px); } }

  .ball-triangle-path {
    position: relative;
    -webkit-transform: translate(0,0);
    transform: translate(0,0); }
  .ball-triangle-path > div:nth-child(1) {
    -webkit-animation-name: ball-triangle-path-1;
    animation-name: ball-triangle-path-1;
    -webkit-animation-delay: 0;
    animation-delay: 0;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite; }
  .ball-triangle-path > div:nth-child(2) {
    -webkit-animation-name: ball-triangle-path-2;
    animation-name: ball-triangle-path-2;
    -webkit-animation-delay: 0;
    animation-delay: 0;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite; }
  .ball-triangle-path > div:nth-child(3) {
    -webkit-animation-name: ball-triangle-path-3;
    animation-name: ball-triangle-path-3;
    -webkit-animation-delay: 0;
    animation-delay: 0;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite; }
  .ball-triangle-path > div {
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    border: 4px solid #EE686C; }
  .ball-triangle-path > div:nth-of-type(1) {
    top: 50px; }
  .ball-triangle-path > div:nth-of-type(2) {
    left: 25px; }
  .ball-triangle-path > div:nth-of-type(3) {
    top: 50px;
    left: 50px; }

</style>
