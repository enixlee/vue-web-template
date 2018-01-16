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

export const RpcSDKManageRoleAddMethod = '/sdk_manage/v2/role/add';

export const RpcSDKManageRoleAddRpcType = 'system';

/**
 *
 * @param roleName string 角色名字
 * @param permissionIds json 权限列表
 * @param organizationId |null bigint 默认为通用权限，组织id
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageRoleAdd (
  roleName,
  permissionIds,
  organizationId = null) {
  tc.typeCheckString(roleName, 1, 64, false);
  tc.typeCheckJsonString(permissionIds, false);
  let params = {};
  if (!lodash.isNull(roleName) && !lodash.isUndefined(roleName)) {
    params['roleName'] = roleName;
  }
  if (!lodash.isNull(permissionIds) && !lodash.isUndefined(permissionIds)) {
    params['permissionIds'] = permissionIds;
  }
  if (!lodash.isNull(organizationId) && !lodash.isUndefined(organizationId)) {
    params['organizationId'] = organizationId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageRoleAddMethod, params);
  } else {
    let mockEngine = Vue.prototype.getPlugin('RpcMockEngine');
    if (Vue.prototype.getPlugin('lodash').isObject(mockEngine)) {
      let data = mockEngine[RpcSDKManageRoleAddMethod];
      if (Vue.prototype.getPlugin('lodash').isObject(data)) {
        return new Promise(function (resolve, reject) {
          let rpcResult = Vue.prototype.getPlugin('RpcCommandResultMaker')(
            {
              request: {},
              status: 200,
              config: {},
              data: {
                command_name: RpcSDKManageRoleAddMethod,
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
        return Rpc.get(RpcSDKManageRoleAddMethod, params);
      }
    }
  }
}
