import * as RouterComponents from './RouterComponents';
import {default as RouterTransition} from './RouterTransition';
import {default as RouterWatcher} from './RouterWatcher';
import {clearAllDialog} from '../external/components/SimpleDialog/SimpleDialog';

let Vue = window.getVue();
let Router = Vue.prototype.getPlugin('Router');
let store = Vue.prototype.getPlugin('DataModule');

/**
 * 路由实例
 */
let router = new Router({
  mode: 'history',
  routes: RouterComponents.getRouterRoutes()
});

router.beforeEach((to, from, next) => {
  // 处理ui异常
  dealUIEvent();
  // 进行auth验证
  let hasAuth = store.getters.hasAuth;
  if (to.path === '/') {
    if (hasAuth) {
      Vue.prototype.toMainPage(to, from, next);
    } else {
      Vue.prototype.toLogin(to, from, next);
    }
  } else {
    if (to.matched.some(record => record.meta.requireAuth)) {
      if (to.meta.requireAuth) {
        if (hasAuth) {
          next();
        } else {
          Vue.prototype.toLogin(to, from, next);
        }
      } else {
        next();
      }
    } else {
      next();
    }
  }
});

router.afterEach((to, from) => {
  Vue.prototype.eventBus.emit(Vue.constants.events.EVENT_ROUTER_CHANGE_COMPLETE, to);
});

function dealUIEvent () {
  clearAllDialog();
}

router.usePageTransition = function () {
  Vue.prototype.registerPlugin('TransitionMgr', RouterTransition);
  Vue.prototype.registerPlugin('RouterWatcher', RouterWatcher);
};

export default router;
