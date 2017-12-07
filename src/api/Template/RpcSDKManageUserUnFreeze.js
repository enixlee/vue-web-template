/**
 * Created by Generator.
 * Author: Generator
 * description: 解冻
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageUserUnFreezeMethod = '/sdkmanage/user/unfreeze';

export const RpcSDKManageUserUnFreezeRpcType = 'system';

/**
 *
 * @param userId bigint 用户id
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageUserUnFreeze (
  userId) {
  let params = {};
  if (!lodash.isNull(userId) && !lodash.isUndefined(userId)) {
    params['userId'] = userId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageUserUnFreezeMethod, params);
  } else {
    return Rpc.get(RpcSDKManageUserUnFreezeMethod, params);
  }
}
