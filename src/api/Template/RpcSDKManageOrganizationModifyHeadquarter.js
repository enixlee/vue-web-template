/**
 * Created by Generator.
 * Author: Generator
 * description: 修改机构的总公司
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageOrganizationModifyHeadquarterMethod = '/sdkmanage/organization/set_headquarter';

export const RpcSDKManageOrganizationModifyHeadquarterRpcType = 'system';

/**
 *
 * @param organizationId bigint 组织机构id
 * @param headquarterMerchantNo merchantNo 总公司商户号
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageOrganizationModifyHeadquarter (
  organizationId,
  headquarterMerchantNo) {
  let params = {};
  if (!lodash.isNull(organizationId) && !lodash.isUndefined(organizationId)) {
    params['organizationId'] = organizationId;
  }
  if (!lodash.isNull(headquarterMerchantNo) && !lodash.isUndefined(headquarterMerchantNo)) {
    params['headquarterMerchantNo'] = headquarterMerchantNo;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageOrganizationModifyHeadquarterMethod, params);
  } else {
    return Rpc.get(RpcSDKManageOrganizationModifyHeadquarterMethod, params);
  }
}
