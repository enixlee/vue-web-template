/**
 * Created by Generator.
 * Author: Generator
 * description: 查询消费记录
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageTransactionQueryMethod = '/sdkmanage/transaction/query';

export const RpcSDKManageTransactionQueryRpcType = 'system';

/**
 *
 * @param tradeFlowOfPayMini |null string 流水号
 * @param tradeType |null tradeTypeJsonArray 数组格式,交易类型
 * @param merchantNo |null merchantNo 商户号
 * @param prePaidCardId |null prePaidCardNo 预付卡号
 * @param tradeSubType |null tradeSubTypeJsonArray 子类型
 * @param tradeTimeStart |null datetime 起始交易时间
 * @param tradeTimeEnd |null datetime 交易时间上限
 * @param posTerminalId |null string pos机号
 * @param isReDrew |null json 是否撤销/冲正/退货0否1是
 * @param memberId |null memberId 会员号
 * @param cellphone |null cellphone 手机号
 * @param name |null string 会员姓名
 * @param pageIndex |null int 分页号
 * @param pageCount |null int 页面显示数量
 * @param sortBy |null int 排序规则0:商户号1：卡号2：交易类型3：交易子类型4:交易日期5：交易金额
 * @param desc |null int 0：降序1:升序
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageTransactionQuery (
  tradeFlowOfPayMini = null,
  tradeType = null,
  merchantNo = null,
  prePaidCardId = null,
  tradeSubType = null,
  tradeTimeStart = null,
  tradeTimeEnd = null,
  posTerminalId = null,
  isReDrew = null,
  memberId = null,
  cellphone = null,
  name = null,
  pageIndex = 1,
  pageCount = 50,
  sortBy = 0,
  desc = 0) {
  tc.typeCheckString(tradeFlowOfPayMini, 1, 255, true);
  tc.typeCheckDateString(tradeTimeStart, true);
  tc.typeCheckDateString(tradeTimeEnd, true);
  tc.typeCheckString(posTerminalId, null, null, true);
  tc.typeCheckJsonArrayChoice(isReDrew, [0, 1], true);
  tc.typeCheckCellphone(cellphone, true);
  tc.typeCheckString(name, 1, 255, true);
  tc.typeCheckNumber(pageIndex, 1, null, true);
  tc.typeCheckNumber(pageCount, 1, 50, true);
  tc.typeCheckChoice(sortBy, [0, 1, 2, 3, 4, 5], true);
  tc.typeCheckChoice(desc, [0, 1], true);
  let params = {};
  if (!lodash.isNull(tradeFlowOfPayMini) && !lodash.isUndefined(tradeFlowOfPayMini)) {
    params['tradeFlowOfPayMini'] = tradeFlowOfPayMini;
  }
  if (!lodash.isNull(tradeType) && !lodash.isUndefined(tradeType)) {
    params['tradeType'] = tradeType;
  }
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(prePaidCardId) && !lodash.isUndefined(prePaidCardId)) {
    params['prePaidCardId'] = prePaidCardId;
  }
  if (!lodash.isNull(tradeSubType) && !lodash.isUndefined(tradeSubType)) {
    params['tradeSubType'] = tradeSubType;
  }
  if (!lodash.isNull(tradeTimeStart) && !lodash.isUndefined(tradeTimeStart)) {
    params['tradeTimeStart'] = tradeTimeStart;
  }
  if (!lodash.isNull(tradeTimeEnd) && !lodash.isUndefined(tradeTimeEnd)) {
    params['tradeTimeEnd'] = tradeTimeEnd;
  }
  if (!lodash.isNull(posTerminalId) && !lodash.isUndefined(posTerminalId)) {
    params['posTerminalId'] = posTerminalId;
  }
  if (!lodash.isNull(isReDrew) && !lodash.isUndefined(isReDrew)) {
    params['isReDrew'] = isReDrew;
  }
  if (!lodash.isNull(memberId) && !lodash.isUndefined(memberId)) {
    params['memberId'] = memberId;
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
    return Rpc.post(RpcSDKManageTransactionQueryMethod, params);
  } else {
    return Rpc.get(RpcSDKManageTransactionQueryMethod, params);
  }
}
