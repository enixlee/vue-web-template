/**
 * Auth: lijiang
 * Date: 2017/10/31
 * Description: Moments
 */
import moment from 'moment';

let Vue = window.getVue();

moment.updateLocale('en', {
  weekdays: [
    '周日', '周一', '周二', '周三', '周四', '周五', '周六'
  ]
});

/**
 * 当月
 * @return {*}
 */
export const currentMonth = () => {
  return moment().month() + 1;
};

/**
 * 当月
 * @param milliseconds
 * @return {boolean}
 */
export const inCurrentMonth = (milliseconds) => {
  return moment().format('YYYY-MM') === milliseconds2DateStr(milliseconds, 'YYYY-MM');
};

/**
 * 上月
 * @param milliseconds
 * @return {boolean}
 */
export const inLastMonth = (milliseconds) => {
  return moment().add(-1, 'month').format('YYYY-MM') === milliseconds2DateStr(milliseconds, 'YYYY-MM');
};

/**
 * 是否是今天
 * @param milliseconds
 * @return {boolean}
 */
export const isToday = (milliseconds) => {
  return milliseconds2DateStr(milliseconds, 'YYYY-MM-DD') === milliseconds2DateStr(today(), 'YYYY-MM-DD');
};

/**
 * 是否是昨天
 * @param milliseconds
 * @return {boolean}
 */
export const isYesterday = (milliseconds) => {
  return milliseconds2DateStr(milliseconds, 'YYYY-MM-DD') === milliseconds2DateStr(yesterday(), 'YYYY-MM-DD');
};

/**
 * 今天
 * @return {number}
 */
export const today = () => {
  return moment().unix();
};

/**
 * 当前时间戳
 * @return {number}
 */
export const currentTime = () => {
  return Date.parse(new Date());
};

/**
 * 昨天
 * @return {number}
 */
export const yesterday = () => {
  return moment().add(-1, 'day').unix();
};

/**
 * 半年前
 * @return {number}
 */
export const halfAYearBefore = () => {
  return moment().add(-6, 'month').unix();
};

/**
 * 日期转毫秒
 * @param dateStr
 * @return {Moment|number}
 */
export const date2Milliseconds = (dateStr) => {
  let TypeCheck = Vue.prototype.getPlugin('TypeCheck');
  TypeCheck.typeCheckDateString(dateStr, `formatTimeShow date string invalid, got ${dateStr}`);

  return moment(dateStr).unix();
};

/**
 * 毫秒转日期
 * @param milliseconds
 * @param format
 * @return {string}
 */
export const milliseconds2DateStr = (milliseconds, format = 'YYYY-MM-DD HH:mm:ss') => {
  let Assert = Vue.prototype.getPlugin('Assert');
  Assert.isNumber(milliseconds, `milliseconds got invalid, ${milliseconds}`);

  return moment.unix(milliseconds).format(format);
};

/**
 * 格式化输出
 * @param dateStr
 * @param format
 * @return {string}
 */
export const format = (dateStr, format = 'YYYY-MM-DD') => {
  let TypeCheck = Vue.prototype.getPlugin('TypeCheck');
  TypeCheck.typeCheckDateString(dateStr, `formatTimeShow date string invalid, got ${dateStr}`);

  return moment(dateStr).format(format);
};

/**
 * 格式化日期输出
 * @param dateStr 2017-01-01 00:00:00
 * @return {string}
 */
export const formatTimeShow = (dateStr) => {
  let TypeCheck = Vue.prototype.getPlugin('TypeCheck');
  TypeCheck.typeCheckDateString(dateStr, `formatTimeShow date string invalid, got ${dateStr}`);

  let date = moment(dateStr);
  let milliseconds = date2Milliseconds(dateStr);

  if (isToday(milliseconds)) {
    return Vue.prototype.getLang('TODAY') + ' ' + date.format('HH:mm');
  }

  if (isYesterday(milliseconds)) {
    return Vue.prototype.getLang('YESTERDAY') + ' ' + date.format('HH:mm');
  }

  return date.format('dddd MM-DD');
};

/**
 * 一天的开始
 * @param day 2017-10-10
 * @returns {string}
 */
export const dayBegin = (day) => {
  return `${day} 00:00:00`;
};

/**
 * 一天的结束
 * @param day
 * @returns {string}
 */
export const dayEnd = (day) => {
  return `${day} 23:59:59`;
};
