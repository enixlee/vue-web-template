/**
 * Auth: lijiang
 * Date: 2017/10/26
 * Description: Storage
 */
import * as StorageList from './Utils/Storage';

let StorageMap = {};
const Storage = {
  install (Vue) {
    let lodash = Vue.prototype.getPlugin('lodash');
    lodash.map(StorageList, function (v, k) {
      StorageMap[k] = v;
    });
    Vue.storageUtil = StorageMap;
    Vue.prototype.$storageUtil = StorageMap;
  },
  $storageUtil: StorageMap
};

export default Storage;
export const install = Storage.install;
