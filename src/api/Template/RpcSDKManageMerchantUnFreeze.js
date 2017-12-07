/**
 * Created by Generator.
 * Author: Generator
 * description: 解冻
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMerchantUnFreezeMethod = '/sdkmanage/merchant/unfreeze';

export const RpcSDKManageMerchantUnFreezeRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMerchantUnFreeze (
  merchantNo) {
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMerchantUnFreezeMethod, params);
  } else {
    return Rpc.get(RpcSDKManageMerchantUnFreezeMethod, params);
  }
}
