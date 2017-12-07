/**
 * Created by Generator.
 * Author: Generator
 * description: 补积分
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageFinancePointsMakeUpPointsToPrepaidCardMethod = '/sdkmanage/finance/points/makeup_points_to_prepaidcard';

export const RpcSDKManageFinancePointsMakeUpPointsToPrepaidCardRpcType = 'system';

/**
 *
 * @param prePaidCardId prePaidCardNo 补充积分的预付卡id
 * @param points int 要补充的积分
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageFinancePointsMakeUpPointsToPrepaidCard (
  prePaidCardId,
  points) {
  tc.typeCheckNumber(points, 0, null, false);
  let params = {};
  if (!lodash.isNull(prePaidCardId) && !lodash.isUndefined(prePaidCardId)) {
    params['prePaidCardId'] = prePaidCardId;
  }
  if (!lodash.isNull(points) && !lodash.isUndefined(points)) {
    params['points'] = points;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageFinancePointsMakeUpPointsToPrepaidCardMethod, params);
  } else {
    return Rpc.get(RpcSDKManageFinancePointsMakeUpPointsToPrepaidCardMethod, params);
  }
}
