/**
 * Auth: lijiang
 * Date: 2017/10/31
 * Description: Money
 */

/**
 * 元转换成分,不处理负数
 * @param yuan
 * @return {number}
 */
export function yuan2Cent (yuan) {
  yuan = Math.abs(parseFloat(yuan));

  return parseFloat(yuan) * 100;
}

/**
 * 分转元,不处理负数
 * @param cent
 * @return {string}
 */
export function cent2yuan (cent) {
  cent = Math.abs(parseInt(cent));

  return parseFloat(parseFloat(cent) / 100).toFixed(2);
}

/**
 * 用于显示的钱格式化 : ￥xxxx.xx
 * @param moneyCent
 * @param prefix
 * @returns {string}
 */
export const money2Show = (moneyCent, prefix) => {
  let Vue = window.getVue();
  prefix = prefix === '' ? '' : prefix || Vue.prototype.getLang('MONEY_PREFIX');
  return prefix + cent2yuan(moneyCent);
};
