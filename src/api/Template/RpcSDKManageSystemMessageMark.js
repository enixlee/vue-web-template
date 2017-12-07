/**
 * Created by Generator.
 * Author: Generator
 * description: 将某条或多条消息标记为已读c.标记(mark)
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageSystemMessageMarkMethod = '/sdkmanage/system/message/mark';

export const RpcSDKManageSystemMessageMarkRpcType = 'system';

/**
 *
 * @param messageId json 消息id，数组，可以多个
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageSystemMessageMark (
  messageId) {
  tc.typeCheckJsonString(messageId, false);
  let params = {};
  if (!lodash.isNull(messageId) && !lodash.isUndefined(messageId)) {
    params['messageId'] = messageId;
  }
  if (debug.isProduction()) {
    return Rpc.get(RpcSDKManageSystemMessageMarkMethod, params);
  } else {
    return Rpc.get(RpcSDKManageSystemMessageMarkMethod, params);
  }
}
