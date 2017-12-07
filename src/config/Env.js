/**
 * Auth: enixlee
 * Date: 2017/6/1
 * Description: Env
 */
/**
 * 版本号
 * @type {string}
 */
import {VERSION, RES_VERSION} from './Version';
import {
  SDK_URL,
  CDN_URL,
  CACHE_ENABLE,
  CAPTCHA_SERVER,
  WEBSITE_URL,
  PLATFORM_ENV,
  PROJECT_NAME
} from './App';

window['LUFFY_ENGINE_ENV'] = window['LUFFY_ENGINE_ENV'] || {};
window['LUFFY_ENGINE_ENV']['LUFFY_ENGINE_STORE_CACHE_ENABLE'] = CACHE_ENABLE; //  开启缓存
window['LUFFY_ENGINE_ENV']['LUFFY_ENGINE_STORE_CACHE_KEY'] = `store_${PROJECT_NAME}_mgr_${VERSION}`;  //  缓存目录
window['LUFFY_ENGINE_ENV']['HTTP_QUEUE_DEALER_FRAME'] = 100;
window['LUFFY_ENGINE_ENV']['PLATFORM_ENV'] = PLATFORM_ENV;

export const PROJECT_CONFIG_KEY = `PROJECT_${PROJECT_NAME}_CONFIG`;
window[PROJECT_CONFIG_KEY] = window[PROJECT_CONFIG_KEY] || {};
window[PROJECT_CONFIG_KEY]['RES_VERSION'] = RES_VERSION;
window[PROJECT_CONFIG_KEY]['SDK_URL'] = SDK_URL;
window[PROJECT_CONFIG_KEY]['CDN_URL'] = CDN_URL;
window[PROJECT_CONFIG_KEY]['CAPTCHA_SERVER'] = CAPTCHA_SERVER;
window[PROJECT_CONFIG_KEY]['WEBSITE_URL'] = WEBSITE_URL;

