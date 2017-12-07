/**
 * Created by Generator.
 * Author: Generator
 * description: 积分规则变更
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMerchantPointsModifyMethod = '/sdkmanage/merchant_points/modify';

export const RpcSDKManageMerchantPointsModifyRpcType = 'system';

/**
 *
 * @param merchantCardTypeId bigint 卡种id
 * @param moneyDenominator |null bigint 钱，分母，以分为单位
 * @param pointNumerator |null bigint 分子，积分
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMerchantPointsModify (
  merchantCardTypeId,
  moneyDenominator = null,
  pointNumerator = null) {
  let params = {};
  if (!lodash.isNull(merchantCardTypeId) && !lodash.isUndefined(merchantCardTypeId)) {
    params['merchantCardTypeId'] = merchantCardTypeId;
  }
  if (!lodash.isNull(moneyDenominator) && !lodash.isUndefined(moneyDenominator)) {
    params['moneyDenominator'] = moneyDenominator;
  }
  if (!lodash.isNull(pointNumerator) && !lodash.isUndefined(pointNumerator)) {
    params['pointNumerator'] = pointNumerator;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMerchantPointsModifyMethod, params);
  } else {
    return Rpc.get(RpcSDKManageMerchantPointsModifyMethod, params);
  }
}
