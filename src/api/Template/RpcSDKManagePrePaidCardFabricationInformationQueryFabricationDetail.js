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

export const RpcSDKManagePrePaidCardFabricationInformationQueryFabricationDetailMethod = '/sdkmanage/prepaidcard/fabrication/information/query_fabrication_detail';

export const RpcSDKManagePrePaidCardFabricationInformationQueryFabricationDetailRpcType = 'system';

/**
 *
 * @param prePaidCardId |null prePaidCardNo 卡号
 * @param fabricationBatchId |null string 制卡批次号
 * @param merchantNo |null merchantNo 商户号
 * @param pageIndex |null int 分页号
 * @param pageCount |null int 页面显示数量
 * @param sortBy |null int 排序规则0:
 * @param desc |null int 0：降序1:升序
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePrePaidCardFabricationInformationQueryFabricationDetail (
  prePaidCardId = null,
  fabricationBatchId = null,
  merchantNo = null,
  pageIndex = 1,
  pageCount = 50,
  sortBy = 0,
  desc = 0) {
  tc.typeCheckString(fabricationBatchId, 1, 32, true);
  tc.typeCheckNumber(pageIndex, 1, null, true);
  tc.typeCheckNumber(pageCount, 1, 50, true);
  tc.typeCheckChoice(sortBy, [0], true);
  tc.typeCheckChoice(desc, [0, 1], true);
  let params = {};
  if (!lodash.isNull(prePaidCardId) && !lodash.isUndefined(prePaidCardId)) {
    params['prePaidCardId'] = prePaidCardId;
  }
  if (!lodash.isNull(fabricationBatchId) && !lodash.isUndefined(fabricationBatchId)) {
    params['fabricationBatchId'] = fabricationBatchId;
  }
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
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
    return Rpc.post(RpcSDKManagePrePaidCardFabricationInformationQueryFabricationDetailMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePrePaidCardFabricationInformationQueryFabricationDetailMethod, params);
  }
}
