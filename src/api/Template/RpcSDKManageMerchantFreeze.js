/**
 * Created by Generator.
 * Author: Generator
 * description: 冻结
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMerchantFreezeMethod = '/sdkmanage/merchant/freeze';

export const RpcSDKManageMerchantFreezeRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMerchantFreeze (
  merchantNo) {
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMerchantFreezeMethod, params);
  } else {
    return Rpc.get(RpcSDKManageMerchantFreezeMethod, params);
  }
}
