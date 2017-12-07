/**
 * Auth: lijiang
 * Date: 2017/10/24
 * Description: Moments
 */
import * as MomentsUtil from './Utils/Moments';

let momentMap = {};

const Moments = {
  install (Vue) {
    let lodash = Vue.prototype.getPlugin('lodash');
    lodash.map(MomentsUtil, function (v, k) {
      momentMap[k] = v;
    });
    Vue.moments = momentMap;
    Vue.prototype.$moments = momentMap;
  },
  $moments: momentMap
};

export default Moments;
export const install = Moments.install;
