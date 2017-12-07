/**
 * Created by Generator.
 * Author: Generator
 * description: 删除公告d.删除(delete)
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageSystemNoticeDeleteMethod = '/sdkmanage/system/notice/delete';

export const RpcSDKManageSystemNoticeDeleteRpcType = 'system';

/**
 *
 * @param noticeId json 公告id，数组，可以多个
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageSystemNoticeDelete (
  noticeId) {
  tc.typeCheckJsonString(noticeId, false);
  let params = {};
  if (!lodash.isNull(noticeId) && !lodash.isUndefined(noticeId)) {
    params['noticeId'] = noticeId;
  }
  if (debug.isProduction()) {
    return Rpc.get(RpcSDKManageSystemNoticeDeleteMethod, params);
  } else {
    return Rpc.get(RpcSDKManageSystemNoticeDeleteMethod, params);
  }
}
