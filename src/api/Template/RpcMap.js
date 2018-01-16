import * as RpcSDKManageOrganizationQuery from './RpcSDKManageOrganizationQuery';
import * as RpcSDKManageRoleUnFreeze from './RpcSDKManageRoleUnFreeze';
import * as RpcSDKManageRoleQuery from './RpcSDKManageRoleQuery';
import * as RpcSDKManageRoleModify from './RpcSDKManageRoleModify';
import * as RpcSDKManageRoleAdd from './RpcSDKManageRoleAdd';
import * as RpcSDKManageRoleFreeze from './RpcSDKManageRoleFreeze';
import * as RpcSDKManageAuthLogout from './RpcSDKManageAuthLogout';
import * as RpcSDKManageAuthLoginWithVerifyCode from './RpcSDKManageAuthLoginWithVerifyCode';
import * as RpcSDKManageAuthGetLoginVerifyCode from './RpcSDKManageAuthGetLoginVerifyCode';
import * as RpcSDKManageAuthGenerateUUID from './RpcSDKManageAuthGenerateUUID';
import * as RpcSDKManageFactorageModify from './RpcSDKManageFactorageModify';
import * as RpcSDKManageFactorageQueryDetail from './RpcSDKManageFactorageQueryDetail';
import * as RpcSDKManageMiniPayPlatformQuery from './RpcSDKManageMiniPayPlatformQuery';
import * as RpcSDKManageMemberResetLoginPassword from './RpcSDKManageMemberResetLoginPassword';
import * as RpcSDKManageMemberUnFreeze from './RpcSDKManageMemberUnFreeze';
import * as RpcSDKManageMemberQuery from './RpcSDKManageMemberQuery';
import * as RpcSDKManageMemberRegister from './RpcSDKManageMemberRegister';
import * as RpcSDKManageMemberFreeze from './RpcSDKManageMemberFreeze';
import * as RpcSDKManageMemberResetPayPassword from './RpcSDKManageMemberResetPayPassword';
import * as RpcSDKManageUserUnFreeze from './RpcSDKManageUserUnFreeze';
import * as RpcSDKManageUserQuery from './RpcSDKManageUserQuery';
import * as RpcSDKManageUserAddSystemUser from './RpcSDKManageUserAddSystemUser';
import * as RpcSDKManageUserModify from './RpcSDKManageUserModify';
import * as RpcSDKManageUserResetPassword from './RpcSDKManageUserResetPassword';
import * as RpcSDKManageUserFreeze from './RpcSDKManageUserFreeze';
import * as RpcSDKManageReviewRefuse from './RpcSDKManageReviewRefuse';
import * as RpcSDKManageReviewReview from './RpcSDKManageReviewReview';
import * as RpcSDKManageQuotaTransactionConsumeExport from './RpcSDKManageQuotaTransactionConsumeExport';
import * as RpcSDKManageQuotaTransactionConsumeQuery from './RpcSDKManageQuotaTransactionConsumeQuery';
import * as RpcSDKManageQuotaTransactionRechargeExport from './RpcSDKManageQuotaTransactionRechargeExport';
import * as RpcSDKManageQuotaTransactionRechargeQuery from './RpcSDKManageQuotaTransactionRechargeQuery';
import * as RpcSDKManageQuotaUnFreeze from './RpcSDKManageQuotaUnFreeze';
import * as RpcSDKManageQuotaQuery from './RpcSDKManageQuotaQuery';
import * as RpcSDKManageQuotaModifyOverDraft from './RpcSDKManageQuotaModifyOverDraft';
import * as RpcSDKManageQuotaFreeze from './RpcSDKManageQuotaFreeze';
import * as RpcSDKManageQuotaAddition from './RpcSDKManageQuotaAddition';
import * as RpcSDKManageMerchantMemberAddMerchantMember from './RpcSDKManageMerchantMemberAddMerchantMember';
import * as RpcSDKManageMerchantMemberQueryMerchantMemberDetail from './RpcSDKManageMerchantMemberQueryMerchantMemberDetail';
import * as RpcSDKManageMerchantMemberQuery from './RpcSDKManageMerchantMemberQuery';
import * as RpcSDKManagePermissionQuery from './RpcSDKManagePermissionQuery';
import * as RpcSDKManageMerchantUnFreeze from './RpcSDKManageMerchantUnFreeze';
import * as RpcSDKManageMerchantQuery from './RpcSDKManageMerchantQuery';
import * as RpcSDKManageMerchantModifyMerchant from './RpcSDKManageMerchantModifyMerchant';
import * as RpcSDKManageMerchantAddMerchant from './RpcSDKManageMerchantAddMerchant';
import * as RpcSDKManageMerchantFreeze from './RpcSDKManageMerchantFreeze';

