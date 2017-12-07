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

export const RpcSDKManageSmsRequestVerifyMethod = '/sdkmanage/sms/request_verify';

export const RpcSDKManageSmsRequestVerifyRpcType = 'system';

/**
 *
 * @param cellphone cellphone 接收方手机号
 * @param verifyType int 验证码类型1:重置卡支付密码2:解绑预付卡3:重置会员支付密码,4:app登录,5:重置登录密码
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageSmsRequestVerify (
  cellphone,
  verifyType) {
  tc.typeCheckCellphone(cellphone, false);
  tc.typeCheckChoice(verifyType, [1, 2, 3, 4, 5], false);
  let params = {};
  if (!lodash.isNull(cellphone) && !lodash.isUndefined(cellphone)) {
    params['cellphone'] = cellphone;
  }
  if (!lodash.isNull(verifyType) && !lodash.isUndefined(verifyType)) {
    params['verifyType'] = verifyType;
  }
  if (debug.isProduction()) {
    return Rpc.get(RpcSDKManageSmsRequestVerifyMethod, params);
  } else {
    return Rpc.get(RpcSDKManageSmsRequestVerifyMethod, params);
  }
}
