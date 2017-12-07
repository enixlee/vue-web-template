/**
 * Created by Generator.
 * Author: Generator
 * description: 补单-POS充值
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageTransactionMakeUpPosMachineRechargeMethod = '/sdkmanage/transaction/make_up_posmachine_recharge';

export const RpcSDKManageTransactionMakeUpPosMachineRechargeRpcType = 'system';

/**
 *
 * @param reorderId string center_record_pos_transaction表中的RecordId
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageTransactionMakeUpPosMachineRecharge (
  reorderId) {
  tc.typeCheckString(reorderId, 1, null, false);
  let params = {};
  if (!lodash.isNull(reorderId) && !lodash.isUndefined(reorderId)) {
    params['reorderId'] = reorderId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageTransactionMakeUpPosMachineRechargeMethod, params);
  } else {
    return Rpc.get(RpcSDKManageTransactionMakeUpPosMachineRechargeMethod, params);
  }
}
