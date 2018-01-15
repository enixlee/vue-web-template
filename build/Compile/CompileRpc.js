/**
 * Auth: lijiang
 * Date: 2018/1/13
 * Description: CompileRpc
 */
const spawn = require('child_process');
const fs = require('fs');
const chalk = require('chalk');
const lodash = require('lodash');
const ora = require('ora');
const spinner = ora('');

let projectPath = null;
let baseRpcConfig = null;
let customRpcConfig = null;

let cpyPath = null;
let apiErrorPath = null;

let apiPath = null;

let codeTemplateProjectName = null;
let codeTemplatePath = null;
let codeTemplateGitPath = null;

let compileShellPath = null;

/**
 * 生成rpc请求模板
 * @param config
 */
exports.compile = (config) => {
  // 加载配置
  loadConfig(config);
  // 编译
  pullCodeTemplate();
};

function loadConfig (config) {
  let customConfig = config['CUSTOM_CONFIGURE'];
  let baseConfig = config['BASE_CONFIGURE'];

  projectPath = config.PROJECT_PATH;
  customRpcConfig = customConfig['RPC'];
  baseRpcConfig = baseConfig['RPC'];

  cpyPath = `${projectPath}${baseRpcConfig['RPC_API_ERROR_CODE_TEMPORARY_STORAGE_PATH']}`;
  apiErrorPath = `${projectPath}${baseRpcConfig['RPC_API_ERROR_CODE_PATH']}`;

  apiPath = `${projectPath}${baseRpcConfig['RPC_API_PATH']}`;

  codeTemplateProjectName = customRpcConfig['CODE_TEMPLATE_NAME'];
  codeTemplatePath = `${projectPath}/${codeTemplateProjectName}/`;
  codeTemplateGitPath = customRpcConfig['CODE_TEMPLATE_GIT'];

  compileShellPath = `${projectPath}/${codeTemplateProjectName}`;
}

// ---- 编译rpc模板 ------
function pullCodeTemplate () {
  spinner.start();
  console.log(chalk.cyan(`begin compile RPC template:`));
  if (!fs.existsSync(codeTemplatePath)) {
    cloneCodeTemplateProject(composerUpdate);
  } else {
    pullCodeTemplateProject(generateRpc);
  }
}

function cloneCodeTemplateProject (callback) {
  let cmd = `git clone ${codeTemplateGitPath}`;
  console.log(chalk.yellow(`git clone ${codeTemplateGitPath}`));
  spawn.exec(cmd, function () {
    if (lodash.isFunction(callback)) {
      callback();
    }
  });
}

/**
 * 更新composer
 */
function composerUpdate () {
  let cmd = `cd ${codeTemplatePath} && composer update -vvv`;
  console.log(chalk.yellow(`composer update`));
  spawn.exec(cmd, generateRpc);
}

function pullCodeTemplateProject (callback) {
  let cmdPull = `git pull origin master`;
  let cmd = `cd ${codeTemplatePath} && ${cmdPull}`;
  console.log(chalk.yellow(`git pull: ${codeTemplatePath}`));
  spawn.exec(cmd, function () {
    let needComposerUpdate = customRpcConfig['COMPOSER_UPDATE_AFTER_PULL'];
    if (needComposerUpdate) {
      composerUpdate();
    } else if (lodash.isFunction(callback)) {
      callback();
    }
  });
}

function generateRpc () {
  if (!fs.existsSync(cpyPath)) {
    fs.mkdirSync(cpyPath);
  }

  let cmd = `cp ${apiErrorPath}Error*.js ${cpyPath}`;
  spawn.exec(cmd, compileApiTemplate);
}

function compileApiTemplate () {
  let compileCmd = baseRpcConfig['RPC_COMPILE']['CMD'];
  let params = baseRpcConfig['RPC_COMPILE']['PARAMS'];
  let cmd = compileCmd;
  cmd += params['USE_FULL_PATH'] ? ` --useFullPath=true` : ` --useFullPath=false`;
  cmd += ` --exportVueRpcPath=${apiPath}`;
  cmd += ` --templateVueRpcPath=${compileShellPath}${customRpcConfig['CODE_TEMPLATE_PATH']}`;

  let exportCmd = `cd ${compileShellPath} && ${cmd}`;
  console.log(chalk.yellow(`begin compile RPC codeTemplate`));
  spawn.exec(exportCmd, cpOriginRpc);
}

function cpOriginRpc () {
  let resetCmd = `yes|cp -fr ${cpyPath}*.js ${apiErrorPath}`;
  let backCmd = `cd ${cpyPath} && ${resetCmd}`;
  spawn.exec(backCmd, clear);
}

function clear () {
  let delCmd = `rm -rf ${cpyPath}`;
  spawn.exec(delCmd);
  spawn.exec(`exit`);
  console.log(chalk.cyan('complete compile RPC codeTemplate.'));

  spinner.stop();
  process.exit(0);
}
