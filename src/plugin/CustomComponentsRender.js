/**
 * Auth: lijiang
 * Date: 2017/12/13
 * Description: DialogRender
 */
import {default as dialogComponents} from '../components/Dialog/index';
import {default as customTableColumns} from '../components/CustomTableColumns/index';

const CustomComponentsRender = {
  install (Vue) {
    Vue.prototype.getPlugin('lodash').map(dialogComponents, function (c) {
      Vue.component(c.name, c);
    });
    Vue.prototype.getPlugin('lodash').map(customTableColumns, function (c) {
      Vue.component(c.name, c);
    });
  }
};

export default CustomComponentsRender;
export const install = CustomComponentsRender.install;
