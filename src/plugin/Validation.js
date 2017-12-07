/**
 * Auth: lijiang
 * Date: 2017/10/24
 * Description: Validation
 */
import * as Validator from './Utils/Validation';

let validatorMap = {};

const Validation = {
  install (Vue) {
    let lodash = Vue.prototype.getPlugin('lodash');
    lodash.map(Validator, function (v, k) {
      validatorMap[k] = v;
    });
    Vue.validator = validatorMap;
    Vue.prototype.$validator = validatorMap;
  },
  $validator: validatorMap
};

export default Validation;
export const install = Validation.install;
