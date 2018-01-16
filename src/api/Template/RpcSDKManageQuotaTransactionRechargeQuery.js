/**
 * Created by Generator.
 * Author: Generator
 * description: 查询商户预存金额的消费记录
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageQuotaTransactionRechargeQueryMethod = '/sdk_manage/v2/quota/transaction_recharge_query';

export const RpcSDKManageQuotaTransactionRechargeQueryRpcType = 'system';

/**
 *
 * @param merchantName |null string 商户名称
 * @param recordId |null string 交易单号
 * @param operateTimeBegin |null datetime 交易起始时间
 * @param operateTimeEnd |null datetime 交易结束时间
 * @param pageIndex |null int 分页号
 * @param pageCount |null int 页面显示数量
 * @param sortBy |null int 排序规则0:按交易时间排序,1:按交易单号排序
 * @param desc |null int 0：降序1:升序
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageQuotaTransactionRechargeQuery (
  merchantName = null,
  recordId = null,
  operateTimeBegin = null,
  operateTimeEnd = null,
  pageIndex = 1,
  pageCount = 30,
  sortBy = 0,
  desc = 0) {
  tc.typeCheckString(merchantName, null, 255, true);
  tc.typeCheckString(recordId, null, 255, true);
  tc.typeCheckDateString(operateTimeBegin, true);
  tc.typeCheckDateString(operateTimeEnd, true);
  tc.typeCheckNumber(pageIndex, 1, null, true);
  tc.typeCheckNumber(pageCount, 1, 100, true);
  tc.typeCheckChoice(sortBy, [0, 1], true);
  tc.typeCheckChoice(desc, [0, 1], true);
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
  if (!lodash.isNull(pageIndex) && !lodash.isUndefined(pageIndex)) {
    params['pageIndex'] = pageIndex;
  }
  if (!lodash.isNull(pageCount) && !lodash.isUndefined(pageCount)) {
    params['pageCount'] = pageCount;
  }
  if (!lodash.isNull(sortBy) && !lodash.isUndefined(sortBy)) {
    params['sortBy'] = sortBy;
  }
  if (!lodash.isNull(desc) && !lodash.isUndefined(desc)) {
    params['desc'] = desc;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageQuotaTransactionRechargeQueryMethod, params);
  } else {
    let mockEngine = Vue.prototype.getPlugin('RpcMockEngine');
    if (Vue.prototype.getPlugin('lodash').isObject(mockEngine)) {
      let data = mockEngine[RpcSDKManageQuotaTransactionRechargeQueryMethod];
      if (Vue.prototype.getPlugin('lodash').isObject(data)) {
        return new Promise(function (resolve, reject) {
          let rpcResult = Vue.prototype.getPlugin('RpcCommandResultMaker')(
            {
              request: {},
              status: 200,
              config: {},
              data: {
                command_name: RpcSDKManageQuotaTransactionRechargeQueryMethod,
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
        return Rpc.get(RpcSDKManageQuotaTransactionRechargeQueryMethod, params);
      }
    }
  }
}
