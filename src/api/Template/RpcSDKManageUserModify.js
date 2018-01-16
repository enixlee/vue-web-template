/**
 * Created by Generator.
 * Author: Generator
 * description: 修改用户
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageUserModifyMethod = '/sdk_manage/v2/user/modify';

export const RpcSDKManageUserModifyRpcType = 'system';

/**
 *
 * @param userId bigint 用户id
 * @param userName |null memberUserName 用户名
 * @param role |null json 角色编号，[1,2,...]
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageUserModify (
  userId,
  userName = null,
  role = null) {
  tc.typeCheckJsonString(role, true);
  let params = {};
  if (!lodash.isNull(userId) && !lodash.isUndefined(userId)) {
    params['userId'] = userId;
  }
  if (!lodash.isNull(userName) && !lodash.isUndefined(userName)) {
    params['userName'] = userName;
  }
  if (!lodash.isNull(role) && !lodash.isUndefined(role)) {
    params['role'] = role;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageUserModifyMethod, params);
  } else {
    let mockEngine = Vue.prototype.getPlugin('RpcMockEngine');
    if (Vue.prototype.getPlugin('lodash').isObject(mockEngine)) {
      let data = mockEngine[RpcSDKManageUserModifyMethod];
      if (Vue.prototype.getPlugin('lodash').isObject(data)) {
        return new Promise(function (resolve, reject) {
          let rpcResult = Vue.prototype.getPlugin('RpcCommandResultMaker')(
            {
              request: {},
              status: 200,
              config: {},
              data: {
                command_name: RpcSDKManageUserModifyMethod,
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
        return Rpc.get(RpcSDKManageUserModifyMethod, params);
      }
    }
  }
}
