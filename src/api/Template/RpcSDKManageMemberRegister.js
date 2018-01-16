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

export const RpcSDKManageMemberRegisterMethod = '/sdkmanage/v2/member/register';

export const RpcSDKManageMemberRegisterRpcType = 'system';

/**
 *
 * @param cellphone cellphone 手机号
 * @param name string 姓名
 * @param gender |null int 性别
 * @param idType |null int 身份证
 * @param idNo |null string 证件号码
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMemberRegister (
  cellphone,
  name,
  gender = null,
  idType = null,
  idNo = null) {
  tc.typeCheckCellphone(cellphone, false);
  tc.typeCheckString(name, 2, 128, false);
  tc.typeCheckChoice(gender, [1, 2], true);
  tc.typeCheckChoice(idType, [1], true);
  tc.typeCheckString(idNo, 15, 32, true);
  let params = {};
  if (!lodash.isNull(cellphone) && !lodash.isUndefined(cellphone)) {
    params['cellphone'] = cellphone;
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
  if (debug.isProduction()) {
    return Rpc.post(RpcSDKManageMemberRegisterMethod, params);
  } else {
    let mockEngine = Vue.prototype.getPlugin('RpcMockEngine');
    if (Vue.prototype.getPlugin('lodash').isObject(mockEngine)) {
      let data = mockEngine[RpcSDKManageMemberRegisterMethod];
      if (Vue.prototype.getPlugin('lodash').isObject(data)) {
        return new Promise(function (resolve, reject) {
          let rpcResult = Vue.prototype.getPlugin('RpcCommandResultMaker')(
            {
              request: {},
              status: 200,
              config: {},
              data: {
                command_name: RpcSDKManageMemberRegisterMethod,
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
        return Rpc.get(RpcSDKManageMemberRegisterMethod, params);
      }
    }
  }
}
