/**
 * Created by Generator.
 * Author: Generator
 * description: 查询制卡批次审核
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageReviewFabricationCardQueryMethod = '/sdkmanage/review/fabrication_card/query';

export const RpcSDKManageReviewFabricationCardQueryRpcType = 'system';

/**
 *
 * @param ID |null bigint 分类审核id
 * @param fabricationBatchId |null bigint 批次号
 * @param cardTypeId |null bigint 卡种id
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageReviewFabricationCardQuery (
  ID = null,
  fabricationBatchId = null,
  cardTypeId = null) {
  let params = {};
  if (!lodash.isNull(ID) && !lodash.isUndefined(ID)) {
    params['ID'] = ID;
  }
  if (!lodash.isNull(fabricationBatchId) && !lodash.isUndefined(fabricationBatchId)) {
    params['fabricationBatchId'] = fabricationBatchId;
  }
  if (!lodash.isNull(cardTypeId) && !lodash.isUndefined(cardTypeId)) {
    params['cardTypeId'] = cardTypeId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageReviewFabricationCardQueryMethod, params);
  } else {
    return Rpc.get(RpcSDKManageReviewFabricationCardQueryMethod, params);
  }
}
