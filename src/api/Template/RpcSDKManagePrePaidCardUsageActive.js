/**
 * Created by Generator.
 * Author: Generator
 * description: 激活
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePrePaidCardUsageActiveMethod = '/sdkmanage/prepaidcard/usage/active';

export const RpcSDKManagePrePaidCardUsageActiveRpcType = 'system';

/**
 *
 * @param prePaidCardId prePaidCardNo 预付卡
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePrePaidCardUsageActive (
  prePaidCardId) {
  let params = {};
  if (!lodash.isNull(prePaidCardId) && !lodash.isUndefined(prePaidCardId)) {
    params['prePaidCardId'] = prePaidCardId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePrePaidCardUsageActiveMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePrePaidCardUsageActiveMethod, params);
  }
}
