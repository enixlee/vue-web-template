/**
 * Created by Generator.
 * Author: Generator
 * description: 编辑
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePaymentPosModifyMethod = '/sdkmanage/payment/pos/modify';

export const RpcSDKManagePaymentPosModifyRpcType = 'system';

/**
 *
 * @param id bigint pos机编号
 * @param merchantNo merchantNo 商户号
 * @param terminalType |null int 终端类型1,2,3,4
 * @param terminalMerchantNo |null bigint POS机商户号
 * @param safeTerminalNo |null string 安全模块编号
 * @param prepaidTerminalNo |null string 预付卡终端编号
 * @param bankTerminalNo |null string 银行卡终端编号
 * @param peoplePayTerminalNo |null string 全民付终端
 * @param shopPayTerminalNo |null string 购物优惠终端码
 * @param snCode |null string sn码
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePaymentPosModify (
  id,
  merchantNo,
  terminalType = null,
  terminalMerchantNo = null,
  safeTerminalNo = null,
  prepaidTerminalNo = null,
  bankTerminalNo = null,
  peoplePayTerminalNo = null,
  shopPayTerminalNo = null,
  snCode = null) {
  tc.typeCheckChoice(terminalType, [0, 1, 2, 3, 4], true);
  tc.typeCheckString(safeTerminalNo, null, 32, true);
  tc.typeCheckString(prepaidTerminalNo, null, 32, true);
  tc.typeCheckString(bankTerminalNo, null, 32, true);
  tc.typeCheckString(peoplePayTerminalNo, null, 32, true);
  tc.typeCheckString(shopPayTerminalNo, null, 32, true);
  tc.typeCheckString(snCode, null, 32, true);
  let params = {};
  if (!lodash.isNull(id) && !lodash.isUndefined(id)) {
    params['id'] = id;
  }
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(terminalType) && !lodash.isUndefined(terminalType)) {
    params['terminalType'] = terminalType;
  }
  if (!lodash.isNull(terminalMerchantNo) && !lodash.isUndefined(terminalMerchantNo)) {
    params['terminalMerchantNo'] = terminalMerchantNo;
  }
  if (!lodash.isNull(safeTerminalNo) && !lodash.isUndefined(safeTerminalNo)) {
    params['safeTerminalNo'] = safeTerminalNo;
  }
  if (!lodash.isNull(prepaidTerminalNo) && !lodash.isUndefined(prepaidTerminalNo)) {
    params['prepaidTerminalNo'] = prepaidTerminalNo;
  }
  if (!lodash.isNull(bankTerminalNo) && !lodash.isUndefined(bankTerminalNo)) {
    params['bankTerminalNo'] = bankTerminalNo;
  }
  if (!lodash.isNull(peoplePayTerminalNo) && !lodash.isUndefined(peoplePayTerminalNo)) {
    params['peoplePayTerminalNo'] = peoplePayTerminalNo;
  }
  if (!lodash.isNull(shopPayTerminalNo) && !lodash.isUndefined(shopPayTerminalNo)) {
    params['shopPayTerminalNo'] = shopPayTerminalNo;
  }
  if (!lodash.isNull(snCode) && !lodash.isUndefined(snCode)) {
    params['snCode'] = snCode;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePaymentPosModifyMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePaymentPosModifyMethod, params);
  }
}
