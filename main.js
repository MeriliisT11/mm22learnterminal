import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv))
  .option('value1', {
    alias: 'v1',
    describe: 'First operand',
    demandOption: true,
    type: 'number',
  })
  .option('value2', {
    alias: 'v2',
    describe: 'Second operand',
    demandOption: true,
    type: 'number',
  })
  .option('sign', {
    alias: 's',
    describe: 'Math operation: +, -, *, /',
    demandOption: true,
    choices: ['+', '-', '*', '/'],
  })
  .help()
  .argv;

const { value1, value2, sign } = argv;

function performOperation(value1, value2, sign) {
  switch (sign) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      throw new Error('Invalid sign');
  }
}

try {
  const result = performOperation(value1, value2, sign);
  console.log(`${value1} ${sign} ${value2} = ${result}`);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
