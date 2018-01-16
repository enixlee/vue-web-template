/**
 * Created by Generator.
 * Author: Generator
 * description: 修改商户信息
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMerchantModifyMerchantMethod = '/sdkmanage/v2/merchant/modify_merchant';

export const RpcSDKManageMerchantModifyMerchantRpcType = 'system';

/**
 *
 * @param merchantNo merchantNo 商户号
 * @param merchantName |null string 商户名称
 * @param merchantAlias |null string 品牌名
 * @param merchantAddress |null string 商户地址
 * @param merchantSize |null int 1-单店，2-区域连锁，3-全国连锁，4-集团，5-其他
 * @param businessLicence |null string 营业执照
 * @param longitude |null float 经度
 * @param latitude |null float 纬度
 * @param bankName |null string 开户行
 * @param bankAccountName |null string 开户账户名
 * @param bankAccount |null bigint 银行账户
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMerchantModifyMerchant (
  merchantNo,
  merchantName = null,
  merchantAlias = null,
  merchantAddress = null,
  merchantSize = null,
  businessLicence = null,
  longitude = null,
  latitude = null,
  bankName = null,
  bankAccountName = null,
  bankAccount = null) {
  tc.typeCheckString(merchantName, null, 255, true);
  tc.typeCheckString(merchantAlias, null, 255, true);
  tc.typeCheckString(merchantAddress, null, 255, true);
  tc.typeCheckChoice(merchantSize, [1, 2, 3, 4, 5], true);
  tc.typeCheckString(businessLicence, null, 32, true);
  tc.typeCheckNumber(longitude, null, null, true);
  tc.typeCheckNumber(latitude, null, null, true);
  tc.typeCheckString(bankName, null, 255, true);
  tc.typeCheckString(bankAccountName, null, 255, true);
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
  if (!lodash.isNull(merchantAddress) && !lodash.isUndefined(merchantAddress)) {
    params['merchantAddress'] = merchantAddress;
  }
  if (!lodash.isNull(merchantSize) && !lodash.isUndefined(merchantSize)) {
    params['merchantSize'] = merchantSize;
  }
  if (!lodash.isNull(businessLicence) && !lodash.isUndefined(businessLicence)) {
    params['businessLicence'] = businessLicence;
  }
  if (!lodash.isNull(longitude) && !lodash.isUndefined(longitude)) {
    params['longitude'] = longitude;
  }
  if (!lodash.isNull(latitude) && !lodash.isUndefined(latitude)) {
    params['latitude'] = latitude;
  }
  if (!lodash.isNull(bankName) && !lodash.isUndefined(bankName)) {
    params['bankName'] = bankName;
  }
  if (!lodash.isNull(bankAccountName) && !lodash.isUndefined(bankAccountName)) {
    params['bankAccountName'] = bankAccountName;
  }
  if (!lodash.isNull(bankAccount) && !lodash.isUndefined(bankAccount)) {
    params['bankAccount'] = bankAccount;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMerchantModifyMerchantMethod, params);
  } else {
    let mockEngine = Vue.prototype.getPlugin('RpcMockEngine');
    if (Vue.prototype.getPlugin('lodash').isObject(mockEngine)) {
      let data = mockEngine[RpcSDKManageMerchantModifyMerchantMethod];
      if (Vue.prototype.getPlugin('lodash').isObject(data)) {
        return new Promise(function (resolve, reject) {
          let rpcResult = Vue.prototype.getPlugin('RpcCommandResultMaker')(
            {
              request: {},
              status: 200,
              config: {},
              data: {
                command_name: RpcSDKManageMerchantModifyMerchantMethod,
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
        return Rpc.get(RpcSDKManageMerchantModifyMerchantMethod, params);
      }
    }
  }
}
