/**
 * Created by Generator.
 * Author: Generator
 * description: pos机数据导出
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePaymentPosExportMethod = '/sdkmanage/payment/pos/export';

export const RpcSDKManagePaymentPosExportRpcType = 'system';

/**
 *
 * @param merchantNo |null merchantNo 商户号
 * @param ID json 数组格式，pos的id
 * @param startDate datetime 查询开始时间
 * @param endDate datetime 查询结束时间
 * @param tradeType |null tradeType 交易类型
 * @param tradeSubType |null tradeSubType 交易子类型
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePaymentPosExport (
  merchantNo = null,
  ID,
  startDate,
  endDate,
  tradeType = null,
  tradeSubType = null) {
  tc.typeCheckJsonString(ID, false);
  tc.typeCheckDateString(startDate, false);
  tc.typeCheckDateString(endDate, false);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(ID) && !lodash.isUndefined(ID)) {
    params['ID'] = ID;
  }
  if (!lodash.isNull(startDate) && !lodash.isUndefined(startDate)) {
    params['startDate'] = startDate;
  }
  if (!lodash.isNull(endDate) && !lodash.isUndefined(endDate)) {
    params['endDate'] = endDate;
  }
  if (!lodash.isNull(tradeType) && !lodash.isUndefined(tradeType)) {
    params['tradeType'] = tradeType;
  }
  if (!lodash.isNull(tradeSubType) && !lodash.isUndefined(tradeSubType)) {
    params['tradeSubType'] = tradeSubType;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePaymentPosExportMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePaymentPosExportMethod, params);
  }
}
