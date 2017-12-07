/**
 * Created by Generator.
 * Author: Generator
 * description: 冻结
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePrePaidCardUsageFreezeMethod = '/sdkmanage/prepaidcard/usage/freeze';

export const RpcSDKManagePrePaidCardUsageFreezeRpcType = 'system';

/**
 *
 * @param prePaidCardId prePaidCardNo 预付卡
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePrePaidCardUsageFreeze (
  prePaidCardId) {
  let params = {};
  if (!lodash.isNull(prePaidCardId) && !lodash.isUndefined(prePaidCardId)) {
    params['prePaidCardId'] = prePaidCardId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePrePaidCardUsageFreezeMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePrePaidCardUsageFreezeMethod, params);
  }
}
