function fly() {
    checkIfBottomIsHit();
//   model.bird.yaxis += model.GRAVITY;
}

function up() {
    if (model.bird.yaxis <= model.TOP) { /* GAME OVER */};
    model.bird.yaxis -= 10;
}

function checkIfBottomIsHit() {
    if (model.bird.yaxis >= model.BOTTOM) model.bird.yaxis = model.TOP; // skal endres til at fuglen dør
}

function moveObject(i) {
    if(model.listOfCollisionObjects[i].X < model.RIGHT) model.listOfCollisionObjects[i].X = model.LEFT;
    else model.listOfCollisionObjects[i].X -= model.SPEED;
}
function CheckForCollision(i) {
    if(model.counter >= model.listOfCollisionObjects.length -1) model.counter = 0;
    if(model.listOfCollisionObjects[i].X == model.bird.xaxis + model.bird.Width){
        console.log(model.bird.yaxis+model.bird.Height)
        console.log(model.listOfCollisionObjects[i].Height)
       if(model.bird.yaxis + model.bird.Height + 16 <= model.listOfCollisionObjects[i].Height) console.log('flappy died');
         else {
            model.score++;
            model.counter++;
        }
        
    }
    // if(model.collisionObject.X == model.bird.xaxis && model.bird.yaxis >= model.collisionObject.Height){
    //     model.score++;
    // } 
   
}
function updateGame() {
    CheckForCollision(model.counter);
    fly();
    moveObject(model.counter);
    gameview();
}