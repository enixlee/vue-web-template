/**
 * Created by Generator.
 * Author: Generator
 * description: 查询配额
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageQuotaQueryMethod = '/sdk_manage/v2/quota/query';

export const RpcSDKManageQuotaQueryRpcType = 'system';

/**
 *
 * @param merchantNo |null merchantNo 商户号
 * @param merchantName |null string 商户名称
 * @param minQuota |null bigint 最低值,分
 * @param maxQuota |null bigint 最高值,分
 * @param status |null json 状态
 * @param pageIndex |null int 分页号
 * @param pageCount |null int 页面显示数量
 * @param sortBy |null int 排序规则0:merchantNo,1:配额,2:透支额度(不是可用透支额度)
 * @param desc |null int 0：降序1:升序
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageQuotaQuery (
  merchantNo = null,
  merchantName = null,
  minQuota = null,
  maxQuota = null,
  status = null,
  pageIndex = 1,
  pageCount = 30,
  sortBy = 0,
  desc = 0) {
  tc.typeCheckString(merchantName, 1, 255, true);
  tc.typeCheckJsonArrayChoice(status, [0, 1, 2, 3, 4], true);
  tc.typeCheckNumber(pageIndex, 1, null, true);
  tc.typeCheckNumber(pageCount, 1, 100, true);
  tc.typeCheckChoice(sortBy, [0, 1, 2], true);
  tc.typeCheckChoice(desc, [0, 1], true);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(merchantName) && !lodash.isUndefined(merchantName)) {
    params['merchantName'] = merchantName;
  }
  if (!lodash.isNull(minQuota) && !lodash.isUndefined(minQuota)) {
    params['minQuota'] = minQuota;
  }
  if (!lodash.isNull(maxQuota) && !lodash.isUndefined(maxQuota)) {
    params['maxQuota'] = maxQuota;
  }
  if (!lodash.isNull(status) && !lodash.isUndefined(status)) {
    params['status'] = status;
  }
  if (!lodash.isNull(pageIndex) && !lodash.isUndefined(pageIndex)) {
    params['pageIndex'] = pageIndex;
  }
  if (!lodash.isNull(pageCount) && !lodash.isUndefined(pageCount)) {
    params['pageCount'] = pageCount;
  }
  if (!lodash.isNull(sortBy) && !lodash.isUndefined(sortBy)) {
    params['sortBy'] = sortBy;
  }
  if (!lodash.isNull(desc) && !lodash.isUndefined(desc)) {
    params['desc'] = desc;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageQuotaQueryMethod, params);
  } else {
    let mockEngine = Vue.prototype.getPlugin('RpcMockEngine');
    if (Vue.prototype.getPlugin('lodash').isObject(mockEngine)) {
      let data = mockEngine[RpcSDKManageQuotaQueryMethod];
      if (Vue.prototype.getPlugin('lodash').isObject(data)) {
        return new Promise(function (resolve, reject) {
          let rpcResult = Vue.prototype.getPlugin('RpcCommandResultMaker')(
            {
              request: {},
              status: 200,
              config: {},
              data: {
                command_name: RpcSDKManageQuotaQueryMethod,
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
        return Rpc.get(RpcSDKManageQuotaQueryMethod, params);
      }
    }
  }
}
