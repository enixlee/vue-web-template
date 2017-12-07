/**
 * Created by Generator.
 * Author: Generator
 * description: 开卡活动调整（调整完成需要再次审核）
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageActivityActiveCardModifyMethod = '/sdkmanage/activity/active_card/modify';

export const RpcSDKManageActivityActiveCardModifyRpcType = 'system';

/**
 *
 * @param ID bigint 活动id
 * @param rebateMoney |null bigint 赠送金额，以分为单位
 * @param rebatePoints |null bigint 赠送积分
 * @param effectiveDate |null datetime 生效日期，yyyy-mm-ddH:m:s
 * @param endDate |null datetime 生效日期，yyyy-mm-ddH:m:s
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageActivityActiveCardModify (
  ID,
  rebateMoney = null,
  rebatePoints = null,
  effectiveDate = null,
  endDate = null) {
  tc.typeCheckDateString(effectiveDate, true);
  tc.typeCheckDateString(endDate, true);
  let params = {};
  if (!lodash.isNull(ID) && !lodash.isUndefined(ID)) {
    params['ID'] = ID;
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
    return Rpc.post(RpcSDKManageActivityActiveCardModifyMethod, params);
  } else {
    return Rpc.get(RpcSDKManageActivityActiveCardModifyMethod, params);
  }
}
