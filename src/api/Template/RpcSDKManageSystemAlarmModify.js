/**
 * Created by Generator.
 * Author: Generator
 * description: 修改报警设置a.修改(modify)
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageSystemAlarmModifyMethod = '/sdkmanage/system/alarm/modify';

export const RpcSDKManageSystemAlarmModifyRpcType = 'system';

/**
 *
 * @param alarmId bigint 报警编号,录入完成后系统自动生成,不可修改
 * @param earlyWaringSet |null int 提前预警设置，
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageSystemAlarmModify (
  alarmId,
  earlyWaringSet = null) {
  tc.typeCheckNumber(earlyWaringSet, 0, 10000, true);
  let params = {};
  if (!lodash.isNull(alarmId) && !lodash.isUndefined(alarmId)) {
    params['alarmId'] = alarmId;
  }
  if (!lodash.isNull(earlyWaringSet) && !lodash.isUndefined(earlyWaringSet)) {
    params['earlyWaringSet'] = earlyWaringSet;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageSystemAlarmModifyMethod, params);
  } else {
    return Rpc.get(RpcSDKManageSystemAlarmModifyMethod, params);
  }
}
