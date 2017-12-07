/**
 * Auth: lijiang
 * Date: 2017/11/14
 * Description: ParseResource
 */

const csv = require('fast-csv');
const fs = require('fs');
const chalk = require('chalk');
const lodash = require('lodash');
const path = require('path');
const rm = require('rimraf');

const csvResourcePath = '/Users/lijiang/Documents/坚果云/研发中心-中百项目/用户系统/csv相关配置/server/';
const resolvePath = path.resolve();
const savePath = '/src/external/resource/csv/';

let fileCount = 0;

function getFileExt (url) {
  let arr = url.split('.');
  let len = arr.length;
  return arr[len - 1];
}

function generateJsFileName (name) {
  let arr = name.split('.');
  let prefix = arr[0];
  return prefix.split('-')[1] + '.js';
}

function complete () {
  fileCount--;
  if (fileCount === 0) {
    console.log(chalk.blue(`transform complete!`));
  }

  return fileCount === 0;
}

function compile (fileName) {
  let path = csvResourcePath + fileName;
  let stream = fs.createReadStream(path);
  let fileContents = [];

  let csvStream = csv
    .parse()
    .on("data", function (data) {
      fileContents.push(data);
    })
    .on("end", function () {
      parseCsv(generateJsFileName(fileName), fileContents);
      console.log(chalk.yellow(`compile file: ${fileName} complete!`));
      complete();
    });
  stream.pipe(csvStream);
}

function makeDataByType (type, data) {
  let ret = data;
  switch (type) {
    case 'int':
      ret = parseInt(data);
      break;
    case 'string':
      data = lodash.trim(data).replace(/\s+/g, '');
      ret = `'${data}'`;
      break;
    case 'array':
      ret = makeArray(data);
      break;
  }

  return ret;
}

function makeArray (arrayData) {
  let data = arrayData.split(',');
  let length = data.length;
  let content = '';
  for (let i = 0; i < length; i++) {
    content += i < length - 1 ? `${data[i]}, ` : `${data[i]}`;
  }
  return `[${content}]`;
}

function makeRow (header, rowData, headerType) {
  let content = '';
  let length = header.length;
  for (let i = 0; i < length; i++) {
    let data = makeDataByType(headerType[i], rowData[i]);
    content += `${header[i]}: ${data}`;
    content += i < length - 1 ? ', ' : '';
  }

  return `  {${content}}`;
}

function parseCsv (jsFile, csvContent) {
  let header = csvContent[0];
  let headerType = csvContent[2];
  let information = lodash.takeRight(csvContent, csvContent.length - 5);

  let js = '';
  let infoLength = information.length;
  for (let i = 0; i < infoLength; i++) {
    let row = makeRow(header, information[i], headerType);
    js += i < infoLength - 1 ? `${row},\n` : `${row}\n`;
  }

  let arrayName = jsFile.split('.')[0];
  let exportName = makeExportName(arrayName);
  let fileInfo = `export const ${exportName} = [\n` + js + `];\n`;
  fs.writeFileSync(resolvePath + savePath + jsFile, fileInfo);
}

function makeExportName (name) {
  return lodash.camelCase(name);
}

function transfer (name) {
  let path = csvResourcePath + name;
  fs.stat(path, function (err, stat) {
    let ext = getFileExt(name);
    if (stat.isFile() && ext === 'csv') {
      compile(name);
    } else {
      complete();
    }
  });
}

function readDir () {
  fs.readdir(csvResourcePath, function (err, files) {
    if (err) {
      return;
    }

    fileCount = files.length;
    files.forEach(function (filename) {
      transfer(filename);
    });
  });
}

function deleteDir (fn) {
  let path = resolvePath + savePath;
  rm(path, function (err) {
    if (err) {
      console.log(chalk.blue(`fail transform: ${err}`));
    } else {
      if (!fs.existsSync(path)) {
        try {
          fs.mkdirSync(path);
        } catch (mkdirErr) {
          console.log(chalk.blue(`fail make dir: ${err}`));
        }
      }
      fn();
    }
  });
}

function run () {
  console.log(chalk.blue(`begin transform: ${csvResourcePath}`));
  deleteDir(function () {
    readDir();
  });
}

run();
