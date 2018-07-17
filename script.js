//Select all the items

var css = document.querySelector("h3");

var color1 = document.querySelector(".color1");//interacts with color1 using querySelector
var color2 = document.querySelector(".color2");//interacts with color2 using querySelector
var body = document.getElementById("gradient");

//set gradient function
function setGradient(){
    //styles the background based on event listener
    body.style.background = "linear-gradient(to right, "+ color1.value+ ", "+ color2.value + ")";
    
    //write CSS on html page
    css.textContent = body.style.background + ";";
}

//
//Event listeners click, mouseevent, keypress, input
//Event listeners for color1 & color 2 inputs
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
   