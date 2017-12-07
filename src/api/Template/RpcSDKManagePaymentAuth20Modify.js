/**
 * Created by Generator.
 * Author: Generator
 * description: 修改
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePaymentAuth20ModifyMethod = '/sdkmanage/payment/auth20/modify';

export const RpcSDKManagePaymentAuth20ModifyRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @param authenticatePayId |null string 认证支付2.0编号
 * @param effectiveTime |null datetime 生效时间
 * @param endTime |null datetime 结束时间
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePaymentAuth20Modify (
  merchantNo,
  authenticatePayId = null,
  effectiveTime = null,
  endTime = null) {
  tc.typeCheckString(authenticatePayId, 1, 16, true);
  tc.typeCheckDateString(effectiveTime, true);
  tc.typeCheckDateString(endTime, true);
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
    return Rpc.post(RpcSDKManagePaymentAuth20ModifyMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePaymentAuth20ModifyMethod, params);
  }
}
