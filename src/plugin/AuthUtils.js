/**
 * Auth: lijiang
 * Date: 2017/10/26
 * Description: Utils
 */
import * as AuthUtilList from './Utils/AuthUtils';

let AuthUtilMap = {};
const AuthUtil = {
  install (Vue) {
    let lodash = Vue.prototype.getPlugin('lodash');
    lodash.map(AuthUtilList, function (v, k) {
      AuthUtilMap[k] = v;
    });
    Vue.authUtils = AuthUtilMap;
    Vue.prototype.$authUtils = AuthUtilMap;
  },
  $authUtils: AuthUtilMap
};

export default AuthUtil;
export const install = AuthUtil.install;
