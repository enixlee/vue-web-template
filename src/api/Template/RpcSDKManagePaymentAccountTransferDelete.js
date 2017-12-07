/**
 * Created by Generator.
 * Author: Generator
 * description: 删除转账产品
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePaymentAccountTransferDeleteMethod = '/sdkmanage/payment/account_transfer/delete';

export const RpcSDKManagePaymentAccountTransferDeleteRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePaymentAccountTransferDelete (
  merchantNo) {
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePaymentAccountTransferDeleteMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePaymentAccountTransferDeleteMethod, params);
  }
}
