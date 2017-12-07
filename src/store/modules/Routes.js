/**
 * Created by enixlee.
 * Author: enixlee
 * Date: 2017/3/23
 * Time: 下午8:02
 * description: 注册对应路由的组件
 */
import * as RouteTypes from 'vue-luffy-engine/lib/Route/RouteTypes';
import * as Subjects from '../Subjects';

let Vue = window.getVue();
let lodash = Vue.prototype.getPlugin('lodash');
let Assert = Vue.prototype.getPlugin('Assert');
let Utils = Vue.prototype.getPlugin('Utils');

const Routes = {
  state: {
    routes: {},
    is_initiated: false, // this param is necessary
    doNotCache: true  // this param is necessary
  },

  actions: {},

  getters: {},

  mutations: {
    DATA_MODULE_REGISTERED_Routes (state, payload) {
      lodash.forEach(payload, function (v, k) {
        state[k] = v;
      });
      state.is_initiated = false;
    },
    MODULE_INITIATED_Routes (state) {
      state.is_initiated = true;
      Vue.prototype.$bus.emit(`MODULE_INITIATED_Routes`, {module: 'Routes', state: state});
    },
    [Subjects.ADD_ROUTE_BATCH] (state, payload) {
      Assert.isTrue(!lodash.isEmpty(payload), `add route list mutation error, got ${payload}`);
      state.routes = lodash.merge(state.routes, payload);
    },
    [Subjects.ADD_ROUTE] (state, route) {
      Assert.isStringNotEmpty(route.name, `add route mutation error, got ${route}`);

      state.routes[route.name] = route;
    }
  },

  afterLoadFromCache: (store, state) => {
    store.commit('MODULE_INITIATED_Routes');

    let routesDict = {};

    let allRoutes =
      [].concat(Vue.prototype.getPMRoutesByType(RouteTypes.ROUTE_TYPE_NORMAL))
        .concat(Vue.prototype.getPMRoutesByType(RouteTypes.ROUTE_TYPE_DYNAMIC))
        .concat(Vue.prototype.getPMRoutesByType(RouteTypes.ROUTE_TYPE_ASYNC));

    lodash.forEach(allRoutes, (route, idx) => {
      Assert.isStringNotEmpty(route.name, `route name is empty, got ${route.path}`);
      Assert.isObject(route.isAsync, `route async flag error, got ${route.isAsync}`);
      Assert.isObject(route.components, `route components config error, got ${route.components}`);

      let routeItem = {
        name: route.name,
        components: route.components,
        isAsync: route.isAsync,
        meta: route.meta
      };
      lodash.forEach(route.components, function (component, routeViewName) {
        let async = routeItem.isAsync[routeViewName];
        Assert.isNotNil(async, `route ${routeItem.name} isAsync value error, lack of key ${routeViewName}`);

        if (async) {
          let src = component;
          let name = routeItem.name;
          routeItem.components[routeViewName] = (resolve, reject) => {
            let cacheComponent = window.getRegisterComponent(routeViewName, name);
            if (typeof cacheComponent === 'object') {
              resolve(cacheComponent);
            } else {
              Utils.loadScript(src).then(() => {
                let component = window.getRegisterComponent(routeViewName, name);
                resolve(component);
              }).catch(() => {
                reject();
              });
            }
          };
          window.registerComponent(routeViewName, routeItem.name, routeItem.name);
        } else {
          window.registerComponent(routeViewName, routeItem.name, component);
        }
      });

      routesDict[routeItem.name] = routeItem;
    });

    if (!lodash.isEmpty(routesDict)) {
      store.commit(Subjects.ADD_ROUTE_BATCH, routesDict);
    }
  }
};

export default Routes;
