function createPlaindromRegex(n=1) {
    let out = "^";
    const half = parseInt(n/2);
    for (let i = 0; i < half; i++) {
        out += "(\\S)";
    }
    out += "(\\S)?";
    for (let i = half; i >= 1; i--) {
        out += "\\" + i;
    }
    out += "$"
    return new RegExp(out);
}

// I know this is not efficient, but I found out from StackOverflow that general palindromes cannot be expressed as regular expressions, so this seemed th most intuitive way for me to do it, then.
function matchAllPalindromes(text) {
    const out = [];
    // I don't know if splitting like this is correct, or just using split, but since this seems to be about regex I did it this way
    for (let word of text.match(/\b\w+\b/g)) {
        const reg = createPlaindromRegex(word.length);
        console.log(reg);
        console.log(word);
        if (reg.test(word)) out.push(word);
    }
    return out;
}

const text = "hey how aabaa abcba are you doing aa bfffcbcfffb";
console.log(matchAllPalindromes(text));