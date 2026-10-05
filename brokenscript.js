// ============================================================
// 🌸 CODE & BLOOM — STARTER JAVASCRIPT 🌸
// ============================================================
//
// JavaScript controls what our game DOES.
//
// By the time we reach this file:
//
// TODO #1 ✓ Add Bunny with HTML
// TODO #2 ✓ Style Bunny with CSS
//
// Now we're going to make our GAME LOGIC work!
//
// ============================================================



// ============================================================
// GET ELEMENTS FROM OUR HTML
// ============================================================
//
// document.getElementById() lets JavaScript find
// something that we created in HTML.
//
// Example:
//
// HTML:
// <div id="bunny">🐰</div>
//
// JavaScript:
// document.getElementById("bunny")
//
// ============================================================

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



// ============================================================
// GAME VARIABLES
// ============================================================
//
// Variables remember information for our game.
//
// Think of them like labeled boxes:
//
// bunnyX    → Bunny's horizontal position
// bunnyY    → Bunny's vertical position
// score     → Player's points
// lives     → Player's lives
// timeLeft  → Seconds remaining
//
// ============================================================


// Bunny starting position

let bunnyX = 325;

let bunnyY = 200;


// Bee starting position

let beeX = 500;

let beeY = 200;


// Game information

let score = 0;

let lives = 3;

let timeLeft = 45;


// Is the game currently being played?

let gameRunning = false;


// Can Bunny currently be hit?

let canGetHit = true;


// Bunny movement speed

let bunnySpeed = 20;



// ============================================================
// FLOWERS 🌸 🌷 🌻
// ============================================================
//
// Each flower has:
//
// emoji  → what we see
// points → what it is worth
//
// ============================================================

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


// Remember how many points the
// current flower is worth.

let currentFlowerPoints = 1;



// ============================================================
// TIMERS
// ============================================================

let gameTimer;

let beeTimer;

let butterflyTimer;

let boostTimer;



// ============================================================
// START THE GAME
// ============================================================

function startGame() {


    // Stop old timers

    clearInterval(gameTimer);

    clearInterval(beeTimer);

    clearInterval(butterflyTimer);

    clearTimeout(boostTimer);



    // Reset score, lives, and time

    score = 0;

    lives = 3;

    timeLeft = 45;


    // Reset Bunny's speed

    bunnySpeed = 20;



    // Reset Bunny's position

    bunnyX = 325;

    bunnyY = 200;



    // Reset Bee's position

    beeX = 500;

    beeY = 200;



    // Game is now running

    gameRunning = true;

    canGetHit = true;



    // Update information on screen

    scoreText.textContent =
        score;

    livesText.textContent =
        lives;

    timerText.textContent =
        timeLeft;



    // Put Bunny at starting position

    bunny.style.left =
        bunnyX + "px";

    bunny.style.top =
        bunnyY + "px";



    // Put Bee at starting position

    bee.style.left =
        beeX + "px";

    bee.style.top =
        beeY + "px";



    // Hide things we don't need yet

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



    // Put first flower somewhere random

    moveFlower();



    // Start game systems

    startTimer();

    startBee();

    startButterflies();

}



// ============================================================
// MOVE BUNNY 🐰
// ============================================================
//
// This code listens for keyboard presses.
//
// Bunny can move with:
//
// A / ← = LEFT
// D / → = RIGHT
// W / ↑ = UP
// S / ↓ = DOWN
//
// ============================================================

