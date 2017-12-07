/**
 * Created by Generator.
 * Author: Generator
 * description: 查询制卡申请
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePrePaidCardFabricationExportMethod = '/sdkmanage/prepaidcard/fabrication/export';

export const RpcSDKManagePrePaidCardFabricationExportRpcType = 'system';

/**
 *
 * @param fabricationBatchId string 制卡批次号
 * @param merchantNo merchantNo 商户号
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePrePaidCardFabricationExport (
  fabricationBatchId,
  merchantNo) {
  tc.typeCheckString(fabricationBatchId, 1, 32, false);
  let params = {};
  if (!lodash.isNull(fabricationBatchId) && !lodash.isUndefined(fabricationBatchId)) {
    params['fabricationBatchId'] = fabricationBatchId;
  }
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePrePaidCardFabricationExportMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePrePaidCardFabricationExportMethod, params);
  }
}
