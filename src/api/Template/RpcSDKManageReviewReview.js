/**
 * Created by Generator.
 * Author: Generator
 * description: 审核
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageReviewReviewMethod = '/sdkmanage/review/review';

export const RpcSDKManageReviewReviewRpcType = 'system';

/**
 *
 * @param reviewId bigint 审核编号
 * @param reviewType ReviewType 审核类型
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageReviewReview (
  reviewId,
  reviewType) {
  let params = {};
  if (!lodash.isNull(reviewId) && !lodash.isUndefined(reviewId)) {
    params['reviewId'] = reviewId;
  }
  if (!lodash.isNull(reviewType) && !lodash.isUndefined(reviewType)) {
    params['reviewType'] = reviewType;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageReviewReviewMethod, params);
  } else {
    return Rpc.get(RpcSDKManageReviewReviewMethod, params);
  }
}
