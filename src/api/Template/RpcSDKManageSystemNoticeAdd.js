/**
 * Created by Generator.
 * Author: Generator
 * description: 添加系统公告a.新增(add)
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageSystemNoticeAddMethod = '/sdkmanage/system/notice/add';

export const RpcSDKManageSystemNoticeAddRpcType = 'system';

/**
 *
 * @param title string 公告标题
 * @param content string 公告内容
 * @param effecttiveDate datetime 生效时间
 * @param endDate datetime 到期时间
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageSystemNoticeAdd (
  title,
  content,
  effecttiveDate,
  endDate) {
  tc.typeCheckString(title, null, 128, false);
  tc.typeCheckString(content, null, 255, false);
  tc.typeCheckDateString(effecttiveDate, false);
  tc.typeCheckDateString(endDate, false);
  let params = {};
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
    return Rpc.post(RpcSDKManageSystemNoticeAddMethod, params);
  } else {
    return Rpc.get(RpcSDKManageSystemNoticeAddMethod, params);
  }
}
