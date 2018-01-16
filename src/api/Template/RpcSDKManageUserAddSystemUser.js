/**
 * Created by Generator.
 * Author: Generator
 * description: 添加用户
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageUserAddSystemUserMethod = '/sdk_manage/v2/user/add_system_user';

export const RpcSDKManageUserAddSystemUserRpcType = 'system';

/**
 *
 * @param userName memberUserName 用户名
 * @param password md5 密码
 * @param cellphone cellphone 手机号
 * @param organizationId bigint 组织id
 * @param role json 角色编号，[1,2,...]
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageUserAddSystemUser (
  userName,
  password,
  cellphone,
  organizationId,
  role) {
  tc.typeCheckMd5(password, false);
  tc.typeCheckCellphone(cellphone, false);
  tc.typeCheckJsonString(role, false);
  let params = {};
  if (!lodash.isNull(userName) && !lodash.isUndefined(userName)) {
    params['userName'] = userName;
  }
  if (!lodash.isNull(password) && !lodash.isUndefined(password)) {
    params['password'] = password;
  }
  if (!lodash.isNull(cellphone) && !lodash.isUndefined(cellphone)) {
    params['cellphone'] = cellphone;
  }
  if (!lodash.isNull(organizationId) && !lodash.isUndefined(organizationId)) {
    params['organizationId'] = organizationId;
  }
  if (!lodash.isNull(role) && !lodash.isUndefined(role)) {
    params['role'] = role;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageUserAddSystemUserMethod, params);
  } else {
    let mockEngine = Vue.prototype.getPlugin('RpcMockEngine');
    if (Vue.prototype.getPlugin('lodash').isObject(mockEngine)) {
      let data = mockEngine[RpcSDKManageUserAddSystemUserMethod];
      if (Vue.prototype.getPlugin('lodash').isObject(data)) {
        return new Promise(function (resolve, reject) {
          let rpcResult = Vue.prototype.getPlugin('RpcCommandResultMaker')(
            {
              request: {},
              status: 200,
              config: {},
              data: {
                command_name: RpcSDKManageUserAddSystemUserMethod,
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
        return Rpc.get(RpcSDKManageUserAddSystemUserMethod, params);
      }
    }
  }
}
