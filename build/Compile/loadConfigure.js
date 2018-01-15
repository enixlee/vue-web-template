/**
 * Auth: lijiang
 * Date: 2018/1/13
 * Description: loadConfigure
 */

const fs = require('fs');
const yamlParser = require('js-yaml');
const path = require('path');
const chalk = require('chalk');
const ora = require('ora');
const spinner = ora('');

let projectPath = path.resolve();
let configure = projectPath + '/build/configure.yaml';

/**
 * 加载配置文件
 * @returns {{}}
 */
exports.loadConfigure = () => {
  spinner.start();

  let config = fs.readFileSync(configure, 'utf8');
  let configMap = yamlParser.safeLoad(config);
  configMap['PROJECT_PATH'] = projectPath;

  console.log(chalk.cyan(`load Compile configuration complete`));
  spinner.stop();

  return configMap;
};
