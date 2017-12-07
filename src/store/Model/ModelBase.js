/**
 * Auth: lijiang
 * Date: 2017/10/27
 * Description: ModelBase
 */
let Vue = window.getVue();

class ModelBase {

  constructor (modelName) {
    this.modelName = modelName;
    this.stateSubject = null;
    this.properties = this.data();
  }

  data () {
    return {};
  }

  modifyUserStoreState (stateSubject) {
    Vue.prototype.getPlugin('Assert').isString(stateSubject);
    this.stateSubject = stateSubject;

    return this;
  }

  initFromArray (dataMap) {
    Vue.prototype.getPlugin('Assert').isObject(dataMap);
    let that = this;
    Vue.prototype.getPlugin('lodash').map(dataMap, function (v, k) {
      that.set(k, v);
    });

    return this;
  }

  filterKV (key) {
    return null;
  }

  get (key) {
    Vue.prototype.getPlugin('Assert').isString(key);

    let filter = this.filterKV(key);

    if (filter !== null) {
      return filter;
    }

    return this.properties[key];
  }

  set (key, value) {
    Vue.prototype.getPlugin('Assert').isString(key);
    if (this.stateSubject !== null) {
      Vue.prototype.getPlugin('DataModule').dispatch(this.stateSubject, {
        unique: this.get(this.uniqueKey()),
        key: key,
        value: value
      });
    } else {
      this.properties[key] = value;
    }
  }

  forceSet (key, value) {
    Vue.prototype.getPlugin('Assert').isString(key);
    this.properties[key] = value;
  }

  toArray () {
    return this.properties;
  }

  couldOperate (operateType) {
    return false;
  }

  getColor () {
    return null;
  }

  uniqueKey () {
    Vue.prototype.getPlugin('Assert').isTrue(false, `model ${this.modelName} has none unique key`);
  }
}

export default ModelBase;
