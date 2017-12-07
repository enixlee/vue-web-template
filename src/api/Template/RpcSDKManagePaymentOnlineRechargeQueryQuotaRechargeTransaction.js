/**
 * Created by Generator.
 * Author: Generator
 * description: 查看配额的充值记录
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePaymentOnlineRechargeQueryQuotaRechargeTransactionMethod = '/sdkmanage/payment/online_recharge/query_quota_recharge_transaction';

export const RpcSDKManagePaymentOnlineRechargeQueryQuotaRechargeTransactionRpcType = 'system';

/**
 *
 * @param merchantNo |null merchantNo 商户号
 * @param id |null string 流水号
 * @param operateTimeStart |null datetime 生效时间
 * @param operateTimeEnd |null datetime 结束时间
 * @param pageIndex |null int 分页号
 * @param pageCount |null int 页面显示数量
 * @param sortBy |null int 排序规则0:按操作时间排序
 * @param desc |null int 0：降序1:升序
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePaymentOnlineRechargeQueryQuotaRechargeTransaction (
  merchantNo = null,
  id = null,
  operateTimeStart = null,
  operateTimeEnd = null,
  pageIndex = 1,
  pageCount = 50,
  sortBy = 0,
  desc = 0) {
  tc.typeCheckString(id, 1, null, true);
  tc.typeCheckDateString(operateTimeStart, true);
  tc.typeCheckDateString(operateTimeEnd, true);
  tc.typeCheckNumber(pageIndex, 1, null, true);
  tc.typeCheckNumber(pageCount, 1, 50, true);
  tc.typeCheckChoice(sortBy, [0], true);
  tc.typeCheckChoice(desc, [0, 1], true);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(id) && !lodash.isUndefined(id)) {
    params['id'] = id;
  }
  if (!lodash.isNull(operateTimeStart) && !lodash.isUndefined(operateTimeStart)) {
    params['operateTimeStart'] = operateTimeStart;
  }
  if (!lodash.isNull(operateTimeEnd) && !lodash.isUndefined(operateTimeEnd)) {
    params['operateTimeEnd'] = operateTimeEnd;
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
    return Rpc.post(RpcSDKManagePaymentOnlineRechargeQueryQuotaRechargeTransactionMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePaymentOnlineRechargeQueryQuotaRechargeTransactionMethod, params);
  }
}
