/**
 * Created by Generator.
 * Author: Generator
 * description: 查询商户折扣
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageDiscountQueryByMerchantMethod = '/sdkmanage/discount/query';

export const RpcSDKManageDiscountQueryByMerchantRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @param merchantAccountLevel |null json 商户会员等级，数组格式
 * @param status |null json 状态，数组格式
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageDiscountQueryByMerchant (
  merchantNo,
  merchantAccountLevel = null,
  status = null) {
  tc.typeCheckJsonString(merchantAccountLevel, true);
  tc.typeCheckJsonArrayChoice(status, [0, 1, 2, 3], true);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(merchantAccountLevel) && !lodash.isUndefined(merchantAccountLevel)) {
    params['merchantAccountLevel'] = merchantAccountLevel;
  }
  if (!lodash.isNull(status) && !lodash.isUndefined(status)) {
    params['status'] = status;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageDiscountQueryByMerchantMethod, params);
  } else {
    return Rpc.get(RpcSDKManageDiscountQueryByMerchantMethod, params);
  }
}
