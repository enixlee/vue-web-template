/**
 * Created by WebStorm.
 * Author: enixlee
 * Date: 2017/2/27
 * Time: 上午10:06
 */
import {default as MuseUI} from './MuseUI';
import {SimpleDialog} from './components/SimpleDialog/SimpleDialog';

let Vue = window.getVue();

const registerMuseUI = function () {
  Vue.use(MuseUI.MuseUI);

  Vue.prototype.$dialog = SimpleDialog;
};

registerMuseUI();
