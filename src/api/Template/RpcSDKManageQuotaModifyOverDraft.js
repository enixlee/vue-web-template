/**
 * Created by Generator.
 * Author: Generator
 * description: 修改商户透支额度
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageQuotaModifyOverDraftMethod = '/sdk_manage/v2/quota/modify_overdraft';

export const RpcSDKManageQuotaModifyOverDraftRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @param overdraft int 新的透支额度
 * @param memberId bigint 申请人的会员号
 * @param changeChannel |null int 变更渠道：1：后台2：商户端
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageQuotaModifyOverDraft (
  merchantNo,
  overdraft,
  memberId,
  changeChannel = 1) {
  tc.typeCheckNumber(overdraft, 0, null, false);
  tc.typeCheckChoice(changeChannel, [1, 2], true);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(overdraft) && !lodash.isUndefined(overdraft)) {
    params['overdraft'] = overdraft;
  }
  if (!lodash.isNull(memberId) && !lodash.isUndefined(memberId)) {
    params['memberId'] = memberId;
  }
  if (!lodash.isNull(changeChannel) && !lodash.isUndefined(changeChannel)) {
    params['changeChannel'] = changeChannel;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageQuotaModifyOverDraftMethod, params);
  } else {
    let mockEngine = Vue.prototype.getPlugin('RpcMockEngine');
    if (Vue.prototype.getPlugin('lodash').isObject(mockEngine)) {
      let data = mockEngine[RpcSDKManageQuotaModifyOverDraftMethod];
      if (Vue.prototype.getPlugin('lodash').isObject(data)) {
        return new Promise(function (resolve, reject) {
          let rpcResult = Vue.prototype.getPlugin('RpcCommandResultMaker')(
            {
              request: {},
              status: 200,
              config: {},
              data: {
                command_name: RpcSDKManageQuotaModifyOverDraftMethod,
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
        return Rpc.get(RpcSDKManageQuotaModifyOverDraftMethod, params);
      }
    }
  }
}