document.addEventListener(
    "keydown",
    function(event) {


        // Don't move Bunny if game isn't running

        if (!gameRunning) {

            return;

        }



        // ----------------------------
        // MOVE LEFT
        // ----------------------------

        if (
            event.key === "ArrowLeft" ||
            event.key.toLowerCase() === "a"
        ) {

            bunnyX -= bunnySpeed;

        }



        // ----------------------------
        // MOVE RIGHT
        // ----------------------------

        if (
            event.key === "ArrowRight" ||
            event.key.toLowerCase() === "d"
        ) {

            bunnyX += bunnySpeed;

        }



        // ----------------------------
        // MOVE UP
        // ----------------------------

        if (
            event.key === "ArrowUp" ||
            event.key.toLowerCase() === "w"
        ) {

            bunnyY -= bunnySpeed;

        }



        // ----------------------------
        // MOVE DOWN
        // ----------------------------

        if (
            event.key === "ArrowDown" ||
            event.key.toLowerCase() === "s"
        ) {

            bunnyY += bunnySpeed;

        }



        // ====================================================
        // TODO #3 🐰 — KEEP BUNNY INSIDE THE GARDEN
        // ====================================================
        //
        // 🐛 THE BUG:
        //
        // Try moving Bunny toward the edge.
        //
        // Bunny can leave the garden! 😭
        //
        //
        // 🎯 YOUR GOAL:
        //
        // Create invisible walls around the garden.
        //
        //
        // OUR LIMITS:
        //
        // LEFT:
        //
        //      bunnyX cannot go below 0
        //
        //
        // RIGHT:
        //
        //      bunnyX cannot go above 645
        //
        //
        // TOP:
        //
        //      bunnyY cannot go below 0
        //
        //
        // BOTTOM:
        //
        //      bunnyY cannot go above 395
        //
        //
        // 💡 HINT:
        //
        // You'll need IF statements.
        //
        //
        // Example idea:
        //
        // if (something happened) {
        //
        //     fix it;
        //
        // }
        //
        // ====================================================


        // ✏️ TODO #3 — WRITE YOUR CODE BELOW:













        // ====================================================
        // END TODO #3
        // ====================================================



        // Update Bunny's position on screen

        bunny.style.left =
            bunnyX + "px";

        bunny.style.top =
            bunnyY + "px";



        // Check what Bunny is touching

        checkFlowerCollision();

        checkBeeCollision();

        checkButterflyCollision();

    }
);



// ============================================================
// FLOWER COLLISION 🌸
// ============================================================

function checkFlowerCollision() {


    // Get Bunny's invisible rectangle

    const bunnyBox =
        bunny.getBoundingClientRect();


    // Get Flower's invisible rectangle

    const flowerBox =
        flower.getBoundingClientRect();



    // Check whether the rectangles overlap

    const touching =

        bunnyBox.left <
        flowerBox.right &&

        bunnyBox.right >
        flowerBox.left &&

        bunnyBox.top <
        flowerBox.bottom &&

        bunnyBox.bottom >
        flowerBox.top;



    // ========================================================
    // TODO #4 🌸 — MAKE FLOWERS GIVE POINTS
    // ========================================================
    //
    // 🐛 THE BUG:
    //
    // Bunny can touch the flower...
    //
    // But the score doesn't change!
    //
    //
    // GOOD NEWS:
    //
    // The code above already figured out whether
    // Bunny and Flower are touching.
    //
    // The answer is stored inside:
    //
    //      touching
    //
    //
    // 🎯 YOUR GOAL:
    //
    // IF Bunny is touching the flower:
    //
    //      1. Add the flower's points to score
    //
    //      2. Update the score shown on screen
    //
    //      3. Move the flower somewhere new
    //
    //
    // THESE MAY HELP:
    //
    //      score
    //
    //      currentFlowerPoints
    //
    //      scoreText.textContent
    //
    //      moveFlower()
    //
    // ========================================================


    // ✏️ TODO #4 — WRITE YOUR CODE BELOW:













    // ========================================================
    // END TODO #4
    // ========================================================

}



// ============================================================
// MOVE FLOWER 🌷
// PROVIDED FOR YOU
// ============================================================

function moveFlower() {


    // Pick random X position

    const randomX =
        Math.floor(
            Math.random() * 640
        );


    // Pick random Y position

    const randomY =
        Math.floor(
            Math.random() * 390
        );



    // Move Flower

    flower.style.left =
        randomX + "px";

    flower.style.top =
        randomY + "px";



    // Pick random flower from array

    const randomIndex =
        Math.floor(
            Math.random() *
            flowers.length
        );


    const chosenFlower =
        flowers[randomIndex];



    // Change the emoji

    flower.textContent =
        chosenFlower.emoji;



    // Remember how many points
    // this flower is worth

    currentFlowerPoints =
        chosenFlower.points;

}



// ============================================================
// MOVE BEE 🐝
// PROVIDED FOR YOU
// ============================================================

function startBee() {


    clearInterval(
        beeTimer
    );


    beeTimer =
        setInterval(function() {


            if (!gameRunning) {

                return;

            }



            // Find direction from Bee to Bunny

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



            // Check if Bee touched Bunny

            checkBeeCollision();


        }, 100);

}



// ============================================================
// BEE COLLISION 🐝
// ============================================================

