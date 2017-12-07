/**
 * Created by Generator.
 * Author: Generator
 * description: 积分设置
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMerchantPointsAddMethod = '/sdkmanage/merchant_points/add';

export const RpcSDKManageMerchantPointsAddRpcType = 'system';

/**
 *
 * @param merchantCardTypeId bigint 卡种id
 * @param moneyDenominator bigint 钱，分母，以分为单位
 * @param pointNumerator bigint 分子，积分
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMerchantPointsAdd (
  merchantCardTypeId,
  moneyDenominator,
  pointNumerator) {
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
    return Rpc.post(RpcSDKManageMerchantPointsAddMethod, params);
  } else {
    return Rpc.get(RpcSDKManageMerchantPointsAddMethod, params);
  }
}
