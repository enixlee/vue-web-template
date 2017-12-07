/**
 * Created by Generator.
 * Author: Generator
 * description: 修改
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePaymentNetPayModifyMethod = '/sdkmanage/payment/net_pay/modify';

export const RpcSDKManagePaymentNetPayModifyRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @param netPayBankOnlineId |null string 网银在线id
 * @param effectiveTime |null datetime 生效时间
 * @param endTime |null datetime 结束时间
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePaymentNetPayModify (
  merchantNo,
  netPayBankOnlineId = null,
  effectiveTime = null,
  endTime = null) {
  tc.typeCheckString(netPayBankOnlineId, 1, 16, true);
  tc.typeCheckDateString(effectiveTime, true);
  tc.typeCheckDateString(endTime, true);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(netPayBankOnlineId) && !lodash.isUndefined(netPayBankOnlineId)) {
    params['netPayBankOnlineId'] = netPayBankOnlineId;
  }
  if (!lodash.isNull(effectiveTime) && !lodash.isUndefined(effectiveTime)) {
    params['effectiveTime'] = effectiveTime;
  }
  if (!lodash.isNull(endTime) && !lodash.isUndefined(endTime)) {
    params['endTime'] = endTime;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePaymentNetPayModifyMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePaymentNetPayModifyMethod, params);
  }
}
