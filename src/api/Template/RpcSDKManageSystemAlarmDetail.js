/**
 * Created by Generator.
 * Author: Generator
 * description: 获取报警信息详情d.详情(detail)
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageSystemAlarmDetailMethod = '/sdkmanage/system/alarm/detail';

export const RpcSDKManageSystemAlarmDetailRpcType = 'system';

/**
 *
 * @param alarmId bigint 报警编号，必选
 * @param sortBy |null int 排序规则0:
 * @param desc |null int 0：降序1:升序
 * @param pageIndex |null int 分页号
 * @param pageCount |null int 页面显示数量
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageSystemAlarmDetail (
  alarmId,
  sortBy = 0,
  desc = 0,
  pageIndex = 1,
  pageCount = 50) {
  tc.typeCheckChoice(sortBy, [0], true);
  tc.typeCheckChoice(desc, [0, 1], true);
  tc.typeCheckNumber(pageIndex, 1, null, true);
  tc.typeCheckNumber(pageCount, 1, 50, true);
  let params = {};
  if (!lodash.isNull(alarmId) && !lodash.isUndefined(alarmId)) {
    params['alarmId'] = alarmId;
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
    return Rpc.get(RpcSDKManageSystemAlarmDetailMethod, params);
  } else {
    return Rpc.get(RpcSDKManageSystemAlarmDetailMethod, params);
  }
}
