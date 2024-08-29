let red = 0;
let green = 0;
let blue = 0;




function increaseRed() {
    red += 10;
    if(red > 255)
        red = 255;
    updateRGB();
}
function decreaseRed() {
    red -= 10;
    if(red < 0) 
        red = 0;
    updateRGB();
}

function increaseGreen() {
    green += 10;
    if(green > 255) 
        green = 255;
    updateRGB();
}
function decreaseGreen() {
    green -= 10;
    if(green < 0) 
        green = 0;
    updateRGB();
}

function increaseBlue() {
    blue += 10;
    if(blue > 255) 
        blue = 255;
    updateRGB();
}
function decreaseBlue() {
    blue -= 10;
    if(blue < 0) 
        blue = 0;
    updateRGB();
}

function updateRGB() {
    document.getElementById("pantalla").innerHTML = `RGB (${red}, ${green}, ${blue})`;
    
    // Cambiar el fondo de la página
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; 
}

document.getElementById("red-incremento").addEventListener("click", increaseRed);
document.getElementById("red-descenso").addEventListener("click", decreaseRed);
document.getElementById("green-incremento").addEventListener("click", increaseGreen);
document.getElementById("green-descenso").addEventListener("click", decreaseGreen);
document.getElementById("blue-incremento").addEventListener("click", increaseBlue);
document.getElementById("blue-descenso").addEventListener("click", decreaseBlue);