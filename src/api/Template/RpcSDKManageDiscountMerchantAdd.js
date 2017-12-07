/**
 * Created by Generator.
 * Author: Generator
 * description: 商户会员折扣添加
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageDiscountMerchantAddMethod = '/sdkmanage/discount/merchant/add';

export const RpcSDKManageDiscountMerchantAddRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @param miniPayMemberDiscountRate int 迷你付会员折扣比例,万分比
 * @param originMemberDiscountRate int 原始会员折扣比例,万分比
 * @param normalMemberDiscountRate int 迷你付会员折扣比例,万分比
 * @param merchantAccountLevel int 商户会员等级
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageDiscountMerchantAdd (
  merchantNo,
  miniPayMemberDiscountRate,
  originMemberDiscountRate,
  normalMemberDiscountRate,
  merchantAccountLevel) {
  tc.typeCheckNumber(miniPayMemberDiscountRate, 0, 10000, false);
  tc.typeCheckNumber(originMemberDiscountRate, 0, 10000, false);
  tc.typeCheckNumber(normalMemberDiscountRate, 0, 10000, false);
  tc.typeCheckNumber(merchantAccountLevel, 1, null, false);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
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
  if (!lodash.isNull(merchantAccountLevel) && !lodash.isUndefined(merchantAccountLevel)) {
    params['merchantAccountLevel'] = merchantAccountLevel;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageDiscountMerchantAddMethod, params);
  } else {
    return Rpc.get(RpcSDKManageDiscountMerchantAddMethod, params);
  }
}
