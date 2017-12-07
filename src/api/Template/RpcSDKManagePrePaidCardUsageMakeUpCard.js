/**
 * Created by Generator.
 * Author: Generator
 * description: 补卡(换卡)
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePrePaidCardUsageMakeUpCardMethod = '/sdkmanage/prepaidcard/usage/makeup_card';

export const RpcSDKManagePrePaidCardUsageMakeUpCardRpcType = 'system';

/**
 *
 * @param oldPrePaidCardId prePaidCardNo 需要替换的预付卡
 * @param newPrePaidCardId prePaidCardNo 新的的预付卡
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePrePaidCardUsageMakeUpCard (
  oldPrePaidCardId,
  newPrePaidCardId) {
  let params = {};
  if (!lodash.isNull(oldPrePaidCardId) && !lodash.isUndefined(oldPrePaidCardId)) {
    params['oldPrePaidCardId'] = oldPrePaidCardId;
  }
  if (!lodash.isNull(newPrePaidCardId) && !lodash.isUndefined(newPrePaidCardId)) {
    params['newPrePaidCardId'] = newPrePaidCardId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePrePaidCardUsageMakeUpCardMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePrePaidCardUsageMakeUpCardMethod, params);
  }
}
