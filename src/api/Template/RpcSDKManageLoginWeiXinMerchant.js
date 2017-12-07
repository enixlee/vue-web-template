/**
 * Created by Generator.
 * Author: Generator
 * description: 获取微信端登录商户管理员的配置
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageLoginWeiXinMerchantMethod = '/sdk_manage/login_weixin_merchant';

export const RpcSDKManageLoginWeiXinMerchantRpcType = 'system';

/**
 *
 * @param userName string 用户名
 * @param password md5 商户登录密码
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageLoginWeiXinMerchant (
  userName,
  password) {
  tc.typeCheckString(userName, 0, 32, false);
  tc.typeCheckMd5(password, false);
  let params = {};
  if (!lodash.isNull(userName) && !lodash.isUndefined(userName)) {
    params['userName'] = userName;
  }
  if (!lodash.isNull(password) && !lodash.isUndefined(password)) {
    params['password'] = password;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageLoginWeiXinMerchantMethod, params);
  } else {
    return Rpc.get(RpcSDKManageLoginWeiXinMerchantMethod, params);
  }
}
