/**
 * Created by Generator.
 * Author: Generator
 * description: 添加商户来源渠道
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMerchantChannelAddMethod = '/sdkmanage/merchant/channel/add';

export const RpcSDKManageMerchantChannelAddRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @param channel int 来源渠道:1：商户，2：个人会员
 * @param generateByMerchantNO |null bigint 商户号
 * @param generateByMemberId |null memberId 会员号
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMerchantChannelAdd (
  merchantNo,
  channel,
  generateByMerchantNO = null,
  generateByMemberId = null) {
  tc.typeCheckChoice(channel, [0, 1, 2], false);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(channel) && !lodash.isUndefined(channel)) {
    params['channel'] = channel;
  }
  if (!lodash.isNull(generateByMerchantNO) && !lodash.isUndefined(generateByMerchantNO)) {
    params['generateByMerchantNO'] = generateByMerchantNO;
  }
  if (!lodash.isNull(generateByMemberId) && !lodash.isUndefined(generateByMemberId)) {
    params['generateByMemberId'] = generateByMemberId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMerchantChannelAddMethod, params);
  } else {
    return Rpc.get(RpcSDKManageMerchantChannelAddMethod, params);
  }
}
