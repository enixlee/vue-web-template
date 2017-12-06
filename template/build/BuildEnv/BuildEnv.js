/**
 * Auth: enixlee
 * Date: 2017/6/29
 * Description: BuildEnv
 */
const fs = require('fs');
const path = require('path');
const yamlParser = require('js-yaml');
const lodash = require('lodash');
const spawn = require('child_process');
const ora = require('ora');
const chalk = require('chalk');
const spinner = ora();
spinner.start();

let projectPath = path.resolve();
let envFile = projectPath + '/.env';

let tempEnvFile = projectPath + '/src/config/tmp/';
let appFile = tempEnvFile + 'App.js';

let destPath = projectPath + '/src/config/';

let indexFile = projectPath + '/index.html';
let indexTmpFile = projectPath + '/index_template.html';

let resource = projectPath + '/src/resource/HomeTree.yaml';
let resourceSavePath = projectPath + '/src/external/resource/HomeTree.js';

function run () {
  console.log(chalk.blue('set environment params...'));
  let fileContent = fs.readFileSync(envFile, 'utf8');
  let doc = yamlParser.safeLoad(fileContent);
  let env = '';
  lodash.map(doc, function (v, k) {
    let value = '';
    if (!lodash.isBoolean(v)) {
      value = `'${v}'`;
    } else {
      value = v;
    }
    env += `export const ${k} = ${value};\n`;
  });

  if (!fs.existsSync(tempEnvFile)) {
    fs.mkdirSync(tempEnvFile);
  }

  fs.writeFileSync(appFile, env, 'utf8');

  // 入口文件
  let index = fs.readFileSync(indexTmpFile, 'utf8');
  index = index.replace(/{{TALKING_DATA_ID}}/g, doc['TALKING_DATA_ID']);
  index = index.replace(/{{CDN_URL}}/g, doc['CDN_URL']);
  index = index.replace(/{{PROJECT_NAME}}/g, doc['PROJECT_NAME']);
  index = index.replace(/{{PROJECT_NAME_CN}}/g, doc['PROJECT_NAME_CN']);
  console.log(chalk.yellow(`...写入入口文件`));
  fs.writeFileSync(indexFile, index, 'utf8');

  let resetCmd = `yes|cp -fr ${tempEnvFile}App.js ${destPath}`;
  spawn.exec(resetCmd);

  let delCmd = `rm -rf ${tempEnvFile}`;
  spawn.exec(delCmd);

  // 写树形菜单
  console.log(chalk.yellow(`...编辑左侧树形菜单\n`));
  let treeNode = fs.readFileSync(resource, 'utf8');
  let treeNodeYaml = yamlParser.safeLoad(treeNode);
  let file = templateTreeNodes(treeNodeYaml);
  fs.writeFileSync(resourceSavePath, file, 'utf8');

  console.log(chalk.blue(`complete!`));

  process.exit(0);
}

function templateTreeNodes (treeNodes) {
  let file = 'export const treeNodes = [\n' +
    '{content}\n' + '];';

  let content = '';
  for (let i = 0; i < treeNodes.length; i++) {
    let leaf = templateLeaf(treeNodes[i], 1);
    if (i !== treeNodes.length - 1) {
      leaf += ',\n'
    }
    content += leaf;
  }

  file = file.replace(/{content}/g, content);
  return file + '\n';
}

function templateLeaf (leaf, deep = 1) {
  let children = leaf.children;
  let leafTpl = '';
  let tab = '';
  for (let i = 0; i < deep - 1; i++) {
    tab += '  ';
  }
  for (let i = 0; i < deep; i++) {
    tab += '  ';
  }
  if (children) {
    leafTpl = `${tab}{\n` +
      `${tab}  name: \'{name}\',\n` +
      `${tab}  key: \'{key}\',\n` +
      `${tab}  actionType: \'{actionType}\',\n` +
      `${tab}  icon: \'{icon}\',\n` +
      `${tab}  children: [` + '\n{children}' +
      `${tab}  ],\n` +
      `${tab}  permission: [{permission}]\n` +
      `${tab}}`;
  } else {
    leafTpl = `${tab}{\n` +
      `${tab}  name: \'{name}\',\n` +
      `${tab}  key: \'{key}\',\n` +
      `${tab}  actionType: \'{actionType}\',\n` +
      `${tab}  icon: \'{icon}\',\n` +
      `${tab}  permission: [{permission}]\n` +
      `${tab}}`;
  }

  let permissions = leaf.permission || [];
  let permissionLength = permissions.length;
  let pStr = '';
  for (let i = 0; i < permissionLength; i++) {
    pStr += permissions[i];
    if (i < permissionLength - 1) {
      pStr += ', ';
    }
  }

  leafTpl = leafTpl.replace(/{name}/g, leaf.name);
  leafTpl = leafTpl.replace(/{key}/g, leaf.key);
  leafTpl = leafTpl.replace(/{actionType}/g, leaf.actionType);
  leafTpl = leafTpl.replace(/{icon}/g, leaf.icon || '');
  leafTpl = leafTpl.replace(/{permission}/g, pStr);

  if (children) {
    let childrenTpl = '';
    for (let i = 0; i < children.length; i++) {
      let tpl = templateLeaf(children[i], deep + 1);
      if (i !== children.length - 1) {
        tpl += ','
      }
      tpl += '\n';
      childrenTpl += tpl;
    }

    leafTpl = leafTpl.replace(/{children}/g, childrenTpl);
  }

  return leafTpl;
}

run();
