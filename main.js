import chalk from 'chalk';
import boxen from 'boxen';

function write(text) {
    process.stdout.write(text);
}

//for(let i = 0; i<255;i++){
 //   write(chalk.rgb(i,i,i)('#'));
//}
//console.log(chalk.italic('hello world'));
let time = new Date().toLocaleTimeString();

write(time);
setInterval(()=> {
   write('\x1B[?25l'); //turn cursor invisible
   write('\x1B[8D'); // A=up B=down C=right D=left
   time = new Date().toLocaleTimeString();
   write(time);
   write('\x1B[?25h'); //turn cursor visible again
}, 16);
