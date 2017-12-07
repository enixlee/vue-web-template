/**
 * Created by Generator.
 * Author: Generator
 * description: 申请实卡CardBin
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePrePaidCardCardBinApplyEntityCardBinMethod = '/sdkmanage/prepaidcard/cardbin/apply_entity_cardbin';

export const RpcSDKManagePrePaidCardCardBinApplyEntityCardBinRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @param count int 申请CardBin数量
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePrePaidCardCardBinApplyEntityCardBin (
  merchantNo,
  count) {
  tc.typeCheckNumber(count, 1, 100, false);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(count) && !lodash.isUndefined(count)) {
    params['count'] = count;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManagePrePaidCardCardBinApplyEntityCardBinMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePrePaidCardCardBinApplyEntityCardBinMethod, params);
  }
}
