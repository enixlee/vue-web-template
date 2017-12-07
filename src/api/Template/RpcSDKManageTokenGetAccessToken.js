/**
 * Created by Generator.
 * Author: Generator
 * description: 获取oauthaccesstoken(orshortlivedtoken)注：请求成功返回short_token,shortlivedtoken有效期为两个小时，开发者可以把该token嵌入到前端逻辑，或者放到用户可见的url里面，而不用担心泄露问题。
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageTokenGetAccessTokenMethod = '/sdkmanage/token/get_access_token';

export const RpcSDKManageTokenGetAccessTokenRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @param refreshToken string 长期有效的Token令牌
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageTokenGetAccessToken (
  merchantNo,
  refreshToken) {
  tc.typeCheckString(refreshToken, 16, null, false);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(refreshToken) && !lodash.isUndefined(refreshToken)) {
    params['refreshToken'] = refreshToken;
  }
  if (debug.isProduction()) {
    return Rpc.get(RpcSDKManageTokenGetAccessTokenMethod, params);
  } else {
    return Rpc.get(RpcSDKManageTokenGetAccessTokenMethod, params);
  }
}
