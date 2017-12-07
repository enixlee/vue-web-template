/**
 * Created by Generator.
 * Author: Generator
 * description: 发送消息a.发送(send)
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageSystemMessageSendMethod = '/sdkmanage/system/message/send';

export const RpcSDKManageSystemMessageSendRpcType = 'system';

/**
 *
 * @param messageType int 消息类型0:系统消息，1-短信、必选
 * @param receiverMemberId json 消息接收方的会员id，数组
 * @param title string 标题
 * @param content string 发送的内容，必选
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageSystemMessageSend (
  messageType,
  receiverMemberId,
  title,
  content) {
  tc.typeCheckChoice(messageType, [1, 2], false);
  tc.typeCheckJsonString(receiverMemberId, false);
  tc.typeCheckString(title, 0, 128, false);
  tc.typeCheckString(content, 1, 255, false);
  let params = {};
  if (!lodash.isNull(messageType) && !lodash.isUndefined(messageType)) {
    params['messageType'] = messageType;
  }
  if (!lodash.isNull(receiverMemberId) && !lodash.isUndefined(receiverMemberId)) {
    params['receiverMemberId'] = receiverMemberId;
  }
  if (!lodash.isNull(title) && !lodash.isUndefined(title)) {
    params['title'] = title;
  }
  if (!lodash.isNull(content) && !lodash.isUndefined(content)) {
    params['content'] = content;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageSystemMessageSendMethod, params);
  } else {
    return Rpc.get(RpcSDKManageSystemMessageSendMethod, params);
  }
}
