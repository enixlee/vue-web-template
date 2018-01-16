/**
 * Created by Generator.
 * Author: Generator
 * description: 导出商户预存金额的消费记录
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageQuotaTransactionConsumeExportMethod = '/sdk_manage/v2/quota/transaction_consume_export';

export const RpcSDKManageQuotaTransactionConsumeExportRpcType = 'system';

/**
 *
 * @param merchantName |null string 商户名称
 * @param tradeFlowOfPaymini |null string 交易单号
 * @param operateTimeBegin |null datetime 交易起始时间
 * @param operateTimeEnd |null datetime 交易结束时间
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageQuotaTransactionConsumeExport (
  merchantName = null,
  tradeFlowOfPaymini = null,
  operateTimeBegin = null,
  operateTimeEnd = null) {
  tc.typeCheckString(merchantName, null, 255, true);
  tc.typeCheckString(tradeFlowOfPaymini, null, 255, true);
  tc.typeCheckDateString(operateTimeBegin, true);
  tc.typeCheckDateString(operateTimeEnd, true);
  let params = {};
  if (!lodash.isNull(merchantName) && !lodash.isUndefined(merchantName)) {
    params['merchantName'] = merchantName;
  }
  if (!lodash.isNull(tradeFlowOfPaymini) && !lodash.isUndefined(tradeFlowOfPaymini)) {
    params['tradeFlowOfPaymini'] = tradeFlowOfPaymini;
  }
  if (!lodash.isNull(operateTimeBegin) && !lodash.isUndefined(operateTimeBegin)) {
    params['operateTimeBegin'] = operateTimeBegin;
  }
  if (!lodash.isNull(operateTimeEnd) && !lodash.isUndefined(operateTimeEnd)) {
    params['operateTimeEnd'] = operateTimeEnd;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageQuotaTransactionConsumeExportMethod, params);
  } else {
    let mockEngine = Vue.prototype.getPlugin('RpcMockEngine');
    if (Vue.prototype.getPlugin('lodash').isObject(mockEngine)) {
      let data = mockEngine[RpcSDKManageQuotaTransactionConsumeExportMethod];
      if (Vue.prototype.getPlugin('lodash').isObject(data)) {
        return new Promise(function (resolve, reject) {
          let rpcResult = Vue.prototype.getPlugin('RpcCommandResultMaker')(
            {
              request: {},
              status: 200,
              config: {},
              data: {
                command_name: RpcSDKManageQuotaTransactionConsumeExportMethod,
                description: 'succ',
                code: 'succ',
                data: data,
                succ: true
              }
            }
          );
          resolve(rpcResult);
        });
      } else {
        return Rpc.get(RpcSDKManageQuotaTransactionConsumeExportMethod, params);
      }
    }
  }
}
