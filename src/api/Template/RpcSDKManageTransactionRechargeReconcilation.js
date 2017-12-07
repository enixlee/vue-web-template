/**
 * Created by Generator.
 * Author: Generator
 * description: 冲正
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');

export const RpcSDKManageTransactionRechargeReconcilationMethod = '/sdkmanage/transaction/recharge/reconcilation';

export const RpcSDKManageTransactionRechargeReconcilationRpcType = 'system';

/**
 *

 * @returns {*}
 * @constructor
 */
export function RpcSDKManageTransactionRechargeReconcilation (
) {
  let params = {};

  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageTransactionRechargeReconcilationMethod, params);
  } else {
    return Rpc.get(RpcSDKManageTransactionRechargeReconcilationMethod, params);
  }
}
