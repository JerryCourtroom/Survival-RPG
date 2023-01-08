window.addEventListener("load", main);

var heading;

function main() {
    heading = document.getElementById("heading");
}

var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
heading.style.left = 0.5 * screenWidth - 0.5 * heading.style.width;
