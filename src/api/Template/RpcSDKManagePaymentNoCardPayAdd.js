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

export const RpcSDKManagePaymentNoCardPayAddMethod = '/sdkmanage/payment/no_card_pay/add';

export const RpcSDKManagePaymentNoCardPayAddRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户类型
 * @param noCardPayId string 无卡付id
 * @param effectiveTime datetime 生效时间
 * @param endTime datetime 结束时间
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePaymentNoCardPayAdd (
  merchantNo,
  noCardPayId,
  effectiveTime,
  endTime) {
  tc.typeCheckString(noCardPayId, 1, 16, false);
  tc.typeCheckDateString(effectiveTime, false);
  tc.typeCheckDateString(endTime, false);
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
    return Rpc.post(RpcSDKManagePaymentNoCardPayAddMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePaymentNoCardPayAddMethod, params);
  }
}
