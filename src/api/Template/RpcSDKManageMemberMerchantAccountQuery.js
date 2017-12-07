/**
 * Created by Generator.
 * Author: Generator
 * description: 会员商户账户
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMemberMerchantAccountQueryMethod = '/sdkmanage/member/merchant_account/query';

export const RpcSDKManageMemberMerchantAccountQueryRpcType = 'system';

/**
 *
 * @param memberId memberId 会员id
 * @param merchantNo merchantNo 商户号
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMemberMerchantAccountQuery (
  memberId,
  merchantNo) {
  let params = {};
  if (!lodash.isNull(memberId) && !lodash.isUndefined(memberId)) {
    params['memberId'] = memberId;
  }
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMemberMerchantAccountQueryMethod, params);
  } else {
    return Rpc.get(RpcSDKManageMemberMerchantAccountQueryMethod, params);
  }
}
