/**
 * Created by Generator.
 * Author: Generator
 * description: 申请制卡
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePrePaidCardFabricationApplyMethod = '/sdkmanage/prepaidcard/fabrication/apply';

export const RpcSDKManagePrePaidCardFabricationApplyRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @param cardTypeId bigint 卡种ID
 * @param cardBinType int 卡种类型0实卡1虚卡
 * @param count int 制卡数量
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePrePaidCardFabricationApply (
  merchantNo,
  cardTypeId,
  cardBinType,
  count) {
  tc.typeCheckNumber(cardBinType, null, null, false);
  tc.typeCheckNumber(count, 1, null, false);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(cardTypeId) && !lodash.isUndefined(cardTypeId)) {
    params['cardTypeId'] = cardTypeId;
  }
  if (!lodash.isNull(cardBinType) && !lodash.isUndefined(cardBinType)) {
    params['cardBinType'] = cardBinType;
  }
  if (!lodash.isNull(count) && !lodash.isUndefined(count)) {
    params['count'] = count;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePrePaidCardFabricationApplyMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePrePaidCardFabricationApplyMethod, params);
  }
}
