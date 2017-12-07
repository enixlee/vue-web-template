/**
 * Created by Generator.
 * Author: Generator
 * description: 变更商户的组织
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageOrganizationModifyMerchantMethod = '/sdkmanage/organization/modify_merchant_organization';

export const RpcSDKManageOrganizationModifyMerchantRpcType = 'system';

/**
 *
 * @param ID bigint 修改条目的唯一标识
 * @param organizationId bigint 组织机构id
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageOrganizationModifyMerchant (
  ID,
  organizationId) {
  let params = {};
  if (!lodash.isNull(ID) && !lodash.isUndefined(ID)) {
    params['ID'] = ID;
  }
  if (!lodash.isNull(organizationId) && !lodash.isUndefined(organizationId)) {
    params['organizationId'] = organizationId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageOrganizationModifyMerchantMethod, params);
  } else {
    return Rpc.get(RpcSDKManageOrganizationModifyMerchantMethod, params);
  }
}
