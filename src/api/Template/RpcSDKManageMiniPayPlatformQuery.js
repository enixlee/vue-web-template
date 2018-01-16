/**
 * Created by Generator.
 * Author: Generator
 * description: 查询迷你付平台对应的商户信息,返回值是对应DBMinipayPlatformQueryView的model
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');

export const RpcSDKManageMiniPayPlatformQueryMethod = '/sdkmanage/v2/minipay_platform/query';

export const RpcSDKManageMiniPayPlatformQueryRpcType = 'system';

/**
 *

 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMiniPayPlatformQuery (
) {
  let params = {};

  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMiniPayPlatformQueryMethod, params);
  } else {
    let mockEngine = Vue.prototype.getPlugin('RpcMockEngine');
    if (Vue.prototype.getPlugin('lodash').isObject(mockEngine)) {
      let data = mockEngine[RpcSDKManageMiniPayPlatformQueryMethod];
      if (Vue.prototype.getPlugin('lodash').isObject(data)) {
        return new Promise(function (resolve, reject) {
          let rpcResult = Vue.prototype.getPlugin('RpcCommandResultMaker')(
            {
              request: {},
              status: 200,
              config: {},
              data: {
                command_name: RpcSDKManageMiniPayPlatformQueryMethod,
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
        return Rpc.get(RpcSDKManageMiniPayPlatformQueryMethod, params);
      }
    }
  }
}
