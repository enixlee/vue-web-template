/**
 * Created by Generator.
 * Author: Generator
 * description: 添加商户到组织
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageOrganizationAddMerchantMethod = '/sdkmanage/organization/add_merchant';

export const RpcSDKManageOrganizationAddMerchantRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @param organizationId bigint 组织机构id
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageOrganizationAddMerchant (
  merchantNo,
  organizationId) {
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(organizationId) && !lodash.isUndefined(organizationId)) {
    params['organizationId'] = organizationId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageOrganizationAddMerchantMethod, params);
  } else {
    return Rpc.get(RpcSDKManageOrganizationAddMerchantMethod, params);
  }
}
