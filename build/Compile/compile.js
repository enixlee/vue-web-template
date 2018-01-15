const configLoader = require('./loadConfigure');
const rpcGenerator = require('./CompileRpc');
const csvParser = require('./CsvParser');
const chalk = require('chalk');

function run () {
  // 加载配置
  console.log(chalk.magenta(`step 1: load Compile configuration`));
  let config = configLoader.loadConfigure();

  // 解析配置文件
  console.log(chalk.magenta(`step 2: parse CSV configuration`));
  csvParser.parse(config);

  // 编译rpc
  console.log(chalk.magenta(`step 3: compile RPC codeTemplate`));
  rpcGenerator.compile(config);
}

run();
