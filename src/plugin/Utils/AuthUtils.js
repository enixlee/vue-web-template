/**
 * Auth: lijiang
 * Date: 2017/10/31
 * Description: AuthUtils
 */
import {MEMBER_LOGOUT} from '../../store/Subjects';

let Vue = window.getVue();

/**
 * 登出
 */
export const LogOut = () => {
  window['LUFFY_ENGINE_ENV']['HTTP_QUEUE_ENABLE'] = false;  //  关闭请求队列

  // 清除数据缓存，因为有可能切换账号
  Vue.prototype.$bus.emit(Vue.constants.events.EVENT_AUTH_LOGOUT);
  Vue.storageUtil.clearKV();

  let store = Vue.prototype.getPlugin('DataModule');
  store.dispatch(MEMBER_LOGOUT);

  reLogin();
};

function reLogin () {
  window.location = Vue.prototype.env('WEBSITE_URL') + '/Login';
}
