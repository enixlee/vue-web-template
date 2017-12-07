/**
 * Created by Generator.
 * Author: Generator
 * description: 查询管理系统的审核
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageReviewQuerySDKManageReviewMethod = '/sdkmanage/review/query_sdkmanage_review';

export const RpcSDKManageReviewQuerySDKManageReviewRpcType = 'system';

/**
 *
 * @param reviewId |null bigint 审核编号
 * @param reviewType |null json 审核类型
 * @param reviewRecordId |null bigint 审核的关键字ID
 * @param result |null json 结果0，1，2json
 * @param pageIndex |null int 分页号
 * @param pageCount |null int 页面显示数量
 * @param sortBy |null int 排序规则0:按时间顺序1:按审核类型
 * @param desc |null int 0：降序1:升序
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageReviewQuerySDKManageReview (
  reviewId = null,
  reviewType = null,
  reviewRecordId = null,
  result = null,
  pageIndex = 1,
  pageCount = 50,
  sortBy = 0,
  desc = 1) {
  tc.typeCheckJsonArrayChoice(reviewType, [1001, 1002], true);
  tc.typeCheckJsonArrayChoice(result, [0, 1, 2], true);
  tc.typeCheckNumber(pageIndex, 1, null, true);
  tc.typeCheckNumber(pageCount, 1, 50, true);
  tc.typeCheckChoice(sortBy, [0], true);
  tc.typeCheckChoice(desc, [0, 1], true);
  let params = {};
  if (!lodash.isNull(reviewId) && !lodash.isUndefined(reviewId)) {
    params['reviewId'] = reviewId;
  }
  if (!lodash.isNull(reviewType) && !lodash.isUndefined(reviewType)) {
    params['reviewType'] = reviewType;
  }
  if (!lodash.isNull(reviewRecordId) && !lodash.isUndefined(reviewRecordId)) {
    params['reviewRecordId'] = reviewRecordId;
  }
  if (!lodash.isNull(result) && !lodash.isUndefined(result)) {
    params['result'] = result;
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
    return Rpc.post(RpcSDKManageReviewQuerySDKManageReviewMethod, params);
  } else {
    return Rpc.get(RpcSDKManageReviewQuerySDKManageReviewMethod, params);
  }
}
