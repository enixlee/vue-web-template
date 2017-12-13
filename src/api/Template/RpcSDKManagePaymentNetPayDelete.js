/**
 * Created by Generator.
 * Author: Generator
 * description: 删除
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePaymentNetPayDeleteMethod = '/sdkmanage/payment/net_pay/delete';

export const RpcSDKManagePaymentNetPayDeleteRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePaymentNetPayDelete (
  merchantNo) {
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePaymentNetPayDeleteMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePaymentNetPayDeleteMethod, params);
  }
}