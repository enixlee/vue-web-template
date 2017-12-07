/**
 * Created by Generator.
 * Author: Generator
 * description: 删除审核权限
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageReviewPermissionDeleteMethod = '/sdkmanage/review/permission/delete';

export const RpcSDKManageReviewPermissionDeleteRpcType = 'system';

/**
 *
 * @param merchantNo bigint 商户号
 * @param cellphone cellphone 会员手机号
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageReviewPermissionDelete (
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
    return Rpc.post(RpcSDKManageReviewPermissionDeleteMethod, params);
  } else {
    return Rpc.get(RpcSDKManageReviewPermissionDeleteMethod, params);
  }
}
