/**
 * Created by Generator.
 * Author: Generator
 * description: 请求短信
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageSmsRequestLoginVerifyCodeWithUserNameMethod = '/sdkmanage/sms/request_login_verify_code_with_username';

export const RpcSDKManageSmsRequestLoginVerifyCodeWithUserNameRpcType = 'system';

/**
 *
 * @param userName string 用户名
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageSmsRequestLoginVerifyCodeWithUserName (
  userName) {
  tc.typeCheckString(userName, 1, 24, false);
  let params = {};
  if (!lodash.isNull(userName) && !lodash.isUndefined(userName)) {
    params['userName'] = userName;
  }
  if (debug.isProduction()) {
    return Rpc.get(RpcSDKManageSmsRequestLoginVerifyCodeWithUserNameMethod, params);
  } else {
    return Rpc.get(RpcSDKManageSmsRequestLoginVerifyCodeWithUserNameMethod, params);
  }
}
