/**
 * Created by Generator.
 * Author: Generator
 * description: 编辑组织
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageOrganizationModifyMethod = '/sdkmanage/organization/modify';

export const RpcSDKManageOrganizationModifyRpcType = 'system';

/**
 *
 * @param organizationId bigint 组织id
 * @param organizationType |null int 组织机构类型
 * @param organizationName |null string 机构名称
 * @param headquarterMerchantNo |null merchantNo 组织机构中最高负权限企业的企业号
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageOrganizationModify (
  organizationId,
  organizationType = null,
  organizationName = null,
  headquarterMerchantNo = null) {
  tc.typeCheckChoice(organizationType, [0, 1, 2, 3], true);
  tc.typeCheckString(organizationName, 1, 255, true);
  let params = {};
  if (!lodash.isNull(organizationId) && !lodash.isUndefined(organizationId)) {
    params['organizationId'] = organizationId;
  }
  if (!lodash.isNull(organizationType) && !lodash.isUndefined(organizationType)) {
    params['organizationType'] = organizationType;
  }
  if (!lodash.isNull(organizationName) && !lodash.isUndefined(organizationName)) {
    params['organizationName'] = organizationName;
  }
  if (!lodash.isNull(headquarterMerchantNo) && !lodash.isUndefined(headquarterMerchantNo)) {
    params['headquarterMerchantNo'] = headquarterMerchantNo;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageOrganizationModifyMethod, params);
  } else {
    return Rpc.get(RpcSDKManageOrganizationModifyMethod, params);
  }
}
