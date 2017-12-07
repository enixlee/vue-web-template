/**
 * Created by Generator.
 * Author: Generator
 * description: 查询预付卡
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManagePrePaidCardQueryMethod = '/sdkmanage/prepaidcard/query';

export const RpcSDKManagePrePaidCardQueryRpcType = 'system';

/**
 *
 * @param prePaidCardId |null json 卡号，数组格式
 * @param merchantNo |null merchantNo 商户号
 * @param cardTypeId |null bigint 卡种ID
 * @param cardBinType |null json
 * @param isSold |null json 是否售出，数组格式
 * @param isActive |null json 是否激活，数组格式
 * @param isBinding |null json 是否绑定，数组格式
 * @param activeDateStart |null datetime 激活日期区间开始时间
 * @param activeDateEnd |null datetime 激活日期区间结束时间
 * @param expireDateStart |null datetime 到期日期区间开始时间
 * @param expireDateEnd |null datetime 到期日期区间结束时间
 * @param status |null json 状态
 * @param cellphone |null cellphone 手机号
 * @param name |null string 预付卡所有者的姓名
 * @param pageIndex |null int 分页号
 * @param pageCount |null int 页面显示数量
 * @param sortBy |null int 排序规则0:商户号1：卡号2：现金账户余额3：虚拟账户余额
 * @param desc |null int 0：降序1:升序
 * @returns {*}
 * @constructor
 */
export function RpcSDKManagePrePaidCardQuery (
  prePaidCardId = null,
  merchantNo = null,
  cardTypeId = null,
  cardBinType = null,
  isSold = null,
  isActive = null,
  isBinding = null,
  activeDateStart = null,
  activeDateEnd = null,
  expireDateStart = null,
  expireDateEnd = null,
  status = null,
  cellphone = null,
  name = null,
  pageIndex = 1,
  pageCount = 50,
  sortBy = 0,
  desc = 0) {
  tc.typeCheckJsonString(prePaidCardId, true);
  tc.typeCheckJsonArrayChoice(cardBinType, [0, 1], true);
  tc.typeCheckJsonArrayChoice(isSold, [0, 1], true);
  tc.typeCheckJsonArrayChoice(isActive, [0, 1], true);
  tc.typeCheckJsonArrayChoice(isBinding, [0, 1], true);
  tc.typeCheckDateString(activeDateStart, true);
  tc.typeCheckDateString(activeDateEnd, true);
  tc.typeCheckDateString(expireDateStart, true);
  tc.typeCheckDateString(expireDateEnd, true);
  tc.typeCheckJsonArrayChoice(status, [0, 1, 2, 3], true);
  tc.typeCheckCellphone(cellphone, true);
  tc.typeCheckString(name, 1, null, true);
  tc.typeCheckNumber(pageIndex, 1, null, true);
  tc.typeCheckNumber(pageCount, 1, 50, true);
  tc.typeCheckChoice(sortBy, [0, 1, 2, 3], true);
  tc.typeCheckChoice(desc, [0, 1], true);
  let params = {};
  if (!lodash.isNull(prePaidCardId) && !lodash.isUndefined(prePaidCardId)) {
    params['prePaidCardId'] = prePaidCardId;
  }
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(cardTypeId) && !lodash.isUndefined(cardTypeId)) {
    params['cardTypeId'] = cardTypeId;
  }
  if (!lodash.isNull(cardBinType) && !lodash.isUndefined(cardBinType)) {
    params['cardBinType'] = cardBinType;
  }
  if (!lodash.isNull(isSold) && !lodash.isUndefined(isSold)) {
    params['isSold'] = isSold;
  }
  if (!lodash.isNull(isActive) && !lodash.isUndefined(isActive)) {
    params['isActive'] = isActive;
  }
  if (!lodash.isNull(isBinding) && !lodash.isUndefined(isBinding)) {
    params['isBinding'] = isBinding;
  }
  if (!lodash.isNull(activeDateStart) && !lodash.isUndefined(activeDateStart)) {
    params['activeDateStart'] = activeDateStart;
  }
  if (!lodash.isNull(activeDateEnd) && !lodash.isUndefined(activeDateEnd)) {
    params['activeDateEnd'] = activeDateEnd;
  }
  if (!lodash.isNull(expireDateStart) && !lodash.isUndefined(expireDateStart)) {
    params['expireDateStart'] = expireDateStart;
  }
  if (!lodash.isNull(expireDateEnd) && !lodash.isUndefined(expireDateEnd)) {
    params['expireDateEnd'] = expireDateEnd;
  }
  if (!lodash.isNull(status) && !lodash.isUndefined(status)) {
    params['status'] = status;
  }
  if (!lodash.isNull(cellphone) && !lodash.isUndefined(cellphone)) {
    params['cellphone'] = cellphone;
  }
  if (!lodash.isNull(name) && !lodash.isUndefined(name)) {
    params['name'] = name;
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
    return Rpc.post(RpcSDKManagePrePaidCardQueryMethod, params);
  } else {
    return Rpc.get(RpcSDKManagePrePaidCardQueryMethod, params);
  }
}
