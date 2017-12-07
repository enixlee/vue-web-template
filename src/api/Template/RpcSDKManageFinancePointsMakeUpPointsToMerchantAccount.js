/**
 * Created by Generator.
 * Author: Generator
 * description: 补积分到商户账户
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageFinancePointsMakeUpPointsToMerchantAccountMethod = '/sdkmanage/finance/points/makeup_points_to_merchant_account';

export const RpcSDKManageFinancePointsMakeUpPointsToMerchantAccountRpcType = 'system';

/**
 *
 * @param memberID memberId 会员号
 * @param merchantNo merchantNo 商户号
 * @param points int 要补充的积分
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageFinancePointsMakeUpPointsToMerchantAccount (
  memberID,
  merchantNo,
  points) {
  tc.typeCheckNumber(points, 0, null, false);
  let params = {};
  if (!lodash.isNull(memberID) && !lodash.isUndefined(memberID)) {
    params['memberID'] = memberID;
  }
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(points) && !lodash.isUndefined(points)) {
    params['points'] = points;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageFinancePointsMakeUpPointsToMerchantAccountMethod, params);
  } else {
    return Rpc.get(RpcSDKManageFinancePointsMakeUpPointsToMerchantAccountMethod, params);
  }
}
