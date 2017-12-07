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

export const RpcSDKManageLoginWithSecretKeyMethod = '/sdkmanage/login_with_secretkey';

export const RpcSDKManageLoginWithSecretKeyRpcType = 'system';

/**
 *
 * @param userName string 用户名
 * @param password md5 登录密码
 * @param secretKey string sdk的secretKey
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageLoginWithSecretKey (
  userName,
  password,
  secretKey) {
  tc.typeCheckString(userName, 0, 32, false);
  tc.typeCheckMd5(password, false);
  tc.typeCheckString(secretKey, 64, 64, false);
  let params = {};
  if (!lodash.isNull(userName) && !lodash.isUndefined(userName)) {
    params['userName'] = userName;
  }
  if (!lodash.isNull(password) && !lodash.isUndefined(password)) {
    params['password'] = password;
  }
  if (!lodash.isNull(secretKey) && !lodash.isUndefined(secretKey)) {
    params['secretKey'] = secretKey;
  }
  if (debug.isProduction()) {
    return Rpc.get(RpcSDKManageLoginWithSecretKeyMethod, params);
  } else {
    return Rpc.get(RpcSDKManageLoginWithSecretKeyMethod, params);
  }
}
