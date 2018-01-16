/**
 * Created by Generator.
 * Author: Generator
 * description: 添加角色
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageRoleModifyMethod = '/sdk_manage/v2/role/modify';

export const RpcSDKManageRoleModifyRpcType = 'system';

/**
 *
 * @param id bigint 角色编号
 * @param permissionIds json 权限列表
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageRoleModify (
  id,
  permissionIds) {
  tc.typeCheckJsonString(permissionIds, false);
  let params = {};
  if (!lodash.isNull(id) && !lodash.isUndefined(id)) {
    params['id'] = id;
  }
  if (!lodash.isNull(permissionIds) && !lodash.isUndefined(permissionIds)) {
    params['permissionIds'] = permissionIds;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageRoleModifyMethod, params);
  } else {
    let mockEngine = Vue.prototype.getPlugin('RpcMockEngine');
    if (Vue.prototype.getPlugin('lodash').isObject(mockEngine)) {
      let data = mockEngine[RpcSDKManageRoleModifyMethod];
      if (Vue.prototype.getPlugin('lodash').isObject(data)) {
        return new Promise(function (resolve, reject) {
          let rpcResult = Vue.prototype.getPlugin('RpcCommandResultMaker')(
            {
              request: {},
              status: 200,
              config: {},
              data: {
                command_name: RpcSDKManageRoleModifyMethod,
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
        return Rpc.get(RpcSDKManageRoleModifyMethod, params);
      }
    }
  }
}
