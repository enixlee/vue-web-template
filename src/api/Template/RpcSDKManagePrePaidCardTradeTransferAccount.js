/**
 * Created by Generator.
 * Author: Generator
 * description: 转账
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePrePaidCardTradeTransferAccountMethod = '/sdkmanage/prepaidcard/trade/transfer_account';

export const RpcSDKManagePrePaidCardTradeTransferAccountRpcType = 'system';

/**
 *
 * @param fromPrePaidCardId prePaidCardNo 转出的预付卡
 * @param toPrePaidCardId prePaidCardNo 转入的预付卡
 * @param amountCash money_cent 消费金额(现金)
 * @param amountVirtual money_cent 消费金额(虚拟)
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePrePaidCardTradeTransferAccount (
  fromPrePaidCardId,
  toPrePaidCardId,
  amountCash,
  amountVirtual) {
  tc.typeCheckNumber(amountCash, null, null, false);
  tc.typeCheckNumber(amountVirtual, null, null, false);
  let params = {};
  if (!lodash.isNull(fromPrePaidCardId) && !lodash.isUndefined(fromPrePaidCardId)) {
    params['fromPrePaidCardId'] = fromPrePaidCardId;
  }
  if (!lodash.isNull(toPrePaidCardId) && !lodash.isUndefined(toPrePaidCardId)) {
    params['toPrePaidCardId'] = toPrePaidCardId;
  }
  if (!lodash.isNull(amountCash) && !lodash.isUndefined(amountCash)) {
    params['amountCash'] = amountCash;
  }
  if (!lodash.isNull(amountVirtual) && !lodash.isUndefined(amountVirtual)) {
    params['amountVirtual'] = amountVirtual;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePrePaidCardTradeTransferAccountMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePrePaidCardTradeTransferAccountMethod, params);
  }
}