const rpc = {
  RpcSDKManageOrganizationQuery: RpcSDKManageOrganizationQuery.RpcSDKManageOrganizationQuery,
  RpcSDKManageRoleUnFreeze: RpcSDKManageRoleUnFreeze.RpcSDKManageRoleUnFreeze,
  RpcSDKManageRoleQuery: RpcSDKManageRoleQuery.RpcSDKManageRoleQuery,
  RpcSDKManageRoleModify: RpcSDKManageRoleModify.RpcSDKManageRoleModify,
  RpcSDKManageRoleAdd: RpcSDKManageRoleAdd.RpcSDKManageRoleAdd,
  RpcSDKManageRoleFreeze: RpcSDKManageRoleFreeze.RpcSDKManageRoleFreeze,
  RpcSDKManageAuthLogout: RpcSDKManageAuthLogout.RpcSDKManageAuthLogout,
  RpcSDKManageAuthLoginWithVerifyCode: RpcSDKManageAuthLoginWithVerifyCode.RpcSDKManageAuthLoginWithVerifyCode,
  RpcSDKManageAuthGetLoginVerifyCode: RpcSDKManageAuthGetLoginVerifyCode.RpcSDKManageAuthGetLoginVerifyCode,
  RpcSDKManageAuthGenerateUUID: RpcSDKManageAuthGenerateUUID.RpcSDKManageAuthGenerateUUID,
  RpcSDKManageFactorageModify: RpcSDKManageFactorageModify.RpcSDKManageFactorageModify,
  RpcSDKManageFactorageQueryDetail: RpcSDKManageFactorageQueryDetail.RpcSDKManageFactorageQueryDetail,
  RpcSDKManageMiniPayPlatformQuery: RpcSDKManageMiniPayPlatformQuery.RpcSDKManageMiniPayPlatformQuery,
  RpcSDKManageMemberResetLoginPassword: RpcSDKManageMemberResetLoginPassword.RpcSDKManageMemberResetLoginPassword,
  RpcSDKManageMemberUnFreeze: RpcSDKManageMemberUnFreeze.RpcSDKManageMemberUnFreeze,
  RpcSDKManageMemberQuery: RpcSDKManageMemberQuery.RpcSDKManageMemberQuery,
  RpcSDKManageMemberRegister: RpcSDKManageMemberRegister.RpcSDKManageMemberRegister,
  RpcSDKManageMemberFreeze: RpcSDKManageMemberFreeze.RpcSDKManageMemberFreeze,
  RpcSDKManageMemberResetPayPassword: RpcSDKManageMemberResetPayPassword.RpcSDKManageMemberResetPayPassword,
  RpcSDKManageUserUnFreeze: RpcSDKManageUserUnFreeze.RpcSDKManageUserUnFreeze,
  RpcSDKManageUserQuery: RpcSDKManageUserQuery.RpcSDKManageUserQuery,
  RpcSDKManageUserAddSystemUser: RpcSDKManageUserAddSystemUser.RpcSDKManageUserAddSystemUser,
  RpcSDKManageUserModify: RpcSDKManageUserModify.RpcSDKManageUserModify,
  RpcSDKManageUserResetPassword: RpcSDKManageUserResetPassword.RpcSDKManageUserResetPassword,
  RpcSDKManageUserFreeze: RpcSDKManageUserFreeze.RpcSDKManageUserFreeze,
  RpcSDKManageReviewRefuse: RpcSDKManageReviewRefuse.RpcSDKManageReviewRefuse,
  RpcSDKManageReviewReview: RpcSDKManageReviewReview.RpcSDKManageReviewReview,
  RpcSDKManageQuotaTransactionConsumeExport: RpcSDKManageQuotaTransactionConsumeExport.RpcSDKManageQuotaTransactionConsumeExport,
  RpcSDKManageQuotaTransactionConsumeQuery: RpcSDKManageQuotaTransactionConsumeQuery.RpcSDKManageQuotaTransactionConsumeQuery,
  RpcSDKManageQuotaTransactionRechargeExport: RpcSDKManageQuotaTransactionRechargeExport.RpcSDKManageQuotaTransactionRechargeExport,
  RpcSDKManageQuotaTransactionRechargeQuery: RpcSDKManageQuotaTransactionRechargeQuery.RpcSDKManageQuotaTransactionRechargeQuery,
  RpcSDKManageQuotaUnFreeze: RpcSDKManageQuotaUnFreeze.RpcSDKManageQuotaUnFreeze,
  RpcSDKManageQuotaQuery: RpcSDKManageQuotaQuery.RpcSDKManageQuotaQuery,
  RpcSDKManageQuotaModifyOverDraft: RpcSDKManageQuotaModifyOverDraft.RpcSDKManageQuotaModifyOverDraft,
  RpcSDKManageQuotaFreeze: RpcSDKManageQuotaFreeze.RpcSDKManageQuotaFreeze,
  RpcSDKManageQuotaAddition: RpcSDKManageQuotaAddition.RpcSDKManageQuotaAddition,
  RpcSDKManageMerchantMemberAddMerchantMember: RpcSDKManageMerchantMemberAddMerchantMember.RpcSDKManageMerchantMemberAddMerchantMember,
  RpcSDKManageMerchantMemberQueryMerchantMemberDetail: RpcSDKManageMerchantMemberQueryMerchantMemberDetail.RpcSDKManageMerchantMemberQueryMerchantMemberDetail,
  RpcSDKManageMerchantMemberQuery: RpcSDKManageMerchantMemberQuery.RpcSDKManageMerchantMemberQuery,
  RpcSDKManagePermissionQuery: RpcSDKManagePermissionQuery.RpcSDKManagePermissionQuery,
  RpcSDKManageMerchantUnFreeze: RpcSDKManageMerchantUnFreeze.RpcSDKManageMerchantUnFreeze,
  RpcSDKManageMerchantQuery: RpcSDKManageMerchantQuery.RpcSDKManageMerchantQuery,
  RpcSDKManageMerchantModifyMerchant: RpcSDKManageMerchantModifyMerchant.RpcSDKManageMerchantModifyMerchant,
  RpcSDKManageMerchantAddMerchant: RpcSDKManageMerchantAddMerchant.RpcSDKManageMerchantAddMerchant,
  RpcSDKManageMerchantFreeze: RpcSDKManageMerchantFreeze.RpcSDKManageMerchantFreeze
};

