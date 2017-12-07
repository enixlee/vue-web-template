/**
 * Created by Generator.
 * Author: Generator
 * description: 修改用户小额免密上限
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMemberPaymentSetLittleFeeFreePasswordLimitMethod = '/sdkmanage/member/payment/modify_little_fee_free_password_limit';

export const RpcSDKManageMemberPaymentSetLittleFeeFreePasswordLimitRpcType = 'system';

/**
 *
 * @param memberId memberId 会员ID
 * @param highestFeeOfFreePwd int 小额免密上限
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMemberPaymentSetLittleFeeFreePasswordLimit (
  memberId,
  highestFeeOfFreePwd) {
  tc.typeCheckNumber(highestFeeOfFreePwd, null, null, false);
  let params = {};
  if (!lodash.isNull(memberId) && !lodash.isUndefined(memberId)) {
    params['memberId'] = memberId;
  }
  if (!lodash.isNull(highestFeeOfFreePwd) && !lodash.isUndefined(highestFeeOfFreePwd)) {
    params['highestFeeOfFreePwd'] = highestFeeOfFreePwd;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMemberPaymentSetLittleFeeFreePasswordLimitMethod, params);
  } else {
    return Rpc.get(RpcSDKManageMemberPaymentSetLittleFeeFreePasswordLimitMethod, params);
  }
}
