/**
 * Created by Generator.
 * Author: Generator
 * description: 查询会员
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMemberQueryMethod = '/sdkmanage/member/query';

export const RpcSDKManageMemberQueryRpcType = 'system';

/**
 *
 * @param memberId |null memberId 会员id
 * @param cellphone |null cellphone 手机号
 * @param username |null memberUserName 用户名
 * @param name |null string 姓名
 * @param idType |null json 证件类型
 * @param idNo |null id_card 身份证号
 * @param messageFlag |null json 是否开通短信
 * @param realNameCertificationFlag |null json 是否实名认证
 * @param gender |null json 性别
 * @param status |null json 状态
 * @param pageIndex |null int 页码
 * @param pageCount |null int 每页个数
 * @param sortBy |null int 排序规则0:会员id，1：上次登录时间2：创建时间
 * @param desc |null int 0：降序1:升序
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMemberQuery (
  memberId = null,
  cellphone = null,
  username = null,
  name = null,
  idType = null,
  idNo = null,
  messageFlag = null,
  realNameCertificationFlag = null,
  gender = null,
  status = null,
  pageIndex = 1,
  pageCount = 50,
  sortBy = 0,
  desc = 0) {
  tc.typeCheckCellphone(cellphone, true);
  tc.typeCheckString(name, 0, 255, true);
  tc.typeCheckJsonArrayChoice(idType, [1, 2], true);
  tc.typeCheckJsonArrayChoice(messageFlag, [0, 1], true);
  tc.typeCheckJsonArrayChoice(realNameCertificationFlag, [0, 1], true);
  tc.typeCheckJsonArrayChoice(gender, [0, 1, 2], true);
  tc.typeCheckJsonArrayChoice(status, [0, 1, 2, 3], true);
  tc.typeCheckNumber(pageIndex, 1, null, true);
  tc.typeCheckNumber(pageCount, 1, null, true);
  tc.typeCheckChoice(sortBy, [0, 1, 2], true);
  tc.typeCheckChoice(desc, [0, 1], true);
  let params = {};
  if (!lodash.isNull(memberId) && !lodash.isUndefined(memberId)) {
    params['memberId'] = memberId;
  }
  if (!lodash.isNull(cellphone) && !lodash.isUndefined(cellphone)) {
    params['cellphone'] = cellphone;
  }
  if (!lodash.isNull(username) && !lodash.isUndefined(username)) {
    params['username'] = username;
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
  if (!lodash.isNull(realNameCertificationFlag) && !lodash.isUndefined(realNameCertificationFlag)) {
    params['realNameCertificationFlag'] = realNameCertificationFlag;
  }
  if (!lodash.isNull(gender) && !lodash.isUndefined(gender)) {
    params['gender'] = gender;
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
    return Rpc.post(RpcSDKManageMemberQueryMethod, params);
  } else {
    return Rpc.get(RpcSDKManageMemberQueryMethod, params);
  }
}
