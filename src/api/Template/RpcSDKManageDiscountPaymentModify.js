/**
 * Created by Generator.
 * Author: Generator
 * description: 折扣验证折扣修改
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageDiscountPaymentModifyMethod = '/sdkmanage/discount/discount_payment/modify';

export const RpcSDKManageDiscountPaymentModifyRpcType = 'system';

/**
 *
 * @param discountID bigint 折扣id
 * @param miniPayMemberDiscountRate int 迷你付会员折扣比例,万分比
 * @param originMemberDiscountRate int 原始会员折扣比例,万分比
 * @param normalMemberDiscountRate int 迷你付会员折扣比例,万分比
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageDiscountPaymentModify (
  discountID,
  miniPayMemberDiscountRate,
  originMemberDiscountRate,
  normalMemberDiscountRate) {
  tc.typeCheckNumber(miniPayMemberDiscountRate, 0, 10000, false);
  tc.typeCheckNumber(originMemberDiscountRate, 0, 10000, false);
  tc.typeCheckNumber(normalMemberDiscountRate, 0, 10000, false);
  let params = {};
  if (!lodash.isNull(discountID) && !lodash.isUndefined(discountID)) {
    params['discountID'] = discountID;
  }
  if (!lodash.isNull(miniPayMemberDiscountRate) && !lodash.isUndefined(miniPayMemberDiscountRate)) {
    params['miniPayMemberDiscountRate'] = miniPayMemberDiscountRate;
  }
  if (!lodash.isNull(originMemberDiscountRate) && !lodash.isUndefined(originMemberDiscountRate)) {
    params['originMemberDiscountRate'] = originMemberDiscountRate;
  }
  if (!lodash.isNull(normalMemberDiscountRate) && !lodash.isUndefined(normalMemberDiscountRate)) {
    params['normalMemberDiscountRate'] = normalMemberDiscountRate;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageDiscountPaymentModifyMethod, params);
  } else {
    return Rpc.get(RpcSDKManageDiscountPaymentModifyMethod, params);
  }
}
