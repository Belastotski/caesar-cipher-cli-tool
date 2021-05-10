const fs = require('fs');
const minimist = require('minimist');
const stopProcess = require('../src/utilites');

module.exports = argv => {
    let errorMessage = [];
    let rawArguments = argv.slice(2);
    let args = minimist(rawArguments, {
        alias: {
            s: 'shift',
            a: 'action',
            o: 'output',
            i: 'input'
        }
    });
    const actionArgs = new Set(['encode', 'decode'])
    let shift = args['shift']
    const action = args['action']
    if (shift === true && Object.keys(args).filter(v => Number.isInteger(+v)).length)
        shift = Object.keys(args).filter(v => Number.isInteger(+v))[0] * -1
    !Number.isInteger(shift) && errorMessage.push('Invalid shift argumentn')
    !actionArgs.has(action) && errorMessage.push('Invalid action argument')
    const fi = args['input'];
    const fo = args['output'];
    let stdin = process.stdin;
    if (fi) {
        try {
            if (fs.existsSync(fi)) {
                stdin = fs.createReadStream(fi)
            } else errorMessage.push('Invalid input file');
        } catch (err) {
            errorMessage.push('Invalid input file')
        }
    }
    let stdout = process.stdout;
    if (fo) {
        try {
            if (fs.existsSync(fo)) {
                stdout = fs.createWriteStream(fo, {flags: 'a'})
            } else errorMessage.push('Invalid output file');
        } catch (err) {
            errorMessage.push('Invalid output file')
        }
    }

    errorMessage.length && stopProcess(9,...errorMessage)
    return {shift,action,stdin,stdout}
}
