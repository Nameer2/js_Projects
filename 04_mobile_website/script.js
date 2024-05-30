var circle = document.getElementById("circle")
var upbtn = document.getElementById("up")
var downbtn = document.getElementById("down")

var rotateValue = circle.style.transform
var rotateSum;


upbtn.onclick = function(){
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum
    rotateValue = rotateSum
}
downbtn.onclick = function(){
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum
    rotateValue = rotateSum
}