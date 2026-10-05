// ----------------------------
// GET ELEMENTS FROM THE PAGE
// ----------------------------

const bunny = document.getElementById("bunny");
const flower = document.getElementById("flower");
const bee = document.getElementById("bee");

const scoreText = document.getElementById("score");
const livesText = document.getElementById("lives");
const timerText = document.getElementById("timer");

const startButton = document.getElementById("startButton");

const gameOverScreen = document.getElementById("gameOver");

const finalScoreText = document.getElementById("finalScore");
const finalMessage = document.getElementById("finalMessage");

const playAgainButton =
    document.getElementById("playAgainButton");

const hitMessage =
    document.getElementById("hitMessage");


// ----------------------------
// GAME VARIABLES
// ----------------------------

let bunnyX = 325;
let bunnyY = 200;

let beeX = 500;
let beeY = 200;

let score = 0;

let lives = 3;

let timeLeft = 45;

let gameRunning = false;

let canGetHit = true;

const bunnySpeed = 20;


// ----------------------------
// FLOWERS
// ----------------------------

// Each flower has an emoji and point value

const flowers = [

    {
        emoji: "🌸",
        points: 1
    },

    {
        emoji: "🌷",
        points: 2
    },

    {
        emoji: "🌻",
        points: 3
    }

];


// Stores the point value of the
// flower currently on the screen

let currentFlowerPoints = 1;


// ----------------------------
// TIMER VARIABLES
// ----------------------------

let gameTimer;

let beeTimer;


// ----------------------------
// START GAME
// ----------------------------

function startGame() {

    // Reset game values

    score = 0;

    lives = 3;

    timeLeft = 45;

    bunnyX = 325;
    bunnyY = 200;

    beeX = 500;
    beeY = 200;

    gameRunning = true;

    canGetHit = true;


    // Update text

    scoreText.textContent = score;

    livesText.textContent = lives;

    timerText.textContent = timeLeft;


    // Reset Bunny position

    bunny.style.left = bunnyX + "px";

    bunny.style.top = bunnyY + "px";


    // Reset Bee position

    bee.style.left = beeX + "px";

    bee.style.top = beeY + "px";


    // Hide screens/messages

    startButton.classList.add("hidden");

    gameOverScreen.classList.add("hidden");

    hitMessage.classList.add("hidden");


    // Place first flower

    moveFlower();


    // Start timers

    startTimer();

    startBee();

}


// ----------------------------
// MOVE BUNNY
// ----------------------------

document.addEventListener("keydown", function(event) {

    if (!gameRunning) {
        return;
    }


    // LEFT

    if (
        event.key === "ArrowLeft" ||
        event.key.toLowerCase() === "a"
    ) {

        bunnyX -= bunnySpeed;

    }


    // RIGHT

    if (
        event.key === "ArrowRight" ||
        event.key.toLowerCase() === "d"
    ) {

        bunnyX += bunnySpeed;

    }


    // UP

    if (
        event.key === "ArrowUp" ||
        event.key.toLowerCase() === "w"
    ) {

        bunnyY -= bunnySpeed;

    }


    // DOWN

    if (
        event.key === "ArrowDown" ||
        event.key.toLowerCase() === "s"
    ) {

        bunnyY += bunnySpeed;

    }


    // ----------------------------
    // KEEP BUNNY INSIDE GARDEN
    // ----------------------------

    if (bunnyX < 0) {

        bunnyX = 0;

    }


    if (bunnyX > 645) {

        bunnyX = 645;

    }


    if (bunnyY < 0) {

        bunnyY = 0;

    }


    if (bunnyY > 395) {

        bunnyY = 395;

    }


    // Update Bunny position

    bunny.style.left = bunnyX + "px";

    bunny.style.top = bunnyY + "px";


    // Check collisions

    checkFlowerCollision();

    checkBeeCollision();

});


// ----------------------------
// FLOWER COLLISION
// ----------------------------

function checkFlowerCollision() {

    const bunnyBox =
        bunny.getBoundingClientRect();

    const flowerBox =
        flower.getBoundingClientRect();


    const touching =

        bunnyBox.left < flowerBox.right &&

        bunnyBox.right > flowerBox.left &&

        bunnyBox.top < flowerBox.bottom &&

        bunnyBox.bottom > flowerBox.top;


    if (touching) {

        // Add the flower's points

        score += currentFlowerPoints;


        // Update score

        scoreText.textContent = score;


        // Move to another flower

        moveFlower();

    }

}


