/**
 * Created by Generator.
 * Author: Generator
 * description: 查询商户收单手续费详情
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageFactorageQueryDetailMethod = '/sdkmanage/v2/factorage/query_detail';

export const RpcSDKManageFactorageQueryDetailRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageFactorageQueryDetail (
  merchantNo) {
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageFactorageQueryDetailMethod, params);
  } else {
    let mockEngine = Vue.prototype.getPlugin('RpcMockEngine');
    if (Vue.prototype.getPlugin('lodash').isObject(mockEngine)) {
      let data = mockEngine[RpcSDKManageFactorageQueryDetailMethod];
      if (Vue.prototype.getPlugin('lodash').isObject(data)) {
        return new Promise(function (resolve, reject) {
          let rpcResult = Vue.prototype.getPlugin('RpcCommandResultMaker')(
            {
              request: {},
              status: 200,
              config: {},
              data: {
                command_name: RpcSDKManageFactorageQueryDetailMethod,
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
        return Rpc.get(RpcSDKManageFactorageQueryDetailMethod, params);
      }
    }
  }
}
