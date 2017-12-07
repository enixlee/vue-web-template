/**
 * Auth: lijiang
 * Date: 2017/11/8
 * Description: Transaction
 */

let Vue = window.getVue();

/**
 * 格式化输出交易类型
 * @param tradeType
 * @param tradeChannel
 * @returns {string}
 */
export const getTradeTypeCnBy = (tradeType, tradeChannel) => {
  let prefix = getPrefix(tradeChannel);
  let suffix = getSuffix(tradeType);

  prefix = prefix === null ? Vue.prototype.getLang('TRADE_CHANNEL_UNKNOWN') : prefix;
  suffix = suffix === null ? Vue.prototype.getLang('TRADE_TYPE_UNKNOWN') : suffix;

  return `${prefix}${suffix}`;
};

const getPrefix = (tradeChannel) => {
  let ret = null;
  switch (tradeChannel) {
    case Vue.constants.logic.TRADE_CHANNEL_POS_MACHINE:
    case Vue.constants.logic.TRADE_CHANNEL_WEIXIN:
    case Vue.constants.logic.TRADE_CHANNEL_WEIXIN_MANAGE:
    case Vue.constants.logic.TRADE_CHANNEL_MINIPAY:
    case Vue.constants.logic.TRADE_CHANNEL_ZHONGBAI:
      ret = Vue.prototype.getLang(`TRADE_CHANNEL_${tradeChannel}`);
      break;
    default:
      break;
  }
  return ret;
};

const getSuffix = (tradeType) => {
  let ret = null;
  switch (tradeType) {
    case Vue.constants.logic.TRADE_TYPE_CONSUME:
    case Vue.constants.logic.TRADE_TYPE_RECHARGE:
    case Vue.constants.logic.TRADE_TYPE_DISCOUNT_CONSUME:
    case Vue.constants.logic.TRADE_TYPE_BUY_CARD:
    case Vue.constants.logic.TRADE_TYPE_WITHDREW:
    case Vue.constants.logic.TRADE_TYPE_CORRECT:
      ret = Vue.prototype.getLang(`TRADE_TYPE_${tradeType}`);
      break;
    default:
      break;
  }
  return ret;
};

