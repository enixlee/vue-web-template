/**
 * Created by Generator.
 * Author: Generator
 * description: 修改转账产品
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePaymentAccountTransferModifyMethod = '/sdkmanage/payment/account_transfer/modify';

export const RpcSDKManagePaymentAccountTransferModifyRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @param highestMoneyTransfer |null bigint 转账金额上限
 * @param highestPointsTransfer |null bigint 转账积分上限
 * @param effectiveTime |null datetime 生效时间
 * @param endTime |null datetime 结束时间
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePaymentAccountTransferModify (
  merchantNo,
  highestMoneyTransfer = null,
  highestPointsTransfer = null,
  effectiveTime = null,
  endTime = null) {
  tc.typeCheckDateString(effectiveTime, true);
  tc.typeCheckDateString(endTime, true);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(highestMoneyTransfer) && !lodash.isUndefined(highestMoneyTransfer)) {
    params['highestMoneyTransfer'] = highestMoneyTransfer;
  }
  if (!lodash.isNull(highestPointsTransfer) && !lodash.isUndefined(highestPointsTransfer)) {
    params['highestPointsTransfer'] = highestPointsTransfer;
  }
  if (!lodash.isNull(effectiveTime) && !lodash.isUndefined(effectiveTime)) {
    params['effectiveTime'] = effectiveTime;
  }
  if (!lodash.isNull(endTime) && !lodash.isUndefined(endTime)) {
    params['endTime'] = endTime;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePaymentAccountTransferModifyMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePaymentAccountTransferModifyMethod, params);
  }
}
