/**
 * Created by Generator.
 * Author: Generator
 * description: 删除组织的商户
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageOrganizationRemoveMerchantMethod = '/sdkmanage/organization/remove_merchant';

export const RpcSDKManageOrganizationRemoveMerchantRpcType = 'system';

/**
 *
 * @param organizationId bigint 组织机构id
 * @param merchantNo merchantNo 商户号
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageOrganizationRemoveMerchant (
  organizationId,
  merchantNo) {
  let params = {};
  if (!lodash.isNull(organizationId) && !lodash.isUndefined(organizationId)) {
    params['organizationId'] = organizationId;
  }
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageOrganizationRemoveMerchantMethod, params);
  } else {
    return Rpc.get(RpcSDKManageOrganizationRemoveMerchantMethod, params);
  }
}
