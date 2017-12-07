/**
 * Auth: enixlee
 * Date: 2017/4/27
 * Description: compile 编译api脚本
 */
const spawn = require('child_process');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const ora = require('ora');
const spinner = ora('compile api template...');
spinner.start();

let compileShellPath = '/Users/lijiang/Documents/work/paymini-git/code-template-sdkmanage';

let projectPath = path.resolve();

let cpyPath = projectPath + '/static/ErrorCodeTemplate/';

let apiPath = projectPath + '/src/api/Template/ErrorCode/';

function run () {
  if (!fs.existsSync(cpyPath)) {
    fs.mkdirSync(cpyPath);
  }

  let cmd = `cp ${apiPath}Error*.js ${cpyPath}`;
  console.log(chalk.blue(`1. run cp command: ${cmd}`));
  spawn.exec(cmd);

  let exportCmd = `cd ${compileShellPath} && sh exportVueRpc.sh`;
  console.log(chalk.blue(`2. run cp command: ${exportCmd}`));
  spawn.exec(exportCmd);

  setTimeout(function () {
    let backCmd = `cd ${cpyPath}`;
    console.log(chalk.blue(`3. run cp command: ${backCmd}`));
    spawn.exec(backCmd);

    let resetCmd = `yes|cp -fr ${cpyPath}*.js ${apiPath}`;
    console.log(chalk.blue(`4. run cp command: ${resetCmd}`));
    spawn.exec(resetCmd);

    setTimeout(function () {

      let delCmd = `rm -rf ${cpyPath}`;
      console.log(chalk.blue(`5. run cp command: ${delCmd}`));
      spawn.exec(delCmd);

      spawn.exec(`exit`);

      console.log(chalk.cyan('Compile complete.'));
      spinner.stop();

      process.exit(0);
    }, 1000);
  }, 5000);
}

run();
