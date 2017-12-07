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

export const RpcSDKManagePermissionDeleteMethod = '/sdkmanage/permission/delete';

export const RpcSDKManagePermissionDeleteRpcType = 'system';

/**
 *
 * @param permissionId int 权限id
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePermissionDelete (
  permissionId) {
  tc.typeCheckNumber(permissionId, null, null, false);
  let params = {};
  if (!lodash.isNull(permissionId) && !lodash.isUndefined(permissionId)) {
    params['permissionId'] = permissionId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePermissionDeleteMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePermissionDeleteMethod, params);
  }
}
