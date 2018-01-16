/**
 * Created by Generator.
 * Author: Generator
 * description: 驳回
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageReviewRefuseMethod = '/sdk_manage/v2/review/refuse';

export const RpcSDKManageReviewRefuseRpcType = 'system';

/**
 *
 * @param reviewId bigint 审核编号
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageReviewRefuse (
  reviewId) {
  let params = {};
  if (!lodash.isNull(reviewId) && !lodash.isUndefined(reviewId)) {
    params['reviewId'] = reviewId;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageReviewRefuseMethod, params);
  } else {
    let mockEngine = Vue.prototype.getPlugin('RpcMockEngine');
    if (Vue.prototype.getPlugin('lodash').isObject(mockEngine)) {
      let data = mockEngine[RpcSDKManageReviewRefuseMethod];
      if (Vue.prototype.getPlugin('lodash').isObject(data)) {
        return new Promise(function (resolve, reject) {
          let rpcResult = Vue.prototype.getPlugin('RpcCommandResultMaker')(
            {
              request: {},
              status: 200,
              config: {},
              data: {
                command_name: RpcSDKManageReviewRefuseMethod,
                description: 'succ',
                code: 'succ',
                data: data,
                succ: true
              }
            }
          );
          resolve(rpcResult);
        });
      } else {
        return Rpc.get(RpcSDKManageReviewRefuseMethod, params);
      }
    }
  }
}
