let lives = 3;
let message = "Game started!";
let width = 5;
let height = 5;
let area = width * height; // operation for finding the area
let x = 0;
let y = 50;
const rectWidth = 50;
const rectHeight = 50;

//get the canvas element
const canvas = document.getElementById("gameCanvas");

//get the 2D drawing context
const ctx = canvas.getContext("2d");

// // Set the background color to light gray
// ctx.fillStyle = "lightgray";
// // Fill the entire canvas with the background color
// ctx.fillRect(0, 0, canvas.width, canvas.height);

// //drawing a  rectangle
// ctx.fillStyle = "green";
// ctx.lineWidth = 3
// ctx.fillRect(100, 50, 80, 60);

function drawRectangle() {
    
    //clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Update the x-coordinate
    x++;

    ctx.fillStyle = "lightgray";
    // Fill the entire canvas with the background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //drawing a rectangle
    ctx.fillStyle = "green";
    ctx.lineWidth = 3
    ctx.fillRect(x, y, rectWidth, rectHeight);
}

setInterval(drawRectangle, 1000);
