/**
 * Created by Generator.
 * Author: Generator
 * description: 删除
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageProfitSharingSalesmanDeleteMethod = '/sdkmanage/sharing_profit_salesman/delete';

export const RpcSDKManageProfitSharingSalesmanDeleteRpcType = 'system';

/**
 *
 * @param id bigint 序号
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageProfitSharingSalesmanDelete (
  id) {
  let params = {};
  if (!lodash.isNull(id) && !lodash.isUndefined(id)) {
    params['id'] = id;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageProfitSharingSalesmanDeleteMethod, params);
  } else {
    return Rpc.get(RpcSDKManageProfitSharingSalesmanDeleteMethod, params);
  }
}
