/**
 * Created by Generator.
 * Author: Generator
 * description: 删除
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePaymentNoCardPayDeleteMethod = '/sdkmanage/payment/no_card_pay/delete';

export const RpcSDKManagePaymentNoCardPayDeleteRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户类型
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePaymentNoCardPayDelete (
  merchantNo) {
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePaymentNoCardPayDeleteMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePaymentNoCardPayDeleteMethod, params);
  }
}
