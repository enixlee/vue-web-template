/**
 * Created by Generator.
 * Author: Generator
 * description: 查询商户收单手续费
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageFactorageQueryByMerchantMethod = '/sdkmanage/factorage/query';

export const RpcSDKManageFactorageQueryByMerchantRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @param status |null json 状态
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageFactorageQueryByMerchant (
  merchantNo,
  status = null) {
  tc.typeCheckJsonArrayChoice(status, [0, 1, 2, 3], true);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(status) && !lodash.isUndefined(status)) {
    params['status'] = status;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageFactorageQueryByMerchantMethod, params);
  } else {
    return Rpc.get(RpcSDKManageFactorageQueryByMerchantMethod, params);
  }
}
