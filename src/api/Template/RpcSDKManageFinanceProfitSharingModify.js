/**
 * Created by Generator.
 * Author: Generator
 * description: 分利修改
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageFinanceProfitSharingModifyMethod = '/sdkmanage/finance/profit_sharing/modify';

export const RpcSDKManageFinanceProfitSharingModifyRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @param ratePayMini ratio 迷你付分利比率
 * @param rateDispatchCard ratio 发卡商户分利比率
 * @param rateMerchantGenerateChannel ratio 商户来源渠道
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageFinanceProfitSharingModify (
  merchantNo,
  ratePayMini,
  rateDispatchCard,
  rateMerchantGenerateChannel) {
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(ratePayMini) && !lodash.isUndefined(ratePayMini)) {
    params['ratePayMini'] = ratePayMini;
  }
  if (!lodash.isNull(rateDispatchCard) && !lodash.isUndefined(rateDispatchCard)) {
    params['rateDispatchCard'] = rateDispatchCard;
  }
  if (!lodash.isNull(rateMerchantGenerateChannel) && !lodash.isUndefined(rateMerchantGenerateChannel)) {
    params['rateMerchantGenerateChannel'] = rateMerchantGenerateChannel;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageFinanceProfitSharingModifyMethod, params);
  } else {
    return Rpc.get(RpcSDKManageFinanceProfitSharingModifyMethod, params);
  }
}
