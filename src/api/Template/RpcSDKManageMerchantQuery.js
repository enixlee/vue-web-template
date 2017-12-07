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

export const RpcSDKManageMerchantQueryMethod = '/sdkmanage/merchant/query';

export const RpcSDKManageMerchantQueryRpcType = 'system';

/**
 *
 * @param merchantNo |null merchantNo 商户号
 * @param merchantName |null string 商户名称
 * @param alias |null string 别名
 * @param merchantAddress |null string 商户地址
 * @param merchantSize |null json 数组，json格式,1-单店，2-区域连锁，3-全国连锁，4-集团，5-其他
 * @param longitude |null float 经度
 * @param latitude |null float 纬度
 * @param status |null json 状态，数组格式
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
  alias = null,
  merchantAddress = null,
  merchantSize = null,
  longitude = null,
  latitude = null,
  status = null,
  sortBy = 0,
  desc = 0,
  pageIndex = 1,
  pageCount = 50) {
  tc.typeCheckString(merchantName, null, 255, true);
  tc.typeCheckString(alias, null, 255, true);
  tc.typeCheckString(merchantAddress, null, 255, true);
  tc.typeCheckJsonArrayChoice(merchantSize, [1, 2, 3, 4, 5], true);
  tc.typeCheckNumber(longitude, null, null, true);
  tc.typeCheckNumber(latitude, null, null, true);
  tc.typeCheckJsonArrayChoice(status, [0, 1, 2, 3], true);
  tc.typeCheckChoice(sortBy, [0], true);
  tc.typeCheckChoice(desc, [0, 1], true);
  tc.typeCheckNumber(pageIndex, 1, null, true);
  tc.typeCheckNumber(pageCount, 1, 50, true);
  let params = {};
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(merchantName) && !lodash.isUndefined(merchantName)) {
    params['merchantName'] = merchantName;
  }
  if (!lodash.isNull(alias) && !lodash.isUndefined(alias)) {
    params['alias'] = alias;
  }
  if (!lodash.isNull(merchantAddress) && !lodash.isUndefined(merchantAddress)) {
    params['merchantAddress'] = merchantAddress;
  }
  if (!lodash.isNull(merchantSize) && !lodash.isUndefined(merchantSize)) {
    params['merchantSize'] = merchantSize;
  }
  if (!lodash.isNull(longitude) && !lodash.isUndefined(longitude)) {
    params['longitude'] = longitude;
  }
  if (!lodash.isNull(latitude) && !lodash.isUndefined(latitude)) {
    params['latitude'] = latitude;
  }
  if (!lodash.isNull(status) && !lodash.isUndefined(status)) {
    params['status'] = status;
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
    return Rpc.get(RpcSDKManageMerchantQueryMethod, params);
  }
}
