/**
 * Auth: enixlee
 * Date: 2017/3/22
 * Description: RouterComponents
 */
import * as RouteTypes from 'vue-luffy-engine/lib/Route/RouteTypes';
import NotFound from './routes/404';
import Login from './routes/Login';
import Main from './routes/Main';

let Vue = window.getVue();
const RoutesMap = {
  NotFound,
  Login,
  Main
};

/**
 * 根据名称获取路由配置
 * @param name
 * @returns {*}
 */
Vue.prototype.getRouteByName = (name) => {
  return RoutesMap[name];
};

/**
 * routers need to be registered to vue-router instance
 * return {array}
 */
export function getRouterRoutes () {
  return [].concat(Vue.prototype.getPMRoutesByType(RouteTypes.ROUTE_TYPE_NORMAL))
    .concat(Vue.prototype.getPMRoutesByType(RouteTypes.ROUTE_TYPE_DYNAMIC));
}
