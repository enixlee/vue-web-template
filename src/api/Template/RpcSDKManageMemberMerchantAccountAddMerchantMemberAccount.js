/**
 * Created by Generator.
 * Author: Generator
 * description: 添加商户会员账户
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMemberMerchantAccountAddMerchantMemberAccountMethod = '/sdkmanage/member/merchant_account/add';

export const RpcSDKManageMemberMerchantAccountAddMerchantMemberAccountRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @param memberId memberId 会员ID
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMemberMerchantAccountAddMerchantMemberAccount (
  merchantNo,
  memberId) {
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(memberId) && !lodash.isUndefined(memberId)) {
    params['memberId'] = memberId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMemberMerchantAccountAddMerchantMemberAccountMethod, params);
  } else {
    return Rpc.get(RpcSDKManageMemberMerchantAccountAddMerchantMemberAccountMethod, params);
  }
}
