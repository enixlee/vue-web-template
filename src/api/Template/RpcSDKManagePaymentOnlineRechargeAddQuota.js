/**
 * Created by Generator.
 * Author: Generator
 * description: 增加配额
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePaymentOnlineRechargeAddQuotaMethod = '/sdkmanage/payment/online_recharge/add_quota';

export const RpcSDKManagePaymentOnlineRechargeAddQuotaRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @param quota bigint 配额，钱，分
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePaymentOnlineRechargeAddQuota (
  merchantNo,
  quota) {
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(quota) && !lodash.isUndefined(quota)) {
    params['quota'] = quota;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePaymentOnlineRechargeAddQuotaMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePaymentOnlineRechargeAddQuotaMethod, params);
  }
}
