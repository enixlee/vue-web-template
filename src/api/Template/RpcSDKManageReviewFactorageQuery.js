/**
 * Created by Generator.
 * Author: Generator
 * description: 查询收单手续费审核
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageReviewFactorageQueryMethod = '/sdkmanage/review/factorage/query';

export const RpcSDKManageReviewFactorageQueryRpcType = 'system';

/**
 *
 * @param ID bigint 分类审核id
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageReviewFactorageQuery (
  ID) {
  let params = {};
  if (!lodash.isNull(ID) && !lodash.isUndefined(ID)) {
    params['ID'] = ID;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageReviewFactorageQueryMethod, params);
  } else {
    return Rpc.get(RpcSDKManageReviewFactorageQueryMethod, params);
  }
}
