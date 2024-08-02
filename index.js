// get parameters from command line
const args = process.argv.slice(2);
let command = args[1];
let subfunction = '';
if(command.charAt(':')>-1){
    command = command.split(':') ;
    subfunction = command[1];
    command = command[0];
}

const params = args.slice(1).map(p=> Number(p) || p);
console.log("Executing command: ", command, subfunction, params);
try {
    command = (await import('./' + command)) ;
    if(subfunction){
        subfunction = command[subfunction];
    }
    else {
        subfunction = command.default;
    }
    subfunction(...params);
} catch (err) {
    console.error(err);
}

