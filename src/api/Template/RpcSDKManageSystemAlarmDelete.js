/**
 * Created by Generator.
 * Author: Generator
 * description: 删除报警类型c.删除(delete)
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageSystemAlarmDeleteMethod = '/sdkmanage/system/alarm/delete';

export const RpcSDKManageSystemAlarmDeleteRpcType = 'system';

/**
 *
 * @param alarmId json 报警编号,必选,数组，可以批量删除多个
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageSystemAlarmDelete (
  alarmId) {
  tc.typeCheckJsonString(alarmId, false);
  let params = {};
  if (!lodash.isNull(alarmId) && !lodash.isUndefined(alarmId)) {
    params['alarmId'] = alarmId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageSystemAlarmDeleteMethod, params);
  } else {
    return Rpc.get(RpcSDKManageSystemAlarmDeleteMethod, params);
  }
}
