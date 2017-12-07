/**
 * Created by Generator.
 * Author: Generator
 * description: 卖实卡（开卡、激活、绑定）
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePrePaidCardTradeSellCardMethod = '/sdkmanage/prepaidcard/trade/sell_card';

export const RpcSDKManagePrePaidCardTradeSellCardRpcType = 'system';

/**
 *
 * @param memberId memberId 会员id
 * @param prePaidCardId prePaidCardNo 预付卡实卡id
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePrePaidCardTradeSellCard (
  memberId,
  prePaidCardId) {
  let params = {};
  if (!lodash.isNull(memberId) && !lodash.isUndefined(memberId)) {
    params['memberId'] = memberId;
  }
  if (!lodash.isNull(prePaidCardId) && !lodash.isUndefined(prePaidCardId)) {
    params['prePaidCardId'] = prePaidCardId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePrePaidCardTradeSellCardMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePrePaidCardTradeSellCardMethod, params);
  }
}
