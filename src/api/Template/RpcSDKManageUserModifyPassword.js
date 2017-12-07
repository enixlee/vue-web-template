/**
 * Created by Generator.
 * Author: Generator
 * description: 修改密码
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageUserModifyPasswordMethod = '/sdkmanage/user/modify_password';

export const RpcSDKManageUserModifyPasswordRpcType = 'system';

/**
 *
 * @param userId bigint 用户id
 * @param oldPassword md5 旧密码
 * @param newPassword md5 新密码
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageUserModifyPassword (
  userId,
  oldPassword,
  newPassword) {
  tc.typeCheckMd5(oldPassword, false);
  tc.typeCheckMd5(newPassword, false);
  let params = {};
  if (!lodash.isNull(userId) && !lodash.isUndefined(userId)) {
    params['userId'] = userId;
  }
  if (!lodash.isNull(oldPassword) && !lodash.isUndefined(oldPassword)) {
    params['oldPassword'] = oldPassword;
  }
  if (!lodash.isNull(newPassword) && !lodash.isUndefined(newPassword)) {
    params['newPassword'] = newPassword;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageUserModifyPasswordMethod, params);
  } else {
    return Rpc.get(RpcSDKManageUserModifyPasswordMethod, params);
  }
}
