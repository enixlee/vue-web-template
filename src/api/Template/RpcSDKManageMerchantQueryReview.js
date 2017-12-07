/**
 * Created by Generator.
 * Author: Generator
 * description: 查询商户需要审核的数据
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMerchantQueryReviewMethod = '/sdkmanage/merchant/query_review';

export const RpcSDKManageMerchantQueryReviewRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMerchantQueryReview (
  merchantNo) {
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMerchantQueryReviewMethod, params);
  } else {
    return Rpc.get(RpcSDKManageMerchantQueryReviewMethod, params);
  }
}
