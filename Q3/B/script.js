const toChange = document.getElementById("to-change");
const changeIn = document.getElementById("change-in");
const changeBtn = document.getElementById("change-btn");
let originalText = toChange.innerText;

changeBtn.addEventListener("click", () => {
  const s = changeIn.value;
  replaceTextFromTheDom(toChange, s);
});

changeIn.addEventListener("keypress", (evt) => {
  if (evt.key === "Enter") {
    changeBtn.click();
  }
});

function getChangedClass(s) {
  return "_changed_" + s.replaceAll(/\s/g, "_");
}

function replaceString(s, text) {
  const cl = getChangedClass(s);
  const replacement = `<a href="https://twitter.com/search?q=%23${s}" class="${cl}">#${s}</a>`;
  return text.replaceAll(s, replacement);
}

function replaceTextFromTheDom(el, s) {
  //only replaces it if it haven't been replaced
  toChange.innerText = originalText;
  classToChange = getChangedClass(s);
  if (s && !el.querySelector(`.${classToChange}`)) {
    el.innerHTML = replaceString(s, el.innerHTML);
  }
}
