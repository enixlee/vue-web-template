/**
 * Auth: lijiang
 * Date: 2017/10/24
 * Description: index
 */
import VueExtends from './VueExtends';
import Validation from './Validation';
import Moments from './Moments';
import AuthUtil from './AuthUtils';
import Storage from './Storage';
import TablePage from './TablePage';
import Money from './Money';

const Plugins = {
  install (Vue) {
    Vue.use(VueExtends);
    Vue.use(Validation);
    Vue.use(Moments);
    Vue.use(AuthUtil);
    Vue.use(Storage);
    Vue.use(TablePage);
    Vue.use(Money);
  }
};

export default Plugins;
export const install = Plugins.install;
