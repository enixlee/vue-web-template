/**
 * Auth: enixlee
 * Date: 2017/7/3
 * Description: RouterTransition
 */
import { PAGE_STACK_BACK } from './RouterConfigs';

/**
 * 特效类型 滑出
 * @type {string}
 */
export const TRANSITION_TYPE_POP_OUT = 'pop-out';
/**
 * 特效类型 滑入
 * @type {string}
 */
export const TRANSITION_TYPE_POP_IN = 'pop-in';

/**
 * 页面跳转动画
 * @param vueIns
 * @param to
 * @param from
 * @param transitionState
 * @return {string}
 */
export function doTransition (vueIns, to, from, transitionState) {
  if (transitionNameValid(to.params.transitionName)) {
    return to.params.transitionName;
  }

  if (transitionState === PAGE_STACK_BACK) {
    return shouldShowTransition(from) ? TRANSITION_TYPE_POP_OUT : '';
  } else {
    return shouldShowTransition(to) ? to.meta.transitionName : '';
  }
}

function shouldShowTransition (route) {
  return transitionNameValid(route.meta.transitionName);
}

function transitionNameValid (transitionName) {
  return transitionName && transitionName.length > 0;
}

export default {
  doTransition
};
