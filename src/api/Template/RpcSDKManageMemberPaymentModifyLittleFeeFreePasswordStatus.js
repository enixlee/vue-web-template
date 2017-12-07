/**
 * Created by Generator.
 * Author: Generator
 * description: 修改用户小额免密状态
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMemberPaymentModifyLittleFeeFreePasswordStatusMethod = '/sdkmanage/member/payment/modify_little_fee_free_password_status';

export const RpcSDKManageMemberPaymentModifyLittleFeeFreePasswordStatusRpcType = 'system';

/**
 *
 * @param memberId memberId 会员ID
 * @param freePwdOfLittleMoneyFlag int 小额免密标志，0：关闭，1：开通
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMemberPaymentModifyLittleFeeFreePasswordStatus (
  memberId,
  freePwdOfLittleMoneyFlag) {
  tc.typeCheckChoice(freePwdOfLittleMoneyFlag, [0, 1], false);
  let params = {};
  if (!lodash.isNull(memberId) && !lodash.isUndefined(memberId)) {
    params['memberId'] = memberId;
  }
  if (!lodash.isNull(freePwdOfLittleMoneyFlag) && !lodash.isUndefined(freePwdOfLittleMoneyFlag)) {
    params['freePwdOfLittleMoneyFlag'] = freePwdOfLittleMoneyFlag;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMemberPaymentModifyLittleFeeFreePasswordStatusMethod, params);
  } else {
    return Rpc.get(RpcSDKManageMemberPaymentModifyLittleFeeFreePasswordStatusMethod, params);
  }
}
