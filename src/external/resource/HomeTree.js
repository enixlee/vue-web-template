export const treeNodes = [
  {
    name: 'MERCHANT_MANAGE',
    key: 'MerchantManage',
    actionType: '0',
    icon: 'icon_nav_operate.png',
    children: [
      {
        name: 'MERCHANT_MANAGE_ADD',
        key: 'MerchantAdd',
        actionType: '1',
        icon: '',
        permission: []
      },
      {
        name: 'MERCHANT_MANAGE_QUERY',
        key: 'MerchantQuery',
        actionType: '1',
        icon: '',
        permission: []
      },
      {
        name: 'MERCHANT_MANAGE_ACTIVITY',
        key: 'MerchantActivity',
        actionType: '0',
        icon: '',
        children: [
          {
            name: 'MERCHANT_MANAGE_ACTIVITY_ADD',
            key: 'MerchantActivityAdd',
            actionType: '1',
            icon: '',
            permission: []
          },
          {
            name: 'MERCHANT_MANAGE_ACTIVITY_LIST',
            key: 'MerchantActivityList',
            actionType: '1',
            icon: '',
            permission: []
          }
        ],
        permission: []
      },
      {
        name: 'MERCHANT_MANAGE_QUOTA',
        key: 'MerchantQuota',
        actionType: '0',
        icon: '',
        children: [
          {
            name: 'MERCHANT_MANAGE_QUOTA_DETAIL',
            key: 'MerchantQuotaDetail',
            actionType: '1',
            icon: '',
            permission: []
          },
          {
            name: 'MERCHANT_MANAGE_QUOTA_RECHARGE_RECORD',
            key: 'MerchantQuotaRechargeRecord',
            actionType: '1',
            icon: '',
            permission: []
          },
          {
            name: 'MERCHANT_MANAGE_QUOTA_COST_RECORD',
            key: 'MerchantQuotaCostRecord',
            actionType: '1',
            icon: '',
            permission: []
          }
        ],
        permission: []
      }
    ],
    permission: []
  },
  {
    name: 'PAYMENT_PRODUCT',
    key: 'PaymentProduct',
    actionType: '0',
    icon: 'icon_nav_operate.png',
    children: [
      {
        name: 'PAYMENT_PRODUCT_QUOTA',
        key: 'PaymentProductQuota',
        actionType: '0',
        icon: '',
        children: [
          {
            name: 'PAYMENT_PRODUCT_QUOTA_OPEN',
            key: 'PaymentProductQuotaOpen',
            actionType: '1',
            icon: '',
            permission: []
          },
          {
            name: 'PAYMENT_PRODUCT_QUOTA_LIST',
            key: 'PaymentProductQuotaList',
            actionType: '1',
            icon: '',
            permission: []
          }
        ],
        permission: []
      }
    ],
    permission: []
  },
  {
    name: 'MEMBER_MANAGE',
    key: 'MemberManage',
    actionType: '0',
    icon: 'icon_nav_operate.png',
    children: [
      {
        name: 'MEMBER_MANAGE_PLATFORM',
        key: 'MemberManagePlatform',
        actionType: '0',
        icon: '',
        children: [
          {
            name: 'MEMBER_MANAGE_PLATFORM_ADD',
            key: 'MemberPlatformAdd',
            actionType: '1',
            icon: '',
            permission: []
          },
          {
            name: 'MEMBER_MANAGE_PLATFORM_LIST',
            key: 'MemberPlatformList',
            actionType: '1',
            icon: '',
            permission: []
          }
        ],
        permission: []
      },
      {
        name: 'MEMBER_MANAGE_MERCHANT',
        key: 'MemberManageMerchant',
        actionType: '0',
        icon: '',
        children: [
          {
            name: 'MEMBER_MANAGE_MERCHANT_LIST',
            key: 'MemberMerchantList',
            actionType: '1',
            icon: '',
            permission: []
          }
        ],
        permission: []
      }
    ],
    permission: []
  },
  {
    name: 'PLATFORM_MANAGE',
    key: 'PlatformManage',
    actionType: '0',
    icon: 'icon_nav_operate.png',
    children: [
      {
        name: 'PLATFORM_MANAGE_SETTING',
        key: 'PlatformSetting',
        actionType: '1',
        icon: '',
        permission: []
      },
      {
        name: 'PLATFORM_MANAGE_MANAGER',
        key: 'PlatformManager',
        actionType: '0',
        icon: '',
        children: [
          {
            name: 'PLATFORM_MANAGE_MANAGER_ADD',
            key: 'PlatformManagerAdd',
            actionType: '1',
            icon: '',
            permission: []
          },
          {
            name: 'PLATFORM_MANAGE_MANAGER_LIST',
            key: 'PlatformManagerList',
            actionType: '1',
            icon: '',
            permission: []
          }
        ],
        permission: []
      },
      {
        name: 'PLATFORM_MANAGE_ROLE',
        key: 'PlatformRole',
        actionType: '0',
        icon: '',
        children: [
          {
            name: 'PLATFORM_MANAGE_ROLE_ADD',
            key: 'PlatformRoleAdd',
            actionType: '1',
            icon: '',
            permission: []
          },
          {
            name: 'PLATFORM_MANAGE_ROLE_LIST',
            key: 'PlatformRoleList',
            actionType: '1',
            icon: '',
            permission: []
          }
        ],
        permission: []
      }
    ],
    permission: []
  }
];