// ----------------------------
// RANDOM FLOWER
// ----------------------------

function moveFlower() {

    // Random location

    const randomX =
        Math.floor(Math.random() * 640);

    const randomY =
        Math.floor(Math.random() * 390);


    flower.style.left =
        randomX + "px";

    flower.style.top =
        randomY + "px";


    // Random flower

    const randomIndex =
        Math.floor(
            Math.random() * flowers.length
        );


    const chosenFlower =
        flowers[randomIndex];


    // Change emoji

    flower.textContent =
        chosenFlower.emoji;


    // Remember how many points
    // this flower is worth

    currentFlowerPoints =
        chosenFlower.points;

}


// ----------------------------
// MOVE BEE
// ----------------------------

function startBee() {

    clearInterval(beeTimer);


    beeTimer = setInterval(function() {

        if (!gameRunning) {
            return;
        }


        // Find direction from bee to bunny

        const differenceX =
            bunnyX - beeX;

        const differenceY =
            bunnyY - beeY;


        // Move bee toward Bunny

        if (differenceX > 0) {

            beeX += 8;

        }

        else if (differenceX < 0) {

            beeX -= 8;

        }


        if (differenceY > 0) {

            beeY += 8;

        }

        else if (differenceY < 0) {

            beeY -= 8;

        }


        // Update Bee position

        bee.style.left =
            beeX + "px";

        bee.style.top =
            beeY + "px";


        // Check collision

        checkBeeCollision();


    }, 100);

}


// ----------------------------
// BEE COLLISION
// ----------------------------

function checkBeeCollision() {

    if (!canGetHit) {
        return;
    }


    const bunnyBox =
        bunny.getBoundingClientRect();

    const beeBox =
        bee.getBoundingClientRect();


    const touching =

        bunnyBox.left < beeBox.right &&

        bunnyBox.right > beeBox.left &&

        bunnyBox.top < beeBox.bottom &&

        bunnyBox.bottom > beeBox.top;


    if (touching) {

        loseLife();

    }

}


// ----------------------------
// LOSE LIFE
// ----------------------------

function loseLife() {

    lives--;

    livesText.textContent = lives;


    // Prevent losing all lives instantly
    // while Bunny is touching the bee

    canGetHit = false;


    // Show OUCH message

    hitMessage.classList.remove("hidden");


    // Make Bunny flash

    bunny.classList.add("hit");


    // Move Bee away from Bunny

    beeX = Math.floor(
        Math.random() * 600
    );

    beeY = Math.floor(
        Math.random() * 350
    );


    bee.style.left =
        beeX + "px";

    bee.style.top =
        beeY + "px";


    // Hide hit effect after 1 second

    setTimeout(function() {

        hitMessage.classList.add("hidden");

        bunny.classList.remove("hit");

        canGetHit = true;

    }, 1000);


    // No lives left

    if (lives <= 0) {

        endGame();

    }

}


// ----------------------------
// TIMER
// ----------------------------

function startTimer() {

    clearInterval(gameTimer);


    gameTimer = setInterval(function() {

        timeLeft--;

        timerText.textContent =
            timeLeft;


        if (timeLeft <= 0) {

            endGame();

        }

    }, 1000);

}


// ----------------------------
// END GAME
// ----------------------------

function endGame() {

    gameRunning = false;


    // Stop timers

    clearInterval(gameTimer);

    clearInterval(beeTimer);


    // Final score

    finalScoreText.textContent =
        score;


    // Different message depending
    // on the player's score

    if (score >= 30) {

        finalMessage.textContent =
            "Amazing! You're a garden expert! 🌻";

    }

    else if (score >= 15) {

        finalMessage.textContent =
            "Great job! Your garden is blooming! 🌷";

    }

    else {

        finalMessage.textContent =
            "Nice try! Keep growing your garden! 🌱";

    }


    // Show Game Over screen

    gameOverScreen.classList.remove(
        "hidden"
    );

}


// ----------------------------
// BUTTONS
// ----------------------------

startButton.addEventListener(
    "click",
    startGame
);


playAgainButton.addEventListener(
    "click",
    startGame
);
