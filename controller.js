function fly() {
    checkIfBottomIsHit();
    checkIfTopIsHit();
    model.bird.yaxis += model.GRAVITY;
    // console.log(model)
}

function up() {
    if (model.bird.yaxis <= (model.TOP - model.bird.Height - 2)) { /* GAME OVER */ };
    model.bird.yaxis -= 8;
}

function checkIfBottomIsHit() {
    if (model.bird.yaxis - 3 > model.BOTTOM) {
        model.birdIsAlive = false;
    }
}
function checkIfTopIsHit() {
    if (model.bird.yaxis + model.bird.Height < model.TOP) {
        model.birdIsAlive = false;
    }
}

function moveObject(i) {
    if (model.listOfCollisionObjects[i].X < model.RIGHT) {
        model.listOfCollisionObjects[i].X = model.LEFT;
        model.bottomListOfCollisionObjects[i].X = model.LEFT;

        // if (model.score != 0) {
            model.counter = model.counter >= model.listOfCollisionObjects.length - 1 ? 0 : model.counter + 1;
        // }

        console.log("counter:" + model.counter)
        model.birdThroughObject = false;
    }
    else {
        model.listOfCollisionObjects[i].X -= model.SPEED;
        model.bottomListOfCollisionObjects[i].X -= model.SPEED;
    }
}

function CheckForCollision(i) {
    //denne må fikses 
    if (model.listOfCollisionObjects[i].X + model.margin >= model.bird.xaxis + (model.bird.Width / 2) &&
        model.listOfCollisionObjects[i].X - model.margin <= model.bird.xaxis + (model.bird.Width / 2)) { // Midten av fuglen..       
        if (model.bird.yaxis < (model.listOfCollisionObjects[i].Height - (model.bird.Height + 2)) ||
            model.bird.yaxis > (model.BOTTOM - model.bottomListOfCollisionObjects[i].Height + 2)) {  // +2 for twerking , må fikse litt til
            model.birdIsAlive = false;
        }
        // model.bird.yaxis + model.bird.Height + 3 <= model.listOfCollisionObjects[i].Height || 
        if (model.birdIsAlive & !model.birdThroughObject) {
            model.birdThroughObject = true;
            model.score++;
            model.SPEED += 0.05;
            model.margin += 0.05;
        }
    }
}

//69 - model.bottomListOfCollisionObjects[i].Height = 64 til 19      0 + model.listOfCollisionObjects[i].Height = 5 til 40  
// bird height = 10 
function updateGame() {
    moveObject(model.counter);
    CheckForCollision(model.counter);
    if (!model.birdIsAlive) endGame();
    fly();
    gameview();
}

function endGame() {
    
    model.birdIsAlive = false;
    clearInterval(gameLoop);
    addPlayerToScoreBoard();
    addToScoreboard();
    // createScoreboard();
}

function startGame() {
    initGame();
    gameLoop = setInterval(updateGame, 25);

}
addEventListener(); //skal kun kjøres en gang, hvis ikke blir det kluss for spiller 2, 3 4, osv
function addEventListener() {
    document.addEventListener('keyup', event => {
        // console.log("event triggrer ")
        if (event.code === 'Space') up();
    });
}
function addPlayerToScoreBoard() {
    let player = {}
    player.name = model.input.name
    player.score = model.score
    model.scoreBoard.push(player);
    createScoreboard()
}

function initGame() {
    console.log("init blir kjørt")
    model.birdIsAlive = true;
    model.birdThroughObject = false;
    model.GRAVITY = 0.4;
    model.SPEED = 0.5;
    model.score = 0;
    model.margin = 0.5;
    model.bird = { Height: 10, Width: 10, yaxis: 30, xaxis: 5, img: "/assets/getvinger.svg" };
    model.counter = 0;

    model.listOfCollisionObjects = [
        { X: 0, Y: 0, Width: 1, Height: 25 },
        { X: 0, Y: 0, Width: 1, Height: 32 },
        { X: 0, Y: 0, Width: 1, Height: 38 },
        { X: 0, Y: 0, Width: 1, Height: 54 },
        { X: 0, Y: 0, Width: 1, Height: 20 },
        { X: 0, Y: 0, Width: 1, Height: 54 },
        { X: 0, Y: 0, Width: 1, Height: 5 },

    ];

    model.bottomListOfCollisionObjects = [
        { X: 0, Y: 0, Width: 1, Height: 25 },
        { X: 0, Y: 0, Width: 1, Height: 34 },
        { X: 0, Y: 0, Width: 1, Height: 38 },
        { X: 0, Y: 0, Width: 1, Height: 20 },
        { X: 0, Y: 0, Width: 1, Height: 54 },
        { X: 0, Y: 0, Width: 1, Height: 20 },
        { X: 0, Y: 0, Width: 1, Height: 5 },

    ];

}