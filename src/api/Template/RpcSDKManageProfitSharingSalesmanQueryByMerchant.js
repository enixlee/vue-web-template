/**
 * Created by Generator.
 * Author: Generator
 * description: 查询
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageProfitSharingSalesmanQueryByMerchantMethod = '/sdkmanage/sharing_profit_salesman/query_by_merchant';

export const RpcSDKManageProfitSharingSalesmanQueryByMerchantRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @param pageIdx |null int 页码
 * @param pageNum |null int 每页数量
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageProfitSharingSalesmanQueryByMerchant (
  merchantNo,
  pageIdx = 1,
  pageNum = 50) {
  tc.typeCheckNumber(pageIdx, 1, null, true);
  tc.typeCheckNumber(pageNum, 1, null, true);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(pageIdx) && !lodash.isUndefined(pageIdx)) {
    params['pageIdx'] = pageIdx;
  }
  if (!lodash.isNull(pageNum) && !lodash.isUndefined(pageNum)) {
    params['pageNum'] = pageNum;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageProfitSharingSalesmanQueryByMerchantMethod, params);
  } else {
    return Rpc.get(RpcSDKManageProfitSharingSalesmanQueryByMerchantMethod, params);
  }
}
