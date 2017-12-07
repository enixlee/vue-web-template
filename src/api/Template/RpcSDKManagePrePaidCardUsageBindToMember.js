/**
 * Created by Generator.
 * Author: Generator
 * description: 绑卡到会员
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePrePaidCardUsageBindToMemberMethod = '/sdkmanage/prepaidcard/usage/bind_to_member';

export const RpcSDKManagePrePaidCardUsageBindToMemberRpcType = 'system';

/**
 *
 * @param prePaidCardId prePaidCardNo 预付卡
 * @param memberId memberId 会员Id
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePrePaidCardUsageBindToMember (
  prePaidCardId,
  memberId) {
  let params = {};
  if (!lodash.isNull(prePaidCardId) && !lodash.isUndefined(prePaidCardId)) {
    params['prePaidCardId'] = prePaidCardId;
  }
  if (!lodash.isNull(memberId) && !lodash.isUndefined(memberId)) {
    params['memberId'] = memberId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePrePaidCardUsageBindToMemberMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePrePaidCardUsageBindToMemberMethod, params);
  }
}
