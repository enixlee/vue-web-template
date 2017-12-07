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

export const RpcSDKManageCardTypeQueryMethod = '/sdkmanage/cardtype/query';

export const RpcSDKManageCardTypeQueryRpcType = 'system';

/**
 *
 * @param merchantCardTypeId |null bigint 卡种编号
 * @param merchantNo |null merchantNo 商户号
 * @param merchantCardTypeType |null json 数组格式，商户卡种的类型，目前只有:1:预付卡
 * @param cardBin |null cardBin 对应的CardBin,如果为空,则这个卡片只能生成虚卡
 * @param cardBinVirtual |null bigint 虚卡卡宾
 * @param cardTypeName |null string 卡种名称
 * @param status |null json 状态，数组格式
 * @param activateDateStart |null datetime 激活日期
 * @param activateDateEnd |null datetime 激活日期
 * @param pageIndex |null int 分页号
 * @param pageCount |null int 页面显示数量
 * @param sortBy |null int 排序规则0:商户号1：卡种类型2：cardbin3:单次充值限额4:最高限额5:卡面价值6：卡初始金额7:激活日期8：基础折扣9:虚卡卡bin
 * @param desc |null int 0：降序1:升序
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageCardTypeQuery (
  merchantCardTypeId = null,
  merchantNo = null,
  merchantCardTypeType = null,
  cardBin = null,
  cardBinVirtual = null,
  cardTypeName = null,
  status = null,
  activateDateStart = null,
  activateDateEnd = null,
  pageIndex = 1,
  pageCount = 50,
  sortBy = 0,
  desc = 0) {
  tc.typeCheckJsonArrayChoice(merchantCardTypeType, [1], true);
  tc.typeCheckString(cardTypeName, null, 128, true);
  tc.typeCheckJsonArrayChoice(status, [0, 1, 2, 3], true);
  tc.typeCheckDateString(activateDateStart, true);
  tc.typeCheckDateString(activateDateEnd, true);
  tc.typeCheckNumber(pageIndex, 1, null, true);
  tc.typeCheckNumber(pageCount, 1, 50, true);
  tc.typeCheckChoice(sortBy, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], true);
  tc.typeCheckChoice(desc, [0, 1], true);
  let params = {};
  if (!lodash.isNull(merchantCardTypeId) && !lodash.isUndefined(merchantCardTypeId)) {
    params['merchantCardTypeId'] = merchantCardTypeId;
  }
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(merchantCardTypeType) && !lodash.isUndefined(merchantCardTypeType)) {
    params['merchantCardTypeType'] = merchantCardTypeType;
  }
  if (!lodash.isNull(cardBin) && !lodash.isUndefined(cardBin)) {
    params['cardBin'] = cardBin;
  }
  if (!lodash.isNull(cardBinVirtual) && !lodash.isUndefined(cardBinVirtual)) {
    params['cardBinVirtual'] = cardBinVirtual;
  }
  if (!lodash.isNull(cardTypeName) && !lodash.isUndefined(cardTypeName)) {
    params['cardTypeName'] = cardTypeName;
  }
  if (!lodash.isNull(status) && !lodash.isUndefined(status)) {
    params['status'] = status;
  }
  if (!lodash.isNull(activateDateStart) && !lodash.isUndefined(activateDateStart)) {
    params['activateDateStart'] = activateDateStart;
  }
  if (!lodash.isNull(activateDateEnd) && !lodash.isUndefined(activateDateEnd)) {
    params['activateDateEnd'] = activateDateEnd;
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
    return Rpc.post(RpcSDKManageCardTypeQueryMethod, params);
  } else {
    return Rpc.get(RpcSDKManageCardTypeQueryMethod, params);
  }
}
