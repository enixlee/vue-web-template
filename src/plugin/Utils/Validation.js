/**
 * Auth: lijiang
 * Date: 2017/10/31
 * Description: Validation
 */
/**
 * 验证密码
 * @param password
 */
let Vue = window.getVue();
export const passwordValid = (password) => {
  return Vue.constants.regexp.REG_CHAR_NUMBER_LINE.test(password);
};

/**
 * 用户名验证规则，数字字母下划线等字符
 * @param userName
 */
export const userNameValid = (userName) => {
  return Vue.constants.regexp.REG_CHAR_NUMBER_LINE.test(userName);
};

/**
 * 验证码
 * @param verifyCode
 */
export const verifyCodeValid = (verifyCode) => {
  return Vue.constants.regexp.VERIFY_CODE_REG.test(verifyCode);
};

/**
 * 卡种
 * @param cardTypeName
 * @returns {boolean}
 */
export const cardTypeNameCheck = (cardTypeName) => {
  return /^[A-Za-z0-9]{1,50}$/.test(cardTypeName);
};

/**
 * 短信验证码
 * @param messageCode
 * @returns {boolean}
 */
export const messageCodeValid = (messageCode) => {
  return Vue.constants.regexp.REGEXP_SIX_NUMBER.test(messageCode);
};

/**
 *  金额验证
 * @param money
 * @returns {boolean}
 */
export const moneyValid = (money) => {
  return /^([1-9]\d*\.?|0\.)\d{0,2}$/.test(money);
};

/**
 *  正整数验证
 * @param number
 * @returns {boolean}
 */
export const positiveIntegerValid = (number) => {
  return /^[1-9]\d*$/.test(number);
};
