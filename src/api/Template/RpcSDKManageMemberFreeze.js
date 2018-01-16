/**
 * Created by Generator.
 * Author: Generator
 * description: 禁用会员
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMemberFreezeMethod = '/sdkmanage/v2/member/freeze';

export const RpcSDKManageMemberFreezeRpcType = 'system';

/**
 *
 * @param memberId memberId 会员id
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMemberFreeze (
  memberId) {
  let params = {};
  if (!lodash.isNull(memberId) && !lodash.isUndefined(memberId)) {
    params['memberId'] = memberId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMemberFreezeMethod, params);
  } else {
    let mockEngine = Vue.prototype.getPlugin('RpcMockEngine');
    if (Vue.prototype.getPlugin('lodash').isObject(mockEngine)) {
      let data = mockEngine[RpcSDKManageMemberFreezeMethod];
      if (Vue.prototype.getPlugin('lodash').isObject(data)) {
        return new Promise(function (resolve, reject) {
          let rpcResult = Vue.prototype.getPlugin('RpcCommandResultMaker')(
            {
              request: {},
              status: 200,
              config: {},
              data: {
                command_name: RpcSDKManageMemberFreezeMethod,
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
        return Rpc.get(RpcSDKManageMemberFreezeMethod, params);
      }
    }
  }
}
