/**
 * Created by Generator.
 * Author: Generator
 * description: 导出消费记录
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageTransactionConsumptionExportMethod = '/sdkmanage/transaction/consumption/export';

export const RpcSDKManageTransactionConsumptionExportRpcType = 'system';

/**
 *
 * @param tradeFlowOfPayMini |null string 流水号
 * @param tradeType |null tradeTypeJsonArray 数组格式,交易类型
 * @param merchantNo |null merchantNo 商户号
 * @param prePaidCardId |null prePaidCardNo 预付卡号
 * @param tradeSubType |null tradeSubTypeJsonArray 子类型
 * @param tradeTimeStart |null datetime 起始交易时间
 * @param tradeTimeEnd |null datetime 交易时间上限
 * @param posTerminalId |null string pos机号
 * @param isReDrew |null json 是否撤销/冲正/退货0否1是
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageTransactionConsumptionExport (
  tradeFlowOfPayMini = null,
  tradeType = null,
  merchantNo = null,
  prePaidCardId = null,
  tradeSubType = null,
  tradeTimeStart = null,
  tradeTimeEnd = null,
  posTerminalId = null,
  isReDrew = null) {
  tc.typeCheckString(tradeFlowOfPayMini, 1, 255, true);
  tc.typeCheckDateString(tradeTimeStart, true);
  tc.typeCheckDateString(tradeTimeEnd, true);
  tc.typeCheckString(posTerminalId, null, null, true);
  tc.typeCheckJsonArrayChoice(isReDrew, [0, 1], true);
  let params = {};
  if (!lodash.isNull(tradeFlowOfPayMini) && !lodash.isUndefined(tradeFlowOfPayMini)) {
    params['tradeFlowOfPayMini'] = tradeFlowOfPayMini;
  }
  if (!lodash.isNull(tradeType) && !lodash.isUndefined(tradeType)) {
    params['tradeType'] = tradeType;
  }
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(prePaidCardId) && !lodash.isUndefined(prePaidCardId)) {
    params['prePaidCardId'] = prePaidCardId;
  }
  if (!lodash.isNull(tradeSubType) && !lodash.isUndefined(tradeSubType)) {
    params['tradeSubType'] = tradeSubType;
  }
  if (!lodash.isNull(tradeTimeStart) && !lodash.isUndefined(tradeTimeStart)) {
    params['tradeTimeStart'] = tradeTimeStart;
  }
  if (!lodash.isNull(tradeTimeEnd) && !lodash.isUndefined(tradeTimeEnd)) {
    params['tradeTimeEnd'] = tradeTimeEnd;
  }
  if (!lodash.isNull(posTerminalId) && !lodash.isUndefined(posTerminalId)) {
    params['posTerminalId'] = posTerminalId;
  }
  if (!lodash.isNull(isReDrew) && !lodash.isUndefined(isReDrew)) {
    params['isReDrew'] = isReDrew;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageTransactionConsumptionExportMethod, params);
  } else {
    return Rpc.get(RpcSDKManageTransactionConsumptionExportMethod, params);
  }
}
