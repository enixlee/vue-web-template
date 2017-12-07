/**
 * Created by Generator.
 * Author: Generator
 * description: 单笔充值
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePrePaidCardTradeOnlineRechargeSingleMethod = '/sdkmanage/prepaidcard/trade/online_recharge_single';

export const RpcSDKManagePrePaidCardTradeOnlineRechargeSingleRpcType = 'system';

/**
 *
 * @param prePaidCardId prePaidCardNo 预付卡
 * @param amountVirtual money_cent 充值金额(虚拟)
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePrePaidCardTradeOnlineRechargeSingle (
  prePaidCardId,
  amountVirtual) {
  tc.typeCheckNumber(amountVirtual, null, null, false);
  let params = {};
  if (!lodash.isNull(prePaidCardId) && !lodash.isUndefined(prePaidCardId)) {
    params['prePaidCardId'] = prePaidCardId;
  }
  if (!lodash.isNull(amountVirtual) && !lodash.isUndefined(amountVirtual)) {
    params['amountVirtual'] = amountVirtual;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePrePaidCardTradeOnlineRechargeSingleMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePrePaidCardTradeOnlineRechargeSingleMethod, params);
  }
}
