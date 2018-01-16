/**
 * Created by Generator.
 * Author: Generator
 * description: 商户会员详情查询
 */

let Vue = window.PMApp.Vue;
let Rpc = Vue.prototype.getPlugin('HttpRequest');
let debug = Vue.prototype.getPlugin('Debug');
let tc = Vue.prototype.getPlugin('TypeCheck');
let lodash = Vue.prototype.getPlugin('lodash');

export const RpcSDKManageMerchantMemberQueryMerchantMemberDetailMethod = '/sdkmanage/v2/merchant_member/query_merchant_member_detail';

export const RpcSDKManageMerchantMemberQueryMerchantMemberDetailRpcType = 'system';

/**
 *
 * @param memberId |null memberId 会员id
 * @param merchantNo |null merchantNo 商户号
 * @param merchantName |null string 商户名称
 * @param cellphone |null cellphone 手机号
 * @param isOriginMerchantMember |null json 会员类型0:平台推荐会员1:原始会员
 * @param name |null string 姓名
 * @param totalRechargeMin |null money_cent 大于某值累计充值金额
 * @param totalRechargeMax |null money_cent 小于某值累计充值金额
 * @param totalConsumptionMin |null money_cent 大于某值累计消费金额
 * @param totalConsumptionMax |null money_cent 小于某值的累计消费金额
 * @param status |null json 状态
 * @param sortBy |null int 排序规则0:MERCHANT_MEMBER_ACCOUNT_ID1:累计充值金额2:累计消费金额
 * @param desc |null int 0：降序1:升序
 * @param pageIndex |null int 分页号
 * @param pageCount |null int 页面显示数量
 * @returns {*}
 * @constructor
 */
export function RpcSDKManageMerchantMemberQueryMerchantMemberDetail (
  memberId = null,
  merchantNo = null,
  merchantName = null,
  cellphone = null,
  isOriginMerchantMember = null,
  name = null,
  totalRechargeMin = null,
  totalRechargeMax = null,
  totalConsumptionMin = null,
  totalConsumptionMax = null,
  status = null,
  sortBy = 0,
  desc = 0,
  pageIndex = 1,
  pageCount = 30) {
  tc.typeCheckString(merchantName, 1, 255, true);
  tc.typeCheckCellphone(cellphone, true);
  tc.typeCheckJsonArrayChoice(isOriginMerchantMember, [0, 1], true);
  tc.typeCheckString(name, 1, 255, true);
  tc.typeCheckNumber(totalRechargeMin, null, null, true);
  tc.typeCheckNumber(totalRechargeMax, null, null, true);
  tc.typeCheckNumber(totalConsumptionMin, null, null, true);
  tc.typeCheckNumber(totalConsumptionMax, null, null, true);
  tc.typeCheckJsonArrayChoice(status, [0, 1, 2, 3, 4], true);
  tc.typeCheckChoice(sortBy, [0, 1, 2], true);
  tc.typeCheckChoice(desc, [0, 1], true);
  tc.typeCheckNumber(pageIndex, 1, null, true);
  tc.typeCheckNumber(pageCount, 1, 100, true);
  let params = {};
  if (!lodash.isNull(memberId) && !lodash.isUndefined(memberId)) {
    params['memberId'] = memberId;
  }
  if (!lodash.isNull(merchantNo) && !lodash.isUndefined(merchantNo)) {
    params['merchantNo'] = merchantNo;
  }
  if (!lodash.isNull(merchantName) && !lodash.isUndefined(merchantName)) {
    params['merchantName'] = merchantName;
  }
  if (!lodash.isNull(cellphone) && !lodash.isUndefined(cellphone)) {
    params['cellphone'] = cellphone;
  }
  if (!lodash.isNull(isOriginMerchantMember) && !lodash.isUndefined(isOriginMerchantMember)) {
    params['isOriginMerchantMember'] = isOriginMerchantMember;
  }
  if (!lodash.isNull(name) && !lodash.isUndefined(name)) {
    params['name'] = name;
  }
  if (!lodash.isNull(totalRechargeMin) && !lodash.isUndefined(totalRechargeMin)) {
    params['totalRechargeMin'] = totalRechargeMin;
  }
  if (!lodash.isNull(totalRechargeMax) && !lodash.isUndefined(totalRechargeMax)) {
    params['totalRechargeMax'] = totalRechargeMax;
  }
  if (!lodash.isNull(totalConsumptionMin) && !lodash.isUndefined(totalConsumptionMin)) {
    params['totalConsumptionMin'] = totalConsumptionMin;
  }
  if (!lodash.isNull(totalConsumptionMax) && !lodash.isUndefined(totalConsumptionMax)) {
    params['totalConsumptionMax'] = totalConsumptionMax;
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
    return Rpc.post(RpcSDKManageMerchantMemberQueryMerchantMemberDetailMethod, params);
  } else {
    let mockEngine = Vue.prototype.getPlugin('RpcMockEngine');
    if (Vue.prototype.getPlugin('lodash').isObject(mockEngine)) {
      let data = mockEngine[RpcSDKManageMerchantMemberQueryMerchantMemberDetailMethod];
      if (Vue.prototype.getPlugin('lodash').isObject(data)) {
        return new Promise(function (resolve, reject) {
          let rpcResult = Vue.prototype.getPlugin('RpcCommandResultMaker')(
            {
              request: {},
              status: 200,
              config: {},
              data: {
                command_name: RpcSDKManageMerchantMemberQueryMerchantMemberDetailMethod,
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
        return Rpc.get(RpcSDKManageMerchantMemberQueryMerchantMemberDetailMethod, params);
      }
    }
  }
}
