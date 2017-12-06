/**
 * Auth: lijiang
 * Date: 2017/10/31
 * Description: VueExtends
 */
/**
 * 首页
 * @param to
 * @param from
 * @param next
 */
import {PROJECT_CONFIG_KEY} from '../../config/Env';
import BigInt from 'big-integer';
// import fileSaver from 'file-saver';

let Vue = window.getVue();
export const toMainPage = (to, from, next) => {
  let query = to ? to.query : null;
  let params = to ? to.params : null;
  next({name: 'Main', query: query, params: params});
};
/**
 * 登录页
 * @param to
 * @param from
 * @param next
 */
export const toLogin = (to, from, next) => {
  let query = to ? to.query : null;
  let params = to ? to.params : null;
  next({name: 'Login', query: query, params: params});
};
let LOADING_LAST_SHOW_TIME = 0;
let LOADING_INTERVAL = 500;
let LOADING_FORCE_SHOW = false;
/**
 * 显示加载动画
 * @param text
 * @param type
 * @param forceOpen
 */
export const showLoading = (text = null, type = 'snake', forceOpen = false) => {
  if (LOADING_FORCE_SHOW) {
    return;
  }
  LOADING_FORCE_SHOW = forceOpen;
  let curTime = Vue.moments.currentTime();
  let interval = curTime - LOADING_LAST_SHOW_TIME;
  if (!LOADING_FORCE_SHOW && interval < LOADING_INTERVAL) {
    return;
  }
  LOADING_LAST_SHOW_TIME = curTime;
  // Vue.prototype.$loading.open({
  //   text: text,
  //   spinnerType: type
  // });
};
/**
 * 关闭加载动画
 * @param forceClose
 */
export const closeLoading = (forceClose = null) => {
  if (forceClose === false) {
    LOADING_FORCE_SHOW = forceClose;
  }
  if (LOADING_FORCE_SHOW) {
    return;
  }
  // Vue.prototype.$loading.close();
};
/**
 * 检测字符串是否为空
 * @param str
 * @returns {*|boolean}
 */
export const stringNotEmpty = (str) => {
  let lodash = Vue.prototype.getPlugin('lodash');
  return lodash.isString(str) && str.length > 0;
};
/**
 * 设置标题
 * @param routeName
 */
export const setTitle = (routeName) => {
  if (!stringNotEmpty(routeName)) {
    return;
  }
  let titleKey = 'TITLE_' + routeName;
  let title = Vue.prototype.getLang(titleKey);
  if (title && title !== titleKey) {
    document.title = title;
  }
};
/**
 * 显示对话框 alert
 * @param content
 * @param leftBtnTxt
 * @param rightBtnTxt
 * @param leftBtnClick
 * @param rightBtnClick
 *
 * example:
 * let content = this.getLang('PHONE_NUMBER_HAS_REGISTERED');
 * let leftBtnText = this.getLang('BTN_CONFIRM');
 * let rightBtnText = this.getLang('BTN_LOGIN');
 *
 * this.showDialog(content, leftBtnText, rightBtnText, leftClick, rightClick);
 */
export const showDialog = (content, leftBtnTxt, rightBtnTxt, leftBtnClick, rightBtnClick) => {
  return Vue.prototype.$dialog({
    content: content,
    leftButtonText: leftBtnTxt,
    rightButtonText: rightBtnTxt,
    leftButtonCallBack: leftBtnClick,
    rightButtonCallBack: rightBtnClick
  });
};
/**
 * 是否包含子串
 * @param srcStr
 * @param substring
 * @returns {boolean}
 */
export const hasSubString = (srcStr, substring) => {
  return srcStr.indexOf(substring) > -1;
};
/**
 * 获取图片的全路径
 * @param imageName
 * @return {*}
 */
