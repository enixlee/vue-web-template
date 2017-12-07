/**
 * Created by Generator.
 * Author: Generator
 * description: 添加权限
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePermissionAddMethod = '/sdkmanage/permission/add';

export const RpcSDKManagePermissionAddRpcType = 'system';

/**
 *
 * @param permissionKey string 权限关键字
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePermissionAdd (
  permissionKey) {
  tc.typeCheckString(permissionKey, 0, 32, false);
  let params = {};
  if (!lodash.isNull(permissionKey) && !lodash.isUndefined(permissionKey)) {
    params['permissionKey'] = permissionKey;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePermissionAddMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePermissionAddMethod, params);
  }
}
