/**
 * Created by Generator.
 * Author: Generator
 * description: 卖虚卡(一次限购1张)
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePrePaidCardTradeSellVirtualCardMethod = '/sdkmanage/prepaidcard/trade/sell_virtual_card';

export const RpcSDKManagePrePaidCardTradeSellVirtualCardRpcType = 'system';

/**
 *
 * @param merchantCardTypeId int 卡种id
 * @param memberId memberId 会员id
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePrePaidCardTradeSellVirtualCard (
  merchantCardTypeId,
  memberId) {
  tc.typeCheckNumber(merchantCardTypeId, null, null, false);
  let params = {};
  if (!lodash.isNull(merchantCardTypeId) && !lodash.isUndefined(merchantCardTypeId)) {
    params['merchantCardTypeId'] = merchantCardTypeId;
  }
  if (!lodash.isNull(memberId) && !lodash.isUndefined(memberId)) {
    params['memberId'] = memberId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePrePaidCardTradeSellVirtualCardMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePrePaidCardTradeSellVirtualCardMethod, params);
  }
}
