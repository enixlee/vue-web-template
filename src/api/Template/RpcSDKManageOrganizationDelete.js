/**
 * Created by Generator.
 * Author: Generator
 * description: 删除组织
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageOrganizationDeleteMethod = '/sdkmanage/organization/delete';

export const RpcSDKManageOrganizationDeleteRpcType = 'system';

/**
 *
 * @param organizationId bigint 组织id
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageOrganizationDelete (
  organizationId) {
  let params = {};
  if (!lodash.isNull(organizationId) && !lodash.isUndefined(organizationId)) {
    params['organizationId'] = organizationId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageOrganizationDeleteMethod, params);
  } else {
    return Rpc.get(RpcSDKManageOrganizationDeleteMethod, params);
  }
}
