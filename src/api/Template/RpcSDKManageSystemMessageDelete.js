/**
 * Created by Generator.
 * Author: Generator
 * description: 删除消息d.删除(delete)
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageSystemMessageDeleteMethod = '/sdkmanage/system/message/delete';

export const RpcSDKManageSystemMessageDeleteRpcType = 'system';

/**
 *
 * @param messageId json 消息id,数组
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageSystemMessageDelete (
  messageId) {
  tc.typeCheckJsonString(messageId, false);
  let params = {};
  if (!lodash.isNull(messageId) && !lodash.isUndefined(messageId)) {
    params['messageId'] = messageId;
  }
  if (debug.isProduction()) {
    return Rpc.get(RpcSDKManageSystemMessageDeleteMethod, params);
  } else {
    return Rpc.get(RpcSDKManageSystemMessageDeleteMethod, params);
  }
}
