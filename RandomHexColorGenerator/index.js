let hex = document.getElementById("hex");
let copyToClipboardHex = document.getElementById("copyToClipboardHex");
let copyToClipboardRGB = document.getElementById("copyToClipboardRGB");

let colorRGB = document.getElementById("colorRGB");

let red = document.getElementById("red");
let green = document.getElementById("green");
let blue = document.getElementById("blue");
let hexColor = "";
let rgbColor = "";

let rgbContainer = document.getElementById("rgbContainer");
let hexContainer = document.getElementById("hexContainer");

copyToClipboardHex.addEventListener("click", function () {
  navigator.clipboard.writeText(hexColor);
  alert("Copied Successfully");
});

copyToClipboardRGB.addEventListener("click", function () {
  navigator.clipboard.writeText(rgbColor);
  alert("Copied Successfully");
});
colorRGB.addEventListener("click", function () {
  let r = red.value;
  let g = green.value;
  let b = blue.value;
  //   console.log(r, b, g);

  rgbContainer.style.backgroundColor = `rgb(${r},${g},${b})`;
  rgbColor = "background-color:" + `rgb(${r},${g},${b})`;
  //   console.log(rgbColor);
});

hex.addEventListener("click", function () {
  let color = "#";
  let letters = "0123456789ABCDEF";
  for (let index = 0; index < 6; index++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  //   console.log(color);
  hexContainer.style.backgroundColor = color;
  hexColor = "background-color:" + color;
});
