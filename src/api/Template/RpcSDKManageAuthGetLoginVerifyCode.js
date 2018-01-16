/**
 * Created by Generator.
 * Author: Generator
 * description: 获取登录验证码
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageAuthGetLoginVerifyCodeMethod = '/sdk_manage/v2/auth/get_login_verify_code';

export const RpcSDKManageAuthGetLoginVerifyCodeRpcType = 'system';

/**
 *
 * @param deviceId string 设备唯一标识
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageAuthGetLoginVerifyCode (
  deviceId) {
  tc.typeCheckString(deviceId, 1, null, false);
  let params = {};
  if (!lodash.isNull(deviceId) && !lodash.isUndefined(deviceId)) {
    params['deviceId'] = deviceId;
  }
  if (debug.isProduction()) {
    return Rpc.get(RpcSDKManageAuthGetLoginVerifyCodeMethod, params);
  } else {
    let mockEngine = Vue.prototype.getPlugin('RpcMockEngine');
    if (Vue.prototype.getPlugin('lodash').isObject(mockEngine)) {
      let data = mockEngine[RpcSDKManageAuthGetLoginVerifyCodeMethod];
      if (Vue.prototype.getPlugin('lodash').isObject(data)) {
        return new Promise(function (resolve, reject) {
          let rpcResult = Vue.prototype.getPlugin('RpcCommandResultMaker')(
            {
              request: {},
              status: 200,
              config: {},
              data: {
                command_name: RpcSDKManageAuthGetLoginVerifyCodeMethod,
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
        return Rpc.get(RpcSDKManageAuthGetLoginVerifyCodeMethod, params);
      }
    }
  }
}
