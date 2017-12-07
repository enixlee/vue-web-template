/**
 * Created by Generator.
 * Author: Generator
 * description: 导出激活的预付卡
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePrePaidCardUsageExportActiveCardMethod = '/sdkmanage/prepaidcard/usage/export_active_card';

export const RpcSDKManagePrePaidCardUsageExportActiveCardRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @param startDate |null datetime 开始时间
 * @param endDate |null datetime 结束时间
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePrePaidCardUsageExportActiveCard (
  merchantNo,
  startDate = null,
  endDate = null) {
  tc.typeCheckDateString(startDate, true);
  tc.typeCheckDateString(endDate, true);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(startDate) && !lodash.isUndefined(startDate)) {
    params['startDate'] = startDate;
  }
  if (!lodash.isNull(endDate) && !lodash.isUndefined(endDate)) {
    params['endDate'] = endDate;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePrePaidCardUsageExportActiveCardMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePrePaidCardUsageExportActiveCardMethod, params);
  }
}
