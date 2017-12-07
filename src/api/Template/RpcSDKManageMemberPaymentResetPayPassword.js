/**
 * Created by Generator.
 * Author: Generator
 * description: 重置支付密码
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMemberPaymentResetPayPasswordMethod = '/sdkmanage/member/payment/reset_pay_password';

export const RpcSDKManageMemberPaymentResetPayPasswordRpcType = 'client';

/**
 *
 * @param memberId memberId 会员id
 * @param password md5 用户密码md5以后的密码,必选，字符串型
 * @param cellphoneVerifyCode number_verify_code 手机验证码，必选，字符串型
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMemberPaymentResetPayPassword (
  memberId,
  password,
  cellphoneVerifyCode) {
  tc.typeCheckMd5(password, false);
  let params = {};
  if (!lodash.isNull(memberId) && !lodash.isUndefined(memberId)) {
    params['memberId'] = memberId;
  }
  if (!lodash.isNull(password) && !lodash.isUndefined(password)) {
    params['password'] = password;
  }
  if (!lodash.isNull(cellphoneVerifyCode) && !lodash.isUndefined(cellphoneVerifyCode)) {
    params['cellphoneVerifyCode'] = cellphoneVerifyCode;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMemberPaymentResetPayPasswordMethod, params);
  } else {
    return Rpc.get(RpcSDKManageMemberPaymentResetPayPasswordMethod, params);
  }
}
