/**
 * Created by Generator.
 * Author: Generator
 * description: 查询报警设置b.查询(query)
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageSystemAlarmQueryMethod = '/sdkmanage/system/alarm/query';

export const RpcSDKManageSystemAlarmQueryRpcType = 'system';

/**
 *
 * @param alarmType |null json 报警类型，目前默认的类型有，1-合同到期预警、2-折扣到期预警、3-卡种到期预警、4-账户余额预警、5-迷你钱包剩余制卡张数预警、6-冲正预警
 * @param earlyWaringSet |null int 提前预警设置。
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageSystemAlarmQuery (
  alarmType = null,
  earlyWaringSet = null) {
  tc.typeCheckJsonArrayChoice(alarmType, [1, 2, 3, 4, 5, 6], true);
  tc.typeCheckNumber(earlyWaringSet, 0, 10000, true);
  let params = {};
  if (!lodash.isNull(alarmType) && !lodash.isUndefined(alarmType)) {
    params['alarmType'] = alarmType;
  }
  if (!lodash.isNull(earlyWaringSet) && !lodash.isUndefined(earlyWaringSet)) {
    params['earlyWaringSet'] = earlyWaringSet;
  }
  if (debug.isProduction()) {
    return Rpc.get(RpcSDKManageSystemAlarmQueryMethod, params);
  } else {
    return Rpc.get(RpcSDKManageSystemAlarmQueryMethod, params);
  }
}
