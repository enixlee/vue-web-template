/**
 * Created by Generator.
 * Author: Generator
 * description: 设置修改费率
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageFactorageConsumptionModifyMethod = '/sdkmanage/factorage/consumption/modify';

export const RpcSDKManageFactorageConsumptionModifyRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @param ratioMemberOrigin ratio 原始会员费率万分比
 * @param ratioMemberNormal ratio 普通会员费率万分比
 * @param ratioMemberMiniPay ratio 迷你付会员费率万分比
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageFactorageConsumptionModify (
  merchantNo,
  ratioMemberOrigin,
  ratioMemberNormal,
  ratioMemberMiniPay) {
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(ratioMemberOrigin) && !lodash.isUndefined(ratioMemberOrigin)) {
    params['ratioMemberOrigin'] = ratioMemberOrigin;
  }
  if (!lodash.isNull(ratioMemberNormal) && !lodash.isUndefined(ratioMemberNormal)) {
    params['ratioMemberNormal'] = ratioMemberNormal;
  }
  if (!lodash.isNull(ratioMemberMiniPay) && !lodash.isUndefined(ratioMemberMiniPay)) {
    params['ratioMemberMiniPay'] = ratioMemberMiniPay;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageFactorageConsumptionModifyMethod, params);
  } else {
    return Rpc.get(RpcSDKManageFactorageConsumptionModifyMethod, params);
  }
}
