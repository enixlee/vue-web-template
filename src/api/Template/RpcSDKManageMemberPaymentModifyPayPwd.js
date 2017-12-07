/**
 * Created by Generator.
 * Author: Generator
 * description: 修改用户支付密码
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMemberPaymentModifyPayPwdMethod = '/sdkmanage/member/payment/modify_pay_password';

export const RpcSDKManageMemberPaymentModifyPayPwdRpcType = 'system';

/**
 *
 * @param memberId memberId 会员ID
 * @param payPassword md5 支付密码
 * @param oldPayPassword |null md5 旧的交易密码，首次设置时为空
 * @param verifyCode string 验证码，4位字符
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMemberPaymentModifyPayPwd (
  memberId,
  payPassword,
  oldPayPassword = null,
  verifyCode) {
  tc.typeCheckMd5(payPassword, false);
  tc.typeCheckMd5(oldPayPassword, true);
  tc.typeCheckString(verifyCode, 4, 4, false);
  let params = {};
  if (!lodash.isNull(memberId) && !lodash.isUndefined(memberId)) {
    params['memberId'] = memberId;
  }
  if (!lodash.isNull(payPassword) && !lodash.isUndefined(payPassword)) {
    params['payPassword'] = payPassword;
  }
  if (!lodash.isNull(oldPayPassword) && !lodash.isUndefined(oldPayPassword)) {
    params['oldPayPassword'] = oldPayPassword;
  }
  if (!lodash.isNull(verifyCode) && !lodash.isUndefined(verifyCode)) {
    params['verifyCode'] = verifyCode;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMemberPaymentModifyPayPwdMethod, params);
  } else {
    return Rpc.get(RpcSDKManageMemberPaymentModifyPayPwdMethod, params);
  }
}
