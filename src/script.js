await customElements.whenDefined("math-field");
const mf = document.getElementById("formula");
let latex = (localStorage.getItem("latex"))
if (!latex || latex == "") {
    latex = 'x=\\frac{-b\\pm \\sqrt{b^2-4ac}}{2a}'
}
mf.setValue(latex)
function onMathfieldInput() {
    localStorage.setItem("latex", mf.value);
}
mf.addEventListener("input", onMathfieldInput);
