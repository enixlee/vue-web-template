/**
 * Created by Generator.
 * Author: Generator
 * description: 查询商户
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMerchantQueryMethod = '/sdkmanage/v2/merchant/query';

export const RpcSDKManageMerchantQueryRpcType = 'system';

/**
 *
 * @param merchantNo |null merchantNo 商户号
 * @param merchantName |null string 商户名称
 * @param merchantAlias |null string 商户品牌名
 * @param merchantSize |null json 数组，json格式,1-单店，2-区域连锁，3-全国连锁，4-集团，5-其他
 * @param status |null json 状态，数组格式
 * @param fuzzyMatchMerchantName |null int 搜索商户名称是否使用模糊匹配，0：精确匹配，1：模糊匹配
 * @param sortBy |null int 排序规则0:商户号
 * @param desc |null int 0：降序1:升序
 * @param pageIndex |null int 分页号
 * @param pageCount |null int 页面显示数量
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMerchantQuery (
  merchantNo = null,
  merchantName = null,
  merchantAlias = null,
  merchantSize = null,
  status = null,
  fuzzyMatchMerchantName = 1,
  sortBy = 0,
  desc = 0,
  pageIndex = 1,
  pageCount = 30) {
  tc.typeCheckString(merchantName, null, 255, true);
  tc.typeCheckString(merchantAlias, null, 255, true);
  tc.typeCheckJsonArrayChoice(merchantSize, [1, 2, 3, 4, 5], true);
  tc.typeCheckJsonArrayChoice(status, [0, 1, 2, 3, 4], true);
  tc.typeCheckChoice(fuzzyMatchMerchantName, [0, 1], true);
  tc.typeCheckChoice(sortBy, [0], true);
  tc.typeCheckChoice(desc, [0, 1], true);
  tc.typeCheckNumber(pageIndex, 1, null, true);
  tc.typeCheckNumber(pageCount, 1, 100, true);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(merchantName) && !lodash.isUndefined(merchantName)) {
    params['merchantName'] = merchantName;
  }
  if (!lodash.isNull(merchantAlias) && !lodash.isUndefined(merchantAlias)) {
    params['merchantAlias'] = merchantAlias;
  }
  if (!lodash.isNull(merchantSize) && !lodash.isUndefined(merchantSize)) {
    params['merchantSize'] = merchantSize;
  }
  if (!lodash.isNull(status) && !lodash.isUndefined(status)) {
    params['status'] = status;
  }
  if (!lodash.isNull(fuzzyMatchMerchantName) && !lodash.isUndefined(fuzzyMatchMerchantName)) {
    params['fuzzyMatchMerchantName'] = fuzzyMatchMerchantName;
  }
  if (!lodash.isNull(sortBy) && !lodash.isUndefined(sortBy)) {
    params['sortBy'] = sortBy;
  }
  if (!lodash.isNull(desc) && !lodash.isUndefined(desc)) {
    params['desc'] = desc;
  }
  if (!lodash.isNull(pageIndex) && !lodash.isUndefined(pageIndex)) {
    params['pageIndex'] = pageIndex;
  }
  if (!lodash.isNull(pageCount) && !lodash.isUndefined(pageCount)) {
    params['pageCount'] = pageCount;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMerchantQueryMethod, params);
  } else {
    let mockEngine = Vue.prototype.getPlugin('RpcMockEngine');
    if (Vue.prototype.getPlugin('lodash').isObject(mockEngine)) {
      let data = mockEngine[RpcSDKManageMerchantQueryMethod];
      if (Vue.prototype.getPlugin('lodash').isObject(data)) {
        return new Promise(function (resolve, reject) {
          let rpcResult = Vue.prototype.getPlugin('RpcCommandResultMaker')(
            {
              request: {},
              status: 200,
              config: {},
              data: {
                command_name: RpcSDKManageMerchantQueryMethod,
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
        return Rpc.get(RpcSDKManageMerchantQueryMethod, params);
      }
    }
  }
}
