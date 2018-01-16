/**
 * Created by Generator.
 * Author: Generator
 * description: 添加商户会员
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMerchantMemberAddMerchantMemberMethod = '/sdkmanage/v2/merchant_member/add_merchant_member';

export const RpcSDKManageMerchantMemberAddMerchantMemberRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @param cellphone cellphone 平台会员手机号
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMerchantMemberAddMerchantMember (
  merchantNo,
  cellphone) {
  tc.typeCheckCellphone(cellphone, false);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(cellphone) && !lodash.isUndefined(cellphone)) {
    params['cellphone'] = cellphone;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMerchantMemberAddMerchantMemberMethod, params);
  } else {
    let mockEngine = Vue.prototype.getPlugin('RpcMockEngine');
    if (Vue.prototype.getPlugin('lodash').isObject(mockEngine)) {
      let data = mockEngine[RpcSDKManageMerchantMemberAddMerchantMemberMethod];
      if (Vue.prototype.getPlugin('lodash').isObject(data)) {
        return new Promise(function (resolve, reject) {
          let rpcResult = Vue.prototype.getPlugin('RpcCommandResultMaker')(
            {
              request: {},
              status: 200,
              config: {},
              data: {
                command_name: RpcSDKManageMerchantMemberAddMerchantMemberMethod,
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
        return Rpc.get(RpcSDKManageMerchantMemberAddMerchantMemberMethod, params);
      }
    }
  }
}
