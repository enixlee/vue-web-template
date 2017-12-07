/**
 * Created by Generator.
 * Author: Generator
 * description: 查询商户来源渠道
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMerchantChannelQueryMethod = '/sdkmanage/merchant/channel/query';

export const RpcSDKManageMerchantChannelQueryRpcType = 'system';

/**
 *
 * @param merchantNo |null merchantNo 商户号
 * @param channel |null json 数组，json格式，来源渠道:1：商户，2：个人会员
 * @param generateByMemberId |null memberId 会员号
 * @param generateByMerchantNO |null bigint 商户号
 * @param pageIndex |null int 分页号
 * @param pageCount |null int 页面显示数量
 * @param sortBy |null int 排序规则0:
 * @param desc |null int 0：降序1:升序
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMerchantChannelQuery (
  merchantNo = null,
  channel = null,
  generateByMemberId = null,
  generateByMerchantNO = null,
  pageIndex = 1,
  pageCount = 50,
  sortBy = 0,
  desc = 0) {
  tc.typeCheckJsonArrayChoice(channel, [0, 1, 2], true);
  tc.typeCheckNumber(pageIndex, 1, null, true);
  tc.typeCheckNumber(pageCount, 1, 50, true);
  tc.typeCheckChoice(sortBy, [0], true);
  tc.typeCheckChoice(desc, [0, 1], true);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(channel) && !lodash.isUndefined(channel)) {
    params['channel'] = channel;
  }
  if (!lodash.isNull(generateByMemberId) && !lodash.isUndefined(generateByMemberId)) {
    params['generateByMemberId'] = generateByMemberId;
  }
  if (!lodash.isNull(generateByMerchantNO) && !lodash.isUndefined(generateByMerchantNO)) {
    params['generateByMerchantNO'] = generateByMerchantNO;
  }
  if (!lodash.isNull(pageIndex) && !lodash.isUndefined(pageIndex)) {
    params['pageIndex'] = pageIndex;
  }
  if (!lodash.isNull(pageCount) && !lodash.isUndefined(pageCount)) {
    params['pageCount'] = pageCount;
  }
  if (!lodash.isNull(sortBy) && !lodash.isUndefined(sortBy)) {
    params['sortBy'] = sortBy;
  }
  if (!lodash.isNull(desc) && !lodash.isUndefined(desc)) {
    params['desc'] = desc;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMerchantChannelQueryMethod, params);
  } else {
    return Rpc.get(RpcSDKManageMerchantChannelQueryMethod, params);
  }
}
