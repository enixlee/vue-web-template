/**
 * Auth: enixlee
 * Date: 2017/7/18
 * Description: SimpleDialog
 */
import SimpleDialogVue from './SimpleDialog.vue';
import {DIALOG_TYPE_SIMPLE} from './SimpleDialogConstants';

let Vue = window.getVue();
let DialogInstanceMap = {};

let append2Vue = function (instance) {
  document.getElementById('app').appendChild(instance.$el);
};

let close = function (type, instance) {
  if (instance && DialogInstanceMap[`${type}`]) {
    document.getElementById('app').removeChild(instance.$el);
    delete DialogInstanceMap[`${type}`];
  }
  instance = null;
};

let initInstance = function (type) {
  let instance = null;
  let i18n = Vue.prototype.getPlugin('LangEngine');
  let store = Vue.prototype.getPlugin('DataModule');

  switch (type) {
    case DIALOG_TYPE_SIMPLE:
      instance = new SimpleDialogConstructor({
        el: document.createElement('div'),
        i18n,
        store
      });
      break;
    default:
      break;
  }
  return instance;
};

let SimpleDialogConstructor = Vue.extend(SimpleDialogVue);

function SimpleDialog (options) {
  options = options || {};
  let type = options.type || DIALOG_TYPE_SIMPLE;
  let instance = initInstance(type);
  for (let prop in options) {
    if (options.hasOwnProperty(prop)) {
      instance[prop] = options[prop];
    }
  }
  instance.vueCmp = Vue;
  instance.removeDialog = function () {
    close(type, instance);
  };
  append2Vue(instance);
  DialogInstanceMap[`${DIALOG_TYPE_SIMPLE}`] = instance;
  instance.open();
  return instance;
};

function clearAllDialog () {
  let lodash = Vue.prototype.getPlugin('lodash');
  lodash.map(DialogInstanceMap, function (v, k) {
    close(k, v);
  });
};

export {
  SimpleDialog,
  clearAllDialog
};
