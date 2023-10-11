import chalk from 'chalk';
import boxen from 'boxen';

function write(text) {
    process.stdout.write(text);
}

console.log(chalk.bgGreen.magenta('Hello world'));
console.log(chalk.bgGreen.magenta.underline('Hello world'));
console.log(chalk.italic('Hello world'));
console.log(chalk.strikethrough('Hello world'));
console.log(chalk.inverse('Hello world'));

console.log(boxen(chalk.bgGreen.magenta('Hello world'), {borderStyle:'round'}));