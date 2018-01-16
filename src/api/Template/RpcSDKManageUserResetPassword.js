/**
 * Created by Generator.
 * Author: Generator
 * description: 重置用户(管理员)密码
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageUserResetPasswordMethod = '/sdkmanage/v2/user/reset_password';

export const RpcSDKManageUserResetPasswordRpcType = 'system';

/**
 *
 * @param userId bigint 用户id
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageUserResetPassword (
  userId) {
  let params = {};
  if (!lodash.isNull(userId) && !lodash.isUndefined(userId)) {
    params['userId'] = userId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageUserResetPasswordMethod, params);
  } else {
    let mockEngine = Vue.prototype.getPlugin('RpcMockEngine');
    if (Vue.prototype.getPlugin('lodash').isObject(mockEngine)) {
      let data = mockEngine[RpcSDKManageUserResetPasswordMethod];
      if (Vue.prototype.getPlugin('lodash').isObject(data)) {
        return new Promise(function (resolve, reject) {
          let rpcResult = Vue.prototype.getPlugin('RpcCommandResultMaker')(
            {
              request: {},
              status: 200,
              config: {},
              data: {
                command_name: RpcSDKManageUserResetPasswordMethod,
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
        return Rpc.get(RpcSDKManageUserResetPasswordMethod, params);
      }
    }
  }
}
