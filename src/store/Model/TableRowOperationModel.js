/**
 * Auth: lijiang
 * Date: 2018/1/16
 * Description: TableRowOperationModel
 */
import {default as ModelBase} from './ModelBase';

let Vue = window.getVue();

class TableRowOperationModel extends ModelBase {
  constructor () {
    super('TableRowOperationModel');
  }

  data () {
    return {
      'modelDepends': null  // 依赖的模块
    };
  }

  couldOperate (operateType) {
    let lodash = Vue.prototype.getPlugin('lodash');
    let Assert = Vue.prototype.getPlugin('Assert');
    let model = this.get('modelDepends');
    Assert.isObject(model, `operation model can not be nil`);
    Assert.isString(operateType, `operation type must be a string, model is ${model.modelType()}`);

    let keyName = this.buildKeyName(operateType);

    if (lodash.isFunction(model[`could${keyName}Operate`])) {
      return model[`could${keyName}Operate`]();
    }

    // 默认开启
    return true;
  }

  color (operateType) {
    let model = this.get('modelDepends');
    let operations = model.operations();

    if (operations[operateType]) {
      return operations[operateType]['color'] || null;
    }

    return null;
  }

  backgroundColor (operateType) {
    let model = this.get('modelDepends');
    let operations = model.operations();

    if (operations[operateType]) {
      return operations[operateType]['backgroundColor'] || null;
    }

    return null;
  }
}

export default TableRowOperationModel;
