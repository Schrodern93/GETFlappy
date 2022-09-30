function fly() {
    checkIfBottomIsHit();
    checkIfTopIsHit();
   model.bird.yaxis += model.GRAVITY;
}

function up() {
    if (model.bird.yaxis <= model.TOP) { /* GAME OVER */};
    model.bird.yaxis -= 10;
}

function checkIfBottomIsHit() {
    if(model.bird.yaxis - 3 > model.BOTTOM){
        model.birdIsAlive = false;
    }
}
function checkIfTopIsHit() {
    if(model.bird.yaxis +model.bird.Height < model.TOP){
        model.birdIsAlive = false;  
    }
}

function moveObject(i) {
    if(model.listOfCollisionObjects[i].X < model.RIGHT) {
        model.listOfCollisionObjects[i].X = model.LEFT;
        model.bottomListOfCollisionObjects[i].X = model.LEFT;
        model.counter = model.counter >= model.listOfCollisionObjects.length -1 ? 0 : model.counter + 1;
    }
    else{
        model.listOfCollisionObjects[i].X -= model.SPEED;
        model.bottomListOfCollisionObjects[i].X -= model.SPEED;
    }
}

function CheckForCollision(i) {
   
    if(model.listOfCollisionObjects[i].X == model.bird.xaxis + (model.bird.Width / 2)) { // Midten av fuglen..
        console.log(model.bird.yaxis+model.bird.Height)
        console.log("venstre side", model.bird.yaxis + model.bird.Height)
        console.log("høyre side", model.bottomListOfCollisionObjects[i].Height)
       if(model.bird.yaxis + model.bird.Height + 3 <= model.listOfCollisionObjects[i].Height || 
          model.bird.yaxis - model.bird.Height <= model.bottomListOfCollisionObjects[i].Height){
            endGame();
       }        

       if(model.birdIsAlive) model.score++;
    }
}
function updateGame() {
    if(!model.birdIsAlive) endGame();
    CheckForCollision(model.counter);
    fly();
    moveObject(model.counter);
    gameview();
}

function endGame() {
    model.birdIsAlive = false;
    clearInterval(gameLoop);
}

function startGame() {
    model.birdIsAlive = true;
    gameLoop = setInterval(updateGame, 25);
    document.addEventListener('keyup', event => {
        if (event.code === 'Space') up();
    });
}