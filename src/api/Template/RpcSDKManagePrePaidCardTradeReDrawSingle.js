/**
 * Created by Generator.
 * Author: Generator
 * description: 撤销，只能撤销充值和预付卡id
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePrePaidCardTradeReDrawSingleMethod = '/sdkmanage/prepaidcard/trade/redraw_single';

export const RpcSDKManagePrePaidCardTradeReDrawSingleRpcType = 'system';

/**
 *
 * @param tradeFlowOfPayMini string 订单ID
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePrePaidCardTradeReDrawSingle (
  tradeFlowOfPayMini) {
  tc.typeCheckString(tradeFlowOfPayMini, null, null, false);
  let params = {};
  if (!lodash.isNull(tradeFlowOfPayMini) && !lodash.isUndefined(tradeFlowOfPayMini)) {
    params['tradeFlowOfPayMini'] = tradeFlowOfPayMini;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePrePaidCardTradeReDrawSingleMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePrePaidCardTradeReDrawSingleMethod, params);
  }
}