export const getImagePath = (imageName) => {
  let Assert = Vue.prototype.getPlugin('Assert');
  Assert.isStringNotEmpty(imageName, `image name invalid,${imageName}`);
  if (hasSubString(imageName, 'http')) {
    return imageName;
  }
  let version = `?v=${Vue.prototype.getPlugin('Crypto').MD5(window[PROJECT_CONFIG_KEY]['RES_VERSION'])}`;
  return window[PROJECT_CONFIG_KEY]['CDN_URL'] + '/' + imageName + version;
};
/**
 * 页面跳转
 * @param router
 * @param pageName
 * @param params
 * @param query
 */
export const gotoPage = (router, pageName, params, query) => {
  params = params || {};
  query = query || {};
  router.push({
    name: pageName,
    params: params,
    query: query
  });
};
/**
 * 拆分手机号
 * @param cellphone
 * @returns {*}
 */
export const splitCellphone = (cellphone) => {
  let Assert = Vue.prototype.getPlugin('Assert');
  Assert.isStringNotEmpty(cellphone, `cellphone must be string!`);
  let cellphoneFormat = trimString(cellphone);
  let length = cellphoneFormat.length;
  if (length <= 3) {
    return [trimString(cellphoneFormat), '', ''];
  } else if (length > 3 && length <= 7) {
    let firstNum = cellphoneFormat.substring(0, 3);
    let secondNum = cellphoneFormat.substring(3, length);
    return [firstNum, secondNum, ''];
  } else {
    let firstNum = cellphoneFormat.substring(0, 3);
    let secondNum = cellphoneFormat.substring(3, 7);
    let thirdNum = cellphoneFormat.substring(7, length);
    return [firstNum, secondNum, thirdNum];
  }
};
/**
 * 合并分页数据的数组
 * @param listSrc
 * @param listDest
 * @param keyword
 * @return {Array}
 */
export const mergePageList = (listSrc, listDest, keyword) => {
  let Assert = Vue.prototype.getPlugin('Assert');
  Assert.isArray(listSrc, `mergeList listSrc not array, got ${listSrc}`);
  Assert.isArray(listDest, `mergeList listSrc not array, got ${listDest}`);
  Assert.isStringNotEmpty(keyword, `mergeList keyword can not be empty, got ${keyword}`);
  let map = {};
  let array = [];
  let index = 1;
  let lodash = Vue.prototype.getPlugin('lodash');
  lodash.map(listSrc, function (v) {
    array.push(v);
    map[`${v.get(keyword)}`] = index;
    index++;
  });
  lodash.map(listDest, function (v) {
    let key = `${v.get(keyword)}`;
    if (map[key]) {
      array[map[key] - 1] = v;
    } else {
      array.push(v);
      map[key] = index;
      index++;
    }
  });
  return array;
};

/**
 * 编辑model
 * @param state
 * @param payload
 */
export const modifyModel = (state, payload) => {
  let unique = payload.unique;
  let key = payload.key;
  let value = payload.value;

  let user = state.list.find(function (u) {
    return u.get(u.uniqueKey()) === unique;
  });
  if (user) {
    user.forceSet(key, value);
  }
};

/**
 * 获取环境变量
 * @param key
 * @returns {*}
 */
export const env = (key) => {
  return window[PROJECT_CONFIG_KEY][key];
};
export const Bus = (vueIns) => {
  return vueIns.$bus;
};
/**
 * 获取常量
 * @param vueIns
 * @param primaryKey
 * @param constKey
 * @returns {*}
 */
export const getConstByKey = (vueIns, primaryKey, constKey) => {
  Vue.prototype.getPlugin('Assert').isStringNotEmpty(primaryKey, `constants primary key empty,got ${primaryKey}`);
  Vue.prototype.getPlugin('Assert').isStringNotEmpty(constKey, `constants constant key empty,got ${constKey}`);
  return vueIns.$constants[primaryKey][constKey];
};
/**
 * returns the byte length of an utf8 string
 * @param str
 */
