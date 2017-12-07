/**
 * Created by Generator.
 * Author: Generator
 * description: 修改（需要重新审核）
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageCardTypeModifyMethod = '/sdkmanage/cardtype/modify';

export const RpcSDKManageCardTypeModifyRpcType = 'system';

/**
 *
 * @param cardTypeId bigint 卡种id，序号
 * @param cardBin |null cardBin 对应的CardBin
 * @param cardPrice |null money_cent 卡面价值,分
 * @param initCardValue |null money_cent 卡初始金额,分
 * @param cardTypeName |null string 卡种名称
 * @param termOfValidity |null int 有效期，月
 * @param singleRechargeLimitMin |null money_cent 单次充值限额(下限)，默认0元
 * @param singleRechargeLimit |null money_cent 单次充值限额
 * @param highestMoneyLimit |null money_cent 现金最高限额
 * @param highestVirtualMoneyLimit |null money_cent 虚拟金额最高限额
 * @param cardTypeDiscountRate |null ratio 预付卡折扣，万分比
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageCardTypeModify (
  cardTypeId,
  cardBin = null,
  cardPrice = null,
  initCardValue = null,
  cardTypeName = null,
  termOfValidity = null,
  singleRechargeLimitMin = 0,
  singleRechargeLimit = null,
  highestMoneyLimit = null,
  highestVirtualMoneyLimit = null,
  cardTypeDiscountRate = null) {
  tc.typeCheckNumber(cardPrice, null, null, true);
  tc.typeCheckNumber(initCardValue, null, null, true);
  tc.typeCheckString(cardTypeName, null, 128, true);
  tc.typeCheckNumber(termOfValidity, 0, null, true);
  tc.typeCheckNumber(singleRechargeLimitMin, null, null, true);
  tc.typeCheckNumber(singleRechargeLimit, null, null, true);
  tc.typeCheckNumber(highestMoneyLimit, null, null, true);
  tc.typeCheckNumber(highestVirtualMoneyLimit, null, null, true);
  let params = {};
  if (!lodash.isNull(cardTypeId) && !lodash.isUndefined(cardTypeId)) {
    params['cardTypeId'] = cardTypeId;
  }
  if (!lodash.isNull(cardBin) && !lodash.isUndefined(cardBin)) {
    params['cardBin'] = cardBin;
  }
  if (!lodash.isNull(cardPrice) && !lodash.isUndefined(cardPrice)) {
    params['cardPrice'] = cardPrice;
  }
  if (!lodash.isNull(initCardValue) && !lodash.isUndefined(initCardValue)) {
    params['initCardValue'] = initCardValue;
  }
  if (!lodash.isNull(cardTypeName) && !lodash.isUndefined(cardTypeName)) {
    params['cardTypeName'] = cardTypeName;
  }
  if (!lodash.isNull(termOfValidity) && !lodash.isUndefined(termOfValidity)) {
    params['termOfValidity'] = termOfValidity;
  }
  if (!lodash.isNull(singleRechargeLimitMin) && !lodash.isUndefined(singleRechargeLimitMin)) {
    params['singleRechargeLimitMin'] = singleRechargeLimitMin;
  }
  if (!lodash.isNull(singleRechargeLimit) && !lodash.isUndefined(singleRechargeLimit)) {
    params['singleRechargeLimit'] = singleRechargeLimit;
  }
  if (!lodash.isNull(highestMoneyLimit) && !lodash.isUndefined(highestMoneyLimit)) {
    params['highestMoneyLimit'] = highestMoneyLimit;
  }
  if (!lodash.isNull(highestVirtualMoneyLimit) && !lodash.isUndefined(highestVirtualMoneyLimit)) {
    params['highestVirtualMoneyLimit'] = highestVirtualMoneyLimit;
  }
  if (!lodash.isNull(cardTypeDiscountRate) && !lodash.isUndefined(cardTypeDiscountRate)) {
    params['cardTypeDiscountRate'] = cardTypeDiscountRate;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageCardTypeModifyMethod, params);
  } else {
    return Rpc.get(RpcSDKManageCardTypeModifyMethod, params);
  }
}
