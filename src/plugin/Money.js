/**
 * Auth: lijiang
 * Date: 2017/10/31
 * Description: Money
 */
import * as MoneyUtils from './Utils/Money';

let moneyMap = {};

const Money = {
  install (Vue) {
    let lodash = Vue.prototype.getPlugin('lodash');
    lodash.map(MoneyUtils, function (v, k) {
      moneyMap[k] = v;
    });
    Vue.money = moneyMap;
    Vue.prototype.$money = moneyMap;
  },
  $money: moneyMap
};

export default Money;
export const install = Money.install;
