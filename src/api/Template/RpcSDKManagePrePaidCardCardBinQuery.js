/**
 * Created by Generator.
 * Author: Generator
 * description: 申请实卡CardBin
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePrePaidCardCardBinQueryMethod = '/sdkmanage/prepaidcard/cardbin/query';

export const RpcSDKManagePrePaidCardCardBinQueryRpcType = 'system';

/**
 *
 * @param merchantNo |null merchantNo 商户号
 * @param cardBin |null cardBin cardbin号
 * @param cardBinType |null json 数组格式，0：实卡1：虚卡
 * @param sortBy |null int 排序规则0:
 * @param desc |null int 0：降序1:升序
 * @param pageIndex |null int 分页号
 * @param pageCount |null int 页面显示数量
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePrePaidCardCardBinQuery (
  merchantNo = null,
  cardBin = null,
  cardBinType = null,
  sortBy = 0,
  desc = 0,
  pageIndex = 1,
  pageCount = 50) {
  tc.typeCheckJsonArrayChoice(cardBinType, [0, 1], true);
  tc.typeCheckChoice(sortBy, [0], true);
  tc.typeCheckChoice(desc, [0, 1], true);
  tc.typeCheckNumber(pageIndex, 1, null, true);
  tc.typeCheckNumber(pageCount, 1, 50, true);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(cardBin) && !lodash.isUndefined(cardBin)) {
    params['cardBin'] = cardBin;
  }
  if (!lodash.isNull(cardBinType) && !lodash.isUndefined(cardBinType)) {
    params['cardBinType'] = cardBinType;
  }
  if (!lodash.isNull(sortBy) && !lodash.isUndefined(sortBy)) {
    params['sortBy'] = sortBy;
  }
  if (!lodash.isNull(desc) && !lodash.isUndefined(desc)) {
    params['desc'] = desc;
  }
  if (!lodash.isNull(pageIndex) && !lodash.isUndefined(pageIndex)) {
    params['pageIndex'] = pageIndex;
  }
  if (!lodash.isNull(pageCount) && !lodash.isUndefined(pageCount)) {
    params['pageCount'] = pageCount;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePrePaidCardCardBinQueryMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePrePaidCardCardBinQueryMethod, params);
  }
}