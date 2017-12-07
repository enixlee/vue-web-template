/**
 * Created by Generator.
 * Author: Generator
 * description: 获取refreshtoken(orlonglivedtoken)注：请求成功返回long_token,long_token等效于oauth2协议中的refreshtoken，有效期可以视为无限长，开发者应当保存在自己的数据库里面，在任何时候都不应该把这个token传到前台逻辑。
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageTokenGetRefreshTokenMethod = '/sdkmanage/token/get_refresh_token';

export const RpcSDKManageTokenGetRefreshTokenRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @param secretKey string 字符串型，必选，分配的商户密钥
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageTokenGetRefreshToken (
  merchantNo,
  secretKey) {
  tc.typeCheckString(secretKey, 64, 64, false);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(secretKey) && !lodash.isUndefined(secretKey)) {
    params['secretKey'] = secretKey;
  }
  if (debug.isProduction()) {
    return Rpc.get(RpcSDKManageTokenGetRefreshTokenMethod, params);
  } else {
    return Rpc.get(RpcSDKManageTokenGetRefreshTokenMethod, params);
  }
}
