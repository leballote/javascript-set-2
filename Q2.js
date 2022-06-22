const r1 =
  /(January|February|March|April|May|June|July|August|September|October|November|December) \d{2}, \d{4}/;

console.group("A. Date Format");
console.log(r1.test("September 29, 1972"));
console.log(r1.test("February 99, 0001"));
console.log(r1.test("September 29, 1972"));
console.groupEnd();

// I use [a-zA-Z] because _ is a word character too
const r2 = /([a-zA-Z]\d+|\d+[a-zA-Z])/;

console.group("B. Letter followed or preceded by a number");
console.log(r2.test("A52"));
console.log(r2.test("d747"));
console.log(r2.test("27X"));
console.log(r2.test("v2"));
console.groupEnd();

const r3 = /[a-zA-Z]+\.(java|cpp|txt)/;

console.group("C. Filename");
console.log(r3.test("test.java"));
console.log(r3.test("program.cpp"));
console.log(r3.test("newReport.txt"));
console.log(r3.test("_.cpp"));
console.groupEnd();

const r4 = /^(.)(.).\2\1/;

console.group("D. 5-palindrome");
console.log(r4.test("abcba"));
console.log(r4.test("12321"));
console.log(r4.test("_1a1_"));
console.groupEnd();

const r5 = /\b([b-yB-Y]+)\b/g;
console.group("E. Words consisting from b to y");
let out = "Bee zapp Crow Eagle Zorro  mouse Ape  you".match(r5);
console.log(out);
console.groupEnd();

const r6 = /<\w+>(.)*?<\/\w+>/g;

out =
  "Is <b>4 < -1/12</b> true? The <b>answer</b> will <em>surprise</em> you.".match(
    r6
  );
console.group("F. All non nested tags");
console.log(out);
console.groupEnd();
