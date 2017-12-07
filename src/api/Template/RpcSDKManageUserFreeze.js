/**
 * Created by Generator.
 * Author: Generator
 * description: 冻结
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageUserFreezeMethod = '/sdkmanage/user/freeze';

export const RpcSDKManageUserFreezeRpcType = 'system';

/**
 *
 * @param userId bigint 用户id
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageUserFreeze (
  userId) {
  let params = {};
  if (!lodash.isNull(userId) && !lodash.isUndefined(userId)) {
    params['userId'] = userId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageUserFreezeMethod, params);
  } else {
    return Rpc.get(RpcSDKManageUserFreezeMethod, params);
  }
}
