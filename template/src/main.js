import * as PMEnv from './config/Env';
import PMVueEngine from 'vue-luffy-engine';
import Constants from './constants/Constants';
import VueBus from 'vue-bus';
import {dataLoaderAfterLogin, merchantLogout, moduleInitComplete} from './store/DataLoader';
import * as external from './external/index';
import {default as rpcManager} from './api/RpcManager';
import {default as router} from './router/router';
import {default as DataModuleInitializer} from './store/RegisterStoreModules';
import PMLanguageConfig from './lang/PMLanguageConfig';
import Plugins from './plugin/index';
import App from './App.vue';

let Vue = window.getVue();
let Assert = Vue.prototype.getPlugin('Assert');

/**
 * 初始化引擎配置
 */
function initEngineConfigs () {
  let StorageUtils = Vue.prototype.getPlugin('StorageUtils');
  let Debug = Vue.prototype.getPlugin('Debug');
  !Debug.isProduction() ? StorageUtils.disableStorageEncrypeo() : StorageUtils.enableStorageEncrypeo();
}

/**
 * 注册全局模块
 */
function registerPlugins () {
  // 语言配置
  Vue.prototype.enableMultiLanguage(PMLanguageConfig.locale, PMLanguageConfig.languages);
  Vue.prototype.getLang = (languageKey, params) => {
    Assert.isStringNotEmpty(languageKey, `language key must be a string not empty,got ${languageKey}`);

    if (params) {
      Assert.isObject(params, `language params must be a dictionary, got ${params}`);
    }

    let langEngine = Vue.prototype.getPlugin('LangEngine');
    return langEngine.t(languageKey, params);
  };

  // event-bus
  Vue.use(VueBus);
  Vue.prototype.eventBus = Vue.prototype.$bus;
  // 注册扩展
  Vue.use(Constants);
  Vue.use(Plugins);
}

/**
 * 注册网络接口
 */
function registerRpc () {
  rpcManager.start();
}

/**
 * 初始化数据模块
 */
function initDataModule () {
  let store = Vue.prototype.getPlugin('DataModule');

  Vue.prototype.$bus.on(Vue.constants.events.EVENT_AUTH_LOGOUT, merchantLogout);
  Vue.prototype.$bus.on(Vue.constants.events.EVENT_MODULE_INIT_COMPLETE, moduleInitComplete); // 数据加载完成处理
  DataModuleInitializer.registerInitDataLoading(dataLoaderAfterLogin);  // 登录初始化处理
  DataModuleInitializer.registerDataModule(store);  // 记载数据模块

  return store;
}

/**
 * 初始化路由
 * @returns {*}
 */
function initRouter () {
  router.usePageTransition();
  Vue.prototype.registerPlugin('AppRouter', router);

  return router;
}

function beforeInit () {
  initEngineConfigs();
}

function onInit () {
  registerPlugins();

  registerRpc();
}

/**
 * 初始化完成之后
 */
function afterInit () {
}

/**
 * entrance
 */
PMVueEngine.run(function () {
  beforeInit();
  onInit();
  afterInit();

  let i18n = Vue.prototype.getPlugin('LangEngine');
  let store = initDataModule();
  let router = initRouter();

  let vueIns = new Vue({
    el: '#app',
    store,
    router,
    i18n,
    external,
    PMEnv,
    render: h => h(App)
  });

  return vueIns;
});
