/**
 * Created by Generator.
 * Author: Generator
 * description: 新建商户的各种支付编号
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMerchantPaymentIDAddMethod = '/sdkmanage/merchant/payment_id/add';

export const RpcSDKManageMerchantPaymentIDAddRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @param allPeoplePayId |null string 商户全民付编号
 * @param shopPreferentialId |null string 商户购物优惠编号
 * @param bankCardId |null string 商户银行卡编号
 * @param prePaidCardId |null string 商户预付卡编号
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMerchantPaymentIDAdd (
  merchantNo,
  allPeoplePayId = null,
  shopPreferentialId = null,
  bankCardId = null,
  prePaidCardId = null) {
  tc.typeCheckString(allPeoplePayId, 8, 16, true);
  tc.typeCheckString(shopPreferentialId, 8, 16, true);
  tc.typeCheckString(bankCardId, 8, 16, true);
  tc.typeCheckString(prePaidCardId, 8, 16, true);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(allPeoplePayId) && !lodash.isUndefined(allPeoplePayId)) {
    params['allPeoplePayId'] = allPeoplePayId;
  }
  if (!lodash.isNull(shopPreferentialId) && !lodash.isUndefined(shopPreferentialId)) {
    params['shopPreferentialId'] = shopPreferentialId;
  }
  if (!lodash.isNull(bankCardId) && !lodash.isUndefined(bankCardId)) {
    params['bankCardId'] = bankCardId;
  }
  if (!lodash.isNull(prePaidCardId) && !lodash.isUndefined(prePaidCardId)) {
    params['prePaidCardId'] = prePaidCardId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMerchantPaymentIDAddMethod, params);
  } else {
    return Rpc.get(RpcSDKManageMerchantPaymentIDAddMethod, params);
  }
}
