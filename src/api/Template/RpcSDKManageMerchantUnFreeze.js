/**
 * Created by Generator.
 * Author: Generator
 * description: 启用商户
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMerchantUnFreezeMethod = '/sdkmanage/v2/merchant/unfreeze';

export const RpcSDKManageMerchantUnFreezeRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMerchantUnFreeze (
  merchantNo) {
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMerchantUnFreezeMethod, params);
  } else {
    let mockEngine = Vue.prototype.getPlugin('RpcMockEngine');
    if (Vue.prototype.getPlugin('lodash').isObject(mockEngine)) {
      let data = mockEngine[RpcSDKManageMerchantUnFreezeMethod];
      if (Vue.prototype.getPlugin('lodash').isObject(data)) {
        return new Promise(function (resolve, reject) {
          let rpcResult = Vue.prototype.getPlugin('RpcCommandResultMaker')(
            {
              request: {},
              status: 200,
              config: {},
              data: {
                command_name: RpcSDKManageMerchantUnFreezeMethod,
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
        return Rpc.get(RpcSDKManageMerchantUnFreezeMethod, params);
      }
    }
  }
}
