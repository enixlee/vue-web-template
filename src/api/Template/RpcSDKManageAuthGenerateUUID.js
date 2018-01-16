/**
 * Created by Generator.
 * Author: Generator
 * description: 唯一标识
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');

export const RpcSDKManageAuthGenerateUUIDMethod = '/sdk_zhongbai/auth/generate_uuid';

export const RpcSDKManageAuthGenerateUUIDRpcType = 'ZBSystem';

/**
 *

 * @returns {*}
 * @constructor
 */
export function RpcSDKManageAuthGenerateUUID (
) {
  let params = {};

  if (debug.isProduction()) {
    return Rpc.get(RpcSDKManageAuthGenerateUUIDMethod, params);
  } else {
    let mockEngine = Vue.prototype.getPlugin('RpcMockEngine');
    if (Vue.prototype.getPlugin('lodash').isObject(mockEngine)) {
      let data = mockEngine[RpcSDKManageAuthGenerateUUIDMethod];
      if (Vue.prototype.getPlugin('lodash').isObject(data)) {
        return new Promise(function (resolve, reject) {
          let rpcResult = Vue.prototype.getPlugin('RpcCommandResultMaker')(
            {
              request: {},
              status: 200,
              config: {},
              data: {
                command_name: RpcSDKManageAuthGenerateUUIDMethod,
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
        return Rpc.get(RpcSDKManageAuthGenerateUUIDMethod, params);
      }
    }
  }
}
