/**
 * Created by Generator.
 * Author: Generator
 * description: 充值交易密码
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePrePaidCardUsageResetPasswordMethod = '/sdkmanage/prepaidcard/usage/reset_password';

export const RpcSDKManagePrePaidCardUsageResetPasswordRpcType = 'system';

/**
 *
 * @param prePaidCardId prePaidCardNo 预付卡
 * @param password md5 新的交易密码
 * @param verifyCode string 验证码，6位数字
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePrePaidCardUsageResetPassword (
  prePaidCardId,
  password,
  verifyCode) {
  tc.typeCheckMd5(password, false);
  tc.typeCheckString(verifyCode, 6, 6, false);
  let params = {};
  if (!lodash.isNull(prePaidCardId) && !lodash.isUndefined(prePaidCardId)) {
    params['prePaidCardId'] = prePaidCardId;
  }
  if (!lodash.isNull(password) && !lodash.isUndefined(password)) {
    params['password'] = password;
  }
  if (!lodash.isNull(verifyCode) && !lodash.isUndefined(verifyCode)) {
    params['verifyCode'] = verifyCode;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePrePaidCardUsageResetPasswordMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePrePaidCardUsageResetPasswordMethod, params);
  }
}
