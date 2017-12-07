/**
 * Created by Generator.
 * Author: Generator
 * description: 登出
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');

export const RpcSDKManageAuthLogoutMethod = '/sdkmanage/auth/logout';

export const RpcSDKManageAuthLogoutRpcType = 'system';

/**
 *

 * @returns {*}
 * @constructor
 */
export function RpcSDKManageAuthLogout (
) {
  let params = {};

  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageAuthLogoutMethod, params);
  } else {
    return Rpc.get(RpcSDKManageAuthLogoutMethod, params);
  }
}
