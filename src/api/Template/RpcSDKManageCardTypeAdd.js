/**
 * Created by Generator.
 * Author: Generator
 * description: 添加卡种
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageCardTypeAddMethod = '/sdkmanage/cardtype/add';

export const RpcSDKManageCardTypeAddRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @param cardBin |null cardBin 对应的CardBin,如果为空,则这个卡片只能生成虚卡
 * @param cardPrice |null money_cent 卡面价值,分
 * @param initCardValue |null money_cent 卡初始金额,分
 * @param cardTypeName string 卡种名称
 * @param termOfValidity int 有效期，月
 * @param cardTypeDiscountRate ratio 预付卡折扣，万分比
 * @param singleRechargeLimitMin |null money_cent 单次充值限额(下限)，默认0元
 * @param singleRechargeLimit |null money_cent 单次充值限额，默认100元
 * @param highestMoneyLimit |null money_cent 现金最高限额,默认500元
 * @param highestVirtualMoneyLimit |null money_cent 虚拟金额最高限额,默认500元
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageCardTypeAdd (
  merchantNo,
  cardBin = null,
  cardPrice = 0,
  initCardValue = 0,
  cardTypeName,
  termOfValidity,
  cardTypeDiscountRate,
  singleRechargeLimitMin = 0,
  singleRechargeLimit = 10000,
  highestMoneyLimit = 50000,
  highestVirtualMoneyLimit = 50000) {
  tc.typeCheckNumber(cardPrice, null, null, true);
  tc.typeCheckNumber(initCardValue, null, null, true);
  tc.typeCheckString(cardTypeName, null, 128, false);
  tc.typeCheckNumber(termOfValidity, 0, null, false);
  tc.typeCheckNumber(singleRechargeLimitMin, null, null, true);
  tc.typeCheckNumber(singleRechargeLimit, null, null, true);
  tc.typeCheckNumber(highestMoneyLimit, null, null, true);
  tc.typeCheckNumber(highestVirtualMoneyLimit, null, null, true);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
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
  if (!lodash.isNull(cardTypeDiscountRate) && !lodash.isUndefined(cardTypeDiscountRate)) {
    params['cardTypeDiscountRate'] = cardTypeDiscountRate;
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
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageCardTypeAddMethod, params);
  } else {
    return Rpc.get(RpcSDKManageCardTypeAddMethod, params);
  }
}
