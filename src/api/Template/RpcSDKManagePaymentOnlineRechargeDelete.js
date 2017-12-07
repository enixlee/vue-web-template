/**
 * Created by Generator.
 * Author: Generator
 * description: 删除
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePaymentOnlineRechargeDeleteMethod = '/sdkmanage/payment/online_recharge/delete';

export const RpcSDKManagePaymentOnlineRechargeDeleteRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePaymentOnlineRechargeDelete (
  merchantNo) {
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePaymentOnlineRechargeDeleteMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePaymentOnlineRechargeDeleteMethod, params);
  }
}
