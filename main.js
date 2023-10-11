console.log('Hello world');
console.log('Hello world');
process.stdout.write('Hello world');
process.stdout.write('Hello world');

function write(text) {
    process.stdout.write(text);
}

write('hello world');
write('hello world\n');
write('hello\tworld\n');
write('\x1B[0;30m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;31m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;32m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;33m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;34m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;35m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;36m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;37m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;38m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;39m'); write('Hello world'); write('\x1B[0;0m'); write('\n');

write('\x1B[0;40m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;41m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;42m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;43m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;44m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;45m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;46m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;47m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;48m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;49m'); write('Hello world'); write('\x1B[0;0m'); write('\n');

write('\x1B[2;30m\x1B[2;41m'); write('Hello world2'); write('\x1B[0;0m'); write('\n');

write('\x1B[0;90m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;91m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;92m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;93m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;94m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;95m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;96m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;97m'); write('Hello world'); write('\x1B[0;0m'); write('\n');

write('\x1B[0;100m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;101m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;102m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;103m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;104m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;105m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;106m'); write('Hello world'); write('\x1B[0;0m'); write('\n');
write('\x1B[0;107m'); write('Hello world'); write('\x1B[0;0m'); write('\n');

for(let i=0; i<256; i++){
    write(`\x1B[38;5;${i}m`); write('#'); write('\x1B[0;0m');
}

for(let i=0; i<256; i++){
    write(`\x1B[48;5;${i}m`); write(''); write('\x1B[0;0m');
}

for(let i=0; i<256; i++){
    write(`\x1B[48;2;${i};${i};${i}m`); write(''); write('\x1B[1;0m');
}
