/**
 * Created by Generator.
 * Author: Generator
 * description: 请求网站登录验证码
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageRequestVerifyMethod = '/sdkmanage/request_verify_code';

export const RpcSDKManageRequestVerifyRpcType = 'system';

/**
 *
 * @param verifyType int 验证码类型1:登录2：修改会员支付密码3:修改预付卡支付密码
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageRequestVerify (
  verifyType) {
  tc.typeCheckChoice(verifyType, [1, 2, 3], false);
  let params = {};
  if (!lodash.isNull(verifyType) && !lodash.isUndefined(verifyType)) {
    params['verifyType'] = verifyType;
  }
  if (debug.isProduction()) {
    return Rpc.get(RpcSDKManageRequestVerifyMethod, params);
  } else {
    return Rpc.get(RpcSDKManageRequestVerifyMethod, params);
  }
}
