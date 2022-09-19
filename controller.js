function fly() {
    checkIfBottomIsHit();
    model.bird.yaxis += model.GRAVITY;
}

function up() {
    if (model.bird.yaxis <= model.TOP) { /* GAME OVER */};
    model.bird.yaxis -= 10;
}

function checkIfBottomIsHit() {
    if (model.bird.yaxis >= model.BOTTOM) model.bird.yaxis = model.TOP;
}

function moveObject() {
    if(model.collisionObject.X < model.RIGHT) model.collisionObject.X = model.LEFT;
    else model.collisionObject.X -= model.SPEED;
}
function CheckForCollision() {
    if(model.collisionObject.X == model.bird.xaxis){
        if(model.bird.yaxis <= model.collisionObject.Height) console.log("I am flappy");
        else model.score++;
    }
}
function updateGame() {
    CheckForCollision();
    fly();
    moveObject();
    gameview();
}