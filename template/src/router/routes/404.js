/**
 * Auth: enixlee
 * Date: 2017/3/27
 * Time: 下午8:01
 * Description: 404
 */
import * as RouteTypes from 'vue-luffy-engine/lib/Route/RouteTypes';
import PageNotFound from 'components/404/404';

const RouterPageNotFound = {
  name: 'PageNotFound',
  path: '/404',
  components: {
    default: PageNotFound
  },
  isAsync: {
    default: false
  },
  meta: {
    requireAuth: false
  }
};

/**
 * choose route type which you needed，you can see route type detail from RouteTypes
 */
let Vue = window.getVue();
Vue.prototype.registerPMRoutes(RouterPageNotFound, RouteTypes.ROUTE_TYPE_NORMAL);

export default RouterPageNotFound;
