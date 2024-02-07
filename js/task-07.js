const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");

function updateFontSize() {
  const newSize = fontSizeControl.value + "px";
  text.style.fontSize = newSize;
}
fontSizeControl.addEventListener("input", updateFontSize);

