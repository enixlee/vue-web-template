/**
 * Auth: lijiang
 * Date: 2017/10/24
 * Description: VueExtends
 */
import * as VueExtendsList from './Utils/VueExtends';

let zbUtilMap = {};

const VueExtends = {
  install (Vue) {
    let lodash = Vue.prototype.getPlugin('lodash');
    lodash.map(VueExtendsList, function (v, k) {
      zbUtilMap[k] = v;
      Vue.prototype[k] = v;
    });
    Vue.prototype.$zb = zbUtilMap;
  },
  $zb: zbUtilMap
};

export default VueExtends;
export const install = VueExtends.install;
