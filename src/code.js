const { Transform } = require('stream');
const caesar = require('../src/caesar');

class Code extends Transform {
    constructor(amount){
        super();
        this.amount = amount || 0;
    }
    _transform(chunk, encoding, callback) {
        try {
            const resultString = caesar(chunk,this.amount);
            callback(null, resultString);
        } catch (err) {
            callback(err);
        }
    }
}

module.exports =  Code
