// ----------------------------
// GET ELEMENTS FROM THE PAGE
// ----------------------------

const bunny =
    document.getElementById("bunny");

const flower =
    document.getElementById("flower");

const bee =
    document.getElementById("bee");

const butterfly =
    document.getElementById("butterfly");


const scoreText =
    document.getElementById("score");

const livesText =
    document.getElementById("lives");

const timerText =
    document.getElementById("timer");


const startButton =
    document.getElementById("startButton");

const gameOverScreen =
    document.getElementById("gameOver");

const finalScoreText =
    document.getElementById("finalScore");

const finalMessage =
    document.getElementById("finalMessage");

const playAgainButton =
    document.getElementById("playAgainButton");

const hitMessage =
    document.getElementById("hitMessage");

const boostMessage =
    document.getElementById("boostMessage");


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


// Bunny speed MUST use "let"
// because the butterfly changes it.

let bunnySpeed = 20;


// ----------------------------
// FLOWERS
// ----------------------------

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


let currentFlowerPoints = 1;


// ----------------------------
// TIMER VARIABLES
// ----------------------------

let gameTimer;

let beeTimer;

let butterflyTimer;

let boostTimer;


// ----------------------------
// START GAME
// ----------------------------

function startGame() {

    // Stop old timers just in case

    clearInterval(gameTimer);

    clearInterval(beeTimer);

    clearInterval(butterflyTimer);

    clearTimeout(boostTimer);


    // Reset values

    score = 0;

    lives = 3;

    timeLeft = 45;

    bunnySpeed = 20;

    bunnyX = 325;
    bunnyY = 200;

    beeX = 500;
    beeY = 200;

    gameRunning = true;

    canGetHit = true;


    // Update screen

    scoreText.textContent = score;

    livesText.textContent = lives;

    timerText.textContent = timeLeft;


    // Reset Bunny

    bunny.style.left =
        bunnyX + "px";

    bunny.style.top =
        bunnyY + "px";


    // Reset Bee

    bee.style.left =
        beeX + "px";

    bee.style.top =
        beeY + "px";


    // Hide messages

    startButton.classList.add(
        "hidden"
    );

    gameOverScreen.classList.add(
        "hidden"
    );

    hitMessage.classList.add(
        "hidden"
    );

    boostMessage.classList.add(
        "hidden"
    );

    butterfly.classList.add(
        "hidden"
    );


    // Place first flower

    moveFlower();


    // Start game systems

    startTimer();

    startBee();

    startButterflies();

}


// ----------------------------
// MOVE BUNNY
// ----------------------------

document.addEventListener(
    "keydown",
    function(event) {

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

        bunny.style.left =
            bunnyX + "px";

        bunny.style.top =
            bunnyY + "px";


        // Check collisions

        checkFlowerCollision();

        checkBeeCollision();

        checkButterflyCollision();

    }
);


// ----------------------------
// FLOWER COLLISION
// ----------------------------

function checkFlowerCollision() {

    const bunnyBox =
        bunny.getBoundingClientRect();

    const flowerBox =
        flower.getBoundingClientRect();


    const touching =

        bunnyBox.left <
        flowerBox.right &&

        bunnyBox.right >
        flowerBox.left &&

        bunnyBox.top <
        flowerBox.bottom &&

        bunnyBox.bottom >
        flowerBox.top;


    if (touching) {

        // Add flower points

        score +=
            currentFlowerPoints;


        // Update score

        scoreText.textContent =
            score;


        // Move flower

        moveFlower();

    }

}


// ----------------------------
// RANDOM FLOWER
// ----------------------------

function moveFlower() {

    // Random location

    const randomX =
        Math.floor(
            Math.random() * 640
        );

    const randomY =
        Math.floor(
            Math.random() * 390
        );


    flower.style.left =
        randomX + "px";

    flower.style.top =
        randomY + "px";


    // Choose random flower

    const randomIndex =
        Math.floor(
            Math.random() *
            flowers.length
        );


    const chosenFlower =
        flowers[randomIndex];


    // Change emoji

    flower.textContent =
        chosenFlower.emoji;


    // Remember points

    currentFlowerPoints =
        chosenFlower.points;

}


// ----------------------------
// MOVE BEE
// ----------------------------

