const caesar = require('../src/caesar');
const { pipeline } = require('stream');
const fs = require('fs');
const args = require('minimist')(process.argv.slice(2));
const actionArgs = new Set(['encode','decode'])

if (!Number.isInteger(args['shift']) && !Number.isInteger(args['s'])){
    console.error('Invalid shift argument')
    process.exit(9)
}
if (!actionArgs.has(args['action']) && !actionArgs.has(args['a'])) {
    console.error('Invalid action argument')
    process.exit(9)
}

const fi = args['input'] || args['i'];
const fo = args['output'] || args['o'];
let stdin = fi? fs.createReadStream(fi): process.stdin;
let stdout = fo? fs.createWriteStream(fo, {flags: 'a'}): process.stdout;

pipeline(
    stdin,
    stdout,
    (err) => {
        if (err) {
            console.error('Can not read or write data', err);
            process.exit(9);
        } else {
        }
    }
);

