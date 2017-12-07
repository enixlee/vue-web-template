/**
 * Created by Generator.
 * Author: Generator
 * description: 冻结审核权限
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageReviewPermissionFreezeMethod = '/sdkmanage/review/permission/freeze';

export const RpcSDKManageReviewPermissionFreezeRpcType = 'system';

/**
 *
 * @param merchantNo bigint 商户号
 * @param cellphone cellphone 会员手机号
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageReviewPermissionFreeze (
  merchantNo,
  cellphone) {
  tc.typeCheckCellphone(cellphone, false);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(cellphone) && !lodash.isUndefined(cellphone)) {
    params['cellphone'] = cellphone;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageReviewPermissionFreezeMethod, params);
  } else {
    return Rpc.get(RpcSDKManageReviewPermissionFreezeMethod, params);
  }
}
