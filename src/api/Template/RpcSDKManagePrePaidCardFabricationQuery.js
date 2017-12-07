/**
 * Created by Generator.
 * Author: Generator
 * description: 查询制卡申请
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePrePaidCardFabricationQueryMethod = '/sdkmanage/prepaidcard/fabrication/query';

export const RpcSDKManagePrePaidCardFabricationQueryRpcType = 'system';

/**
 *
 * @param fabricationBatchId |null string 制卡批次号
 * @param merchantNo |null merchantNo 商户号
 * @param cardBin |null cardBin cardBin号
 * @param cardTypeId |null bigint 卡种ID
 * @param cardBinType |null json 数组格式，卡种类型0实卡1虚卡
 * @param status |null json 数组格式
 * @param pageIndex |null int 分页号
 * @param pageCount |null int 页面显示数量
 * @param sortBy |null int 排序规则0:商户号1：制卡状态2：生成时间
 * @param desc |null int 0：降序1:升序
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePrePaidCardFabricationQuery (
  fabricationBatchId = null,
  merchantNo = null,
  cardBin = null,
  cardTypeId = null,
  cardBinType = null,
  status = null,
  pageIndex = 1,
  pageCount = 50,
  sortBy = 0,
  desc = 0) {
  tc.typeCheckString(fabricationBatchId, 1, 32, true);
  tc.typeCheckJsonArrayChoice(cardBinType, [0, 1], true);
  tc.typeCheckJsonArrayChoice(status, [0, 1, 2, 3], true);
  tc.typeCheckNumber(pageIndex, 1, null, true);
  tc.typeCheckNumber(pageCount, 1, 50, true);
  tc.typeCheckChoice(sortBy, [0, 1, 2], true);
  tc.typeCheckChoice(desc, [0, 1], true);
  let params = {};
  if (!lodash.isNull(fabricationBatchId) && !lodash.isUndefined(fabricationBatchId)) {
    params['fabricationBatchId'] = fabricationBatchId;
  }
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(cardBin) && !lodash.isUndefined(cardBin)) {
    params['cardBin'] = cardBin;
  }
  if (!lodash.isNull(cardTypeId) && !lodash.isUndefined(cardTypeId)) {
    params['cardTypeId'] = cardTypeId;
  }
  if (!lodash.isNull(cardBinType) && !lodash.isUndefined(cardBinType)) {
    params['cardBinType'] = cardBinType;
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
    return Rpc.post(RpcSDKManagePrePaidCardFabricationQueryMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePrePaidCardFabricationQueryMethod, params);
  }
}
