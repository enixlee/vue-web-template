/**
 * Created by Generator.
 * Author: Generator
 * description: 卖实卡（开卡、激活、绑定）
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePrePaidCardTradeSellCardByCellphoneMethod = '/sdkmanage/prepaidcard/trade/sell_card_by_cellphone';

export const RpcSDKManagePrePaidCardTradeSellCardByCellphoneRpcType = 'system';

/**
 *
 * @param cellphone cellphone 手机号
 * @param prePaidCardId prePaidCardNo 预付卡实卡id
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePrePaidCardTradeSellCardByCellphone (
  cellphone,
  prePaidCardId) {
  tc.typeCheckCellphone(cellphone, false);
  let params = {};
  if (!lodash.isNull(cellphone) && !lodash.isUndefined(cellphone)) {
    params['cellphone'] = cellphone;
  }
  if (!lodash.isNull(prePaidCardId) && !lodash.isUndefined(prePaidCardId)) {
    params['prePaidCardId'] = prePaidCardId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePrePaidCardTradeSellCardByCellphoneMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePrePaidCardTradeSellCardByCellphoneMethod, params);
  }
}
