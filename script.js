let lives = 3;
let message = "Game started!";
let width = 5;
let height = 5;
let area = width * height; // operation for finding the area
let x = 50;
let y = 50;
const rectWidth = 50;
const rectHeight = 50;
let rectColor = "green";


let enemyX = 300; // Enemy starting X position
let enemyY = 150; // Enemy starting Y position
const enemyWidth = 50;
const enemyHeight = 50;


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
    
    // Background
    ctx.fillStyle = "lightgray";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Player rectangle
    ctx.fillStyle = rectColor;
    ctx.fillRect(x, y, rectWidth, rectHeight);

    // Enemy rectangle
    ctx.fillStyle = "red";
    ctx.fillRect(enemyX, enemyY, enemyWidth, enemyHeight);

    // Display lives
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Lives: " + lives, 10, 20);
}

// Collision detection
function checkCollision() {
    if (
        x < enemyX + enemyWidth &&
        x + rectWidth > enemyX &&
        y < enemyY + enemyHeight &&
        y + rectHeight > enemyY
    ) {
        lives--; // Lose a life
        resetPlayer(); // Reset player position
        console.log("Collision! Lives left: " + lives);

        if (lives <= 0) {
            alert("Game Over!");
            resetGame();
        }
    }
}

// Reset player position
function resetPlayer() {
    x = 50;
    y = 50;
}

// Reset game
function resetGame() {
    lives = 3;
    resetPlayer();
}


function wrapPlayer() {
    // Right wall
    if (x > canvas.width) {
        x = 0;
    }
    // Left wall
    else if (x + rectWidth < 0) {
        x = canvas.width - rectWidth;
    }
    // Bottom wall
    if (y > canvas.height) {
        y = 0;
    }
    // Top wall
    else if (y + rectHeight < 0) {
        y = canvas.height - rectHeight;
    }
}



// Game loop
function gameLoop() {
    drawRectangle();
    checkCollision();
    wrapPlayer()
    requestAnimationFrame(gameLoop);
}

gameLoop();

//created a keydown event listener
document.addEventListener("keydown", function(event){
    if (event.key === " ") {
        // Change the fill color
        rectColor = "purple"; // Or any other color
      }
    if (event.key === "ArrowLeft" || event.key === "a" ) {
       //Move the shape to the left
       x += 10; 
    } else if (event.key === "ArrowRight" || event.key === "d" ){
        //Move the shape to the Right
        x -= 10;
    } 
    if (event.key === "ArrowUp" || event.key === "w" ){
        //Move the shape to the Up
        y -= 10;
    } else if (event.key === "ArrowDown" || event.key === "s" ){
        //Move the shape to the Down
        y += 10;
    }
    
   
    // Code to execute when a key is pressed
    console.log("Key pressed: " + event.key); ////event.key gives the pressed key

});
