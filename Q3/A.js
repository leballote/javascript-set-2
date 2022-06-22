function shiftCyclicallyLetter(ch) {
  const code = ch.charCodeAt();
  const nCh = String.fromCharCode(code + 1);
  if (nCh === "{") return "a";
  if (nCh === "[") return "A";
  if (nCh === ":") return "0";
  return nCh;
}

function shiftCyclically(s) {
  return s.replaceAll(/[a-zA-Z0-9]/g, shiftCyclicallyLetter);
}

console.log(shiftCyclically("aBc"));
console.log(shiftCyclically("xyz"));
console.log(shiftCyclically("aK89"));
