export const caesar = (str, amount) => {
    if (amount < 0)
        return caesar(str, amount + 26);
    return [...str].reduce((out,ch)=>{
        if (ch.match(/[a-z]/i)) {
            const code = ch.charCodeAt(0);
            if (code >= 65 && code <= 90)
                return out += String.fromCharCode(((code - 65 + amount) % 26) + 65);
            else if (code >= 97 && code <= 122)
                return out += String.fromCharCode(((code - 97 + amount) % 26) + 97);
        }
        return out += ch
    },'')
}

// console.log(caesar('This is secret. Message about "_123" symbol',-1));
// console.log(caesar('Sghr hr rdbqds. Ldrrzfd zants "_123" rxlank',1));
