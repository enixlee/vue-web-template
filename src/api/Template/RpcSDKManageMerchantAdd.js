/**
 * Created by Generator.
 * Author: Generator
 * description: 新建商户
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMerchantAddMethod = '/sdkmanage/merchant/add';

export const RpcSDKManageMerchantAddRpcType = 'system';

/**
 *
 * @param merchantName string 商户名称
 * @param alias |null string 别名
 * @param merchantAddress |null string 商户地址
 * @param merchantSize |null int 1-单店，2-区域连锁，3-全国连锁，4-集团，5-其他
 * @param longitude |null float 经度
 * @param latitude |null float 纬度
 * @param businessLicence |null string 营业执照
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMerchantAdd (
  merchantName,
  alias = null,
  merchantAddress = null,
  merchantSize = null,
  longitude = null,
  latitude = null,
  businessLicence = null) {
  tc.typeCheckString(merchantName, null, 255, false);
  tc.typeCheckString(alias, null, 255, true);
  tc.typeCheckString(merchantAddress, null, 255, true);
  tc.typeCheckChoice(merchantSize, [1, 2, 3, 4, 5], true);
  tc.typeCheckNumber(longitude, null, null, true);
  tc.typeCheckNumber(latitude, null, null, true);
  tc.typeCheckString(businessLicence, null, 32, true);
  let params = {};
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
  if (!lodash.isNull(businessLicence) && !lodash.isUndefined(businessLicence)) {
    params['businessLicence'] = businessLicence;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMerchantAddMethod, params);
  } else {
    return Rpc.get(RpcSDKManageMerchantAddMethod, params);
  }
}
