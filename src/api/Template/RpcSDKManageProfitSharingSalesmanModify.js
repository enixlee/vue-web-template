/**
 * Created by Generator.
 * Author: Generator
 * description: 修改
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageProfitSharingSalesmanModifyMethod = '/sdkmanage/sharing_profit_salesman/modify';

export const RpcSDKManageProfitSharingSalesmanModifyRpcType = 'system';

/**
 *
 * @param id bigint 序号
 * @param profitSharingRate ratio 分利比率，万分比
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageProfitSharingSalesmanModify (
  id,
  profitSharingRate) {
  let params = {};
  if (!lodash.isNull(id) && !lodash.isUndefined(id)) {
    params['id'] = id;
  }
  if (!lodash.isNull(profitSharingRate) && !lodash.isUndefined(profitSharingRate)) {
    params['profitSharingRate'] = profitSharingRate;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageProfitSharingSalesmanModifyMethod, params);
  } else {
    return Rpc.get(RpcSDKManageProfitSharingSalesmanModifyMethod, params);
  }
}
