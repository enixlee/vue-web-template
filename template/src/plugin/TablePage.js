/**
 * Auth: lijiang
 * Date: 2017/10/31
 * Description: TablePage
 */
import * as TablePageList from './Utils/TablePage';

let tablePageMap = {};

const TablePage = {
  install (Vue) {
    let lodash = Vue.prototype.getPlugin('lodash');
    lodash.map(TablePageList, function (v, k) {
      tablePageMap[k] = v;
    });
    Vue.tablePage = tablePageMap;
    Vue.prototype.$tablePage = tablePageMap;
  },
  $tablePage: tablePageMap
};

export default TablePage;
export const install = TablePage.install;
