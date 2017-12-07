/**
 * Created by Generator.
 * Author: Generator
 * description: 修改会员的来源渠道
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMemberMerchantAccountModifyMemberGenerateChannelMethod = '/sdkmanage/member/merchant_account/modify_member_channel';

export const RpcSDKManageMemberMerchantAccountModifyMemberGenerateChannelRpcType = 'system';

/**
 *
 * @param memberId memberId 会员id
 * @param merchantNo merchantNo 商户号
 * @param channel int 渠道:0,迷你付平台1,产业化推广平台2,业务员3,商户(商户自己的原始会员)
 * @param isMerchantOriginMember int 是否是商户的原始会员
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMemberMerchantAccountModifyMemberGenerateChannel (
  memberId,
  merchantNo,
  channel,
  isMerchantOriginMember) {
  tc.typeCheckChoice(channel, [0, 1, 2, 3], false);
  tc.typeCheckChoice(isMerchantOriginMember, [0, 1], false);
  let params = {};
  if (!lodash.isNull(memberId) && !lodash.isUndefined(memberId)) {
    params['memberId'] = memberId;
  }
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(channel) && !lodash.isUndefined(channel)) {
    params['channel'] = channel;
  }
  if (!lodash.isNull(isMerchantOriginMember) && !lodash.isUndefined(isMerchantOriginMember)) {
    params['isMerchantOriginMember'] = isMerchantOriginMember;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMemberMerchantAccountModifyMemberGenerateChannelMethod, params);
  } else {
    return Rpc.get(RpcSDKManageMemberMerchantAccountModifyMemberGenerateChannelMethod, params);
  }
}
