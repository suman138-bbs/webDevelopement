var css = document.querySelector(".colorValue");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
console.log(body)
color1.addEventListener("input", function () {
    body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
})
color2.addEventListener("input", function () {
   body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
})
