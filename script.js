//grab all elements
const startScreen = document.getElementById("startScreen");
const gameOverScreen = document.getElementById("gameOverScreen");
const playBtn = document.getElementById("playBtn");
const restartBtn = document.getElementById("restartBtn");
const scoreUI = document.getElementById("scoreUI");
const finalScore = document.getElementById("finalScore");

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

//CSS container size
canvas.width = 600; 
canvas.height = window.innerHeight; // same as 100vh


playBtn.addEventListener("click", startGame);

function startGame() {
    startScreen.style.display = "none";  
    gameLoop(); 
}
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);//clears wtv is in it before
    ctx.drawImage(player.img, player.x, player.y, player.width, player.height);
    doodlePhysics();
    ctx.drawImage(platform.img, platform.x, platform.y, platform.width, platform.height);

    requestAnimationFrame(gameLoop); //to request next frame 60x(rmb to start loop 60s(6000))
}

const doodlerRightImg = new Image();
doodlerRightImg.src = "doodler-right.png";

const doodlerLeftImg = new Image();
doodlerLeftImg.src = "doodler-left.png";

const player = {
    x: canvas.width / 2 - 46,
    y: canvas.height - 150,
    width: 92,
    height: 92,
    velocity: 0,
    gravity: 0.4,
    jumpStrength: -10,
    direction: "right",
    img: doodlerRightImg
};

function doodlePhysics() {
    player.velocity += player.gravity;
    player.y += player.velocity;
}

function jump() {
    player.velocity = player.jumpStrength;
}
function moveLeft() {
    player.x -= 10;                 // movement
    player.direction = "left";     // label
    player.img = doodlerLeftImg;   // image
}
function moveRight() {
    player.x += 10;
    player.direction = "right";
    player.img = doodlerRightImg;
}
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        moveLeft();
    }
    if (e.key === "ArrowRight") {
        moveRight();
    }
});

const platformNormalImg = new Image();
platformNormalImg.src = "platform.png";   // your normal platform

const platformBrokenImg = new Image();
platformBrokenImg.src = "platform-broken.png"; // your broken platform
