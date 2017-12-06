/**
 * Created by enixlee.
 * Author: enixlee
 * File: DataMgr
 * Date: 2017/7/24
 * Time: 下午8:28
 */
import * as Subjects from '../Subjects';

let Vue = window.PMApp.Vue;
let lodash = Vue.prototype.getPlugin('lodash');

const DataMgr = {
  state: {
    doNotCache: true, // this param is necessary
    is_initiated: false, // this param is necessary
    loadComplete: false,
    requesting: false
  },

  actions: {
    INIT_FROM_REMOTE_DataMgr: ({state, commit, rootState}, payload) => {
      // 远端初始化
      commit('INIT_FROM_REMOTE_DataMgr', state);
    },
    CLEAR_STATE_OF_DataMgr: ({state, commit, rootState}, payload) => {
      // 清空缓存
      commit('CLEAR_STATE_OF_DataMgr', state);
    },
    [Subjects.DATA_LOADED_COMPLETE]: ({state, commit, rootState}, payload) => {
      commit(Subjects.DATA_LOADED_COMPLETE);
    },
    [Subjects.HTTP_REQUEST_STATE]: ({state, commit, rootState}, payload) => {
      commit(Subjects.HTTP_REQUEST_STATE, payload);
    }
  },

  getters: {
    isDataLoadComplete: state => {
      return state.loadComplete;
    },
    isRequesting: state => {
      return state.requesting;
    }
  },

  mutations: {
    DATA_MODULE_REGISTERED_DataMgr (state, payload) {
      lodash.forEach(payload, function (v, k) {
        state[k] = v;
      });
      state.is_initiated = false;
    },
    MODULE_INITIATED_DataMgr (state) {
      state.is_initiated = true;
      Vue.prototype.eventBus.emit('MODULE_INITIATED_DataMgr', {module: 'DataMgr', state: state});
    },
    INIT_FROM_REMOTE_DataMgr (state, payload) {
      Vue.prototype.eventBus.emit('EVENT_DataMgr_INIT_FROM_REMOTE', {module: 'DataMgr', state: state});
    },
    CLEAR_STATE_OF_DataMgr (state, payload) {
      // do something
      state.loadComplete = false;
    },
    [Subjects.DATA_LOADED_COMPLETE] (state, payload) {
      state.loadComplete = true;
    },
    [Subjects.HTTP_REQUEST_STATE] (state, payload) {
      state.requesting = payload === true;
    }
  },

  loadDataComplete: function () {
    Vue.prototype.getPlugin('DataModule').dispatch(Subjects.DATA_LOADED_COMPLETE);
  },

  afterLoadFromCache: (store, state) => {
    store.commit('MODULE_INITIATED_DataMgr');
    Vue.prototype.eventBus.on(Vue.constants.events.EVENT_APP_DATA_LOADED, DataMgr.loadDataComplete);
  }
};

export default DataMgr;

