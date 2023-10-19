console.log("index.js loaded...");

const game = new Game();
const ball = new Ball();
const racket = new Racket();

let requestId;
let frames = 0;

const startButton = document.querySelector("#start");
const restartButton = document.querySelector("#restart");
const gameOverTitle = document.querySelector("#game-over");
const scoreElement = document.querySelector("#score-value");
const container = document.querySelector("#container");
document.addEventListener("keydown", moveRacket);
// Add an event listener to listen for mousemove events
container.addEventListener("mousemove", (event) => {
    racket.moveRacket(event);
});


startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", restartGame);

function moveRacket(event) {
    if (!game.started) {
        return;
    }
    racket.moveRacket(event);
}

function gameLoop() {
    frames++;
    updateScore();
    ball.moveBall();
    ball.checkCollision(racket);

    if (ball.checkGameOver()) {
        endGame();
        return;
    }

    requestId = requestAnimationFrame(gameLoop);
}

function updateScore() {
    if (frames % 50 === 0) {
        game.score++;
    }
    scoreElement.innerText = game.score;
}

function startGame() {
    gameLoop();
    game.started = true;
    startButton.classList.add("hidden");
}

function restartGame() {
    game.started = true;
    gameOverTitle.classList.add("hidden");
    resetBall();
    gameLoop();
}

function resetBall() {
    ball.x = 10;
    ball.y = 10;
    ball.directionX = "right";
    ball.directionY = "down";
}

function endGame() {
    game.started = false;
    cancelAnimationFrame(requestId);
    gameOverTitle.classList.remove("hidden");
}
