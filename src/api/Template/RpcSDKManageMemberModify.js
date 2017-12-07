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

export const RpcSDKManageMemberModifyMethod = '/sdkmanage/member/modify';

export const RpcSDKManageMemberModifyRpcType = 'system';

/**
 *
 * @param memberId memberId 会员ID
 * @param cellphone |null cellphone 手机号
 * @param password |null md5 登录密码
 * @param email |null email 邮箱
 * @param name |null string 姓名
 * @param gender |null gender 性别1,男2,女
 * @param idType |null int 证件类型1,身份证2,护照
 * @param idNo |null id_card 证件号
 * @param messageFlag |null int 消息通知：0：关1：开
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMemberModify (
  memberId,
  cellphone = null,
  password = null,
  email = null,
  name = null,
  gender = null,
  idType = null,
  idNo = null,
  messageFlag = null) {
  tc.typeCheckCellphone(cellphone, true);
  tc.typeCheckMd5(password, true);
  tc.typeCheckString(name, 2, 255, true);
  tc.typeCheckChoice(idType, [1, 2], true);
  tc.typeCheckChoice(messageFlag, [0, 1], true);
  let params = {};
  if (!lodash.isNull(memberId) && !lodash.isUndefined(memberId)) {
    params['memberId'] = memberId;
  }
  if (!lodash.isNull(cellphone) && !lodash.isUndefined(cellphone)) {
    params['cellphone'] = cellphone;
  }
  if (!lodash.isNull(password) && !lodash.isUndefined(password)) {
    params['password'] = password;
  }
  if (!lodash.isNull(email) && !lodash.isUndefined(email)) {
    params['email'] = email;
  }
  if (!lodash.isNull(name) && !lodash.isUndefined(name)) {
    params['name'] = name;
  }
  if (!lodash.isNull(gender) && !lodash.isUndefined(gender)) {
    params['gender'] = gender;
  }
  if (!lodash.isNull(idType) && !lodash.isUndefined(idType)) {
    params['idType'] = idType;
  }
  if (!lodash.isNull(idNo) && !lodash.isUndefined(idNo)) {
    params['idNo'] = idNo;
  }
  if (!lodash.isNull(messageFlag) && !lodash.isUndefined(messageFlag)) {
    params['messageFlag'] = messageFlag;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMemberModifyMethod, params);
  } else {
    return Rpc.get(RpcSDKManageMemberModifyMethod, params);
  }
}
