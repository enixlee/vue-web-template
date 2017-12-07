/**
 * Created by Generator.
 * Author: Generator
 * description: 添加
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePaymentAuth20AddMethod = '/sdkmanage/payment/auth20/add';

export const RpcSDKManagePaymentAuth20AddRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户类型
 * @param authenticatePayId string 认证支付2.0编号
 * @param effectiveTime datetime 生效时间
 * @param endTime datetime 结束时间
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePaymentAuth20Add (
  merchantNo,
  authenticatePayId,
  effectiveTime,
  endTime) {
  tc.typeCheckString(authenticatePayId, 1, 16, false);
  tc.typeCheckDateString(effectiveTime, false);
  tc.typeCheckDateString(endTime, false);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(authenticatePayId) && !lodash.isUndefined(authenticatePayId)) {
    params['authenticatePayId'] = authenticatePayId;
  }
  if (!lodash.isNull(effectiveTime) && !lodash.isUndefined(effectiveTime)) {
    params['effectiveTime'] = effectiveTime;
  }
  if (!lodash.isNull(endTime) && !lodash.isUndefined(endTime)) {
    params['endTime'] = endTime;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePaymentAuth20AddMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePaymentAuth20AddMethod, params);
  }
}
