const { pipeline } = require('stream');
const Transform = require('./src/code');
const fs = require('fs');
const minimist = require('minimist');
let rawArguments=process.argv.slice(2);
let args = minimist(rawArguments, {
    alias: {
        s: 'shift',
        a: 'action',
        o: 'output',
        i: 'input'
    }
});
const actionArgs = new Set(['encode','decode'])
const shift = args['shift']
const action = args['action']
const stopProcess = (code, ...messages) => {
    console.error(...messages);
    process.exit(code)
}

!Number.isInteger(shift) && stopProcess(9,'Invalid shift argument')
!actionArgs.has(action) && stopProcess(9, 'Invalid action argument')
const fi = args['input'];
const fo = args['output'];
let stdin = fi? fs.createReadStream(fi): process.stdin;
let stdout = fo? fs.createWriteStream(fo, {flags: 'a'}): process.stdout;
let transform = new Transform(shift * (action == 'encode'? 1: -1))

pipeline(
    stdin,
    transform,
    stdout,
    (err) => {
        if (err) {
            console.error('Can not read or write data', err);
            process.exit(9);
        } else {
        }
    }
);

