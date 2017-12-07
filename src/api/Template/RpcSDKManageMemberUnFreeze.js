/**
 * Created by Generator.
 * Author: Generator
 * description: 解冻用户
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMemberUnFreezeMethod = '/sdkmanage/member/unfreeze';

export const RpcSDKManageMemberUnFreezeRpcType = 'system';

/**
 *
 * @param memberId memberId 会员ID
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMemberUnFreeze (
  memberId) {
  let params = {};
  if (!lodash.isNull(memberId) && !lodash.isUndefined(memberId)) {
    params['memberId'] = memberId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMemberUnFreezeMethod, params);
  } else {
    return Rpc.get(RpcSDKManageMemberUnFreezeMethod, params);
  }
}
