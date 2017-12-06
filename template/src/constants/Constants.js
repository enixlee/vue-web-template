/**
 * Auth: lijiang
 * Date: 2017/10/26
 * Description: Constants
 */
import * as Events from './PMConstantsEvent';
import * as Global from './PMConstantsGlobal';
import * as KV from './PMConstantsKV';
import * as RegExp from './PMConstantsRegExp';
import * as Cache from './PMContantsCache';
import * as Logic from './PMConstantsLogic';

const ConstantsMap = {
  events: Events,
  kv: KV,
  global: Global,
  regexp: RegExp,
  cache: Cache,
  logic: Logic
};

const Constants = {
  install (Vue) {
    Vue.constants = ConstantsMap;
    Vue.prototype.$constants = ConstantsMap;
  },
  $constants: ConstantsMap
};

export default Constants;
export const install = Constants.install;
