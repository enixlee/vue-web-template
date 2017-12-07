/**
 * Created by enixlee.
 * Author: enixlee
 * File: Auth
 * Date: 2017/7/17
 * Time: 下午3:36
 */
import * as Subjects from '../Subjects';
import {HTTP_QUEUE_ENABLE} from '../../config/App';

let Vue = window.PMApp.Vue;
let lodash = Vue.prototype.getPlugin('lodash');

const Auth = {
  state: {
    doNotCache: false, // this param is necessary
    is_initiated: false, // this param is necessary
    accessToken: null,
    expireTime: null,
    userId: null,
    organizationId: null
  },

  actions: {
    INIT_FROM_REMOTE_Auth: ({state, commit, rootState}, payload) => {
      // 远端初始化
      commit('INIT_FROM_REMOTE_Auth', state);
    },
    CLEAR_STATE_OF_Auth: ({state, commit, rootState}, payload) => {
      // 清空缓存
      commit('CLEAR_STATE_OF_Auth', state);
    },
    [Subjects.MEMBER_LOGIN]: ({state, commit, rootState}, payload) => {
      let [userName, password, verifyCode] = payload;
      Vue.prototype.$rpc.RpcSDKManageLogin(
        userName,
        password,
        verifyCode
      )
        .then((rpcResult) => {
          if (!rpcResult.isSucc()) {
            return;
          }

          let data = rpcResult.getData();
          commit(Subjects.MEMBER_LOGIN, data);
        });
    },
    [Subjects.MEMBER_LOGOUT]: ({state, commit, rootState}, payload) => {
      if (!Vue.prototype.getModuleGetterByName('hasAuth')) {
        return;
      }
      Vue.prototype.$rpc.RpcSDKManageAuthLogout();
      commit('CLEAR_STATE_OF_Auth');
    },
    [Subjects.GET_LOGIN_VERIFY_CODE]: ({state, commit, rootState}, payload) => {
      Vue.prototype.$rpc.RpcSDKManageRequestVerify(
        1
      )
        .then((rpcResult) => {
          if (!rpcResult.isSucc()) {
            return;
          }

          let data = rpcResult.getData();
          commit(Subjects.GET_LOGIN_VERIFY_CODE, data);
        });
    }
  },

  getters: {
    hasAuth: (state, getters) => {
      if (lodash.isEmpty(state.accessToken)) {
        return false;
      }
      return !getters.tokenIsExpire;
    },
    tokenIsExpire: state => {
      let expireTime = state.expireTime;
      if (!lodash.isNumber(expireTime)) {
        return true;
      }
      let now = Vue.moments.currentTime();

      return expireTime * 1000 <= now;
    },
    userId: state => {
      return state.userId;
    }
  },

  mutations: {
    DATA_MODULE_REGISTERED_Auth (state, payload) {
      lodash.forEach(payload, function (v, k) {
        state[k] = v;
      });
      state.is_initiated = false;
    },
    MODULE_INITIATED_Auth (state) {
      state.is_initiated = true;
      Vue.prototype.eventBus.emit('MODULE_INITIATED_Auth', {module: 'Auth', state: state});
    },
    INIT_FROM_REMOTE_Auth (state, payload) {
      Vue.prototype.eventBus.emit('EVENT_Auth_INIT_FROM_REMOTE', {module: 'Auth', state: state});
    },
    CLEAR_STATE_OF_Auth (state, payload) {
      // do something
      state.accessToken = null;
      state.expireTime = 0;
      state.userId = null;
      state.organizationId = null;
    },
    [Subjects.MEMBER_LOGIN] (state, payload) {
      state.accessToken = payload.access_token;
      state.expireTime = parseInt(payload.expire_time);
      state.userId = payload.user_id;
      state.organizationId = payload.organization_id;

      window['LUFFY_ENGINE_ENV']['HTTP_QUEUE_ENABLE'] = HTTP_QUEUE_ENABLE;  //  缓存目录

      Vue.prototype.$bus.emit(Vue.constants.events.EVENT_AUTH_COMPLETED);
    },
    [Subjects.GET_LOGIN_VERIFY_CODE] (state, payload) {
      Vue.prototype.eventBus.$emit(Subjects.GET_LOGIN_VERIFY_CODE, payload.verifyCode);
    }
  },

  afterLoadFromCache: (store, state) => {
    store.commit('MODULE_INITIATED_Auth');
  }
};

export default Auth;

