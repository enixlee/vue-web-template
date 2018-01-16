/**
 * Created by Generator.
 * Author: Generator
 * description: 冻结角色
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageRoleFreezeMethod = '/sdk_manage/v2/role/freeze';

export const RpcSDKManageRoleFreezeRpcType = 'system';

/**
 *
 * @param id bigint 角色id
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageRoleFreeze (
  id) {
  let params = {};
  if (!lodash.isNull(id) && !lodash.isUndefined(id)) {
    params['id'] = id;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageRoleFreezeMethod, params);
  } else {
    let mockEngine = Vue.prototype.getPlugin('RpcMockEngine');
    if (Vue.prototype.getPlugin('lodash').isObject(mockEngine)) {
      let data = mockEngine[RpcSDKManageRoleFreezeMethod];
      if (Vue.prototype.getPlugin('lodash').isObject(data)) {
        return new Promise(function (resolve, reject) {
          let rpcResult = Vue.prototype.getPlugin('RpcCommandResultMaker')(
            {
              request: {},
              status: 200,
              config: {},
              data: {
                command_name: RpcSDKManageRoleFreezeMethod,
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
        return Rpc.get(RpcSDKManageRoleFreezeMethod, params);
      }
    }
  }
}
