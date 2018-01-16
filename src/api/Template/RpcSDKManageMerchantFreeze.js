/**
 * Created by Generator.
 * Author: Generator
 * description: 禁用商户
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMerchantFreezeMethod = '/sdkmanage/v2/merchant/freeze';

export const RpcSDKManageMerchantFreezeRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMerchantFreeze (
  merchantNo) {
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMerchantFreezeMethod, params);
  } else {
    let mockEngine = Vue.prototype.getPlugin('RpcMockEngine');
    if (Vue.prototype.getPlugin('lodash').isObject(mockEngine)) {
      let data = mockEngine[RpcSDKManageMerchantFreezeMethod];
      if (Vue.prototype.getPlugin('lodash').isObject(data)) {
        return new Promise(function (resolve, reject) {
          let rpcResult = Vue.prototype.getPlugin('RpcCommandResultMaker')(
            {
              request: {},
              status: 200,
              config: {},
              data: {
                command_name: RpcSDKManageMerchantFreezeMethod,
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
        return Rpc.get(RpcSDKManageMerchantFreezeMethod, params);
      }
    }
  }
}
