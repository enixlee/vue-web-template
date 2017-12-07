/**
 * Created by Generator.
 * Author: Generator
 * description: 查询支付产品审核
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageReviewPaymentProductQueryMethod = '/sdkmanage/review/payment_product/query';

export const RpcSDKManageReviewPaymentProductQueryRpcType = 'system';

/**
 *
 * @param ID bigint 分类审核id
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageReviewPaymentProductQuery (
  ID) {
  let params = {};
  if (!lodash.isNull(ID) && !lodash.isUndefined(ID)) {
    params['ID'] = ID;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageReviewPaymentProductQueryMethod, params);
  } else {
    return Rpc.get(RpcSDKManageReviewPaymentProductQueryMethod, params);
  }
}
