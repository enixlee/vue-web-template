/**
 * Created by Generator.
 * Author: Generator
 * description: 增加转账产品
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePaymentAccountTransferAddMethod = '/sdkmanage/payment/account_transfer/add';

export const RpcSDKManagePaymentAccountTransferAddRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户类型
 * @param highestMoneyTransfer bigint 转账金额上限
 * @param highestPointsTransfer bigint 转账积分上限
 * @param effectiveTime datetime 生效时间
 * @param endTime datetime 结束时间
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePaymentAccountTransferAdd (
  merchantNo,
  highestMoneyTransfer,
  highestPointsTransfer,
  effectiveTime,
  endTime) {
  tc.typeCheckDateString(effectiveTime, false);
  tc.typeCheckDateString(endTime, false);
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
    return Rpc.post(RpcSDKManagePaymentAccountTransferAddMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePaymentAccountTransferAddMethod, params);
  }
}
