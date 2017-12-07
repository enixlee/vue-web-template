/**
 * Auth: enixlee
 * Date: 2017/7/15
 * Description: RpcManager
 */
import {PROJECT_CONFIG_KEY} from '../config/Env';
import {default as RpcMap} from './Template/RpcMap';
import CodesMap from './Template/ErrorCode/index';
import {
  ACCESS_TOKEN_KEY,
  MERCHANT_TOKEN_TYPE,
  CLIENT_TOKEN_TYPE,
  TOKEN_INVALID,
  TOKEN_DISAPPEARED,
  MERCHANT_TOKEN_INVALID
} from './RpcContants';
import {
  // SIMPLE_DIALOG_BTN_CANCEL,
  SIMPLE_DIALOG_BTN_CONFIRM
} from '../external/components/SimpleDialog/SimpleDialogConstants';
import {HTTP_REQUEST_STATE} from '../store/Subjects';

let Vue = window.getVue();
let lodash = Vue.prototype.getPlugin('lodash');

/**
 * 获取商户token
 * @returns string
 */
function getMerchantToken () {
  return Vue.prototype.getModuleGetterByName('merchantToken');
}

/**
 * 获取用户token
 * @return {null|*}
 */
function getClientToken () {
  let Auth = Vue.prototype.getStoreState('Auth');
  return Auth.accessToken;
}

/**
 * rpc参数适配器
 * @param method
 * @param params
 * @return {*|any|Dictionary<string>}
 */
function rpcParamsAdapter (method, params) {
  let rpc = RpcMap[method];
  let Assert = Vue.prototype.getPlugin('Assert');
  Assert.isObject(rpc, `rpc ${method} not exist`);

  let token = null;
  switch (rpc.type) {
    case MERCHANT_TOKEN_TYPE:
      token = getMerchantToken();
      break;
    case CLIENT_TOKEN_TYPE:
      token = getClientToken();
      break;
    default:
      token = getClientToken();
      break;
  }

  if (lodash.isString(token) && token !== '') {
    params = params || {};
    params[ACCESS_TOKEN_KEY] = token;
  }

  doBeforeRpcRequest(method);

  return params;
}

let loadingTimer = null;
const LOADING_DELAY_SHOW_INTERVAL = 500;

function doBeforeRpcRequest (method) {
  if (loadingTimer !== null) {
    clearTimeout(loadingTimer);
    loadingTimer = null;
  }
  loadingTimer = setTimeout(function () {
    // console.info({start: Date.parse(new Date()), method: method});
    Vue.prototype.showLoading();
  }, LOADING_DELAY_SHOW_INTERVAL);

  Vue.prototype.getPlugin('DataModule').dispatch(HTTP_REQUEST_STATE, true);
  Vue.prototype.eventBus.emit(Vue.constants.events.HTTP_REQUEST_BEGIN, {method: method});
}

function doAfterRpcBack (result) {
  // console.info({end: Date.parse(new Date()), method: result});
  if (loadingTimer !== null) {
    clearTimeout(loadingTimer);
    loadingTimer = null;
  }
  Vue.prototype.getPlugin('DataModule').dispatch(HTTP_REQUEST_STATE, false);
  Vue.prototype.eventBus.emit(Vue.constants.events.HTTP_REQUEST_END, result);
  Vue.prototype.closeLoading();
}

/**
 * 处理http请求错误
 * @param error
 */
function dealRequestError (error) {
  doAfterRpcBack();
  if (lodash.isEmpty(error.response)) {
    Vue.prototype.showDialog(
      Vue.prototype.getLang('ERROR_REQUEST_FAIL'),
      Vue.prototype.getLang('BTN_CONFIRM')
    );
  } else {
    Vue.prototype.showDialog(
      Vue.prototype.getLang('ERROR_API_INVALID') + error.response.status,
      Vue.prototype.getLang('BTN_CONFIRM')
    );
  }
}

