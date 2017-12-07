/**
 * Created by Generator.
 * Author: Generator
 * description: 查询消息列表b.查询(query)
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageSystemMessageQueryMethod = '/sdkmanage/system/message/query';

export const RpcSDKManageSystemMessageQueryRpcType = 'system';

/**
 *
 * @param messageType |null json 消息类型，字符串型，0-系统消息,1-短信、可选
 * @param readFlag |null json 是否已读,可选，数值型，0-未读，1-已读
 * @param senderMemberId |null json 发送者的会员id，数组
 * @param receiverMemberId |null json 接受者的会员id
 * @param pageIndex |null int 分页号
 * @param pageCount |null int 页面显示数量
 * @param sortBy |null int 排序规则0:
 * @param desc |null int 0：降序1:升序
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageSystemMessageQuery (
  messageType = null,
  readFlag = null,
  senderMemberId = null,
  receiverMemberId = null,
  pageIndex = 1,
  pageCount = 50,
  sortBy = 0,
  desc = 0) {
  tc.typeCheckJsonArrayChoice(messageType, [1, 2], true);
  tc.typeCheckJsonArrayChoice(readFlag, [0, 1], true);
  tc.typeCheckJsonString(senderMemberId, true);
  tc.typeCheckJsonString(receiverMemberId, true);
  tc.typeCheckNumber(pageIndex, 1, null, true);
  tc.typeCheckNumber(pageCount, 1, 50, true);
  tc.typeCheckChoice(sortBy, [0], true);
  tc.typeCheckChoice(desc, [0, 1], true);
  let params = {};
  if (!lodash.isNull(messageType) && !lodash.isUndefined(messageType)) {
    params['messageType'] = messageType;
  }
  if (!lodash.isNull(readFlag) && !lodash.isUndefined(readFlag)) {
    params['readFlag'] = readFlag;
  }
  if (!lodash.isNull(senderMemberId) && !lodash.isUndefined(senderMemberId)) {
    params['senderMemberId'] = senderMemberId;
  }
  if (!lodash.isNull(receiverMemberId) && !lodash.isUndefined(receiverMemberId)) {
    params['receiverMemberId'] = receiverMemberId;
  }
  if (!lodash.isNull(pageIndex) && !lodash.isUndefined(pageIndex)) {
    params['pageIndex'] = pageIndex;
  }
  if (!lodash.isNull(pageCount) && !lodash.isUndefined(pageCount)) {
    params['pageCount'] = pageCount;
  }
  if (!lodash.isNull(sortBy) && !lodash.isUndefined(sortBy)) {
    params['sortBy'] = sortBy;
  }
  if (!lodash.isNull(desc) && !lodash.isUndefined(desc)) {
    params['desc'] = desc;
  }
  if (debug.isProduction()) {
    return Rpc.get(RpcSDKManageSystemMessageQueryMethod, params);
  } else {
    return Rpc.get(RpcSDKManageSystemMessageQueryMethod, params);
  }
}
