/**
 * Created by Generator.
 * Author: Generator
 * description: 添加
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageProfitSharingSalesmanAddMethod = '/sdkmanage/sharing_profit_salesman/add';

export const RpcSDKManageProfitSharingSalesmanAddRpcType = 'system';

/**
 *
 * @param merchantNO merchantNo 商户号
 * @param profitSharingRate ratio 分利比率，万分比
 * @param memberId memberId 会员号
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageProfitSharingSalesmanAdd (
  merchantNO,
  profitSharingRate,
  memberId) {
  let params = {};
  if (!lodash.isNull(merchantNO) && !lodash.isUndefined(merchantNO)) {
    params['merchantNO'] = merchantNO;
  }
  if (!lodash.isNull(profitSharingRate) && !lodash.isUndefined(profitSharingRate)) {
    params['profitSharingRate'] = profitSharingRate;
  }
  if (!lodash.isNull(memberId) && !lodash.isUndefined(memberId)) {
    params['memberId'] = memberId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageProfitSharingSalesmanAddMethod, params);
  } else {
    return Rpc.get(RpcSDKManageProfitSharingSalesmanAddMethod, params);
  }
}
