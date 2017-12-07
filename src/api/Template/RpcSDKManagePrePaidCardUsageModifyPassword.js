/**
 * Created by Generator.
 * Author: Generator
 * description: 修改交易密码
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePrePaidCardUsageModifyPasswordMethod = '/sdkmanage/prepaidcard/usage/modify_password';

export const RpcSDKManagePrePaidCardUsageModifyPasswordRpcType = 'system';

/**
 *
 * @param prePaidCardId prePaidCardNo 预付卡
 * @param newPassword md5 新的交易密码
 * @param oldPassword md5 旧的交易密码
 * @param verifyCode string 验证码，4位字符
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePrePaidCardUsageModifyPassword (
  prePaidCardId,
  newPassword,
  oldPassword,
  verifyCode) {
  tc.typeCheckMd5(newPassword, false);
  tc.typeCheckMd5(oldPassword, false);
  tc.typeCheckString(verifyCode, 4, 4, false);
  let params = {};
  if (!lodash.isNull(prePaidCardId) && !lodash.isUndefined(prePaidCardId)) {
    params['prePaidCardId'] = prePaidCardId;
  }
  if (!lodash.isNull(newPassword) && !lodash.isUndefined(newPassword)) {
    params['newPassword'] = newPassword;
  }
  if (!lodash.isNull(oldPassword) && !lodash.isUndefined(oldPassword)) {
    params['oldPassword'] = oldPassword;
  }
  if (!lodash.isNull(verifyCode) && !lodash.isUndefined(verifyCode)) {
    params['verifyCode'] = verifyCode;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePrePaidCardUsageModifyPasswordMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePrePaidCardUsageModifyPasswordMethod, params);
  }
}