let RpcMap = {};
RpcMap[RpcSDKManageOrganizationQuery.RpcSDKManageOrganizationQueryMethod] = {
  rpc: RpcSDKManageOrganizationQuery.RpcSDKManageOrganizationQuery,
  method: RpcSDKManageOrganizationQuery.RpcSDKManageOrganizationQueryMethod,
  type: RpcSDKManageOrganizationQuery.RpcSDKManageOrganizationQueryRpcType,
  params: [
    'organizationId',
    'organizationType',
    'organizationName',
    'headquarterMerchantNo',
    'pageIndex',
    'pageCount',
    'sortBy',
    'desc'
  ]
};
RpcMap[RpcSDKManageRoleUnFreeze.RpcSDKManageRoleUnFreezeMethod] = {
  rpc: RpcSDKManageRoleUnFreeze.RpcSDKManageRoleUnFreeze,
  method: RpcSDKManageRoleUnFreeze.RpcSDKManageRoleUnFreezeMethod,
  type: RpcSDKManageRoleUnFreeze.RpcSDKManageRoleUnFreezeRpcType,
  params: [
    'id'
  ]
};
RpcMap[RpcSDKManageRoleQuery.RpcSDKManageRoleQueryMethod] = {
  rpc: RpcSDKManageRoleQuery.RpcSDKManageRoleQuery,
  method: RpcSDKManageRoleQuery.RpcSDKManageRoleQueryMethod,
  type: RpcSDKManageRoleQuery.RpcSDKManageRoleQueryRpcType,
  params: [
    'id',
    'roleName',
    'organizationId',
    'status',
    'pageIndex',
    'pageCount',
    'sortBy',
    'desc'
  ]
};
RpcMap[RpcSDKManageRoleModify.RpcSDKManageRoleModifyMethod] = {
  rpc: RpcSDKManageRoleModify.RpcSDKManageRoleModify,
  method: RpcSDKManageRoleModify.RpcSDKManageRoleModifyMethod,
  type: RpcSDKManageRoleModify.RpcSDKManageRoleModifyRpcType,
  params: [
    'id',
    'permissionIds'
  ]
};
RpcMap[RpcSDKManageRoleAdd.RpcSDKManageRoleAddMethod] = {
  rpc: RpcSDKManageRoleAdd.RpcSDKManageRoleAdd,
  method: RpcSDKManageRoleAdd.RpcSDKManageRoleAddMethod,
  type: RpcSDKManageRoleAdd.RpcSDKManageRoleAddRpcType,
  params: [
    'roleName',
    'permissionIds',
    'organizationId'
  ]
};
RpcMap[RpcSDKManageRoleFreeze.RpcSDKManageRoleFreezeMethod] = {
  rpc: RpcSDKManageRoleFreeze.RpcSDKManageRoleFreeze,
  method: RpcSDKManageRoleFreeze.RpcSDKManageRoleFreezeMethod,
  type: RpcSDKManageRoleFreeze.RpcSDKManageRoleFreezeRpcType,
  params: [
    'id'
  ]
};
RpcMap[RpcSDKManageAuthLogout.RpcSDKManageAuthLogoutMethod] = {
  rpc: RpcSDKManageAuthLogout.RpcSDKManageAuthLogout,
  method: RpcSDKManageAuthLogout.RpcSDKManageAuthLogoutMethod,
  type: RpcSDKManageAuthLogout.RpcSDKManageAuthLogoutRpcType,
  params: [
  ]
};
RpcMap[RpcSDKManageAuthLoginWithVerifyCode.RpcSDKManageAuthLoginWithVerifyCodeMethod] = {
  rpc: RpcSDKManageAuthLoginWithVerifyCode.RpcSDKManageAuthLoginWithVerifyCode,
  method: RpcSDKManageAuthLoginWithVerifyCode.RpcSDKManageAuthLoginWithVerifyCodeMethod,
  type: RpcSDKManageAuthLoginWithVerifyCode.RpcSDKManageAuthLoginWithVerifyCodeRpcType,
  params: [
    'userName',
    'password',
    'verifyCode',
    'deviceId'
  ]
};
RpcMap[RpcSDKManageAuthGetLoginVerifyCode.RpcSDKManageAuthGetLoginVerifyCodeMethod] = {
  rpc: RpcSDKManageAuthGetLoginVerifyCode.RpcSDKManageAuthGetLoginVerifyCode,
  method: RpcSDKManageAuthGetLoginVerifyCode.RpcSDKManageAuthGetLoginVerifyCodeMethod,
  type: RpcSDKManageAuthGetLoginVerifyCode.RpcSDKManageAuthGetLoginVerifyCodeRpcType,
  params: [
    'deviceId'
  ]
};
RpcMap[RpcSDKManageAuthGenerateUUID.RpcSDKManageAuthGenerateUUIDMethod] = {
  rpc: RpcSDKManageAuthGenerateUUID.RpcSDKManageAuthGenerateUUID,
  method: RpcSDKManageAuthGenerateUUID.RpcSDKManageAuthGenerateUUIDMethod,
  type: RpcSDKManageAuthGenerateUUID.RpcSDKManageAuthGenerateUUIDRpcType,
  params: [
  ]
};
RpcMap[RpcSDKManageFactorageModify.RpcSDKManageFactorageModifyMethod] = {
  rpc: RpcSDKManageFactorageModify.RpcSDKManageFactorageModify,
  method: RpcSDKManageFactorageModify.RpcSDKManageFactorageModifyMethod,
  type: RpcSDKManageFactorageModify.RpcSDKManageFactorageModifyRpcType,
  params: [
    'merchantNo',
    'factorageType',
    'factorageRateMerchantOriginMember',
    'factorageRateMerchantNormalMember',
    'factorageRateMinipayMember'
  ]
};
RpcMap[RpcSDKManageFactorageQueryDetail.RpcSDKManageFactorageQueryDetailMethod] = {
  rpc: RpcSDKManageFactorageQueryDetail.RpcSDKManageFactorageQueryDetail,
  method: RpcSDKManageFactorageQueryDetail.RpcSDKManageFactorageQueryDetailMethod,
  type: RpcSDKManageFactorageQueryDetail.RpcSDKManageFactorageQueryDetailRpcType,
  params: [
    'merchantNo'
  ]
};
RpcMap[RpcSDKManageMiniPayPlatformQuery.RpcSDKManageMiniPayPlatformQueryMethod] = {
  rpc: RpcSDKManageMiniPayPlatformQuery.RpcSDKManageMiniPayPlatformQuery,
  method: RpcSDKManageMiniPayPlatformQuery.RpcSDKManageMiniPayPlatformQueryMethod,
  type: RpcSDKManageMiniPayPlatformQuery.RpcSDKManageMiniPayPlatformQueryRpcType,
  params: [
  ]
};
RpcMap[RpcSDKManageMemberResetLoginPassword.RpcSDKManageMemberResetLoginPasswordMethod] = {
  rpc: RpcSDKManageMemberResetLoginPassword.RpcSDKManageMemberResetLoginPassword,
  method: RpcSDKManageMemberResetLoginPassword.RpcSDKManageMemberResetLoginPasswordMethod,
  type: RpcSDKManageMemberResetLoginPassword.RpcSDKManageMemberResetLoginPasswordRpcType,
  params: [
    'memberId'
  ]
};
RpcMap[RpcSDKManageMemberUnFreeze.RpcSDKManageMemberUnFreezeMethod] = {
  rpc: RpcSDKManageMemberUnFreeze.RpcSDKManageMemberUnFreeze,
  method: RpcSDKManageMemberUnFreeze.RpcSDKManageMemberUnFreezeMethod,
  type: RpcSDKManageMemberUnFreeze.RpcSDKManageMemberUnFreezeRpcType,
  params: [
    'memberId'
  ]
};
RpcMap[RpcSDKManageMemberQuery.RpcSDKManageMemberQueryMethod] = {
  rpc: RpcSDKManageMemberQuery.RpcSDKManageMemberQuery,
  method: RpcSDKManageMemberQuery.RpcSDKManageMemberQueryMethod,
  type: RpcSDKManageMemberQuery.RpcSDKManageMemberQueryRpcType,
  params: [
    'memberId',
    'cellphone',
    'name',
    'status',
    'memberType',
    'pageIndex',
    'pageCount',
    'sortBy',
    'desc'
  ]
};
RpcMap[RpcSDKManageMemberRegister.RpcSDKManageMemberRegisterMethod] = {
  rpc: RpcSDKManageMemberRegister.RpcSDKManageMemberRegister,
  method: RpcSDKManageMemberRegister.RpcSDKManageMemberRegisterMethod,
  type: RpcSDKManageMemberRegister.RpcSDKManageMemberRegisterRpcType,
  params: [
    'cellphone',
    'name',
    'gender',
    'idType',
    'idNo'
  ]
};
RpcMap[RpcSDKManageMemberFreeze.RpcSDKManageMemberFreezeMethod] = {
  rpc: RpcSDKManageMemberFreeze.RpcSDKManageMemberFreeze,
  method: RpcSDKManageMemberFreeze.RpcSDKManageMemberFreezeMethod,
  type: RpcSDKManageMemberFreeze.RpcSDKManageMemberFreezeRpcType,
  params: [
    'memberId'
  ]
};
RpcMap[RpcSDKManageMemberResetPayPassword.RpcSDKManageMemberResetPayPasswordMethod] = {
  rpc: RpcSDKManageMemberResetPayPassword.RpcSDKManageMemberResetPayPassword,
  method: RpcSDKManageMemberResetPayPassword.RpcSDKManageMemberResetPayPasswordMethod,
  type: RpcSDKManageMemberResetPayPassword.RpcSDKManageMemberResetPayPasswordRpcType,
  params: [
    'memberId'
  ]
};
RpcMap[RpcSDKManageUserUnFreeze.RpcSDKManageUserUnFreezeMethod] = {
  rpc: RpcSDKManageUserUnFreeze.RpcSDKManageUserUnFreeze,
  method: RpcSDKManageUserUnFreeze.RpcSDKManageUserUnFreezeMethod,
  type: RpcSDKManageUserUnFreeze.RpcSDKManageUserUnFreezeRpcType,
  params: [
    'userId'
  ]
};
RpcMap[RpcSDKManageUserQuery.RpcSDKManageUserQueryMethod] = {
  rpc: RpcSDKManageUserQuery.RpcSDKManageUserQuery,
  method: RpcSDKManageUserQuery.RpcSDKManageUserQueryMethod,
  type: RpcSDKManageUserQuery.RpcSDKManageUserQueryRpcType,
  params: [
    'userId',
    'userName',
    'cellphone',
    'name',
    'memberId',
    'organizationId',
    'status',
    'pageIndex',
    'pageCount',
    'sortBy',
    'desc'
  ]
};
RpcMap[RpcSDKManageUserAddSystemUser.RpcSDKManageUserAddSystemUserMethod] = {
  rpc: RpcSDKManageUserAddSystemUser.RpcSDKManageUserAddSystemUser,
  method: RpcSDKManageUserAddSystemUser.RpcSDKManageUserAddSystemUserMethod,
  type: RpcSDKManageUserAddSystemUser.RpcSDKManageUserAddSystemUserRpcType,
  params: [
    'userName',
    'password',
    'cellphone',
    'organizationId',
    'role'
  ]
};
RpcMap[RpcSDKManageUserModify.RpcSDKManageUserModifyMethod] = {
  rpc: RpcSDKManageUserModify.RpcSDKManageUserModify,
  method: RpcSDKManageUserModify.RpcSDKManageUserModifyMethod,
  type: RpcSDKManageUserModify.RpcSDKManageUserModifyRpcType,
  params: [
    'userId',
    'userName',
    'role'
  ]
};
RpcMap[RpcSDKManageUserResetPassword.RpcSDKManageUserResetPasswordMethod] = {
  rpc: RpcSDKManageUserResetPassword.RpcSDKManageUserResetPassword,
  method: RpcSDKManageUserResetPassword.RpcSDKManageUserResetPasswordMethod,
  type: RpcSDKManageUserResetPassword.RpcSDKManageUserResetPasswordRpcType,
  params: [
    'userId'
  ]
};
RpcMap[RpcSDKManageUserFreeze.RpcSDKManageUserFreezeMethod] = {
  rpc: RpcSDKManageUserFreeze.RpcSDKManageUserFreeze,
  method: RpcSDKManageUserFreeze.RpcSDKManageUserFreezeMethod,
  type: RpcSDKManageUserFreeze.RpcSDKManageUserFreezeRpcType,
  params: [
    'userId'
  ]
};
RpcMap[RpcSDKManageReviewRefuse.RpcSDKManageReviewRefuseMethod] = {
  rpc: RpcSDKManageReviewRefuse.RpcSDKManageReviewRefuse,
  method: RpcSDKManageReviewRefuse.RpcSDKManageReviewRefuseMethod,
  type: RpcSDKManageReviewRefuse.RpcSDKManageReviewRefuseRpcType,
  params: [
    'reviewId'
  ]
};
RpcMap[RpcSDKManageReviewReview.RpcSDKManageReviewReviewMethod] = {
  rpc: RpcSDKManageReviewReview.RpcSDKManageReviewReview,
  method: RpcSDKManageReviewReview.RpcSDKManageReviewReviewMethod,
  type: RpcSDKManageReviewReview.RpcSDKManageReviewReviewRpcType,
  params: [
    'reviewId'
  ]
};
RpcMap[RpcSDKManageQuotaTransactionConsumeExport.RpcSDKManageQuotaTransactionConsumeExportMethod] = {
  rpc: RpcSDKManageQuotaTransactionConsumeExport.RpcSDKManageQuotaTransactionConsumeExport,
  method: RpcSDKManageQuotaTransactionConsumeExport.RpcSDKManageQuotaTransactionConsumeExportMethod,
  type: RpcSDKManageQuotaTransactionConsumeExport.RpcSDKManageQuotaTransactionConsumeExportRpcType,
  params: [
    'merchantName',
    'tradeFlowOfPaymini',
    'operateTimeBegin',
    'operateTimeEnd'
  ]
};
RpcMap[RpcSDKManageQuotaTransactionConsumeQuery.RpcSDKManageQuotaTransactionConsumeQueryMethod] = {
  rpc: RpcSDKManageQuotaTransactionConsumeQuery.RpcSDKManageQuotaTransactionConsumeQuery,
  method: RpcSDKManageQuotaTransactionConsumeQuery.RpcSDKManageQuotaTransactionConsumeQueryMethod,
  type: RpcSDKManageQuotaTransactionConsumeQuery.RpcSDKManageQuotaTransactionConsumeQueryRpcType,
  params: [
    'merchantName',
    'tradeFlowOfPaymini',
    'operateTimeBegin',
    'operateTimeEnd',
    'pageIndex',
    'pageCount',
    'sortBy',
    'desc'
  ]
};
RpcMap[RpcSDKManageQuotaTransactionRechargeExport.RpcSDKManageQuotaTransactionRechargeExportMethod] = {
  rpc: RpcSDKManageQuotaTransactionRechargeExport.RpcSDKManageQuotaTransactionRechargeExport,
  method: RpcSDKManageQuotaTransactionRechargeExport.RpcSDKManageQuotaTransactionRechargeExportMethod,
  type: RpcSDKManageQuotaTransactionRechargeExport.RpcSDKManageQuotaTransactionRechargeExportRpcType,
  params: [
    'merchantName',
    'recordId',
    'operateTimeBegin',
    'operateTimeEnd'
  ]
};
RpcMap[RpcSDKManageQuotaTransactionRechargeQuery.RpcSDKManageQuotaTransactionRechargeQueryMethod] = {
  rpc: RpcSDKManageQuotaTransactionRechargeQuery.RpcSDKManageQuotaTransactionRechargeQuery,
  method: RpcSDKManageQuotaTransactionRechargeQuery.RpcSDKManageQuotaTransactionRechargeQueryMethod,
  type: RpcSDKManageQuotaTransactionRechargeQuery.RpcSDKManageQuotaTransactionRechargeQueryRpcType,
  params: [
    'merchantName',
    'recordId',
    'operateTimeBegin',
    'operateTimeEnd',
    'pageIndex',
    'pageCount',
    'sortBy',
    'desc'
  ]
};
RpcMap[RpcSDKManageQuotaUnFreeze.RpcSDKManageQuotaUnFreezeMethod] = {
  rpc: RpcSDKManageQuotaUnFreeze.RpcSDKManageQuotaUnFreeze,
  method: RpcSDKManageQuotaUnFreeze.RpcSDKManageQuotaUnFreezeMethod,
  type: RpcSDKManageQuotaUnFreeze.RpcSDKManageQuotaUnFreezeRpcType,
  params: [
    'merchantNo'
  ]
};
RpcMap[RpcSDKManageQuotaQuery.RpcSDKManageQuotaQueryMethod] = {
  rpc: RpcSDKManageQuotaQuery.RpcSDKManageQuotaQuery,
  method: RpcSDKManageQuotaQuery.RpcSDKManageQuotaQueryMethod,
  type: RpcSDKManageQuotaQuery.RpcSDKManageQuotaQueryRpcType,
  params: [
    'merchantNo',
    'merchantName',
    'minQuota',
    'maxQuota',
    'status',
    'pageIndex',
    'pageCount',
    'sortBy',
    'desc'
  ]
};
RpcMap[RpcSDKManageQuotaModifyOverDraft.RpcSDKManageQuotaModifyOverDraftMethod] = {
  rpc: RpcSDKManageQuotaModifyOverDraft.RpcSDKManageQuotaModifyOverDraft,
  method: RpcSDKManageQuotaModifyOverDraft.RpcSDKManageQuotaModifyOverDraftMethod,
  type: RpcSDKManageQuotaModifyOverDraft.RpcSDKManageQuotaModifyOverDraftRpcType,
  params: [
    'merchantNo',
    'overdraft',
    'memberId',
    'changeChannel'
  ]
};
RpcMap[RpcSDKManageQuotaFreeze.RpcSDKManageQuotaFreezeMethod] = {
  rpc: RpcSDKManageQuotaFreeze.RpcSDKManageQuotaFreeze,
  method: RpcSDKManageQuotaFreeze.RpcSDKManageQuotaFreezeMethod,
  type: RpcSDKManageQuotaFreeze.RpcSDKManageQuotaFreezeRpcType,
  params: [
    'merchantNo'
  ]
};
RpcMap[RpcSDKManageQuotaAddition.RpcSDKManageQuotaAdditionMethod] = {
  rpc: RpcSDKManageQuotaAddition.RpcSDKManageQuotaAddition,
  method: RpcSDKManageQuotaAddition.RpcSDKManageQuotaAdditionMethod,
  type: RpcSDKManageQuotaAddition.RpcSDKManageQuotaAdditionRpcType,
  params: [
    'merchantNo',
    'quotaAddition',
    'memberId',
    'changeChannel'
  ]
};
RpcMap[RpcSDKManageMerchantMemberAddMerchantMember.RpcSDKManageMerchantMemberAddMerchantMemberMethod] = {
  rpc: RpcSDKManageMerchantMemberAddMerchantMember.RpcSDKManageMerchantMemberAddMerchantMember,
  method: RpcSDKManageMerchantMemberAddMerchantMember.RpcSDKManageMerchantMemberAddMerchantMemberMethod,
  type: RpcSDKManageMerchantMemberAddMerchantMember.RpcSDKManageMerchantMemberAddMerchantMemberRpcType,
  params: [
    'merchantNo',
    'cellphone'
  ]
};
RpcMap[RpcSDKManageMerchantMemberQueryMerchantMemberDetail.RpcSDKManageMerchantMemberQueryMerchantMemberDetailMethod] = {
  rpc: RpcSDKManageMerchantMemberQueryMerchantMemberDetail.RpcSDKManageMerchantMemberQueryMerchantMemberDetail,
  method: RpcSDKManageMerchantMemberQueryMerchantMemberDetail.RpcSDKManageMerchantMemberQueryMerchantMemberDetailMethod,
  type: RpcSDKManageMerchantMemberQueryMerchantMemberDetail.RpcSDKManageMerchantMemberQueryMerchantMemberDetailRpcType,
  params: [
    'memberId',
    'merchantNo',
    'merchantName',
    'cellphone',
    'isOriginMerchantMember',
    'name',
    'totalRechargeMin',
    'totalRechargeMax',
    'totalConsumptionMin',
    'totalConsumptionMax',
    'status',
    'sortBy',
    'desc',
    'pageIndex',
    'pageCount'
  ]
};
RpcMap[RpcSDKManageMerchantMemberQuery.RpcSDKManageMerchantMemberQueryMethod] = {
  rpc: RpcSDKManageMerchantMemberQuery.RpcSDKManageMerchantMemberQuery,
  method: RpcSDKManageMerchantMemberQuery.RpcSDKManageMerchantMemberQueryMethod,
  type: RpcSDKManageMerchantMemberQuery.RpcSDKManageMerchantMemberQueryRpcType,
  params: [
    'merchantNo',
    'merchantName',
    'status',
    'sortBy',
    'desc',
    'pageIndex',
    'pageCount'
  ]
};
RpcMap[RpcSDKManagePermissionQuery.RpcSDKManagePermissionQueryMethod] = {
  rpc: RpcSDKManagePermissionQuery.RpcSDKManagePermissionQuery,
  method: RpcSDKManagePermissionQuery.RpcSDKManagePermissionQueryMethod,
  type: RpcSDKManagePermissionQuery.RpcSDKManagePermissionQueryRpcType,
  params: [
    'permissionId',
    'permissionKey'
  ]
};
RpcMap[RpcSDKManageMerchantUnFreeze.RpcSDKManageMerchantUnFreezeMethod] = {
  rpc: RpcSDKManageMerchantUnFreeze.RpcSDKManageMerchantUnFreeze,
  method: RpcSDKManageMerchantUnFreeze.RpcSDKManageMerchantUnFreezeMethod,
  type: RpcSDKManageMerchantUnFreeze.RpcSDKManageMerchantUnFreezeRpcType,
  params: [
    'merchantNo'
  ]
};
RpcMap[RpcSDKManageMerchantQuery.RpcSDKManageMerchantQueryMethod] = {
  rpc: RpcSDKManageMerchantQuery.RpcSDKManageMerchantQuery,
  method: RpcSDKManageMerchantQuery.RpcSDKManageMerchantQueryMethod,
  type: RpcSDKManageMerchantQuery.RpcSDKManageMerchantQueryRpcType,
  params: [
    'merchantNo',
    'merchantName',
    'merchantAlias',
    'merchantSize',
    'status',
    'fuzzyMatchMerchantName',
    'sortBy',
    'desc',
    'pageIndex',
    'pageCount'
  ]
};
RpcMap[RpcSDKManageMerchantModifyMerchant.RpcSDKManageMerchantModifyMerchantMethod] = {
  rpc: RpcSDKManageMerchantModifyMerchant.RpcSDKManageMerchantModifyMerchant,
  method: RpcSDKManageMerchantModifyMerchant.RpcSDKManageMerchantModifyMerchantMethod,
  type: RpcSDKManageMerchantModifyMerchant.RpcSDKManageMerchantModifyMerchantRpcType,
  params: [
    'merchantNo',
    'merchantName',
    'merchantAlias',
    'merchantAddress',
    'merchantSize',
    'businessLicence',
    'longitude',
    'latitude',
    'bankName',
    'bankAccountName',
    'bankAccount'
  ]
};
RpcMap[RpcSDKManageMerchantAddMerchant.RpcSDKManageMerchantAddMerchantMethod] = {
  rpc: RpcSDKManageMerchantAddMerchant.RpcSDKManageMerchantAddMerchant,
  method: RpcSDKManageMerchantAddMerchant.RpcSDKManageMerchantAddMerchantMethod,
  type: RpcSDKManageMerchantAddMerchant.RpcSDKManageMerchantAddMerchantRpcType,
  params: [
    'merchantName',
    'merchantAlias',
    'merchantAddress',
    'merchantSize',
    'businessLicence',
    'signChannel',
    'signChannelExtendId',
    'quotaOverflow',
    'longitude',
    'latitude',
    'bankName',
    'bankAccountName',
    'bankAccount'
  ]
};
RpcMap[RpcSDKManageMerchantFreeze.RpcSDKManageMerchantFreezeMethod] = {
  rpc: RpcSDKManageMerchantFreeze.RpcSDKManageMerchantFreeze,
  method: RpcSDKManageMerchantFreeze.RpcSDKManageMerchantFreezeMethod,
  type: RpcSDKManageMerchantFreeze.RpcSDKManageMerchantFreezeRpcType,
  params: [
    'merchantNo'
  ]
};

let Vue = window.getVue();
Vue.prototype.$rpc = rpc;

export default RpcMap;
