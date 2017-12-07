/**
 * Created by Generator.
 * Author: Generator
 * description: 添加
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePaymentPosAddMethod = '/sdkmanage/payment/pos/add';

export const RpcSDKManagePaymentPosAddRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @param terminalType int 终端类型1,2,3,4
 * @param terminalMerchantNo bigint POS机商户号
 * @param safeTerminalNo string 安全模块编号
 * @param prepaidTerminalNo string 预付卡终端编号
 * @param bankTerminalNo string 银行卡终端编号
 * @param peoplePayTerminalNo string 全民付终端
 * @param shopPayTerminalNo string 购物优惠终端码
 * @param snCode string sn码
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePaymentPosAdd (
  merchantNo,
  terminalType,
  terminalMerchantNo,
  safeTerminalNo,
  prepaidTerminalNo,
  bankTerminalNo,
  peoplePayTerminalNo,
  shopPayTerminalNo,
  snCode) {
  tc.typeCheckChoice(terminalType, [0, 1, 2, 3, 4], false);
  tc.typeCheckString(safeTerminalNo, null, 32, false);
  tc.typeCheckString(prepaidTerminalNo, null, 32, false);
  tc.typeCheckString(bankTerminalNo, null, 32, false);
  tc.typeCheckString(peoplePayTerminalNo, null, 32, false);
  tc.typeCheckString(shopPayTerminalNo, null, 32, false);
  tc.typeCheckString(snCode, null, 32, false);
  let params = {};
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
    return Rpc.post(RpcSDKManagePaymentPosAddMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePaymentPosAddMethod, params);
  }
}
