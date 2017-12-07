/**
 * Created by Generator.
 * Author: Generator
 * description: 删除
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePaymentPosDeleteMethod = '/sdkmanage/payment/pos/delete';

export const RpcSDKManagePaymentPosDeleteRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @param id bigint pos机产品编号
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePaymentPosDelete (
  merchantNo,
  id) {
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(id) && !lodash.isUndefined(id)) {
    params['id'] = id;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePaymentPosDeleteMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePaymentPosDeleteMethod, params);
  }
}
