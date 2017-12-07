import {modules} from '../../store/RegisterStoreModules';

let Vue = window.getVue();

/**
 * 清空本地缓存，清空缓存之前需要保存商户标识和商户号
 */
export const clearCache = () => {
  let CacheKey = window['LUFFY_ENGINE_ENV']['LUFFY_ENGINE_STORE_CACHE_KEY'];
  let Storage = Vue.prototype.getPlugin('Storage');
  let StorageUtils = Vue.prototype.getPlugin('StorageUtils');
  let lodash = Vue.prototype.getPlugin('lodash');
  let keysNeedRemove = [];
  let cacheKeys = {};

  lodash.map(modules, function (v, k) {
    let cacheKey = CacheKey + '_' + k;
    let encodeKey = StorageUtils.encodeStorageKey(cacheKey);
    cacheKeys[encodeKey] = cacheKey;
  });

  Storage.each(function (v, k) {
    if (!lodash.isString(cacheKeys[k])) {
      keysNeedRemove.push(k);
    }
  }, function (k) {
    if (Vue.prototype.hasSubString(k, '__TD_')) {
      return true;
    }
  });

  for (let i = 0; i < keysNeedRemove.length; i++) {
    Storage.getInstance().remove(keysNeedRemove[i]);
  }
};

/**
 * 清空kv
 */
export const clearKV = () => {
  let lodash = Vue.prototype.getPlugin('lodash');
  let kv = Vue.prototype.getPlugin('KVStore');
  lodash.forEach(Vue.constants.kv, function (v, k) {
    kv.removeItem(k);
  });
};
