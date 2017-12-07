/**
 * Created by Generator.
 * Author: Generator
 * description: 注册会员
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMemberRegisterMethod = '/sdkmanage/member/register';

export const RpcSDKManageMemberRegisterRpcType = 'system';

/**
 *
 * @param cellphone cellphone 手机号
 * @param password md5 密码
 * @param name |null string 姓名
 * @param idType |null int 证件类型
 * @param idNo |null id_card 身份证号
 * @param messageFlag |null int 是否开通短信
 * @param gender |null int 性别
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMemberRegister (
  cellphone,
  password,
  name = null,
  idType = null,
  idNo = null,
  messageFlag = null,
  gender = null) {
  tc.typeCheckCellphone(cellphone, false);
  tc.typeCheckMd5(password, false);
  tc.typeCheckString(name, 0, 255, true);
  tc.typeCheckChoice(idType, [1, 2], true);
  tc.typeCheckChoice(messageFlag, [0, 1], true);
  tc.typeCheckChoice(gender, [0, 1, 2], true);
  let params = {};
  if (!lodash.isNull(cellphone) && !lodash.isUndefined(cellphone)) {
    params['cellphone'] = cellphone;
  }
  if (!lodash.isNull(password) && !lodash.isUndefined(password)) {
    params['password'] = password;
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
  if (!lodash.isNull(messageFlag) && !lodash.isUndefined(messageFlag)) {
    params['messageFlag'] = messageFlag;
  }
  if (!lodash.isNull(gender) && !lodash.isUndefined(gender)) {
    params['gender'] = gender;
  }
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMemberRegisterMethod, params);
  } else {
    return Rpc.get(RpcSDKManageMemberRegisterMethod, params);
  }
}
