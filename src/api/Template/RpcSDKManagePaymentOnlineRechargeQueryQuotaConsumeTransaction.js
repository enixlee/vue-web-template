/**
 * Created by Generator.
 * Author: Generator
 * description: 查看配额的消费记录
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePaymentOnlineRechargeQueryQuotaConsumeTransactionMethod = '/sdkmanage/payment/online_recharge/query_quota_consume_transaction';

export const RpcSDKManagePaymentOnlineRechargeQueryQuotaConsumeTransactionRpcType = 'system';

/**
 *
 * @param merchantNo |null merchantNo 商户号
 * @param tradeFlowOfPayMini |null string 流水号
 * @param prePaidCardId |null prePaidCardNo 预付卡号
 * @param tradeType |null tradeTypeJsonArray 交易类型
 * @param tradeTimeStart |null datetime 交易时间
 * @param tradeTimeEnd |null datetime 交易时间
 * @param pageIndex |null int 分页号
 * @param pageCount |null int 页面显示数量
 * @param sortBy |null int 排序规则0:按生成时间排序
 * @param desc |null int 0：降序1:升序
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePaymentOnlineRechargeQueryQuotaConsumeTransaction (
  merchantNo = null,
  tradeFlowOfPayMini = null,
  prePaidCardId = null,
  tradeType = null,
  tradeTimeStart = null,
  tradeTimeEnd = null,
  pageIndex = 1,
  pageCount = 50,
  sortBy = 0,
  desc = 0) {
  tc.typeCheckString(tradeFlowOfPayMini, 1, 255, true);
  tc.typeCheckDateString(tradeTimeStart, true);
  tc.typeCheckDateString(tradeTimeEnd, true);
  tc.typeCheckNumber(pageIndex, 1, null, true);
  tc.typeCheckNumber(pageCount, 1, 50, true);
  tc.typeCheckChoice(sortBy, [0], true);
  tc.typeCheckChoice(desc, [0, 1], true);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(tradeFlowOfPayMini) && !lodash.isUndefined(tradeFlowOfPayMini)) {
    params['tradeFlowOfPayMini'] = tradeFlowOfPayMini;
  }
  if (!lodash.isNull(prePaidCardId) && !lodash.isUndefined(prePaidCardId)) {
    params['prePaidCardId'] = prePaidCardId;
  }
  if (!lodash.isNull(tradeType) && !lodash.isUndefined(tradeType)) {
    params['tradeType'] = tradeType;
  }
  if (!lodash.isNull(tradeTimeStart) && !lodash.isUndefined(tradeTimeStart)) {
    params['tradeTimeStart'] = tradeTimeStart;
  }
  if (!lodash.isNull(tradeTimeEnd) && !lodash.isUndefined(tradeTimeEnd)) {
    params['tradeTimeEnd'] = tradeTimeEnd;
  }
  if (!lodash.isNull(pageIndex) && !lodash.isUndefined(pageIndex)) {
    params['pageIndex'] = pageIndex;
  }
  if (!lodash.isNull(pageCount) && !lodash.isUndefined(pageCount)) {
    params['pageCount'] = pageCount;
  }
  if (!lodash.isNull(sortBy) && !lodash.isUndefined(sortBy)) {
    params['sortBy'] = sortBy;
  }
  if (!lodash.isNull(desc) && !lodash.isUndefined(desc)) {
    params['desc'] = desc;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePaymentOnlineRechargeQueryQuotaConsumeTransactionMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePaymentOnlineRechargeQueryQuotaConsumeTransactionMethod, params);
  }
}
