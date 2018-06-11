//域名
const baseHost = "http://api2.bjiuu.com";
//公共路径
const baseBaseName = "/api/v1/";

//接口地址
let api = {
  //登陆
  login: 'auth/login',
  //发送验证码（随机密码）
  putCode: 'auth/getRandPassword',
  //用户信息查询
  getMemberDetail: 'auth/memberDetail',
};


let config = api;
config.baseHost = baseHost;
config.baseUrl = config.baseHost + baseBaseName;
export default config;
