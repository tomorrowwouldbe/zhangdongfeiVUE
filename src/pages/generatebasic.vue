<template>
  <div class="generate-basic">
    <UMHeader></UMHeader>
    <div class="content-default-style content">
      <div class="content-title">
        <span class="title-item">1.填写应用基础信息</span>
        <span class="title-item">2.购买应用服务</span>
        <span class="title-item">3.创建应用</span>
      </div>
      <div class="content-container">
        <div class="app-name">
          <input type="text" name="app-name" placeholder="请输入APP名称...">
        </div>
        <div class="app-name-limit">
          <span class="a-name-text">APP名称</span>
          <span class="a-name-desc">只允许使用中文、英文（区分大小写）、数字和下划线</span>
        </div>
        <div class="app-img clearfix">
          <div class="app-img-icon">
            <div class="img-icon">
              <img src="../assets/images/icon_big@2x.png"  class="img-icon-img" alt="">
              <div class="change-icon" @click="openChangeIcon">更换图标</div>
            </div>
            <div class="img-icon-text">APP图标</div>
            <div class="img-icon-desc">1024*1024尺寸PNG格式</div>
          </div>
          <div class="app-img-splash">
            <div class="img-splash-index">
              <img src="../assets/images/splash.png" width="236" height="424" alt="">
              <div class="change-start" @click="openChangeStart">更换启动图</div>
            </div>
            <div class="img-splash-start">
              <div class="start-text">APP启动图</div>
              <div class="start-desc">1080*1920尺寸PNG格式</div>
            </div>
          </div>
        </div>
        <div class="step">
          <div class="step-operate">
            <el-button class="prev-button">上一步</el-button>
            <router-link to="/purchaseservice" tag="a">
              <el-button class="next-button">下一步</el-button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-show="isChangeIcon" class="changeIconScreen">
      <div class="change-content">
        <div class="change-title">
          <span>应用图标设置</span>
         <img src="../assets/images/guanbi@2x.png" class="close" @click="closeChangeIcon">
        </div>
        <div class="change-container clearfix">
          <div class="change-left">
            <div class="c-img-text">图标预览</div>
            <div class="c-img-icon"><img class="c-img-icon-img" src="../assets/images/icon_big@2x.png" alt=""></div>
          </div>
          <div class="change-right clearfix">
            <div class="select-left"><span>设置图标方式为</span></div>
            <div class="select-right">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change="handleChange">
                <el-button size="small" type="primary">自定义上传</el-button>
                <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
              </el-upload>
            </div>
          </div>
        </div>
        <div class="change-operate">
          <div class="btn-operate">
            <el-button class="cancel-button" @click="closeChangeIcon">取消</el-button>
            <el-button class="sure-button" @click="closeChangeIcon">确定</el-button>
          </div>
        </div>
      </div>
    </div>
    <div v-show="isChangeStart" class="changeStartScreen">
      <div class="change-content">
        <div class="change-title">
          <span>启动图设置</span>
          <img src="../assets/images/guanbi@2x.png" class="close" @click="closeChangeStart">
        </div>
        <div class="change-container clearfix">
          <div class="change-left">
            <div class="c-img-text">启动图预览</div>
            <div class="c-img-icon"><img class="c-img-icon-img" src="../assets/images/splash.png" alt=""></div>
          </div>
          <div class="change-right">
            <div class="set-start-img">
              <div class="set-left">设置启动图</div>
              <div class="set-start-right">
                <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
                  <el-tab-pane label="选择默认图" name="first">
                    <div class="start-img clearfix">
                      <div class="set-left">启动画面</div>
                      <div class="start-img-right set-right clearfix">
                        <div class="start-img-item" v-for="index in startImgsIndex">
                          <img class="img-item-img" src="../assets/images/qidongye/qidongye_1.jpg" alt="">
                        </div>
                      </div>
                    </div>
                    <div class="copy-info">
                      <div class="set-left">版权信息</div>
                      <div class="copy-info-right set-right">
                        <el-checkbox v-model="checked">开启</el-checkbox>
                      </div>
                    </div>
                    <div class="copy-info-text">
                      <div class="set-left">版权文字内容</div>
                      <div class="copy-text-right set-right">
                        <input type="text" placeholder="请输入版权信息">
                      </div>
                    </div>
                    <div class="copy-info-color">
                      <div class="set-left">版权文字颜色</div>
                      <div class="copy-color-right set-right">
                        <el-color-picker v-model="colorDefault" show-alpha></el-color-picker>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="自定义上传" name="second" class="custom-set">
                    <div class="start-img clearfix">
                      <div class="set-left">启动画面</div>
                      <div class="start-img-right set-right clearfix">
                        <div class="start-img-item">
                          <img class="img-item-img" src="../assets/images/splash.png" alt="">
                        </div>
                        <div class="iphone-android">
                          <el-button>苹果手机</el-button>
                          <el-button>安卓手机</el-button>
                        </div>
                      </div>
                    </div>
                    <div class="copy-info clearfix">
                      <div class="set-left">版权信息</div>
                      <div class="copy-info-right set-right">
                        <el-checkbox v-model="checked">开启</el-checkbox>
                      </div>
                    </div>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </div>

          </div>
        </div>
        <div class="change-operate">
          <div class="btn-operate">
            <el-button class="cancel-button" @click="closeChangeStart">取消</el-button>
            <el-button class="sure-button" @click="closeChangeStart">确定</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import UMHeader from '../components/header/headerre.vue'
  export default {
    name: 'generatebasic',
    components: {
      UMHeader
    },
    data () {
      return {
        isChangeIcon: false,
        isChangeStart: false,
        startImgsIndex: [1, 2, 3, 4, 5],
        checked: false,
        colorDefault: 'rgba(110,110,110)',
        activeName2: 'first'
      }
    },
    methods: {
      openChangeIcon () {
        this.isChangeIcon = true
      },
      closeChangeIcon () {
        this.isChangeIcon = false
      },
      handleChange (file, fileList) {
        this.fileList3 = fileList.slice(-3)
      },
      openChangeStart () {
        this.isChangeStart = true
      },
      closeChangeStart () {
        this.isChangeStart = false
      },
      handleClick (tab, event) {
        console.log(tab, event)
      }
    }
  }
