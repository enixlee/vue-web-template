/**
 * Created by Generator.
 * Author: Generator
 * description: 商户的详细信息
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMerchantQueryMerchantDetailMethod = '/sdkmanage/merchant/query_detail';

export const RpcSDKManageMerchantQueryMerchantDetailRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMerchantQueryMerchantDetail (
  merchantNo) {
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMerchantQueryMerchantDetailMethod, params);
  } else {
    return Rpc.get(RpcSDKManageMerchantQueryMerchantDetailMethod, params);
  }
}
