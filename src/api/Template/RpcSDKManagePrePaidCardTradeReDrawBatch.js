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

export const RpcSDKManagePrePaidCardTradeReDrawBatchMethod = '/sdkmanage/prepaidcard/trade/redraw_batch';

export const RpcSDKManagePrePaidCardTradeReDrawBatchRpcType = 'system';

/**
 *
 * @param tradeFlowOfPayMinis json 订单ID，数组格式
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePrePaidCardTradeReDrawBatch (
  tradeFlowOfPayMinis) {
  tc.typeCheckJsonString(tradeFlowOfPayMinis, false);
  let params = {};
  if (!lodash.isNull(tradeFlowOfPayMinis) && !lodash.isUndefined(tradeFlowOfPayMinis)) {
    params['tradeFlowOfPayMinis'] = tradeFlowOfPayMinis;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePrePaidCardTradeReDrawBatchMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePrePaidCardTradeReDrawBatchMethod, params);
  }
}
