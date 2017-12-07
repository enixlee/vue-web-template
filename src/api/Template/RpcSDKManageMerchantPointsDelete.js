/**
 * Created by Generator.
 * Author: Generator
 * description: 积分规则变更
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMerchantPointsDeleteMethod = '/sdkmanage/merchant_points/delete';

export const RpcSDKManageMerchantPointsDeleteRpcType = 'system';

/**
 *
 * @param merchantCardTypeId bigint 卡种id
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMerchantPointsDelete (
  merchantCardTypeId) {
  let params = {};
  if (!lodash.isNull(merchantCardTypeId) && !lodash.isUndefined(merchantCardTypeId)) {
    params['merchantCardTypeId'] = merchantCardTypeId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMerchantPointsDeleteMethod, params);
  } else {
    return Rpc.get(RpcSDKManageMerchantPointsDeleteMethod, params);
  }
}
