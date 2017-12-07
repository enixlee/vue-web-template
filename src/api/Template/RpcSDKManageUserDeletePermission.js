/**
 * Created by Generator.
 * Author: Generator
 * description: 删除权限
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageUserDeletePermissionMethod = '/sdkmanage/user/delete_permission';

export const RpcSDKManageUserDeletePermissionRpcType = 'system';

/**
 *
 * @param userId bigint 用户id
 * @param permissionId int 权限id
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageUserDeletePermission (
  userId,
  permissionId) {
  tc.typeCheckNumber(permissionId, 0, null, false);
  let params = {};
  if (!lodash.isNull(userId) && !lodash.isUndefined(userId)) {
    params['userId'] = userId;
  }
  if (!lodash.isNull(permissionId) && !lodash.isUndefined(permissionId)) {
    params['permissionId'] = permissionId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageUserDeletePermissionMethod, params);
  } else {
    return Rpc.get(RpcSDKManageUserDeletePermissionMethod, params);
  }
}
