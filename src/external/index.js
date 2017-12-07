/**
 * Created by WebStorm.
 * Author: enixlee
 * Date: 2017/2/27
 * Time: 上午10:06
 */
import {default as MuseUI} from './MuseUI';
import {SimpleDialog} from './components/SimpleDialog/SimpleDialog';
import CommonInput from './components/CommonInput/CommonInput.vue';
import CommonBackground from './components/CommonBackground/CommonBackGround.vue';
import CommonQueryToolBar from './components/CommonQueryToolBar/CommonQueryToolBar.vue';
import TablePage from './components/Table/TablePage.vue';
import CommonPageSearch from './components/CommonPageSearch/CommonPageSearch.vue';
import CommonInformation from './components/CommonInformation/CommonInformation.vue';
import DropDownSearch from './components/DropDownSearch/DropDownSearch.vue';
import CommonSelect from './components/CommonSelect/CommonSelect.vue';
import AutoQueryToolBar from './components/CommonQueryToolBar/AutoQueryToolBar.vue';
import SimpleInput from './components/SimpleInput/SimpleInput';

let Vue = window.getVue();

const registerMuseUI = function () {
  Vue.use(MuseUI.MuseUI);
  Vue.component(CommonInput.name, CommonInput);
  Vue.component(CommonBackground.name, CommonBackground);
  Vue.component(CommonQueryToolBar.name, CommonQueryToolBar);
  Vue.component(TablePage.name, TablePage);
  Vue.component(CommonPageSearch.name, CommonPageSearch);
  Vue.component(CommonInformation.name, CommonInformation);
  Vue.component(DropDownSearch.name, DropDownSearch);
  Vue.component(CommonSelect.name, CommonSelect);
  Vue.component(AutoQueryToolBar.name, AutoQueryToolBar);
  Vue.component(SimpleInput.name, SimpleInput);

  Vue.prototype.$dialog = SimpleDialog;
};

registerMuseUI();
