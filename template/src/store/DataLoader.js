/**
 * Auth: enixlee
 * Date: 2017/6/5
 * Description: DataLoader
 */
/**
 * 数据加载器
 */
import {HTTP_QUEUE_ENABLE} from '../config/App';
import DataMgr from './modules/DataMgr';

let Vue = window.getVue();
let lodash = Vue.prototype.getPlugin('lodash');
let store = Vue.prototype.getPlugin('DataModule');
let modulesInitFromRemote = {
  // to do module
};

let moduleMerchantInitFromRemote = {};

const MODULE_TYPE_MERCHANT = 'merchant';
const MODULE_TYPE_CLIENT = 'client';

let moduleLoadedMap = {}; // 记录各个分类模块的加载进度

function moduleLoadCallback (e, moduleType) {
  let Assert = Vue.prototype.getPlugin('Assert');
  Assert.isObject(e, `module load from remote error, got ${e}`);
  Assert.isStringNotEmpty(e.module, `module load from remote module name error, got ${e}`);
  // let bus = Vue.prototype.$bus;
  let module = e.module;
  // bus.off(`EVENT_${module}_INIT_FROM_REMOTE`);  // 不注销事件，注销后登录不需要从新注册

  let modules = moduleMerchantInitFromRemote;
  let event = Vue.constants.events.EVENT_MERCHANT_MODULE_LOAD_COMPLETE;
  if (moduleType === MODULE_TYPE_CLIENT) {
    modules = modulesInitFromRemote;
    event = Vue.constants.events.EVENT_CLIENT_MODULE_LOAD_COMPLETE;
  }

  let moduleSubType = moduleLoadedMap[`${moduleType}`] || {};
  moduleSubType[`${module}`] = module;
  moduleLoadedMap[`${moduleType}`] = moduleSubType;
  if (lodash.keys(modules).length === lodash.keys(moduleSubType).length) {
    Vue.prototype.$bus.emit(event, {e: event});
  }
}

/**
 * 数据加载完成
 * @param e
 */
function moduleLoaded (e) {
  moduleLoadCallback(e, MODULE_TYPE_CLIENT);
}

function merchantModuleLoaded (e) {
  moduleLoadCallback(e, MODULE_TYPE_MERCHANT);
}

function loadModule (moduleType) {
  let modules = moduleMerchantInitFromRemote;
  let loader = merchantModuleLoaded;
  if (moduleType === MODULE_TYPE_CLIENT) {
    modules = modulesInitFromRemote;
    loader = moduleLoaded;
  }
  let bus = Vue.prototype.$bus;

  let length = lodash.keys(modules).length;
  if (length === 0) {
    let event = Vue.constants.events.EVENT_MERCHANT_MODULE_LOAD_COMPLETE;
    if (moduleType === MODULE_TYPE_CLIENT) {
      event = Vue.constants.events.EVENT_CLIENT_MODULE_LOAD_COMPLETE;
    }
    bus.emit(event, {e: event});
  } else {
    lodash.forEach(modules, function (v, k) {
      bus.on(`EVENT_${k}_INIT_FROM_REMOTE`, loader);
      store.dispatch(`INIT_FROM_REMOTE_${k}`);
    });
  }
}

function loginMerchant () {
  // 初始化首次登陆商户 (商户在此处登录)
}

/**
 * 注册商户登陆响应
 */
function registerMerchantLoginEvent () {
  Vue.prototype.$bus.on(Vue.constants.events.EVENT_AUTH_COMPLETED, loginMerchant);
  Vue.prototype.$bus.on(Vue.constants.events.EVENT_MERCHANT_ACCESSTOKEN_REFRESHED, loadModule, MODULE_TYPE_MERCHANT);
}

function registerModulesLoadedListener () {
  Vue.prototype.$bus.on(Vue.constants.events.EVENT_MERCHANT_MODULE_LOAD_COMPLETE, systemModulesLoaded);
  Vue.prototype.$bus.on(Vue.constants.events.EVENT_CLIENT_MODULE_LOAD_COMPLETE, systemModulesLoaded);
}

function systemModulesLoaded () {
  let merchantModules = moduleLoadedMap[`${MODULE_TYPE_MERCHANT}`] || {};
  let clientModules = moduleLoadedMap[`${MODULE_TYPE_CLIENT}`] || {};

  if (lodash.keys(merchantModules).length === lodash.keys(moduleMerchantInitFromRemote).length &&
    lodash.keys(clientModules).length === lodash.keys(modulesInitFromRemote).length) {
    Vue.prototype.$bus.emit(Vue.constants.events.EVENT_APP_DATA_LOADED);
  }
}

/**
 * 注册数据加载器
 */
export function dataLoaderAfterLogin () {
  // 注册监听器
  registerModulesLoadedListener();

  // 刷新客户端数据
  loadModule(MODULE_TYPE_CLIENT);
}

/**
 * 模块加载完成事件
 */
export function moduleInitComplete () {
  // 注册商户登陆事件
  registerMerchantLoginEvent();

  // 登陆客户端
  if (Vue.prototype.getModuleGetterByName('hasAuth')) {
    window['LUFFY_ENGINE_ENV']['HTTP_QUEUE_ENABLE'] = HTTP_QUEUE_ENABLE;  //  是否开启请求队列
    Vue.prototype.$bus.emit(Vue.constants.events.EVENT_AUTH_COMPLETED);
  }
}

// ========================= logout ==========================

let MODULE_NEED_CLEAR_ON_LOGOUT = {
  DataMgr
};

/**
 * 清除用户相关缓存数据
 */
export function merchantLogout () {
  lodash.forEach(MODULE_NEED_CLEAR_ON_LOGOUT, function (v, k) {
    Vue.prototype.getPlugin('DataModule').dispatch(`CLEAR_STATE_OF_${k}`);
  });

  // 清空已注册的模块
  moduleLoadedMap = {};
}
