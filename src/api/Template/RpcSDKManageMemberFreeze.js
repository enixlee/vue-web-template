/**
 * Created by Generator.
 * Author: Generator
 * description: 冻结用户
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMemberFreezeMethod = '/sdkmanage/member/freeze';

export const RpcSDKManageMemberFreezeRpcType = 'system';

/**
 *
 * @param memberId memberId 会员ID
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMemberFreeze (
  memberId) {
  let params = {};
  if (!lodash.isNull(memberId) && !lodash.isUndefined(memberId)) {
    params['memberId'] = memberId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMemberFreezeMethod, params);
  } else {
    return Rpc.get(RpcSDKManageMemberFreezeMethod, params);
  }
}
