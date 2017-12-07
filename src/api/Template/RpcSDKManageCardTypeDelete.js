/**
 * Created by Generator.
 * Author: Generator
 * description: 删除卡种
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageCardTypeDeleteMethod = '/sdkmanage/cardtype/delete';

export const RpcSDKManageCardTypeDeleteRpcType = 'system';

/**
 *
 * @param merchantCardTypeId bigint 商户号
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageCardTypeDelete (
  merchantCardTypeId) {
  let params = {};
  if (!lodash.isNull(merchantCardTypeId) && !lodash.isUndefined(merchantCardTypeId)) {
    params['merchantCardTypeId'] = merchantCardTypeId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageCardTypeDeleteMethod, params);
  } else {
    return Rpc.get(RpcSDKManageCardTypeDeleteMethod, params);
  }
}
