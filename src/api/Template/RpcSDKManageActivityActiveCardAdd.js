/**
 * Created by Generator.
 * Author: Generator
 * description: 开卡活动添加
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageActivityActiveCardAddMethod = '/sdkmanage/activity/active_card/add';

export const RpcSDKManageActivityActiveCardAddRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @param rebateMoney bigint 赠送金额，以分为单位
 * @param rebatePoints bigint 赠送积分
 * @param effectiveDate datetime 生效日期，yyyy-mm-ddH:m:s
 * @param endDate datetime 生效日期，yyyy-mm-ddH:m:s
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageActivityActiveCardAdd (
  merchantNo,
  rebateMoney,
  rebatePoints,
  effectiveDate,
  endDate) {
  tc.typeCheckDateString(effectiveDate, false);
  tc.typeCheckDateString(endDate, false);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(rebateMoney) && !lodash.isUndefined(rebateMoney)) {
    params['rebateMoney'] = rebateMoney;
  }
  if (!lodash.isNull(rebatePoints) && !lodash.isUndefined(rebatePoints)) {
    params['rebatePoints'] = rebatePoints;
  }
  if (!lodash.isNull(effectiveDate) && !lodash.isUndefined(effectiveDate)) {
    params['effectiveDate'] = effectiveDate;
  }
  if (!lodash.isNull(endDate) && !lodash.isUndefined(endDate)) {
    params['endDate'] = endDate;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageActivityActiveCardAddMethod, params);
  } else {
    return Rpc.get(RpcSDKManageActivityActiveCardAddMethod, params);
  }
}
