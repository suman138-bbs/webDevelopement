/**
 * document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()

document.querySelector().getAttribute()
document.querySelector().setAttribute()

 */
var input = document.querySelector("input");
var div = document.querySelector("ul");
var button = document.querySelector("button");

button.addEventListener("click", function () {
    if (input) {
    var para = document.createElement("li");
    para.innerText = input.value;
        div.appendChild(para);
        input.value = "";
        
    }
})

input.addEventListener("keypress", function (event) {
    if (input && event.keyCode===13) {
    var para = document.createElement("li");
        para.innerText = input.value;
        div.appendChild(para);
        input.value = "";
        
    }
})
