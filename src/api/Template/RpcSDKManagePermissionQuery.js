/**
 * Created by Generator.
 * Author: Generator
 * description: 查询
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePermissionQueryMethod = '/sdkmanage/permission/query';

export const RpcSDKManagePermissionQueryRpcType = 'system';

/**
 *
 * @param permissionId |null bigint 权限关键字
 * @param permissionKey |null string 权限关键字
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePermissionQuery (
  permissionId = null,
  permissionKey = null) {
  tc.typeCheckString(permissionKey, 0, 32, true);
  let params = {};
  if (!lodash.isNull(permissionId) && !lodash.isUndefined(permissionId)) {
    params['permissionId'] = permissionId;
  }
  if (!lodash.isNull(permissionKey) && !lodash.isUndefined(permissionKey)) {
    params['permissionKey'] = permissionKey;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePermissionQueryMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePermissionQueryMethod, params);
  }
}
