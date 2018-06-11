<template>
  <div class="header">
    <div class="header-wrapper">
      <div class="logo"><img src="../../assets/images/home/logo_white@2x.png" class="block" alt=""></div>
      <div class="login">
        <router-link
          to="/login"
          tag="div"
        >
          <el-button class="log">登录</el-button>
        </router-link>
        <router-link
          to="/register"
          tag="div"
        >
          <el-button class="reg">注册</el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'um_header',
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
<style lang="scss" scoped>
  @import "../../assets/style/src/base";
  .header{
    width: 100%;
    height: 98px;
    padding: 10px 0;
    background-color: #45494A;
    min-width: 768px;
  }
  .header-wrapper{
    height: 100%;
    margin: 0 auto;
    position: relative;
    width: $content-width;
  }
  .logo{
    float: left;
    height: 100%;
    @include box-center-Y;
    @include display-box
  }
  .logo{

  }
  .login{
    height: 100%;
    float: right;
    @include box-center-Y;
    @include display-box;
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

