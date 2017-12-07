/**
 * Created by Generator.
 * Author: Generator
 * description: 冲赠活动添加
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageActivityRechargeRebateQueryMethod = '/sdkmanage/activity/recharge_rebate/query';

export const RpcSDKManageActivityRechargeRebateQueryRpcType = 'system';

/**
 *
 * @param ID |null bigint 活动id
 * @param merchantNo |null merchantNo 商户号
 * @param merchantCardTypeId |null bigint 卡种id
 * @param effectiveDateStart |null datetime 生效日期，yyyy-mm-ddH:m:s
 * @param effectiveDateEnd |null datetime 生效日期，yyyy-mm-ddH:m:s
 * @param endDateStart |null datetime 截止日期，yyyy-mm-ddH:m:s
 * @param endDateEnd |null datetime 截止日期，yyyy-mm-ddH:m:s
 * @param status |null json 状态
 * @param sortBy |null int 排序规则0:
 * @param desc |null int 0：降序1:升序
 * @param pageIndex |null int 分页号
 * @param pageCount |null int 页面显示数量
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageActivityRechargeRebateQuery (
  ID = null,
  merchantNo = null,
  merchantCardTypeId = null,
  effectiveDateStart = null,
  effectiveDateEnd = null,
  endDateStart = null,
  endDateEnd = null,
  status = null,
  sortBy = 0,
  desc = 0,
  pageIndex = 1,
  pageCount = 50) {
  tc.typeCheckDateString(effectiveDateStart, true);
  tc.typeCheckDateString(effectiveDateEnd, true);
  tc.typeCheckDateString(endDateStart, true);
  tc.typeCheckDateString(endDateEnd, true);
  tc.typeCheckJsonArrayChoice(status, [0, 1, 2, 3], true);
  tc.typeCheckChoice(sortBy, [0], true);
  tc.typeCheckChoice(desc, [0, 1], true);
  tc.typeCheckNumber(pageIndex, 1, null, true);
  tc.typeCheckNumber(pageCount, 1, 50, true);
  let params = {};
  if (!lodash.isNull(ID) && !lodash.isUndefined(ID)) {
    params['ID'] = ID;
  }
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(merchantCardTypeId) && !lodash.isUndefined(merchantCardTypeId)) {
    params['merchantCardTypeId'] = merchantCardTypeId;
  }
  if (!lodash.isNull(effectiveDateStart) && !lodash.isUndefined(effectiveDateStart)) {
    params['effectiveDateStart'] = effectiveDateStart;
  }
  if (!lodash.isNull(effectiveDateEnd) && !lodash.isUndefined(effectiveDateEnd)) {
    params['effectiveDateEnd'] = effectiveDateEnd;
  }
  if (!lodash.isNull(endDateStart) && !lodash.isUndefined(endDateStart)) {
    params['endDateStart'] = endDateStart;
  }
  if (!lodash.isNull(endDateEnd) && !lodash.isUndefined(endDateEnd)) {
    params['endDateEnd'] = endDateEnd;
  }
  if (!lodash.isNull(status) && !lodash.isUndefined(status)) {
    params['status'] = status;
  }
  if (!lodash.isNull(sortBy) && !lodash.isUndefined(sortBy)) {
    params['sortBy'] = sortBy;
  }
  if (!lodash.isNull(desc) && !lodash.isUndefined(desc)) {
    params['desc'] = desc;
  }
  if (!lodash.isNull(pageIndex) && !lodash.isUndefined(pageIndex)) {
    params['pageIndex'] = pageIndex;
  }
  if (!lodash.isNull(pageCount) && !lodash.isUndefined(pageCount)) {
    params['pageCount'] = pageCount;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageActivityRechargeRebateQueryMethod, params);
  } else {
    return Rpc.get(RpcSDKManageActivityRechargeRebateQueryMethod, params);
  }
}
