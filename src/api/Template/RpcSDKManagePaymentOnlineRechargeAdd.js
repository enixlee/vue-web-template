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

export const RpcSDKManagePaymentOnlineRechargeAddMethod = '/sdkmanage/payment/online_recharge/add';

export const RpcSDKManagePaymentOnlineRechargeAddRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @param quota bigint 配额，钱，分
 * @param effectiveTime datetime 生效时间
 * @param endTime datetime 结束时间
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePaymentOnlineRechargeAdd (
  merchantNo,
  quota,
  effectiveTime,
  endTime) {
  tc.typeCheckDateString(effectiveTime, false);
  tc.typeCheckDateString(endTime, false);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(quota) && !lodash.isUndefined(quota)) {
    params['quota'] = quota;
  }
  if (!lodash.isNull(effectiveTime) && !lodash.isUndefined(effectiveTime)) {
    params['effectiveTime'] = effectiveTime;
  }
  if (!lodash.isNull(endTime) && !lodash.isUndefined(endTime)) {
    params['endTime'] = endTime;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePaymentOnlineRechargeAddMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePaymentOnlineRechargeAddMethod, params);
  }
}
