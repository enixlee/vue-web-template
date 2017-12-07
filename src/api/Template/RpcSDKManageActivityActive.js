/**
 * Created by Generator.
 * Author: Generator
 * description: 活动启用（功能就是设置无效状态后再次开启）
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageActivityActiveMethod = '/sdkmanage/activity/active';

export const RpcSDKManageActivityActiveRpcType = 'system';

/**
 *
 * @param activityType int 活动类型1：充赠活动2:开卡活动
 * @param ID bigint 活动id
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageActivityActive (
  activityType,
  ID) {
  tc.typeCheckChoice(activityType, [1, 2], false);
  let params = {};
  if (!lodash.isNull(activityType) && !lodash.isUndefined(activityType)) {
    params['activityType'] = activityType;
  }
  if (!lodash.isNull(ID) && !lodash.isUndefined(ID)) {
    params['ID'] = ID;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageActivityActiveMethod, params);
  } else {
    return Rpc.get(RpcSDKManageActivityActiveMethod, params);
  }
}
