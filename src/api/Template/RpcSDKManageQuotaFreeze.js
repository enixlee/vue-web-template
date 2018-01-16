/**
 * Created by Generator.
 * Author: Generator
 * description: 停用商户配额
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageQuotaFreezeMethod = '/sdk_manage/v2/quota/freeze';

export const RpcSDKManageQuotaFreezeRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageQuotaFreeze (
  merchantNo) {
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageQuotaFreezeMethod, params);
  } else {
    let mockEngine = Vue.prototype.getPlugin('RpcMockEngine');
    if (Vue.prototype.getPlugin('lodash').isObject(mockEngine)) {
      let data = mockEngine[RpcSDKManageQuotaFreezeMethod];
      if (Vue.prototype.getPlugin('lodash').isObject(data)) {
        return new Promise(function (resolve, reject) {
          let rpcResult = Vue.prototype.getPlugin('RpcCommandResultMaker')(
            {
              request: {},
              status: 200,
              config: {},
              data: {
                command_name: RpcSDKManageQuotaFreezeMethod,
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
        return Rpc.get(RpcSDKManageQuotaFreezeMethod, params);
      }
    }
  }
}
