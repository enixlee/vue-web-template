/**
 * Created by Generator.
 * Author: Generator
 * description: 查询
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageUserQueryMethod = '/sdkmanage/user/query';

export const RpcSDKManageUserQueryRpcType = 'system';

/**
 *
 * @param userId |null bigint 用户id
 * @param userName |null memberUserName 用户名
 * @param memberId |null memberId 会员号
 * @param organizationId |null bigint 组织id
 * @param status |null json 状态，数组格式传递,[x,x,x,x]
 * @param pageIndex |null int 分页号
 * @param pageCount |null int 页面显示数量
 * @param sortBy |null int 排序规则0:userid1:会员号2:组织机构编号3:状态
 * @param desc |null int 0：降序1:升序
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageUserQuery (
  userId = null,
  userName = null,
  memberId = null,
  organizationId = null,
  status = null,
  pageIndex = 1,
  pageCount = 50,
  sortBy = 0,
  desc = 0) {
  tc.typeCheckJsonArrayChoice(status, [0, 1, 2, 3], true);
  tc.typeCheckNumber(pageIndex, 1, null, true);
  tc.typeCheckNumber(pageCount, 1, 50, true);
  tc.typeCheckChoice(sortBy, [0, 1, 2, 3], true);
  tc.typeCheckChoice(desc, [0, 1], true);
  let params = {};
  if (!lodash.isNull(userId) && !lodash.isUndefined(userId)) {
    params['userId'] = userId;
  }
  if (!lodash.isNull(userName) && !lodash.isUndefined(userName)) {
    params['userName'] = userName;
  }
  if (!lodash.isNull(memberId) && !lodash.isUndefined(memberId)) {
    params['memberId'] = memberId;
  }
  if (!lodash.isNull(organizationId) && !lodash.isUndefined(organizationId)) {
    params['organizationId'] = organizationId;
  }
  if (!lodash.isNull(status) && !lodash.isUndefined(status)) {
    params['status'] = status;
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
    return Rpc.post(RpcSDKManageUserQueryMethod, params);
  } else {
    return Rpc.get(RpcSDKManageUserQueryMethod, params);
  }
}
