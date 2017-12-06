let Vue = window.getVue();
let Assert = Vue.prototype.getPlugin('Assert');

class TreeNode {
  constructor (name, breadCrumb = null, father = null) {
    Assert.isStringNotEmpty(name, `Tree node name must be a string not empty, got ${name}`);
    let lodash = Vue.prototype.getPlugin('lodash');

    this.breadCrumb = breadCrumb === null ? [] : lodash.clone(breadCrumb);
    Assert.isArray(this.breadCrumb, `bread crumb must an array, got ${this.breadCrumb}`);

    this.nodeName = name;
    this.breadCrumb.push(this.nodeName);
    this.father = father;
  }

  /**
   * 初始化节点
   * @param keyMap
   * @returns {TreeNode}
   */
  initFromArray (keyMap) {
    Assert.isObject(keyMap, `key map must be an object, got ${keyMap}`);

    this.nodeKey = keyMap.key;
    this.actionType = keyMap.actionType;
    this.nodeIcon = keyMap.icon;
    this.permission = keyMap.permission;
    this.allleaves = this.initChildren(keyMap.children);

    return this;
  }

  RouteKey () {
    return this.nodeKey;
  }

  /**
   * 构造子节点
   * @param children
   * @returns {Array}
   */
  initChildren (children) {
    let lodash = Vue.prototype.getPlugin('lodash');
    if (!lodash.isArray(children)) {
      return [];
    }

    let babies = [];
    let that = this;
    lodash.map(children, function (v) {
      let child = new TreeNode(v.name, that.breadCrumb, this).initFromArray(v);
      child.isValid() ? babies.push(child) : null;
    });

    return babies;
  }

  getNameCn () {
    return Vue.prototype.getLang(this.nodeName);
  }

  uniqueKey () {
    return this.nodeKey;
  }

  getBreadCrumb () {
    return this.breadCrumb;
  }

  breadCrumbDescription () {
    let level = this.breadCrumb.length;
    let breadCrumb = '';
    for (let i = 0; i < level; i++) {
      let desc = Vue.prototype.getLang(this.breadCrumb[i]);
      breadCrumb += `${desc}`;
      if (i !== level - 1) {
        breadCrumb += '-';
      }
    }
    return breadCrumb;
  }

  getNodeIcon () {
    if (Vue.prototype.stringNotEmpty(this.nodeIcon)) {
      return Vue.prototype.getImagePath(this.nodeIcon);
    } else {
      return null;
    }
  }

  doAction () {
    if (Vue.prototype.getModuleGetterByName('isRequesting')) {
      return;
    }

    switch (parseInt(this.actionType)) {
      case Vue.constants.global.TREE_MENU_ACTION_TYPE_ROUTER:
        this.routePage();
        break;
      case Vue.constants.global.TREE_MENU_ACTION_TYPE_DIALOG:
        this.dialogShow();
        break;
      case Vue.constants.global.TREE_MENU_ACTION_TYPE_DREW:
      default:
        break;
    }

    Vue.prototype.eventBus.emit(Vue.constants.events.EVENT_LEFT_TREE_NODE_UPDATE, {leaf: this});
  }

  /**
   * 树叶
   * @returns {boolean}
   */
  isLeaf () {
    return parseInt(this.actionType) !== Vue.constants.global.TREE_MENU_ACTION_TYPE_DREW;
  }

  /**
   * 树枝
   * @returns {boolean}
   */
  isBranch () {
    return parseInt(this.actionType) === Vue.constants.global.TREE_MENU_ACTION_TYPE_DREW;
  }

  leaves () {
    return this.allleaves;
  }

  /**
   * 是否是有效节点
   */
  isValid () {
    let user = Vue.prototype.getModuleGetterByName('getUser');
    return user.hasPermissions(this.permission);
  }

  routePage () {
    Assert.isStringNotEmpty(this.nodeKey, `tree node router must be string not empty, got ${this.nodeKey}`);
    let router = Vue.prototype.getPlugin('AppRouter');
    router.push({name: this.nodeKey});
  }

  dialogShow () {
    // todo 反射对应的方法
  }
}

export default TreeNode;
