/**
 * Created by Generator.
 * Author: Generator
 * description: 获取权限
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageUserGetPermissionMethod = '/sdkmanage/user/get_permission';

export const RpcSDKManageUserGetPermissionRpcType = 'system';

/**
 *
 * @param userId bigint 用户id
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageUserGetPermission (
  userId) {
  let params = {};
  if (!lodash.isNull(userId) && !lodash.isUndefined(userId)) {
    params['userId'] = userId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageUserGetPermissionMethod, params);
  } else {
    return Rpc.get(RpcSDKManageUserGetPermissionMethod, params);
  }
}
