/**
 * Created by Generator.
 * Author: Generator
 * description: 查看流水变更记录
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePaymentOnlineRechargeQueryChangeMethod = '/sdkmanage/payment/online_recharge/query_change';

export const RpcSDKManagePaymentOnlineRechargeQueryChangeRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @param queryTimeStart datetime 生效时间
 * @param queryTimeEnd datetime 结束时间
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePaymentOnlineRechargeQueryChange (
  merchantNo,
  queryTimeStart,
  queryTimeEnd) {
  tc.typeCheckDateString(queryTimeStart, false);
  tc.typeCheckDateString(queryTimeEnd, false);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(queryTimeStart) && !lodash.isUndefined(queryTimeStart)) {
    params['queryTimeStart'] = queryTimeStart;
  }
  if (!lodash.isNull(queryTimeEnd) && !lodash.isUndefined(queryTimeEnd)) {
    params['queryTimeEnd'] = queryTimeEnd;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePaymentOnlineRechargeQueryChangeMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePaymentOnlineRechargeQueryChangeMethod, params);
  }
}
