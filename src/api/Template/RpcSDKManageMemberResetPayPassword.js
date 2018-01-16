/**
 * Created by Generator.
 * Author: Generator
 * description: 重置会员的支付密码
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMemberResetPayPasswordMethod = '/sdkmanage/v2/member/reset_pay_password';

export const RpcSDKManageMemberResetPayPasswordRpcType = 'system';

/**
 *
 * @param memberId memberId 会员id
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMemberResetPayPassword (
  memberId) {
  let params = {};
  if (!lodash.isNull(memberId) && !lodash.isUndefined(memberId)) {
    params['memberId'] = memberId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMemberResetPayPasswordMethod, params);
  } else {
    let mockEngine = Vue.prototype.getPlugin('RpcMockEngine');
    if (Vue.prototype.getPlugin('lodash').isObject(mockEngine)) {
      let data = mockEngine[RpcSDKManageMemberResetPayPasswordMethod];
      if (Vue.prototype.getPlugin('lodash').isObject(data)) {
        return new Promise(function (resolve, reject) {
          let rpcResult = Vue.prototype.getPlugin('RpcCommandResultMaker')(
            {
              request: {},
              status: 200,
              config: {},
              data: {
                command_name: RpcSDKManageMemberResetPayPasswordMethod,
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
        return Rpc.get(RpcSDKManageMemberResetPayPasswordMethod, params);
      }
    }
  }
}
