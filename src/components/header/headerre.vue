<template>
  <div class="header">
    <div class="header-wrapper">
      <div class="logo"><img src="../../assets/images/home/logo-black.png" class="block" alt=""></div>
      <div class="login">
        <div class="head-img"></div>
        <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              aiyouyouadmin<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="clearfix">
                退出账号
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 're_header',
    components: {

    },
    methods: {

    },
    data () {
      return {
      }
    }
  }
</script>
<style lang="scss">
  .el-dropdown-link{
    display: inline-block;
    color: #333;
    .el-icon-caret-bottom{
      display: inline-block;
      vertical-align: middle;
      margin-left: 8px;
      width: 0;
      height: 0;
      border-left:8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 10px solid #d7d7d7;
    }
    .el-icon-caret-bottom:before{
      content: '';
    }
  }
  .el-dropdown-menu{
    top: 75px !important;
    left: 1380px !important;
    padding: 10px 20px !important;
    .el-dropdown-menu__item{
      width: 150px !important;
      .mark{
        display: inline-block;
      }
    }
  }
</style>
<style lang="scss" scoped>
  @import "../../assets/style/src/base";
  .header{
    width: 100%;
    height: 98px;
    padding: 10px 0;
    background-color:#fff;
    min-width: 768px;
    border-bottom: 1px solid #d7d7d7;
  }
  .header-wrapper{
    height: 100%;
    margin: 0 auto;
    position: relative;
    width: $content-width;
  }
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
  .logo{
    float: left;
    height: 100%;
    @include box-center-Y;
    @include display-box
  }
  .login{
    cursor: pointer;
    height: 100%;
    float: right;
    @include box-center-Y;
    @include display-box;
    .head-img{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #d7d7d7;
      margin-right: 20px;
    }
    .log{
      border: none;
      color: #fff;
      background-color: transparent;
    }
    .reg{
      background-color: transparent;
      color: #fff;
      margin-left: 40px;
      padding: 7px 14px;
      border: 1px solid #fff;
      border-radius: 5px;
    }
  }

</style>