export const byteLength = (str) => {
  let n = 0;
  for (let i = 0, l = str.length; i < l; i++) {
    let code = str.charCodeAt(i);
    if (code < 0x4e00 || code > 0x9fa5) {
      n += 1;
    } else {
      n += 2;
    }
  }
  return n;
};
/**
 * 裁剪unicode字符
 * @param string
 * @param length
 * @return {string}
 */
export const subStringUnicodeString = (string, length) => {
  let subStr = '';
  let n = 0;
  for (let i = 0, l = string.length; i < l; i++) {
    let code = string.charCodeAt(i);
    if (code < 0x4e00 || code > 0x9fa5) {
      n += 1;
    } else {
      n += 2;
    }
    if (n <= length) {
      subStr += string[i];
    } else {
      break;
    }
  }
  return subStr;
};
/**
 * 拆分卡号
 * @param prePaidCardNo
 * @param needCheckNo
 * @returns {[null,null,null,null,null]}
 */
export const splitPrePaidCardNo = (prePaidCardNo, needCheckNo = true) => {
  let Vue = window.getVue();
  let Assert = Vue.prototype.getPlugin('Assert');
  Assert.isStringNotEmpty(prePaidCardNo, `prePaidCardNO invalid,got ${prePaidCardNo}`);
  if (needCheckNo) {
    Assert.isTrue(prePaidCardNo.length === 19, `prePaidCardNO length invalid, got ${prePaidCardNo}`);
  }
  return [
    prePaidCardNo.substring(0, 4),
    prePaidCardNo.substring(4, 8),
    prePaidCardNo.substring(8, 12),
    prePaidCardNo.substring(12, 16),
    prePaidCardNo.substring(16, 19)
  ];
};
/**
 * 拆分卡号
 * @param prePaidCardNo
 * @param needCheckNo
 * @returns {string}
 */
export const splitPrePaidCardNo2Str = (prePaidCardNo, needCheckNo = true) => {
  let nos = splitPrePaidCardNo(prePaidCardNo, needCheckNo);
  let str = '';
  for (let i = 0; i < 5; i++) {
    if (nos[i].length > 0) {
      str += nos[i];
      if (i < 4 && nos[i + 1].length > 0) {
        str += ' ';
      } else {
        break;
      }
    } else {
      break;
    }
  }
  return str;
};
/**
 * 所有状态，不包括作废和退回
 */
export const allStatus = () => {
  return JSON.stringify([
    Vue.constants.global.MINIPAY_STATUS_INVALID,
    Vue.constants.global.MINIPAY_STATUS_NORMAL,
    Vue.constants.global.MINIPAY_STATUS_FROZEN,
    Vue.constants.global.MINIPAY_STATUS_CANCELLATION,
    Vue.constants.global.MINIPAY_STATUS_RETURN_BACK]);
};
/**
 * 状态中文
 * @param status
 */
export const getStatusCn = (status) => {
  return Vue.prototype.getLang(`MINIPAY_STATUS_${status}`);
};
/**
 * 审核状态中文
 * @param status
 */
export const getReviewStatusCn = (status) => {
  return Vue.prototype.getLang(`REVIEW_STATUS_${status}`);
};
/**
 * 格式化state列表
 * @param state
 * @param payload
 * @param keyword
 */
export const setStoreStateList = (state, payload, keyword) => {
  let lodash = Vue.prototype.getPlugin('lodash');
  state.total = payload.total;
  if (payload.list.length > 0) {
    let list = mergePageList(state.list, payload.list, keyword);
    if (list.length >= state.total) {
      list = lodash.slice(list, 0, state.total);
    }
    state.list = list;
    state.nextPageIndex = parseInt(state.list.length / payload.pageCount) + 1;
  }
};
/**
 * 自定义body弹窗
 * @param renderType
 * @param title
 * @param leftBtnTxt
 * @param rightBtnTxt
 * @param leftBtnClick
 * @param rightBtnClick
 * @param dialogParams
 * @returns {*}
 */
