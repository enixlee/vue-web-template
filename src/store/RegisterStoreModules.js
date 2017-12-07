/**
 * Auth: enixlee
 * Date: 2017/3/28
 * Description: RegisterStoreModules
 */
import Routes from './modules/Routes';
import DataMgr from './modules/DataMgr';
import Auth from './modules/Auth';

import {MODULE_INIT_VIA_REGISTER_DYNAMIC} from 'vue-luffy-engine/lib/Vuex/PMSubjects';

let Vue = window.PMApp.Vue;

export const modules = {
  Routes,
  DataMgr,
  Auth
};

let moduleInit = {};

function registerDataModuleInitEvent (e) {
  let Assert = Vue.prototype.getPlugin('Assert');
  Assert.isObject(e, `registerDataModuleInitEvent error, got ${e}`);
  Assert.isStringNotEmpty(e.module, `registerDataModuleInitEvent module name error, got ${e}`);

  let lodash = Vue.prototype.getPlugin('lodash');
  moduleInit[e.module] = e;
  Vue.prototype.$bus.off(`MODULE_INITIATED_${e.module}`, registerDataModuleInitEvent);
  if (lodash.keys(moduleInit).length !== lodash.keys(modules).length) {
    return;
  }

  Vue.prototype.$bus.emit(Vue.constants.events.EVENT_MODULE_INIT_COMPLETE);
}

/**
 * 注册登录数据加载器(需要在数据模块注册前完成注册) step 1
 * @param loader
 */
export function registerInitDataLoading (loader) {
  let Assert = Vue.prototype.getPlugin('Assert');
  Assert.isFunction(loader, `data loader must be a function`);

  Vue.prototype.$bus.on(Vue.constants.events.EVENT_AUTH_COMPLETED, loader);
}

/**
 * 数据模块的注册方法 step 2
 * @param store
 */
export function registerDataModule (store) {
  let lodash = Vue.prototype.getPlugin('lodash');
  let bus = Vue.prototype.$bus;
  lodash.forEach(modules, function (v, k) {
    bus.on(`MODULE_INITIATED_${k}`, registerDataModuleInitEvent);
    store.registerModule(k, v);
    store.commit(MODULE_INIT_VIA_REGISTER_DYNAMIC, {store: store, name: k, module: v});
  });
}

export default {
  modules,
  registerInitDataLoading,
  registerDataModule
};
