/**
 * Auth: enixlee
 * Date: 2017/7/17
 * Time: 下午3:51
 * File: Login
 * Description: Login
 */
import * as RouteTypes from 'vue-luffy-engine/lib/Route/RouteTypes';
import * as RouterViewType from '../RouterConfigs';
import Login from 'components/Login/Login';

const RouterLogin = {
  name: 'Login',
  path: '/Login',
  components: {
    fullPage: Login
  },
  isAsync: {
    fullPage: false
  },
  meta: {
    requireAuth: false
  },
  transitionName: '',
  routerViewType: RouterViewType.ROUTE_TYPE_FULL_PAGE
};

/**
 * choose route type which you needed，you can see route type detail from RouteTypes
 */
let Vue = window.PMApp.Vue;
Vue.prototype.registerPMRoutes(RouterLogin, RouteTypes.ROUTE_TYPE_NORMAL);

export default RouterLogin;
