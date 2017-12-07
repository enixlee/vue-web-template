/**
 * Auth: lijiang
 * Date: 2017/10/27
 * Time: 上午10:35
 * File: Main
 * Description: Main
 */
import * as RouteTypes from 'vue-luffy-engine/lib/Route/RouteTypes';
import * as RouterViewType from '../RouterConfigs';

const RouterMain = {
  name: 'Main',
  path: '/Main',
  components: {
    child: () => import('components/Main/Main')
  },
  isAsync: {
    child: false
  },
  meta: {
    requireAuth: true
  },
  transitionName: '',
  routerViewType: RouterViewType.ROUTE_TYPE_CHILD_PAGE_CHILD
};

/**
 * choose route type which you needed，you can see route type detail from RouteTypes
 */
let Vue = window.PMApp.Vue;
Vue.prototype.registerPMRoutes(RouterMain, RouteTypes.ROUTE_TYPE_DYNAMIC);

export default RouterMain;
