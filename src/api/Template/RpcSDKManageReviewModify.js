/**
 * Created by Generator.
 * Author: Generator
 * description: 修改审核批注
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageReviewModifyMethod = '/sdkmanage/review/modify';

export const RpcSDKManageReviewModifyRpcType = 'system';

/**
 *
 * @param reviewId bigint 审核编号
 * @param reviewType ReviewType 审核类型
 * @param note |null string 注释
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageReviewModify (
  reviewId,
  reviewType,
  note = null) {
  tc.typeCheckString(note, 0, null, true);
  let params = {};
  if (!lodash.isNull(reviewId) && !lodash.isUndefined(reviewId)) {
    params['reviewId'] = reviewId;
  }
  if (!lodash.isNull(reviewType) && !lodash.isUndefined(reviewType)) {
    params['reviewType'] = reviewType;
  }
  if (!lodash.isNull(note) && !lodash.isUndefined(note)) {
    params['note'] = note;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageReviewModifyMethod, params);
  } else {
    return Rpc.get(RpcSDKManageReviewModifyMethod, params);
  }
}
