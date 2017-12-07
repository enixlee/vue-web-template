/**
 * Created by Generator.
 * Author: Generator
 * description: 制造卡片
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePrePaidCardFabricationMakeMethod = '/sdkmanage/prepaidcard/fabrication/make';

export const RpcSDKManagePrePaidCardFabricationMakeRpcType = 'system';

/**
 *
 * @param fabricationBatchId string 制卡批次号
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePrePaidCardFabricationMake (
  fabricationBatchId) {
  tc.typeCheckString(fabricationBatchId, null, null, false);
  let params = {};
  if (!lodash.isNull(fabricationBatchId) && !lodash.isUndefined(fabricationBatchId)) {
    params['fabricationBatchId'] = fabricationBatchId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePrePaidCardFabricationMakeMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePrePaidCardFabricationMakeMethod, params);
  }
}
