/**
 * Auth: enixlee
 * Date: 2017/7/3
 * Description: RouterWatcher
 */
import {PAGE_STACK_STAND, PAGE_STACK_BACK, PAGE_STACK_PUSH, PAGE_STACK_JUMP} from './RouterConfigs';

const CAN_NOT_RETURN_BACK_PAGE = {};

let PageStack = [];
let lodash = window.getVue().prototype.getPlugin('lodash');

export function routerChange (vueIns, to, from) {
  let params = to.params || {};
  let forceRedirect = lodash.isBoolean(params.forceRedirect) ? params.forceRedirect : false;

  if (PageStack[PageStack.length - 1] !== from.name && !forceRedirect) {
    // 修正
    PageStack.push(from.name);
  }

  if (to.name === from.name) {
    return PAGE_STACK_STAND;
  }

  let index = -1;
  if (PageStack.length > 0) {
    for (let i = PageStack.length - 1; i >= 0; i--) {
      let page = PageStack[i];
      if (page === to.name) {
        index = i;
        break;
      }
    }
  }
  let ret = PAGE_STACK_PUSH;
  let nowCount = PageStack.length;
  if (index >= 0 && nowCount - index > 0) {
    // 出栈
    PageStack = lodash.dropRight(PageStack, nowCount - index);

    if (index < nowCount - 2) {
      // 多页后退
      if (!forceRedirect) {
        PageStack.push(from.name);
      }
      ret = PAGE_STACK_JUMP;
    } else {
      // 后退一页
      ret = PAGE_STACK_BACK;
    }
  }
  PageStack.push(to.name);

  return ret;
}

/**
 * 轻质重定向
 * @param vueIns
 * @param pageName
 */
function forceRedirect (vueIns, pageName) {
  vueIns.gotoPage(vueIns.$router, pageName, {forceRedirect: true});
}

/**
 * 修正路由回退的部分页面异常
 * @param vueIns
 * @param to
 * @param from
 */
export function modifyRouterGoBack (vueIns, to, from) {
  let filterPage = CAN_NOT_RETURN_BACK_PAGE[to.name];
  if (lodash.isObject(filterPage)) {
    forceRedirect(vueIns, filterPage.name);
    return false;
  }
  return true;
}

export default {
  routerChange,
  modifyRouterGoBack
};
