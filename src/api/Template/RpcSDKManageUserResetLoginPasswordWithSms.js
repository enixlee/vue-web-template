/**
 * Created by Generator.
 * Author: Generator
 * description: 重置密码
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageUserResetLoginPasswordWithSmsMethod = '/sdkmanage/user/reset_login_password_with_sms';

export const RpcSDKManageUserResetLoginPasswordWithSmsRpcType = 'system';

/**
 *
 * @param newPassword md5 新密码
 * @param verifyCode string 手机验证码
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageUserResetLoginPasswordWithSms (
  newPassword,
  verifyCode) {
  tc.typeCheckMd5(newPassword, false);
  tc.typeCheckString(verifyCode, 6, 6, false);
  let params = {};
  if (!lodash.isNull(newPassword) && !lodash.isUndefined(newPassword)) {
    params['newPassword'] = newPassword;
  }
  if (!lodash.isNull(verifyCode) && !lodash.isUndefined(verifyCode)) {
    params['verifyCode'] = verifyCode;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageUserResetLoginPasswordWithSmsMethod, params);
  } else {
    return Rpc.get(RpcSDKManageUserResetLoginPasswordWithSmsMethod, params);
  }
}