</script>

<style lang="scss">
  .el-button{
    width: 136px;
    height: 40px;
  }
  .el-button.prev-button{
    margin-left: 49px;
  }
  .el-button.next-button,.sure-button{
    background-color: #ee451f;
    color: #fff;
    margin-left: 30px;
  }
  .el-button--primary{
    width: 126px;
    background-color: #fff;
    border-color: #41cfc1;
    color: #41cfc1;
  }
  .default-select,.custom-select{
    border-bottom: 1px solid #ddd;
    color: #333;
  }
  .el-color-picker__trigger{
    border: none;
  }
  .el-icon-caret-bottom:before{
    content: '';
  }
  .el-tabs__header{
    border-bottom: none;
  }
  .iphone-android{
    margin-left: 228px;
    margin-top: 210px;
    width: 200px;
    .el-button{
      color: #333;
      border-color: #d7d7d7;
      width: 126px;
      display: block;
      margin-top: 26px;
    }
    .el-button+.el-button{
      margin-left: 0;
    }

  }
</style>

<style lang="scss" scoped>
  @import "../assets/style/src/base";
  .content{
    padding:0 40px 200px;
  }
  .content-title{
    padding: 50px 0 30px ;
    border-bottom: 1px solid #ddd;
    .title-item{
      display: inline-block;
      padding: 0 10px ;
      color: #999;
      font-size: 14px;
    }
    .title-item:first-child{
      font-size: 18px;
      color: #333;
    }
  }
  .content-container{
    width: 100%;
    .app-name{
      width: 400px;
      height: 60px;
      margin: 0 auto;
      margin-top: 40px;
      border: 1px solid #d7d7d7;
      text-align: center;
      line-height: 60px;
      input[name="app-name"]{
        outline: none;
        border: none;
        height: 40px;
        width: 60%;
        font-size: 20px;
        text-align: center;
      }
      input::placeholder{
        color: #cecece;
        font-size: 20px;
        text-align: center;
      }
    }
    .app-name-limit{
      margin: 0 auto;
      text-align: center;
      font-size: 12px;
      color: #acacac;
      padding: 20px 0;
      .a-name-text{
        display: inline-block;
        padding-right: 20px;
        color: #666;
      }
    }
    .app-img{
      width: 400px;
      margin: 20px auto;
      .app-img-icon{
        float: left;
        text-align: center;
        width: 118px;
        height: 424px;
        .img-icon{
          position: relative;
          cursor: pointer;
          height: 118px;
          width: 100%;
          border-radius: 22px;
          .img-icon-img{
            width: 118px;
            height: 118px;
            border-radius: 22px;
          }
          .change-icon{
            @include animate-time;
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 0;
            text-align: center;
            background-color: #41CEC6;
            color: #fefefe;
            border-bottom-left-radius: 22px;
            border-bottom-right-radius: 22px;
            font-size: 14px;
            line-height: 32px;
            overflow: hidden;
          }
        }
        .img-icon:hover .change-icon{
          height: 32px;
        }
        .img-icon-text{
          color: #6e6e6e;
          font-size: 14px;
          width: 100%;
          padding: 20px 0 14px;
        }
        .img-icon-desc{
          width: 100%;
          font-size: 12px;
          color: #acacac;
        }
      }
      .app-img-splash{
        width: 236px;
        margin-left: 163px;
        .img-splash-index{
          position: relative;
          width: 100%;
          height: 424px;
          background-color: #999999;
          border-radius: 4px;
          cursor: pointer;
          .change-start{
            @include animate-time;
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 0;
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
            text-align: center;
            background-color: #41CEC6;
            color: #fefefe;
            line-height: 32px;
          }
        }
        .img-splash-index:hover .change-start{
          height: 32px;
        }
        .img-splash-start{
          text-align: center;
          font-size: 14px;
          color: #666;
          .start-text{
            padding: 20px 0 14px;
          }
          .start-desc{
            font-size: 12px;
            color: #acacac;
          }
        }
      }

    }
    .step{
      margin-top: 80px;
      width: 100%;
      .step-operate{
        margin: 0 auto;
        width: 400px;
      }
    }
  }
  .changeIconScreen{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    .change-content{
      background-color: #fff;
      width: 980px;
      height: 660px;
      position: absolute;
      top: 10%;
      left: 50%;
      margin-left: -490px;
      border-radius: 10px;
      .change-title{
        position: relative;
        padding: 30px 0 30px 40px ;
        border-bottom: 1px solid #d7d7d7;
        font-size: 20px;
        color: #333;
        text-align: left;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        .close{
          position: absolute;
          right: 40px;
          top: 30px;
          cursor: pointer;
        }
      }
      .change-container{
        position: relative;
        padding: 40px 0;
        height: 500px;
        border-bottom: 1px solid #d7d7d7;
        .change-left{
          float: left;
          margin: 0 40px;
          width: 183px;
          height: 100%;
          border-right: 1px dashed #ddd;
          .c-img-text{
            padding-bottom: 20px;
            font-size: 14px;
            color: #6e6e6e;
          }
          .c-img-icon{
            width: 103px;
            height: 103px;
            border-radius:10px;
            margin: 0 auto;
            .c-img-icon-img{
              width: 100%;
              height: 100%;
              border-radius: 10px;
            }
          }
        }
        .change-right{
          height: 420px;
          width: 737px;
          margin-left: 222px;
          .select-left{
            height: 80%;
            margin-top: 10px;
            float: left;
            padding: 0 40px;
            font-size: 14px;
            color: #6e6e6e;
          }
          .select-right{
            text-align: left;
            height: 100%;
            width: 400px;
            margin-left: 220px;
          }
        }
      }
      .change-operate{
        width: 100%;
        .btn-operate{
          width: 400px;
          margin: 0 auto;
          margin-top: 15px;
        }
      }
    }
  }
  .changeStartScreen{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    .change-content{
      background-color: #fff;
      width: 980px;
      height: 660px;
      position: absolute;
      top: 10%;
      left: 50%;
      margin-left: -490px;
      border-radius: 10px;
      .change-title{
        position: relative;
        padding: 30px 0 30px 40px ;
        border-bottom: 1px solid #d7d7d7;
        font-size: 20px;
        color: #333;
        text-align: left;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        .close{
          position: absolute;
          right: 40px;
          top: 30px;
          cursor: pointer;
        }
      }
      .change-container{
        position: relative;
        padding: 40px 0;
        height: 500px;
        border-bottom: 1px solid #d7d7d7;
        .change-left{
          float: left;
          margin: 0 40px;
          width: 225px;
          height: 100%;
          border-right: 1px dashed #ddd;
          .c-img-text{
            padding-bottom: 20px;
            font-size: 14px;
            color: #6e6e6e;
          }
          .c-img-icon{
            width: 145px;
            height: 258px;
            border-radius: 10px;
            margin: 0 auto;
            .c-img-icon-img{
              width: 100%;
              height: 100%;
              border-radius: 10px;
            }
          }
        }
        .change-right{
          height: 420px;
          width: 700px;
          margin-left: 270px;
          .set-start-img{
            height: 45px;
            width: 100%;
            .set-start-right{
              width: auto;
              height: 42px;
              text-align: left;
            }
          }
          .start-img{
            width: 100%;
            height: 161px;
            margin-top: 20px;
            .start-img-right{
              height: 100%;
              .start-img-item{
                cursor: pointer;
                float: left;
                width: 94px;
                height: 159px;
                padding: 5px;
                margin-right: 5px;
                border: 1px solid #d7d7d7;
                border-radius: 5px;
                .img-item-img{
                  width: 100%;
                  height: 100%;
                }
              }
              .start-img-item:hover{
                border-color: #41cfc7;
              }
            }

          }
          .copy-info{
            text-align: left;
            height: 40px;
            vertical-align: middle;
            .copy-info-right{
              padding-top: 10px;
            }
          }
          .copy-info-text{
            padding-top: 20px;
            height: 60px;
            .copy-text-right{
              height: 40px;
              input{
                height: 40px;
                border: none;
                outline: none;
              }
              input::placeholder{
                color: #d7d7d7;
                font-size: 14px;
                padding-left: 15px;
              }
            }
          }
          .copy-info-color{
            padding-top: 20px;
            height: 60px;
            .copy-color-right{
              height: 40px;
            }
          }
          .custom-set{
            .start-img{
              height: 318px;
              .start-img-right{
                .start-img-item{
                  width: 188px;
                  height: 318px;
                  padding: 10px;
                }
              }
            }
            .copy-info{
              margin-top: 10px;
            }
          }
        }
      }
      .change-operate{
        width: 100%;
        .btn-operate{
          width: 400px;
          margin: 0 auto;
          margin-top: 15px;
        }
      }
    }
  }
  .set-left{
    float: left;
    width: 150px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #6e6e6e;
  }
  .set-right{
    text-align: left;
    margin-left: 150px;
  }
</style>


