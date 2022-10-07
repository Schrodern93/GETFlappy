function fly() {
    checkIfBottomIsHit();
    checkIfTopIsHit();
    model.bird.yaxis += model.GRAVITY;
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
        model.counter = model.counter >= model.listOfCollisionObjects.length - 1 ? 0 : model.counter + 1;
    }
    else {
        model.listOfCollisionObjects[i].X -= model.SPEED;
        model.bottomListOfCollisionObjects[i].X -= model.SPEED;
    }
}

function CheckForCollision(i) {
    //denne må fikses 
    if (model.listOfCollisionObjects[i].X + model.margin >= model.bird.xaxis + (model.bird.Width / 2) && 
        model.listOfCollisionObjects[i].X - model.margin <= model.bird.xaxis + (model.bird.Width / 2) ) { // Midten av fuglen..       
        if (model.bird.yaxis < (model.listOfCollisionObjects[i].Height - (model.bird.Height + 2)) ||
            model.bird.yaxis > (model.BOTTOM - model.bottomListOfCollisionObjects[i].Height + 2)) {  // +2 for twerking , må fikse litt til
            model.birdIsAlive = false;
        }
        // model.bird.yaxis + model.bird.Height + 3 <= model.listOfCollisionObjects[i].Height || 
        if (model.birdIsAlive) {
            model.score++;
            model.SPEED += 0.05;
            model.margin += 0.05;
        }
    }
}

//69 - model.bottomListOfCollisionObjects[i].Height = 64 til 19      0 + model.listOfCollisionObjects[i].Height = 5 til 40  
// bird height = 10 
function updateGame() {
    CheckForCollision(model.counter);
    if (!model.birdIsAlive) endGame();
    fly();
    moveObject(model.counter);
    gameview();
}

function endGame() {
    model.birdIsAlive = false;
    clearInterval(gameLoop);
    addPlayerToScoreBoard()
}

function startGame() {
    model.birdIsAlive = true;
    gameLoop = setInterval(updateGame, 25);
    document.addEventListener('keyup', event => {
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