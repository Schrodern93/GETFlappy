function fly() {
    checkIfBottomIsHit();
//   model.bird.yaxis += model.GRAVITY;
}

function up() {
    if (model.bird.yaxis <= model.TOP) { /* GAME OVER */};
    model.bird.yaxis -= 10;
}

function checkIfBottomIsHit() {
 // skal endres til at fuglen dør
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
        console.log("venstre side", model.bird.yaxis)
        console.log("høyre side", model.bottomListOfCollisionObjects[i].Height)
       if(model.bird.yaxis + model.bird.Height + 3 <= model.listOfCollisionObjects[i].Height ||
          model.bird.yaxis - model.bird.Height <= model.bottomListOfCollisionObjects[i].Height){
            model.birdIsAlive = false;
       }        

       if(model.birdIsAlive) model.score++;
    }
}
function updateGame() {
    if(!model.birdIsAlive){
        clearInterval(gameLoop);
    }
    CheckForCollision(model.counter);
    fly();
    moveObject(model.counter);
    gameview();
}