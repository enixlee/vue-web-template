/**
 * Created by Generator.
 * Author: Generator
 * description: 删除用户
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageUserDeleteMethod = '/sdkmanage/user/delete';

export const RpcSDKManageUserDeleteRpcType = 'system';

/**
 *
 * @param userId bigint 用户id
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageUserDelete (
  userId) {
  let params = {};
  if (!lodash.isNull(userId) && !lodash.isUndefined(userId)) {
    params['userId'] = userId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageUserDeleteMethod, params);
  } else {
    return Rpc.get(RpcSDKManageUserDeleteMethod, params);
  }
}
