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

export const RpcSDKManagePaymentNoCardPayModifyMethod = '/sdkmanage/payment/no_card_pay/modify';

export const RpcSDKManagePaymentNoCardPayModifyRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户类型
 * @param noCardPayId |null string 无卡付id
 * @param effectiveTime |null datetime 生效时间
 * @param endTime |null datetime 结束时间
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePaymentNoCardPayModify (
  merchantNo,
  noCardPayId = null,
  effectiveTime = null,
  endTime = null) {
  tc.typeCheckString(noCardPayId, 1, 16, true);
  tc.typeCheckDateString(effectiveTime, true);
  tc.typeCheckDateString(endTime, true);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(noCardPayId) && !lodash.isUndefined(noCardPayId)) {
    params['noCardPayId'] = noCardPayId;
  }
  if (!lodash.isNull(effectiveTime) && !lodash.isUndefined(effectiveTime)) {
    params['effectiveTime'] = effectiveTime;
  }
  if (!lodash.isNull(endTime) && !lodash.isUndefined(endTime)) {
    params['endTime'] = endTime;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePaymentNoCardPayModifyMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePaymentNoCardPayModifyMethod, params);
  }
}
