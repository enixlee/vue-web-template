/**
 * Created by Generator.
 * Author: Generator
 * description: 添加用户
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageUserAddMethod = '/sdkmanage/user/add';

export const RpcSDKManageUserAddRpcType = 'system';

/**
 *
 * @param userName memberUserName 用户名
 * @param password md5 密码
 * @param memberId memberId 会员号
 * @param organizationId bigint 组织id
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageUserAdd (
  userName,
  password,
  memberId,
  organizationId) {
  tc.typeCheckMd5(password, false);
  let params = {};
  if (!lodash.isNull(userName) && !lodash.isUndefined(userName)) {
    params['userName'] = userName;
  }
  if (!lodash.isNull(password) && !lodash.isUndefined(password)) {
    params['password'] = password;
  }
  if (!lodash.isNull(memberId) && !lodash.isUndefined(memberId)) {
    params['memberId'] = memberId;
  }
  if (!lodash.isNull(organizationId) && !lodash.isUndefined(organizationId)) {
    params['organizationId'] = organizationId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageUserAddMethod, params);
  } else {
    return Rpc.get(RpcSDKManageUserAddMethod, params);
  }
}
