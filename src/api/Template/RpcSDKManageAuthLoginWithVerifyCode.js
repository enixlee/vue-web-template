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

export const RpcSDKManageAuthLoginWithVerifyCodeMethod = '/sdk_manage/v2/auth/login_with_verify_code';

export const RpcSDKManageAuthLoginWithVerifyCodeRpcType = 'system';

/**
 *
 * @param userName string 用户名
 * @param password md5 登录密码
 * @param verifyCode string 登录验证码
 * @param deviceId string 设备唯一标识
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageAuthLoginWithVerifyCode (
  userName,
  password,
  verifyCode,
  deviceId) {
  tc.typeCheckString(userName, 0, 32, false);
  tc.typeCheckMd5(password, false);
  tc.typeCheckString(verifyCode, 4, 4, false);
  tc.typeCheckString(deviceId, 1, null, false);
  let params = {};
  if (!lodash.isNull(userName) && !lodash.isUndefined(userName)) {
    params['userName'] = userName;
  }
  if (!lodash.isNull(password) && !lodash.isUndefined(password)) {
    params['password'] = password;
  }
  if (!lodash.isNull(verifyCode) && !lodash.isUndefined(verifyCode)) {
    params['verifyCode'] = verifyCode;
  }
  if (!lodash.isNull(deviceId) && !lodash.isUndefined(deviceId)) {
    params['deviceId'] = deviceId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageAuthLoginWithVerifyCodeMethod, params);
  } else {
    let mockEngine = Vue.prototype.getPlugin('RpcMockEngine');
    if (Vue.prototype.getPlugin('lodash').isObject(mockEngine)) {
      let data = mockEngine[RpcSDKManageAuthLoginWithVerifyCodeMethod];
      if (Vue.prototype.getPlugin('lodash').isObject(data)) {
        return new Promise(function (resolve, reject) {
          let rpcResult = Vue.prototype.getPlugin('RpcCommandResultMaker')(
            {
              request: {},
              status: 200,
              config: {},
              data: {
                command_name: RpcSDKManageAuthLoginWithVerifyCodeMethod,
                description: 'succ',
                code: 'succ',
                data: data,
                succ: true
              }
            }
          );
          resolve(rpcResult);
        });
      } else {
        return Rpc.get(RpcSDKManageAuthLoginWithVerifyCodeMethod, params);
      }
    }
  }
}
