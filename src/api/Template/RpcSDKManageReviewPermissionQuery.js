/**
 * Created by Generator.
 * Author: Generator
 * description: 查询审核权限
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageReviewPermissionQueryMethod = '/sdkmanage/review/permission/query';

export const RpcSDKManageReviewPermissionQueryRpcType = 'system';

/**
 *
 * @param ID |null bigint 序号
 * @param merchantNo |null bigint 商户号
 * @param cellphone |null cellphone 会员手机号
 * @param status |null json 状态
 * @param pageIndex |null int 分页号
 * @param pageCount |null int 页面显示数量
 * @param sortBy |null int 排序规则0:memberId
 * @param desc |null int 0：降序1:升序
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageReviewPermissionQuery (
  ID = null,
  merchantNo = null,
  cellphone = null,
  status = null,
  pageIndex = 1,
  pageCount = 50,
  sortBy = 0,
  desc = 0) {
  tc.typeCheckCellphone(cellphone, true);
  tc.typeCheckJsonArrayChoice(status, [0, 1, 2, 3], true);
  tc.typeCheckNumber(pageIndex, 1, null, true);
  tc.typeCheckNumber(pageCount, 1, 50, true);
  tc.typeCheckChoice(sortBy, [0], true);
  tc.typeCheckChoice(desc, [0, 1], true);
  let params = {};
  if (!lodash.isNull(ID) && !lodash.isUndefined(ID)) {
    params['ID'] = ID;
  }
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(cellphone) && !lodash.isUndefined(cellphone)) {
    params['cellphone'] = cellphone;
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
    return Rpc.post(RpcSDKManageReviewPermissionQueryMethod, params);
  } else {
    return Rpc.get(RpcSDKManageReviewPermissionQueryMethod, params);
  }
}