function checkBeeCollision() {


    // Prevent Bunny from losing
    // all lives instantly.

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



    // ========================================================
    // TODO #5 🐝❤️ — MAKE THE BEE HURT BUNNY
    // ========================================================
    //
    // 🐛 THE BUG:
    //
    // The Bee chases Bunny...
    //
    // But touching Bunny doesn't hurt!
    //
    //
    // GOOD NEWS:
    //
    // We already know if they're touching.
    //
    // The answer is stored in:
    //
    //      touching
    //
    //
    // We ALSO already wrote the function
    // that removes a life:
    //
    //      loseLife()
    //
    //
    // 🎯 YOUR GOAL:
    //
    // IF Bunny and Bee are touching:
    //
    //      Call loseLife()
    //
    // ========================================================


    // ✏️ TODO #5 — WRITE YOUR CODE BELOW:









    // ========================================================
    // END TODO #5
    // ========================================================

}



// ============================================================
// LOSE A LIFE ❤️
// PROVIDED FOR YOU
// ============================================================

function loseLife() {


    // Remove one life

    lives--;



    // Update lives on screen

    livesText.textContent =
        lives;



    // Temporarily protect Bunny

    canGetHit = false;



    // Show OUCH message

    hitMessage.classList.remove(
        "hidden"
    );



    // Make Bunny flash

    bunny.classList.add(
        "hit"
    );



    // Move Bee somewhere else

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



    // Wait one second before
    // Bunny can get hit again

    setTimeout(function() {


        hitMessage.classList.add(
            "hidden"
        );


        bunny.classList.remove(
            "hit"
        );


        canGetHit = true;


    }, 1000);



    // No lives left?

    if (lives <= 0) {

        endGame();

    }

}



// ============================================================
// GAME TIMER ⏰
// PROVIDED FOR YOU
// ============================================================

function startTimer() {


    clearInterval(
        gameTimer
    );


    gameTimer =
        setInterval(function() {


            // Remove one second

            timeLeft--;



            // Update timer on screen

            timerText.textContent =
                timeLeft;



            // Time is up!

            if (timeLeft <= 0) {

                endGame();

            }


        }, 1000);

}



// ============================================================
// BUTTERFLY SPAWNING 🦋
// PROVIDED FOR YOU
// ============================================================

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



    // Then a Butterfly appears
    // every 10 seconds

    butterflyTimer =
        setInterval(function() {


            if (gameRunning) {

                showButterfly();

            }


        }, 10000);

}



// ============================================================
// SHOW BUTTERFLY 🦋
// PROVIDED FOR YOU
// ============================================================

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



    // Make Butterfly visible

    butterfly.classList.remove(
        "hidden"
    );

}



// ============================================================
// BUTTERFLY COLLISION 🦋
// PROVIDED FOR YOU
// ============================================================

function checkButterflyCollision() {


    // If Butterfly isn't visible,
    // there is nothing to collect.

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



    // Bunny caught the Butterfly!

    if (touching) {

        activateSpeedBoost();

    }

}



// ============================================================
// TODO #6 🦋✨ — BUILD THE SPEED BOOST
// ============================================================

function activateSpeedBoost() {


    // ========================================================
    // 🐛 THE BUG:
    //
    // Bunny can collect the Butterfly...
    //
    // But NOTHING happens! 😭
    //
    //
    // 🎯 YOUR FINAL MISSION:
    //
    // When Bunny catches 🦋:
    //
    //
    // STEP 1
    //
    // Hide the Butterfly.
    //
    //
    // STEP 2
    //
    // Change:
    //
    //      bunnySpeed = 40
    //
    //
    // STEP 3
    //
    // Show the SPEED BOOST message.
    //
    //
    // STEP 4
    //
    // Wait 5 seconds.
    //
    // Remember:
    //
    //      5000 milliseconds = 5 seconds
    //
    //
    // STEP 5
    //
    // Change:
    //
    //      bunnySpeed = 20
    //
    //
    // STEP 6
    //
    // Hide the SPEED BOOST message again.
    //
    //
    // THESE MAY HELP:
    //
    // butterfly.classList.add("hidden")
    //
    // boostMessage.classList.remove("hidden")
    //
    // boostMessage.classList.add("hidden")
    //
    // setTimeout()
    //
    // bunnySpeed
    //
    // ========================================================


    // ✏️ TODO #6 — WRITE YOUR CODE BELOW:


















    // ========================================================
    // END TODO #6
    //
    // 🎉 YOU COMPLETED THE FINAL TODO!
    // ========================================================

}



// ============================================================
// END GAME 🏁
// PROVIDED FOR YOU
// ============================================================

function endGame() {


    // Game is no longer running

    gameRunning = false;



    // Stop all timers

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



    // Show final score

    finalScoreText.textContent =
        score;



    // Pick message based on score

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



// ============================================================
// BUTTONS
// PROVIDED FOR YOU
// ============================================================

startButton.addEventListener(
    "click",
    startGame
);


playAgainButton.addEventListener(
    "click",
    startGame
);