function startBee() {

    clearInterval(beeTimer);


    beeTimer =
        setInterval(function() {

            if (!gameRunning) {

                return;

            }


            // Find Bunny's direction

            const differenceX =
                bunnyX - beeX;

            const differenceY =
                bunnyY - beeY;


            // Move Bee horizontally

            if (differenceX > 0) {

                beeX += 8;

            }

            else if (
                differenceX < 0
            ) {

                beeX -= 8;

            }


            // Move Bee vertically

            if (differenceY > 0) {

                beeY += 8;

            }

            else if (
                differenceY < 0
            ) {

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

        bunnyBox.left <
        beeBox.right &&

        bunnyBox.right >
        beeBox.left &&

        bunnyBox.top <
        beeBox.bottom &&

        bunnyBox.bottom >
        beeBox.top;


    if (touching) {

        loseLife();

    }

}


// ----------------------------
// LOSE LIFE
// ----------------------------

function loseLife() {

    lives--;


    livesText.textContent =
        lives;


    // Temporarily protect Bunny

    canGetHit = false;


    // Show message

    hitMessage.classList.remove(
        "hidden"
    );


    // Flash Bunny

    bunny.classList.add(
        "hit"
    );


    // Move Bee away

    beeX =
        Math.floor(
            Math.random() * 600
        );

    beeY =
        Math.floor(
            Math.random() * 350
        );


    bee.style.left =
        beeX + "px";

    bee.style.top =
        beeY + "px";


    // Remove hit effect

    setTimeout(function() {

        hitMessage.classList.add(
            "hidden"
        );

        bunny.classList.remove(
            "hit"
        );

        canGetHit = true;

    }, 1000);


    // End game if no lives remain

    if (lives <= 0) {

        endGame();

    }

}


// ----------------------------
// TIMER
// ----------------------------

function startTimer() {

    clearInterval(gameTimer);


    gameTimer =
        setInterval(function() {

            timeLeft--;


            timerText.textContent =
                timeLeft;


            if (timeLeft <= 0) {

                endGame();

            }

        }, 1000);

}


// ----------------------------
// BUTTERFLY POWER-UP
// ----------------------------

function startButterflies() {

    clearInterval(
        butterflyTimer
    );


    // First Butterfly appears
    // after 5 seconds

    setTimeout(function() {

        if (gameRunning) {

            showButterfly();

        }

    }, 5000);


    // Then another Butterfly
    // appears every 10 seconds

    butterflyTimer =
        setInterval(function() {

            if (gameRunning) {

                showButterfly();

            }

        }, 10000);

}


// ----------------------------
// SHOW BUTTERFLY
// ----------------------------

function showButterfly() {

    // Pick random location

    const randomX =
        Math.floor(
            Math.random() * 640
        );

    const randomY =
        Math.floor(
            Math.random() * 390
        );


    // Move Butterfly

    butterfly.style.left =
        randomX + "px";

    butterfly.style.top =
        randomY + "px";


    // Show Butterfly

    butterfly.classList.remove(
        "hidden"
    );

}


// ----------------------------
// BUTTERFLY COLLISION
// ----------------------------

function checkButterflyCollision() {

    // Do nothing if Butterfly
    // is currently hidden

    if (
        butterfly.classList.contains(
            "hidden"
        )
    ) {

        return;

    }


    const bunnyBox =
        bunny.getBoundingClientRect();

    const butterflyBox =
        butterfly.getBoundingClientRect();


    const touching =

        bunnyBox.left <
        butterflyBox.right &&

        bunnyBox.right >
        butterflyBox.left &&

        bunnyBox.top <
        butterflyBox.bottom &&

        bunnyBox.bottom >
        butterflyBox.top;


    if (touching) {

        activateSpeedBoost();

    }

}


// ----------------------------
// ACTIVATE SPEED BOOST
// ----------------------------

function activateSpeedBoost() {

    // Hide Butterfly

    butterfly.classList.add(
        "hidden"
    );


    // Make Bunny faster

    bunnySpeed = 40;


    // Show message

    boostMessage.classList.remove(
        "hidden"
    );


    // Restart boost timer if
    // another boost was active

    clearTimeout(
        boostTimer
    );


    // Return to normal after
    // 5 seconds

    boostTimer =
        setTimeout(function() {

            bunnySpeed = 20;


            boostMessage.classList.add(
                "hidden"
            );

        }, 5000);

}


// ----------------------------
// END GAME
// ----------------------------

function endGame() {

    gameRunning = false;


    // Stop timers

    clearInterval(
        gameTimer
    );

    clearInterval(
        beeTimer
    );

    clearInterval(
        butterflyTimer
    );

    clearTimeout(
        boostTimer
    );


    // Hide Butterfly

    butterfly.classList.add(
        "hidden"
    );


    // Hide boost message

    boostMessage.classList.add(
        "hidden"
    );


    // Final score

    finalScoreText.textContent =
        score;


    // Final message

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


playAgainButton.addEventListener(
    "click",
    startGame
);
