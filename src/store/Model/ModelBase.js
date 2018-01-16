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

    let lodash = Vue.prototype.getPlugin('lodash');
    let Assert = Vue.prototype.getPlugin('Assert');
    let data = this.properties;
    lodash.map(this.appends(), function (v) {
      Assert.isTrue(!lodash.has(data, v), `data and appends has the same key, model is ${modelName}, key is ${v}`);
    });
  }

  modelType () {
    return this.modelName;
  }

  data () {
    return {};
  }

  appends () {
    return [];
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

  get (key) {
    let lodash = Vue.prototype.getPlugin('lodash');

    if (lodash.has(this.properties, key)) {
      return this.properties[key];
    }

    let appends = this.appends();
    let difference = lodash.difference(appends, [key]);
    if (difference.length === appends.length - 1) {
      let attributeGenerator = this.__formatAttributeName(key);
      if (lodash.isFunction(this[attributeGenerator])) {
        return this[attributeGenerator]();
      }
    }

    return null;
  }

  buildKeyName (key) {
    let lodash = Vue.prototype.getPlugin('lodash');
    let names = lodash.split(key, '_');
    let attributeName = '';
    lodash.map(names, function (v) {
      attributeName += lodash.capitalize(v);
    });
    return attributeName;
  }

  __formatAttributeName (key) {
    let attributeName = this.buildKeyName(key);
    return `get${attributeName}Attribute`;
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

  uniqueKey () {
    Vue.prototype.getPlugin('Assert').isTrue(false, `model ${this.modelName} has none unique key`);
  }
}

export default ModelBase;
