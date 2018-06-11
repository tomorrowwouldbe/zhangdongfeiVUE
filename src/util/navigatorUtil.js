
/**
 * navigator帮助类
 */
class navigatorUtil {
    /**
     * 头部信息
     * @type {[type]}
     */
    static userAgent = navigator.userAgent;
   
    /**
     * 是否为ipad
     */
    static isIPad = () => {
      return (navigatorUtil.userAgent.indexOf("iPad") > -1);
    }
   
    /**
     * 是否为iphone
     * @param  {[type]}  userAgent [description]
     * @return {Boolean}           [description]
     */
    static isIPhone = () => {
      return (navigatorUtil.userAgent.indexOf("iPhone") > -1);
    }
   
    /**
     * 是否为ios系统
     * @param  {[type]}  userAgent [description]
     * @return {Boolean}           [description]
     */
   
    static isIOS = () => {
      return navigatorUtil.isIPad(navigatorUtil.userAgent) || navigatorUtil.isIPhone(
        navigatorUtil.userAgent);
    }
   
    /**
     * 是否为Android系统
     * @param  {[type]}  userAgent [description]
     * @return {Boolean}           [description]
     */
    static isAndroid = () => {
      return (navigatorUtil.userAgent.indexOf("Android") > -1) ||
        (navigatorUtil.userAgent.indexOf("Linux") > -1);
    }
   
    /**
     * 判断是否为微信
     */
    static isWeixin = () => {
      return (navigatorUtil.userAgent.indexOf("MicroMessenger") > -1);
    }
}
   