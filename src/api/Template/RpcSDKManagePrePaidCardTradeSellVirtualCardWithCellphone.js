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

export const RpcSDKManagePrePaidCardTradeSellVirtualCardWithCellphoneMethod = '/sdkmanage/prepaidcard/trade/sell_virtual_card_with_cellphone';

export const RpcSDKManagePrePaidCardTradeSellVirtualCardWithCellphoneRpcType = 'system';

/**
 *
 * @param merchantCardTypeId int 卡种id
 * @param cellphone cellphone 手机号git
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePrePaidCardTradeSellVirtualCardWithCellphone (
  merchantCardTypeId,
  cellphone) {
  tc.typeCheckNumber(merchantCardTypeId, null, null, false);
  tc.typeCheckCellphone(cellphone, false);
  let params = {};
  if (!lodash.isNull(merchantCardTypeId) && !lodash.isUndefined(merchantCardTypeId)) {
    params['merchantCardTypeId'] = merchantCardTypeId;
  }
  if (!lodash.isNull(cellphone) && !lodash.isUndefined(cellphone)) {
    params['cellphone'] = cellphone;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePrePaidCardTradeSellVirtualCardWithCellphoneMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePrePaidCardTradeSellVirtualCardWithCellphoneMethod, params);
  }
}
