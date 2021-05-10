const caesar = (str, amount) => {
    if (amount < 0)
        return caesar(str, amount + 26);
    return [...str].reduce((out,code)=>{
            if (code >= 65 && code <= 90)
                return out + String.fromCharCode(((code - 65 + amount) % 26) + 65);
            else if (code >= 97 && code <= 122)
                return out + String.fromCharCode(((code - 97 + amount) % 26) + 97);
        return out + String.fromCharCode(code);
    },'')
}
module.exports = caesar;

