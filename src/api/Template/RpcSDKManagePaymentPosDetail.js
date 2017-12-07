/**
 * Created by Generator.
 * Author: Generator
 * description: pos机数详细交易数据
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePaymentPosDetailMethod = '/sdkmanage/payment/pos/detail';

export const RpcSDKManagePaymentPosDetailRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @param ID json 数组格式，pos的id
 * @param startDate datetime 查询开始时间
 * @param endDate datetime 查询结束时间
 * @param tradeType |null tradeType 交易类型
 * @param tradeSubType |null tradeSubType 交易子类型
 * @param pageIndex |null int 分页号
 * @param pageCount |null int 页面显示数量
 * @param sortBy |null int 排序规则0:
 * @param desc |null int 0：降序1:升序
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePaymentPosDetail (
  merchantNo,
  ID,
  startDate,
  endDate,
  tradeType = null,
  tradeSubType = null,
  pageIndex = 1,
  pageCount = 50,
  sortBy = 0,
  desc = 0) {
  tc.typeCheckJsonString(ID, false);
  tc.typeCheckDateString(startDate, false);
  tc.typeCheckDateString(endDate, false);
  tc.typeCheckNumber(pageIndex, 1, null, true);
  tc.typeCheckNumber(pageCount, 1, 50, true);
  tc.typeCheckChoice(sortBy, [0], true);
  tc.typeCheckChoice(desc, [0, 1], true);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(ID) && !lodash.isUndefined(ID)) {
    params['ID'] = ID;
  }
  if (!lodash.isNull(startDate) && !lodash.isUndefined(startDate)) {
    params['startDate'] = startDate;
  }
  if (!lodash.isNull(endDate) && !lodash.isUndefined(endDate)) {
    params['endDate'] = endDate;
  }
  if (!lodash.isNull(tradeType) && !lodash.isUndefined(tradeType)) {
    params['tradeType'] = tradeType;
  }
  if (!lodash.isNull(tradeSubType) && !lodash.isUndefined(tradeSubType)) {
    params['tradeSubType'] = tradeSubType;
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
    return Rpc.post(RpcSDKManagePaymentPosDetailMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePaymentPosDetailMethod, params);
  }
}
