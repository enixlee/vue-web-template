/**
 * Created by Generator.
 * Author: Generator
 * description: 注册商户的会员
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMemberRegisterMerchantMemberMethod = '/sdkmanage/member/register_merchant_member';

export const RpcSDKManageMemberRegisterMerchantMemberRpcType = 'system';

/**
 *
 * @param cellphone cellphone 手机号
 * @param merchantNo merchantNo 添加商户会员的商户
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMemberRegisterMerchantMember (
  cellphone,
  merchantNo) {
  tc.typeCheckCellphone(cellphone, false);
  let params = {};
  if (!lodash.isNull(cellphone) && !lodash.isUndefined(cellphone)) {
    params['cellphone'] = cellphone;
  }
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMemberRegisterMerchantMemberMethod, params);
  } else {
    return Rpc.get(RpcSDKManageMemberRegisterMerchantMemberMethod, params);
  }
}
