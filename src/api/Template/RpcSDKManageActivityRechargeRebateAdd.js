/**
 * Created by Generator.
 * Author: Generator
 * description: 冲赠添加
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageActivityRechargeRebateAddMethod = '/sdkmanage/activity/recharge_rebate/add';

export const RpcSDKManageActivityRechargeRebateAddRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @param merchantCardTypeId bigint 卡种id
 * @param rechargeMoney bigint 充值金额
 * @param rebateMoney bigint 赠送金额，以分为单位
 * @param rebatePoints bigint 赠送积分
 * @param effectiveDate datetime 生效日期，yyyy-mm-ddH:m:s
 * @param endDate datetime 生效日期，yyyy-mm-ddH:m:s
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageActivityRechargeRebateAdd (
  merchantNo,
  merchantCardTypeId,
  rechargeMoney,
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
  if (!lodash.isNull(merchantCardTypeId) && !lodash.isUndefined(merchantCardTypeId)) {
    params['merchantCardTypeId'] = merchantCardTypeId;
  }
  if (!lodash.isNull(rechargeMoney) && !lodash.isUndefined(rechargeMoney)) {
    params['rechargeMoney'] = rechargeMoney;
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
    return Rpc.post(RpcSDKManageActivityRechargeRebateAddMethod, params);
  } else {
    return Rpc.get(RpcSDKManageActivityRechargeRebateAddMethod, params);
  }
}
