/**
 * Created by Generator.
 * Author: Generator
 * description: 解绑/去除预付卡绑定状态/解除后,预付卡还在卡包中
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePrePaidCardUsageUnBindMethod = '/sdkmanage/prepaidcard/usage/unbind';

export const RpcSDKManagePrePaidCardUsageUnBindRpcType = 'system';

/**
 *
 * @param prePaidCardId prePaidCardNo 预付卡
 * @param verifyCode string 验证码，6位数字
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePrePaidCardUsageUnBind (
  prePaidCardId,
  verifyCode) {
  tc.typeCheckString(verifyCode, 6, 6, false);
  let params = {};
  if (!lodash.isNull(prePaidCardId) && !lodash.isUndefined(prePaidCardId)) {
    params['prePaidCardId'] = prePaidCardId;
  }
  if (!lodash.isNull(verifyCode) && !lodash.isUndefined(verifyCode)) {
    params['verifyCode'] = verifyCode;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePrePaidCardUsageUnBindMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePrePaidCardUsageUnBindMethod, params);
  }
}