/**
 * 处理rpc错误码
 * @param rpcResult
 */
function dealRpcError (rpcResult) {
  doAfterRpcBack(rpcResult);

  let code = rpcResult.getCode();
  if (code === TOKEN_INVALID || code === TOKEN_DISAPPEARED) {
    dealTokenInvalid(rpcResult);
    return;
  }

  let rpcConfig = RpcMap[rpcResult.getCommand()];
  let rpcType = rpcConfig.type;
  if (code === MERCHANT_TOKEN_INVALID && rpcType === MERCHANT_TOKEN_TYPE) {
    dealTokenInvalid(rpcResult);
    return;
  }

  let desc = rpcResult.getDescription();
  let leftButtonText = Vue.prototype.getLang('BTN_CANCEL');
  let rightButtonText = Vue.prototype.getLang('BTN_CONFIRM');
  let cmd = rpcResult.getCommand();
  let codes = CodesMap[cmd];
  if (codes && codes.dealSelf) {
    return;
  }

  let event = `${cmd}`;
  if (codes && codes[desc]) {
    let config = codes[desc];
    desc = config.desc;
    leftButtonText = config.leftButtonText || null;
    rightButtonText = config.rightButtonText || null;
  }

  showRpcResult(desc, event, leftButtonText, rightButtonText, rpcResult);
}

/**
 * token 失效 (判断method类型)
 * 1.清kv
 * 2.清auth信息
 * @param rpcResult
 */
function dealTokenInvalid (rpcResult) {
  let cmd = rpcResult.getCommand();
  let rpcConfig = RpcMap[cmd];
  let rpcType = rpcConfig.type;
  switch (rpcType) {
    case MERCHANT_TOKEN_TYPE:
      dealMerchantTokenInvalid(rpcResult);
      break;
    default:
      dealClientTokenInvalid();
      break;
  }
}

let RpcMerchantLoginMethod = 'xxxxxx'; // 商户登录的rpc，目前没有作用
function dealMerchantTokenInvalid (rpcResult) {
  let command = rpcResult.getCommand();

  if (command === RpcMerchantLoginMethod) {
    let Assert = Vue.prototype.getPlugin('Assert');
    Assert.isTrue(false, `merchant login api error, got ${rpcResult.getDescription()}`);
  }

  // let store = Vue.prototype.getPlugin('DataModule');
  // store.dispatch(MERCHANT_LOGIN);
}

function dealClientTokenInvalid () {
  Vue.authUtils.LogOut();
}

function showRpcResult (desc, event, leftBtnText, rightBtnText, rpcResult) {
  // Vue.prototype.showDialog(
  //   desc,
  //   leftBtnText,
  //   rightBtnText,
  //   function () {
  //     Vue.prototype.$bus.emit(event, {action: SIMPLE_DIALOG_BTN_CANCEL, rpc: rpcResult});
  //   },
  //   function () {
  //     Vue.prototype.$bus.emit(event, {action: SIMPLE_DIALOG_BTN_CONFIRM, rpc: rpcResult});
  //   }
  // );
  Vue.prototype.showDialog(
    desc,
    leftBtnText,
    null,
    function () {
      Vue.prototype.$bus.emit(event, {action: SIMPLE_DIALOG_BTN_CONFIRM, rpc: rpcResult});
    }
  );
}

/**
 * rpc正常放回的处理方法
 * @param rpcResult
 */
function rpcSuccCommonDealer (rpcResult) {
  doAfterRpcBack(rpcResult);
}

const start = function () {
  let httpRequest = Vue.prototype.getPlugin('HttpRequest');
  httpRequest.changeBaseDomain(window[PROJECT_CONFIG_KEY]['SDK_URL']);
  httpRequest.registerParamsAdapter(rpcParamsAdapter);
  httpRequest.registerRpcErrorDealer(dealRequestError, dealRpcError);
  httpRequest.registerRpcSuccCommonDealer(rpcSuccCommonDealer);
};

export default {
  start
};
