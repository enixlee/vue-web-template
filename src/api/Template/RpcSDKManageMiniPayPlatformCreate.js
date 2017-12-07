/**
 * Created by Generator.
 * Author: Generator
 * description: 创建迷你付平台商户（初始化调用一次）
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');

export const RpcSDKManageMiniPayPlatformCreateMethod = '/sdkmanage/minipay_platform/create';

export const RpcSDKManageMiniPayPlatformCreateRpcType = 'system';

/**
 *

 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMiniPayPlatformCreate (
) {
  let params = {};

  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMiniPayPlatformCreateMethod, params);
  } else {
    return Rpc.get(RpcSDKManageMiniPayPlatformCreateMethod, params);
  }
}
