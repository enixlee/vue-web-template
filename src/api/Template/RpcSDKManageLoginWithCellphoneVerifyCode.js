/**
 * Created by Generator.
 * Author: Generator
 * description: 验证码登录
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageLoginWithCellphoneVerifyCodeMethod = '/sdkmanage/login_with_cellphone_verifycode';

export const RpcSDKManageLoginWithCellphoneVerifyCodeRpcType = 'system';

/**
 *
 * @param userName string 用户名
 * @param password md5 登录密码
 * @param verifyCode number_verify_code 数字验证码
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageLoginWithCellphoneVerifyCode (
  userName,
  password,
  verifyCode) {
  tc.typeCheckString(userName, 0, 32, false);
  tc.typeCheckMd5(password, false);
  let params = {};
  if (!lodash.isNull(userName) && !lodash.isUndefined(userName)) {
    params['userName'] = userName;
  }
  if (!lodash.isNull(password) && !lodash.isUndefined(password)) {
    params['password'] = password;
  }
  if (!lodash.isNull(verifyCode) && !lodash.isUndefined(verifyCode)) {
    params['verifyCode'] = verifyCode;
  }
  if (debug.isProduction()) {
    return Rpc.get(RpcSDKManageLoginWithCellphoneVerifyCodeMethod, params);
  } else {
    return Rpc.get(RpcSDKManageLoginWithCellphoneVerifyCodeMethod, params);
  }
}
