/**
 * Created by Generator.
 * Author: Generator
 * description: 导出商户预存金额的充值记录
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageQuotaTransactionRechargeExportMethod = '/sdk_manage/v2/quota/transaction_recharge_export';

export const RpcSDKManageQuotaTransactionRechargeExportRpcType = 'system';

/**
 *
 * @param merchantName |null string 商户名称
 * @param recordId |null string 交易单号
 * @param operateTimeBegin |null datetime 交易起始时间
 * @param operateTimeEnd |null datetime 交易结束时间
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageQuotaTransactionRechargeExport (
  merchantName = null,
  recordId = null,
  operateTimeBegin = null,
  operateTimeEnd = null) {
  tc.typeCheckString(merchantName, null, 255, true);
  tc.typeCheckString(recordId, null, 255, true);
  tc.typeCheckDateString(operateTimeBegin, true);
  tc.typeCheckDateString(operateTimeEnd, true);
  let params = {};
  if (!lodash.isNull(merchantName) && !lodash.isUndefined(merchantName)) {
    params['merchantName'] = merchantName;
  }
  if (!lodash.isNull(recordId) && !lodash.isUndefined(recordId)) {
    params['recordId'] = recordId;
  }
  if (!lodash.isNull(operateTimeBegin) && !lodash.isUndefined(operateTimeBegin)) {
    params['operateTimeBegin'] = operateTimeBegin;
  }
  if (!lodash.isNull(operateTimeEnd) && !lodash.isUndefined(operateTimeEnd)) {
    params['operateTimeEnd'] = operateTimeEnd;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageQuotaTransactionRechargeExportMethod, params);
  } else {
    let mockEngine = Vue.prototype.getPlugin('RpcMockEngine');
    if (Vue.prototype.getPlugin('lodash').isObject(mockEngine)) {
      let data = mockEngine[RpcSDKManageQuotaTransactionRechargeExportMethod];
      if (Vue.prototype.getPlugin('lodash').isObject(data)) {
        return new Promise(function (resolve, reject) {
          let rpcResult = Vue.prototype.getPlugin('RpcCommandResultMaker')(
            {
              request: {},
              status: 200,
              config: {},
              data: {
                command_name: RpcSDKManageQuotaTransactionRechargeExportMethod,
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
        return Rpc.get(RpcSDKManageQuotaTransactionRechargeExportMethod, params);
      }
    }
  }
}
