/**
 * Auth: enixlee
 * Date: 2017/3/29
 * Description: PMLanguageConfig
 */
import cn from './Lang/cn';
import en from './Lang/en';

/**
 * 语言表实例
 * @type {{locale: string, languages: {cn: {lang_test: string}, en: {lang_test: string}}}}
 */
const PMLanguageConfig = {
  locale: 'cn',
  languages: {
    cn: cn,
    en: en
  }
};

export default PMLanguageConfig;
