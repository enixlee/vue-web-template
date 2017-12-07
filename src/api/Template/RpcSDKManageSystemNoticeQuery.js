/**
 * Created by Generator.
 * Author: Generator
 * description: 查看系统公告b.查询(query)
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageSystemNoticeQueryMethod = '/sdkmanage/system/notice/query';

export const RpcSDKManageSystemNoticeQueryRpcType = 'system';

/**
 *
 * @param effecttiveDate |null datetime 生效时间
 * @param endDate |null datetime 到期时间
 * @param sortBy |null int 排序规则0:
 * @param desc |null int 0：降序1:升序
 * @param pageIndex |null int 分页号
 * @param pageCount |null int 页面显示数量
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageSystemNoticeQuery (
  effecttiveDate = null,
  endDate = null,
  sortBy = 0,
  desc = 0,
  pageIndex = 1,
  pageCount = 50) {
  tc.typeCheckDateString(effecttiveDate, true);
  tc.typeCheckDateString(endDate, true);
  tc.typeCheckChoice(sortBy, [0], true);
  tc.typeCheckChoice(desc, [0, 1], true);
  tc.typeCheckNumber(pageIndex, 1, null, true);
  tc.typeCheckNumber(pageCount, 1, 50, true);
  let params = {};
  if (!lodash.isNull(effecttiveDate) && !lodash.isUndefined(effecttiveDate)) {
    params['effecttiveDate'] = effecttiveDate;
  }
  if (!lodash.isNull(endDate) && !lodash.isUndefined(endDate)) {
    params['endDate'] = endDate;
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
    return Rpc.get(RpcSDKManageSystemNoticeQueryMethod, params);
  } else {
    return Rpc.get(RpcSDKManageSystemNoticeQueryMethod, params);
  }
}
