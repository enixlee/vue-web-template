/**
 * Created by Generator.
 * Author: Generator
 * description: 删除商户
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMerchantDeleteMethod = '/sdkmanage/merchant/delete';

export const RpcSDKManageMerchantDeleteRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMerchantDelete (
  merchantNo) {
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMerchantDeleteMethod, params);
  } else {
    return Rpc.get(RpcSDKManageMerchantDeleteMethod, params);
  }
}
