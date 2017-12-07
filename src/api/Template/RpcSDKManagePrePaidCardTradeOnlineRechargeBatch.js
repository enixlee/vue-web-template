/**
 * Created by Generator.
 * Author: Generator
 * description: 批量充值
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePrePaidCardTradeOnlineRechargeBatchMethod = '/sdkmanage/prepaidcard/trade/online_recharge_batch';

export const RpcSDKManagePrePaidCardTradeOnlineRechargeBatchRpcType = 'system';

/**
 *
 * @param prePaidCardIds json 要充值的预付卡id列表
 * @param amountVirtual money_cent 充值金额(虚拟)
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePrePaidCardTradeOnlineRechargeBatch (
  prePaidCardIds,
  amountVirtual) {
  tc.typeCheckJsonString(prePaidCardIds, false);
  tc.typeCheckNumber(amountVirtual, null, null, false);
  let params = {};
  if (!lodash.isNull(prePaidCardIds) && !lodash.isUndefined(prePaidCardIds)) {
    params['prePaidCardIds'] = prePaidCardIds;
  }
  if (!lodash.isNull(amountVirtual) && !lodash.isUndefined(amountVirtual)) {
    params['amountVirtual'] = amountVirtual;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePrePaidCardTradeOnlineRechargeBatchMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePrePaidCardTradeOnlineRechargeBatchMethod, params);
  }
}
