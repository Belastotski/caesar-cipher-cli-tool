#!/usr/bin/env node

const { pipeline } = require('stream');
const Transform = require('./src/code');
const stopProcess = require('./src/utilites');
const argsConverter = require('./src/argsConverter');
let {shift,action,stdin,stdout} = argsConverter(process.argv)
const transform = new Transform(shift * (action == 'encode'? 1: -1))

pipeline(
    stdin,
    transform,
    stdout,
    err => err && stopProcess(9,'Can not transform data')
);
