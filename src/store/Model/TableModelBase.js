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

  couldOperate (operateType) {
    return false;
  }

  getColor () {
    return null;
  }

  customColumnComponents () {
    return {};
  }

  columnComponentType (key) {
    return this.customColumnComponents()[key] || 'text';
  }
}

export default TableModelBase;
