/**
 * Created by iuu on 17-9-20.
 */
let C = {}
//手机验证正则
C.phoneReg = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
//邮箱验证正则
C.emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
//安全码验证正则
C.selfNumberReg = /^[0-9a-zA-Z]{8,16}$/;
C.back = function () {
  window.history.back(-1);
}
export default C;
