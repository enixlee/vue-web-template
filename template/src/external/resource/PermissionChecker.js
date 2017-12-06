/**
 * Auth: lijiang
 * Date: 2017/11/14
 * Description: PermissionChecker
 */

import {permissionGroup} from './csv/permission_group';
import {permissionList} from './csv/permission_list';

let Vue = window.getVue();

export const buildPermissionGroup = (permissions) => {
  let permissionMap = {};
  let lodash = Vue.prototype.getPlugin('lodash');
  lodash.map(permissions, function (v) {
    if (lodash.isObject(v)) {
      permissionMap[v.get('ID')] = v;
    } else if (lodash.isNumber(v)) {
      permissionMap[v] = v;
    }
  });

  let group = [];
  lodash.map(permissionGroup, function (v) {
    if (v.group_type > 0) {
      let groupPermissions = v.permission_ids;
      let groupPermits = [];
      for (let i = 0; i < groupPermissions.length; i++) {
        let p = permissionMap[groupPermissions[i]];
        if (p) {
          if (lodash.isObject(p)) {
            groupPermits.push(p);
          } else if (lodash.isNumber(p)) {
            groupPermits.push(permissionList[p - 1]);
          }
        }
      }
      if (groupPermits.length > 0) {
        let groupInfo = {
          group_name: v.group_name,
          permissions: groupPermits,
          group_id: v.group_id,
          choose: []
        };

        group.push(groupInfo);
      }
    }
  });
  return group;
};

export const buildRolePermission = (roles) => {
  let lodash = Vue.prototype.getPlugin('lodash');
  let roleGroup = [];

  lodash.map(roles, function (v) {
    let group = buildPermissionGroup(v.get('PERMISSION_LIST'));
    roleGroup.push({
      name: v.get('ROLE_NAME'),
      group: group,
      roleId: v.get('ID'),
      configId: parseInt(v.get('CONFIG_ID'))
    });
  });

  return roleGroup;
};
