/**
 * Created by Generator.
 * Author: Generator
 * description: 查询活动审核
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageReviewActivityQueryMethod = '/sdkmanage/review/activity/query';

export const RpcSDKManageReviewActivityQueryRpcType = 'system';

/**
 *
 * @param ID bigint 分类审核id
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageReviewActivityQuery (
  ID) {
  let params = {};
  if (!lodash.isNull(ID) && !lodash.isUndefined(ID)) {
    params['ID'] = ID;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageReviewActivityQueryMethod, params);
  } else {
    return Rpc.get(RpcSDKManageReviewActivityQueryMethod, params);
  }
}
