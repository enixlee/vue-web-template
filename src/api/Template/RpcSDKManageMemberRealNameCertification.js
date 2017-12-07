/**
 * Created by Generator.
 * Author: Generator
 * description: 修改用户信息
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMemberRealNameCertificationMethod = '/sdkmanage/member/real_name_certification';

export const RpcSDKManageMemberRealNameCertificationRpcType = 'system';

/**
 *
 * @param memberId memberId 会员ID
 * @param name string 姓名
 * @param idType int 证件类型1,身份证2,护照
 * @param idNo id_card 证件号
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMemberRealNameCertification (
  memberId,
  name,
  idType,
  idNo) {
  tc.typeCheckString(name, 2, 255, false);
  tc.typeCheckChoice(idType, [1, 2], false);
  let params = {};
  if (!lodash.isNull(memberId) && !lodash.isUndefined(memberId)) {
    params['memberId'] = memberId;
  }
  if (!lodash.isNull(name) && !lodash.isUndefined(name)) {
    params['name'] = name;
  }
  if (!lodash.isNull(idType) && !lodash.isUndefined(idType)) {
    params['idType'] = idType;
  }
  if (!lodash.isNull(idNo) && !lodash.isUndefined(idNo)) {
    params['idNo'] = idNo;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMemberRealNameCertificationMethod, params);
  } else {
    return Rpc.get(RpcSDKManageMemberRealNameCertificationMethod, params);
  }
}
