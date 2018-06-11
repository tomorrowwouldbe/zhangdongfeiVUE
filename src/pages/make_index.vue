<template>
  <div class="make-index">
    <div class="index-content clearfix">
      <div class="navlist"></div>
      <div class="content">
        <div class="content-title">
          <UMHeader></UMHeader>
        </div>
        <div class="content-con">
          <div class="app-about clearfix">
            <div class="app-info">
              <div class="app-inst">
                <div class="app-icon">
                </div>
                <div class="app-desc">
                  <div class="app-name">APP名称</div>
                  <div class="app-edit">编辑更多APP信息</div>
                  <div class="app-jieshao">简介描述：暂无简介描述</div>
                  <div class="app-banquan">版权信息：暂无版权信息</div>
                  <div class="app-create">2017-09-22 11:46</div>
                </div>
              </div>
              <el-button class="app-store-wei">AppStore未上架</el-button>
            </div>
            <div class="app-pack">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import UMHeader from '../components/header/headerre.vue'
  export default {
    name: 'makeindex',
    components: {
      UMHeader
    },
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>
<style lang="scss">
  .el-dropdown-menu{
    left: 1560px !important;
  }
  .el-button{
    color: #333;
    font-size: 14px;
    background-color: #fff;
    border-color: #ddd;
  }
  .el-button:hover,.el-button:focus{
    border-color: #ddd;
    color: #333;
  }
</style>
<style lang="scss" scoped>
  .index-content{
    width: 100%;
    .navlist{
      float: left;
      width: 180px;
      height: 1000px;
      /*background-color: darkslategray;*/
      background-image: url("../assets/images/leftbar_bg.png");
    }
    .content{
      width: calc(100% - 180px);
      width: -webkit-calc(100% - 180px);
      margin-left: 180px;
      .content-title{
        position: fixed;
        height: 98px;
        width: 100%;
        background-color: #fff;
        z-index: 10;
      }
      .content-con{
        width: 100%;
        padding-top: 118px;
      }
      .app-about{
        height: 522px;
        width: 1670px;
        .app-info{
          position: relative;
          padding: 60px 40px 0;
          height: 100%;
          float: left;
          width: 1000px;
          .app-icon{
            display: inline-block;
            vertical-align: middle;
            width: 180px;
            height: 180px;
            background-color: #63a35c;
            border-radius: 22px;
          }
          .app-desc{
            display: inline-block;
            padding-left: 40px;
            color: #666;
            font-size: 14px;
            vertical-align: middle;
            .app-name{
              color: #333333;
              font-size: 18px;
            }
            .app-edit{
              color: #333;
              padding-bottom: 40px;
            }
            .app-create{
              padding-top: 20px;
            }
          }
          .app-store-wei{
            position: absolute;
            right: 40px;
            top: 80px;
          }
        }
        .app-pack{
          padding: 60px 40px 0;
          height: 100%;
          width: auto;
          margin-left: 1000px;
        }

      }
    }
  }
</style>
