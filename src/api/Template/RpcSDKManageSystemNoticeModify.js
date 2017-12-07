/**
 * Created by Generator.
 * Author: Generator
 * description: 修改系统公告c.修改(modify)
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageSystemNoticeModifyMethod = '/sdkmanage/system/notice/modify';

export const RpcSDKManageSystemNoticeModifyRpcType = 'system';

/**
 *
 * @param noticeId bigint 公告编号，不可修改
 * @param title |null string 公告标题，可以修改
 * @param content |null string 公告内容，可以修改
 * @param effecttiveDate |null datetime 生效时间
 * @param endDate |null datetime 到期时间
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageSystemNoticeModify (
  noticeId,
  title = null,
  content = null,
  effecttiveDate = null,
  endDate = null) {
  tc.typeCheckString(title, null, 128, true);
  tc.typeCheckString(content, null, 255, true);
  tc.typeCheckDateString(effecttiveDate, true);
  tc.typeCheckDateString(endDate, true);
  let params = {};
  if (!lodash.isNull(noticeId) && !lodash.isUndefined(noticeId)) {
    params['noticeId'] = noticeId;
  }
  if (!lodash.isNull(title) && !lodash.isUndefined(title)) {
    params['title'] = title;
  }
  if (!lodash.isNull(content) && !lodash.isUndefined(content)) {
    params['content'] = content;
  }
  if (!lodash.isNull(effecttiveDate) && !lodash.isUndefined(effecttiveDate)) {
    params['effecttiveDate'] = effecttiveDate;
  }
  if (!lodash.isNull(endDate) && !lodash.isUndefined(endDate)) {
    params['endDate'] = endDate;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageSystemNoticeModifyMethod, params);
  } else {
    return Rpc.get(RpcSDKManageSystemNoticeModifyMethod, params);
  }
}
