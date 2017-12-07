/**
 * Created by Generator.
 * Author: Generator
 * description: 冻结
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePrePaidCardUsageUnFreezeMethod = '/sdkmanage/prepaidcard/usage/unfreeze';

export const RpcSDKManagePrePaidCardUsageUnFreezeRpcType = 'system';

/**
 *
 * @param prePaidCardId prePaidCardNo 预付卡
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePrePaidCardUsageUnFreeze (
  prePaidCardId) {
  let params = {};
  if (!lodash.isNull(prePaidCardId) && !lodash.isUndefined(prePaidCardId)) {
    params['prePaidCardId'] = prePaidCardId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePrePaidCardUsageUnFreezeMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePrePaidCardUsageUnFreezeMethod, params);
  }
}
