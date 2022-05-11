function shiftCyclically(s) {
    let out = "";
    for (let ch of s) {
        const code = ch.charCodeAt();
        const nCh =  String.fromCharCode(code + 1);
        if (nCh === "{") {
            out += "a"; 
        } else if (nCh === "[") {
            out += "A";
        } else if (nCh === ":") {
            out += "0";
        } else {
            out += nCh;
        }
    }
    return out;
}

console.log(shiftCyclically("aBc"));
console.log(shiftCyclically("xyz"));
console.log(shiftCyclically("aK89"));