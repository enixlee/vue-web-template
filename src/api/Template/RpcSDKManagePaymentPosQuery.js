/**
 * Created by Generator.
 * Author: Generator
 * description: pos机数据查询
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePaymentPosQueryMethod = '/sdkmanage/payment/pos/query';

export const RpcSDKManagePaymentPosQueryRpcType = 'system';

/**
 *
 * @param merchantNo |null merchantNo 商户号
 * @param terminalType |null json 数组格式，终端类型1,2,3,4
 * @param terminalMerchantNo |null bigint POS机商户号
 * @param safeTerminalNo |null string 安全模块编号
 * @param prepaidTerminalNo |null string 预付卡终端编号
 * @param bankTerminalNo |null string 银行卡终端编号
 * @param peoplePayTerminalNo |null string 全民付终端
 * @param shopPayTerminalNo |null string 购物优惠终端码
 * @param snCode |null string sn码
 * @param status |null json 数组格式，状态
 * @param pageIndex |null int 分页号
 * @param pageCount |null int 页面显示数量
 * @param sortBy |null int 排序规则0:
 * @param desc |null int 0：降序1:升序
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePaymentPosQuery (
  merchantNo = null,
  terminalType = null,
  terminalMerchantNo = null,
  safeTerminalNo = null,
  prepaidTerminalNo = null,
  bankTerminalNo = null,
  peoplePayTerminalNo = null,
  shopPayTerminalNo = null,
  snCode = null,
  status = null,
  pageIndex = 1,
  pageCount = 50,
  sortBy = 0,
  desc = 0) {
  tc.typeCheckJsonArrayChoice(terminalType, [0, 1, 2, 3, 4], true);
  tc.typeCheckString(safeTerminalNo, null, 32, true);
  tc.typeCheckString(prepaidTerminalNo, null, 32, true);
  tc.typeCheckString(bankTerminalNo, null, 32, true);
  tc.typeCheckString(peoplePayTerminalNo, null, 32, true);
  tc.typeCheckString(shopPayTerminalNo, null, 32, true);
  tc.typeCheckString(snCode, null, 32, true);
  tc.typeCheckJsonArrayChoice(status, [0, 1, 2, 3], true);
  tc.typeCheckNumber(pageIndex, 1, null, true);
  tc.typeCheckNumber(pageCount, 1, 50, true);
  tc.typeCheckChoice(sortBy, [0], true);
  tc.typeCheckChoice(desc, [0, 1], true);
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
  if (!lodash.isNull(status) && !lodash.isUndefined(status)) {
    params['status'] = status;
  }
  if (!lodash.isNull(pageIndex) && !lodash.isUndefined(pageIndex)) {
    params['pageIndex'] = pageIndex;
  }
  if (!lodash.isNull(pageCount) && !lodash.isUndefined(pageCount)) {
    params['pageCount'] = pageCount;
  }
  if (!lodash.isNull(sortBy) && !lodash.isUndefined(sortBy)) {
    params['sortBy'] = sortBy;
  }
  if (!lodash.isNull(desc) && !lodash.isUndefined(desc)) {
    params['desc'] = desc;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePaymentPosQueryMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePaymentPosQueryMethod, params);
  }
}
