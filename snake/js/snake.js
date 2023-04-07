let snakeCanvas, screen;
const FPS = 10;
const tilesCount = 20;
let playPositionX = 10, playPositionY = 10;
let applePosX = 15, applePositionY = 15;
let xVel = 0, yVel = 0;
let snakeBoxes = [];
let tailLength = 4;
let score = 0;

window.onload = function () {
    snakeCanvas = document.getElementById('snakeCanvas');

    screen = snakeCanvas.getContext('2d');

    document.addEventListener('keyup', onKeyUp);
    
    setInterval(() => {
        gameLoop();
    }, 1000 / FPS);
}

function gameLoop() {
// for when player goes beyond boundaries, starts on other side of box
    playPositionX += xVel;
    playPositionY += yVel;

    if(playPositionX < 0) {   
        playPositionX = tilesCount - 1;
    }
    if(playPositionX > tilesCount - 1) {       
        playPositionX = 0;
    }
    if(playPositionY < 0) {        
        playPositionY = tilesCount - 1;
    }
    if(playPositionY > tilesCount - 1) {       
        playPositionY = 0;
    }

    //black game screen background
    screen.fillStyle = '#000';
    screen.fillRect(0, 0, snakeCanvas.width, snakeCanvas.height);

    // snake
    screen.fillStyle = 'green';

    // add all the snake body boxes on the screen
    for(let i = 0 ; i < snakeBoxes.length; i++) {
        screen.fillRect(snakeBoxes[i].x * tilesCount, snakeBoxes[i].y * tilesCount ,tilesCount - 2, tilesCount - 2);

        // check if snake collides with itself
        if(snakeBoxes[i].x === playPositionX && snakeBoxes[i].y === playPositionY) {
            tailLength = 4;   // reset the tail length

            //  reset coordinates to the game start
            playPositionX = 10;
            playPositionY = 10;
            xVel = 0;
            yVel = 0;

            score = 0;
        }
    }
    
    // creates a snake body and 
    snakeBoxes.push({ x: playPositionX, y: playPositionY });

    while(snakeBoxes.length > tailLength) {
        snakeBoxes.shift();     
    }

    // showing apple
    screen.fillStyle = "red";
    screen.fillRect(applePosX * tilesCount, applePositionY * tilesCount, tilesCount - 2, tilesCount - 2);

    
    // if the snake eats an apple
    if (playPositionX === applePosX && playPositionY === applePositionY) {
        tailLength++;    //add to the snakes tail
        applePosX = Math.floor(Math.random() * tilesCount); //setting new apple position
        applePositionY = Math.floor(Math.random() * tilesCount);
        score++;//add to score
    }

    screen.font="15px CourierNew";
    screen.strokeStyle = 'green';
    screen.strokeText(`Score: ${score}`, 10, 20);

}

function onKeyUp(event) {
    switch(event.keyCode) {
        case 37:    // left
            xVel = -1;      // go left
            yVel = 0;      // no Y needed
            break;
        case 38:    // up
            yVel = -1;     // go up
            xVel = 0;      // no X needed
            break;
        case 39:    // right
            xVel = 1;      // go right
            yVel = 0;      // no Y needed
            break;
        case 40:    // down
            yVel = 1;      // go down
            xVel = 0;      // no X needed
            break;
    }
}