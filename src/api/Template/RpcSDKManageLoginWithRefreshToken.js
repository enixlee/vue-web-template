/**
 * Created by Generator.
 * Author: Generator
 * description: 登录
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageLoginWithRefreshTokenMethod = '/sdkmanage/login_with_secretkey';

export const RpcSDKManageLoginWithRefreshTokenRpcType = 'system';

/**
 *
 * @param userName string 用户名
 * @param password md5 登录密码
 * @param refreshToken string 长期有效的Token令牌
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageLoginWithRefreshToken (
  userName,
  password,
  refreshToken) {
  tc.typeCheckString(userName, 0, 32, false);
  tc.typeCheckMd5(password, false);
  tc.typeCheckString(refreshToken, 16, null, false);
  let params = {};
  if (!lodash.isNull(userName) && !lodash.isUndefined(userName)) {
    params['userName'] = userName;
  }
  if (!lodash.isNull(password) && !lodash.isUndefined(password)) {
    params['password'] = password;
  }
  if (!lodash.isNull(refreshToken) && !lodash.isUndefined(refreshToken)) {
    params['refreshToken'] = refreshToken;
  }
  if (debug.isProduction()) {
    return Rpc.get(RpcSDKManageLoginWithRefreshTokenMethod, params);
  } else {
    return Rpc.get(RpcSDKManageLoginWithRefreshTokenMethod, params);
  }
}
