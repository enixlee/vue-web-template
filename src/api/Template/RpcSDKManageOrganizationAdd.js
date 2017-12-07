/**
 * Created by Generator.
 * Author: Generator
 * description: 添加组织
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageOrganizationAddMethod = '/sdkmanage/organization/add';

export const RpcSDKManageOrganizationAddRpcType = 'system';

/**
 *
 * @param organizationType int 组织机构类型
 * @param organizationName string 机构名称
 * @param headquarterMerchantNo |null merchantNo 组织机构中最高负权限企业的企业号
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageOrganizationAdd (
  organizationType,
  organizationName,
  headquarterMerchantNo = null) {
  tc.typeCheckChoice(organizationType, [0, 1, 2, 3], false);
  tc.typeCheckString(organizationName, 1, 255, false);
  let params = {};
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
    return Rpc.post(RpcSDKManageOrganizationAddMethod, params);
  } else {
    return Rpc.get(RpcSDKManageOrganizationAddMethod, params);
  }
}
