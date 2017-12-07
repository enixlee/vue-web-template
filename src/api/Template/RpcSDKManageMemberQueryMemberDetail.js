/**
 * Created by Generator.
 * Author: Generator
 * description: 会员详情
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMemberQueryMemberDetailMethod = '/sdkmanage/member/query_member_detail';

export const RpcSDKManageMemberQueryMemberDetailRpcType = 'system';

/**
 *
 * @param memberId memberId 会员id
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMemberQueryMemberDetail (
  memberId) {
  let params = {};
  if (!lodash.isNull(memberId) && !lodash.isUndefined(memberId)) {
    params['memberId'] = memberId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMemberQueryMemberDetailMethod, params);
  } else {
    return Rpc.get(RpcSDKManageMemberQueryMemberDetailMethod, params);
  }
}
