/**
 * Created by Generator.
 * Author: Generator
 * description: 修改收单手续费设置
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageFactorageModifyMethod = '/sdkmanage/v2/factorage/modify';

export const RpcSDKManageFactorageModifyRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @param factorageType int 收单类型：1：充值收单，2：消费收单，3：第三方收单
 * @param factorageRateMerchantOriginMember int 原始会员充值收单手续费，万分比
 * @param factorageRateMerchantNormalMember int 普通会员充值收单手续费，万分比
 * @param factorageRateMinipayMember int 迷你付会员充值收单手续费，万分比
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageFactorageModify (
  merchantNo,
  factorageType,
  factorageRateMerchantOriginMember = 50,
  factorageRateMerchantNormalMember = 50,
  factorageRateMinipayMember = 50) {
  tc.typeCheckChoice(factorageType, [1, 2, 3], false);
  tc.typeCheckNumber(factorageRateMerchantOriginMember, 0, 10000, false);
  tc.typeCheckNumber(factorageRateMerchantNormalMember, 0, 10000, false);
  tc.typeCheckNumber(factorageRateMinipayMember, 0, 10000, false);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(factorageType) && !lodash.isUndefined(factorageType)) {
    params['factorageType'] = factorageType;
  }
  if (!lodash.isNull(factorageRateMerchantOriginMember) && !lodash.isUndefined(factorageRateMerchantOriginMember)) {
    params['factorageRateMerchantOriginMember'] = factorageRateMerchantOriginMember;
  }
  if (!lodash.isNull(factorageRateMerchantNormalMember) && !lodash.isUndefined(factorageRateMerchantNormalMember)) {
    params['factorageRateMerchantNormalMember'] = factorageRateMerchantNormalMember;
  }
  if (!lodash.isNull(factorageRateMinipayMember) && !lodash.isUndefined(factorageRateMinipayMember)) {
    params['factorageRateMinipayMember'] = factorageRateMinipayMember;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageFactorageModifyMethod, params);
  } else {
    let mockEngine = Vue.prototype.getPlugin('RpcMockEngine');
    if (Vue.prototype.getPlugin('lodash').isObject(mockEngine)) {
      let data = mockEngine[RpcSDKManageFactorageModifyMethod];
      if (Vue.prototype.getPlugin('lodash').isObject(data)) {
        return new Promise(function (resolve, reject) {
          let rpcResult = Vue.prototype.getPlugin('RpcCommandResultMaker')(
            {
              request: {},
              status: 200,
              config: {},
              data: {
                command_name: RpcSDKManageFactorageModifyMethod,
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
        return Rpc.get(RpcSDKManageFactorageModifyMethod, params);
      }
    }
  }
}
