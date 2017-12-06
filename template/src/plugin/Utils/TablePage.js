/**
 * Auth: lijiang
 * Date: 2017/10/31
 * Description: TablePage
 */
let Vue = window.getVue();

/**
 * 构造列表表头 [{key:'',title:'',selection:'',formatValue:'',width:'xxx%'}]
 * @param tableHeader
 * @param sort
 * @param selection
 * @param formatValueMap
 * @param hasOperation
 * @returns {Array}
 */
export const formatTableHeader = (tableHeader, sort = {}, selection = {}, formatValueMap = {}, hasOperation = true) => {
  let Assert = Vue.prototype.getPlugin('Assert');
  Assert.isArray(tableHeader, `table header must be array, got ${tableHeader}`);
  let lodash = Vue.prototype.getPlugin('lodash');
  let header = [];
  lodash.map(tableHeader, function (v) {
    let item = {};
    let key = v.key;
    item.key = key;
    item.title = Vue.prototype.getLang(`TABLE_HEADER_${key}`);
    if (sort[key]) {
      item.doSort = sort[key];
    }
    if (selection[key]) {
      item.selection = selection[key];
    }
    if (formatValueMap[key]) {
      item.formatValue = formatValueMap[key];
    }

    Assert.isNumber(v.width, `table row must has width, got ${v.width}`);

    item.width = v.width;

    item.align = v.align || 'center';

    item.information = v.info || '';

    header.push(item);
  });
  return header;
};
