const button = document.querySelector(".btn-alert");
const button2 = document.querySelector(".btn-change");

const buttonAlert = function () {
    alert("button clicked")
    
}
const changeColor = function () {
    document.getElementById("classBG").classList.toggle("red-background");
}
button.addEventListener("click", buttonAlert);
button2.addEventListener("click", changeColor);