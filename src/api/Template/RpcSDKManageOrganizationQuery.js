/**
 * Created by Generator.
 * Author: Generator
 * description: 查询(此接口应该是最高权限管理员才能访问)
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageOrganizationQueryMethod = '/sdkmanage/v2/organization/query';

export const RpcSDKManageOrganizationQueryRpcType = 'system';

/**
 *
 * @param organizationId |null bigint 组织id
 * @param organizationType |null json 组织机构类型
 * @param organizationName |null string 机构名称
 * @param headquarterMerchantNo |null merchantNo 组织机构中最高负权限企业的企业号
 * @param pageIndex |null int 分页号
 * @param pageCount |null int 页面显示数量
 * @param sortBy |null int 排序规则0:组织机构id1:组织机构名称2:组织机构类型
 * @param desc |null int 0：降序1:升序
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageOrganizationQuery (
  organizationId = null,
  organizationType = null,
  organizationName = null,
  headquarterMerchantNo = null,
  pageIndex = 1,
  pageCount = 30,
  sortBy = 0,
  desc = 0) {
  tc.typeCheckJsonArrayChoice(organizationType, [0, 1, 2, 3], true);
  tc.typeCheckString(organizationName, 1, 255, true);
  tc.typeCheckNumber(pageIndex, 1, null, true);
  tc.typeCheckNumber(pageCount, 1, 100, true);
  tc.typeCheckChoice(sortBy, [0], true);
  tc.typeCheckChoice(desc, [0, 1], true);
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
    return Rpc.post(RpcSDKManageOrganizationQueryMethod, params);
  } else {
    let mockEngine = Vue.prototype.getPlugin('RpcMockEngine');
    if (Vue.prototype.getPlugin('lodash').isObject(mockEngine)) {
      let data = mockEngine[RpcSDKManageOrganizationQueryMethod];
      if (Vue.prototype.getPlugin('lodash').isObject(data)) {
        return new Promise(function (resolve, reject) {
          let rpcResult = Vue.prototype.getPlugin('RpcCommandResultMaker')(
            {
              request: {},
              status: 200,
              config: {},
              data: {
                command_name: RpcSDKManageOrganizationQueryMethod,
                description: 'succ',
                code: 'succ',
                data: data,
                succ: true
              }
            }
          );
          resolve(rpcResult);
        });
      } else {
        return Rpc.get(RpcSDKManageOrganizationQueryMethod, params);
      }
    }
  }
}