export const showCustomDialog = (renderType, title, leftBtnTxt, rightBtnTxt, leftBtnClick, rightBtnClick, dialogParams = {}) => {
  return Vue.prototype.$dialog({
    title: title,
    renderType: renderType,
    leftButtonText: leftBtnTxt,
    rightButtonText: rightBtnTxt,
    leftButtonCallBack: leftBtnClick,
    rightButtonCallBack: rightBtnClick,
    slotParams: dialogParams
  });
};
/**
 * 显示toast
 * @param message
 */
export const showToast = (message) => {
  Vue.prototype.eventBus.emit(Vue.constants.events.EVENT_SHOW_TOAST, message);
};
/**
 * 删除空白字符
 * @param str
 */
export const trimString = (str) => {
  let lodash = Vue.prototype.getPlugin('lodash');
  if (!lodash.isString(str)) {
    return str;
  }
  return lodash.trim(str).replace(/\s+/g, '');
};
/**
 * 卡号列表
 * @param startPrePaidCardId
 * @param count
 * @returns {Array}
 */
export const calculatePrePaidCardIds = (startPrePaidCardId, count) => {
  let ids = [];
  let id = BigInt(startPrePaidCardId);
  while (count) {
    ids.push(id.toString());
    id = id.add(10);
    count--;
  }
  return ids;
};

/**
 * 计算卡号偏移
 * @param prePaidCardId
 * @param offset
 * @returns {string}
 */
export const calPrePaidCardOffset = (prePaidCardId, offset) => {
  let id = BigInt(prePaidCardId);
  return id.add(10 * offset).toString();
};

/**
 * 数值数组判断
 * @param src
 * @param dest
 * @returns {boolean}
 */
export const arrayEqual = (src, dest) => {
  let Assert = Vue.prototype.getPlugin('Assert');
  Assert.isArray(src, `arrayEqual src in not array, got ${src}`);
  Assert.isArray(dest, `arrayEqual dest in not array, got ${dest}`);
  let lodash = Vue.prototype.getPlugin('lodash');

  if (src.length !== dest.length) {
    return false;
  }

  let valueMap = {};
  lodash.map(src, function (v, k) {
    Assert.isTrue(v !== null, `arrayEqual src ${k} is null`);
    valueMap[v] = v;
  });

  for (let i = 0; i < dest.length; i++) {
    let v = dest[i];
    if (valueMap[v]) {
      continue;
    }
    return false;
  }
  return true;
};

// const getFileFromRemote = (file) => {
// let request = Vue.prototype.getPlugin('HttpRequest');
// return new Promise((resolve, reject) => {
//   request.axios(
//     {
//       method: 'post',
//       url,
//       responseType: 'text'
//     }
//   ).then(response => {
//     resolve(response);
//   }).catch(error => {
//     reject(error.toString());
//   });
// });
// };

/**
 * 下载
 * @param file
 */
export const downloadFile = (file) => {
  let url = `${Vue.prototype.env('SDK_URL')}/download.php?file=${file}`;
  window.open(url);
};

/**
 * 格式化卡号
 * @param id
 * @returns {*}
 */
export const formatPrePaidCardId = (id) => {
  let realId = trimString(id);
  if (realId === '') {
    return '';
  }

  let len = realId.length;
  if (len <= 4) {
    return realId;
  }
  if (len > 4 && len <= 8) {
    return `${realId.substring(0, 4)} ${realId.substring(4, 8)}`;
  }
  if (len > 8 && len <= 12) {
    return `${realId.substring(0, 4)} ${realId.substring(4, 8)} ${realId.substring(8, 12)}`;
  }
  if (len > 12 && len <= 16) {
    return `${realId.substring(0, 4)} ${realId.substring(4, 8)} ${realId.substring(8, 12)} ${realId.substring(12, 16)}`;
  }
  if (len > 16 && len <= 19) {
    return `${realId.substring(0, 4)} ${realId.substring(4, 8)} ${realId.substring(8, 12)} ${realId.substring(12, 16)}  ${realId.substring(16, 19)}`;
  }

  return realId;
};
