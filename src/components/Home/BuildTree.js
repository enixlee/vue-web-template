import {treeNodes} from '../../external/resource/HomeTree';
import {default as TreeNode} from '../../external/resource/TreeNode';

let Vue = window.getVue();

export const buildTree = () => {
  let tree = [];
  let lodash = Vue.prototype.getPlugin('lodash');
  lodash.map(treeNodes, function (v) {
    let leaf = (new TreeNode(v.name)).initFromArray(v);
    leaf.isValid() ? tree.push(leaf) : null;
  });

  return tree;
};

/**
 * 根据节点名称查找节点
 * @param tree
 * @param leafName
 * @returns {*}
 */
export const findLeafByName = (tree, leafName) => {
  let i = 0;
  let top = tree[i];
  while (top) {
    if (top.isBranch()) {
      let leaf = findLeafByName(top.leaves(), leafName);
      if (leaf) {
        return leaf;
      }
    }
    if (top.RouteKey() === leafName) {
      return top;
    }
    top = tree[i++];
  }
  return null;
};

/**
 * 当前选中的节点
 * @param leaves
 * @param routeName
 * @returns {null}
 */
export const getSelectedObject = (leaves, routeName) => {
  for (let i = 0; i < leaves.length; i++) {
    let leaf = leaves[i];
    let node = null;
    if (leaf.isBranch()) {
      node = getSelectedObject(leaf.leaves(), routeName);
    } else {
      if (leaf.uniqueKey() === routeName) {
        node = leaf;
      }
    }

    if (node) {
      return node;
    }
  }
  return null;
};
