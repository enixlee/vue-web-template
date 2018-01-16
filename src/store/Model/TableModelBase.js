/**
 * Auth: lijiang
 * Date: 2018/1/15
 * Description: TableModelBase
 */
import {default as ModelBase} from './ModelBase';

class TableModelBase extends ModelBase {
  constructor (modelName) {
    super(modelName || 'TableModelBase');
  }

  /**
   * 操作按钮的声明字典
   * @returns {{}}
   */
  operations () {
    return {};
  }

  /**
   * 自定义ugc的map
   * @returns {{}}
   */
  customColumnComponents () {
    return {};
  }

  getColumnColor (key) {
    return null;
  }

  columnComponentType (key) {
    return this.customColumnComponents()[key] || 'text';
  }
}

export default TableModelBase;
