/**
 * Created by Generator.
 * Author: Generator
 * description: 开卡活动下线
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageActivityInvalidMethod = '/sdkmanage/activity/invalid';

export const RpcSDKManageActivityInvalidRpcType = 'system';

/**
 *
 * @param activityType int 活动类型1：充赠活动2:开卡活动
 * @param ID bigint 活动id
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageActivityInvalid (
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
    return Rpc.post(RpcSDKManageActivityInvalidMethod, params);
  } else {
    return Rpc.get(RpcSDKManageActivityInvalidMethod, params);
  }
}
