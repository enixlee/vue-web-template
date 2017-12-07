/**
 * Created by Generator.
 * Author: Generator
 * description: 取消激活/设置预付卡的状态，如果预付卡已经绑定，那么需要操作人员先手动解绑预付卡
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePrePaidCardUsageDeActivateMethod = '/sdkmanage/prepaidcard/usage/deactivate';

export const RpcSDKManagePrePaidCardUsageDeActivateRpcType = 'system';

/**
 *
 * @param prePaidCardId prePaidCardNo 预付卡
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePrePaidCardUsageDeActivate (
  prePaidCardId) {
  let params = {};
  if (!lodash.isNull(prePaidCardId) && !lodash.isUndefined(prePaidCardId)) {
    params['prePaidCardId'] = prePaidCardId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePrePaidCardUsageDeActivateMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePrePaidCardUsageDeActivateMethod, params);
  }
}
