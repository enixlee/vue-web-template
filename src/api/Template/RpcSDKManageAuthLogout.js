/**
 * Created by Generator.
 * Author: Generator
 * description: 登出
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');

export const RpcSDKManageAuthLogoutMethod = '/sdk_manage/v2/auth/logout';

export const RpcSDKManageAuthLogoutRpcType = 'system';

/**
 *

 * @returns {*}
 * @constructor
 */
export function RpcSDKManageAuthLogout (
) {
  let params = {};

  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageAuthLogoutMethod, params);
  } else {
    let mockEngine = Vue.prototype.getPlugin('RpcMockEngine');
    if (Vue.prototype.getPlugin('lodash').isObject(mockEngine)) {
      let data = mockEngine[RpcSDKManageAuthLogoutMethod];
      if (Vue.prototype.getPlugin('lodash').isObject(data)) {
        return new Promise(function (resolve, reject) {
          let rpcResult = Vue.prototype.getPlugin('RpcCommandResultMaker')(
            {
              request: {},
              status: 200,
              config: {},
              data: {
                command_name: RpcSDKManageAuthLogoutMethod,
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
        return Rpc.get(RpcSDKManageAuthLogoutMethod, params);
      }
    }
  }
}
